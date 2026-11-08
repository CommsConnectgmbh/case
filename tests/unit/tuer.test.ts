import { beforeEach, describe, expect, it, vi } from "vitest";
import { NextRequest } from "next/server";

const afterCalls: (() => unknown)[] = [];
vi.mock("next/server", async (orig) => {
  const mod = await orig<typeof import("next/server")>();
  return { ...mod, after: (fn: () => unknown) => afterCalls.push(fn) };
});
const sent: unknown[] = [];
vi.mock("@/lib/analytics/web-hit", async (orig) => {
  const mod = await orig<typeof import("@/lib/analytics/web-hit")>();
  return { ...mod, sendWebHit: async (hit: unknown) => void sent.push(hit) };
});

const { GET } = await import("@/app/start/route");
const { serverCtaHit, meldeServerCta } = await import("@/lib/analytics/server-cta");
const { ZIELE, conversionArt } = await import("@/lib/tuer");

const CHROME =
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36";
const BROWSER = {
  "user-agent": CHROME,
  "sec-ch-ua": '"Chromium";v="141"',
  "sec-fetch-mode": "navigate",
};

function req(query: string, headers: Record<string, string> = {}) {
  return new NextRequest(`https://case-connect.de/start${query}`, { headers: { ...BROWSER, ...headers } });
}

async function run(query: string, headers?: Record<string, string>) {
  const res = GET(req(query, headers));
  for (const fn of afterCalls.splice(0)) await fn();
  return res;
}

beforeEach(() => {
  sent.length = 0;
  afterCalls.length = 0;
});

describe("Klick-Tuer /start", () => {
  it("Allowlist enthaelt nur eigene, relative Ziele", () => {
    expect(Object.keys(ZIELE).sort()).toEqual(["demo", "kontakt", "shop"]);
    for (const z of Object.values(ZIELE)) expect(z.startsWith("/") && !z.startsWith("//")).toBe(true);
  });

  it.each([
    ["shop", "https://case-connect.de/#shop"],
    ["demo", "https://case-connect.de/#kontakt"],
    ["kontakt", "https://case-connect.de/#kontakt"],
  ])("ziel=%s leitet 302 auf das hinterlegte Ziel", async (ziel, ziel_url) => {
    const res = await run(`?ziel=${ziel}`);
    expect(res.status).toBe(302);
    expect(res.headers.get("location")).toBe(ziel_url);
    expect(res.headers.get("cache-control")).toBe("no-store");
    expect(res.headers.get("x-robots-tag")).toBe("noindex, nofollow");
    expect(res.headers.get("set-cookie")).toBeNull();
  });

  it("Vorschau-Adresse: Ziel bleibt auf derselben Origin", async () => {
    const res = GET(new NextRequest("https://homepage-abc.vercel.app/start?ziel=shop", { headers: BROWSER }));
    expect(res.headers.get("location")).toBe("https://homepage-abc.vercel.app/#shop");
  });

  it("zeichnet einen cta-Klick mit Ausgangsseite und Ziel auf", async () => {
    await run("?ziel=shop&gclid=GEHEIM&utm_source=newsletter", {
      referer: "https://case-connect.de/ratgeber/wlan-fuer-events?utm_source=x",
    });
    expect(sent).toEqual([
      {
        kind: "cta",
        path: "/start",
        ziel: "shop",
        client_kind: "mensch",
        referrer_host: null,
        from_path: "/ratgeber/wlan-fuer-events",
        klick_typ: "gclid",
        utm_source: "newsletter",
      },
    ]);
    expect(JSON.stringify(sent)).not.toContain("GEHEIM");
  });

  it("UTM der Tuer-Adresse reist ins Ziel (vor dem Anker), nichts anderes", async () => {
    const res = await run("?ziel=demo&utm_source=li&utm_campaign=herbst&gclid=X&foo=bar");
    const loc = new URL(res.headers.get("location")!);
    expect(loc.origin).toBe("https://case-connect.de");
    expect(loc.hash).toBe("#kontakt");
    expect(Object.fromEntries(loc.searchParams)).toEqual({ utm_source: "li", utm_campaign: "herbst" });
  });

  it.each([
    "?ziel=unbekannt",
    "?ziel=",
    "",
    "?ziel=https://evil.example",
    "?ziel=//evil.example",
    "?ziel=__proto__",
    "?ziel=toString",
    "?ziel=shop2",
    "?url=https://evil.example&ziel=https%3A%2F%2Fevil.example",
  ])("unbekanntes oder fremdes Ziel %s: Startseite, keine Messung", async (q) => {
    const res = await run(q);
    expect(res.status).toBe(302);
    expect(res.headers.get("location")).toBe("https://case-connect.de/");
    expect(sent).toHaveLength(0);
  });

  it("eigene Pruefung wird als intern verbucht", async () => {
    await run("?ziel=shop", { "x-cc-lauf": "1" });
    expect(sent).toMatchObject([{ client_kind: "intern", ziel: "shop" }]);
  });

  it("Conversion-Art: demo/kontakt sind Leads, shop nicht", () => {
    expect(conversionArt("demo")).toBe("lead");
    expect(conversionArt("kontakt")).toBe("lead");
    expect(conversionArt("shop")).toBeNull();
  });
});

describe("Serverseitige Abschluesse (Formular, Checkout)", () => {
  it("nur Tuer-Pfad, Ziel, Herkunftsseite und Einstufung, keine Formularinhalte", () => {
    const h = new Headers({ ...BROWSER, referer: "https://case-connect.de/partner", host: "case-connect.de" });
    expect(serverCtaHit(h, "partner")).toEqual({
      kind: "cta",
      path: "/start",
      ziel: "partner",
      client_kind: "mensch",
      referrer_host: null,
      from_path: "/partner",
    });
  });

  it("meldeServerCta sendet nach der Antwort", async () => {
    const r = new Request("https://case-connect.de/api/contact", {
      method: "POST",
      headers: { ...BROWSER, referer: "https://case-connect.de/" },
      body: JSON.stringify({ name: "Max", email: "max@example.org", message: "geheim" }),
    });
    meldeServerCta(r, "kontakt_gesendet");
    expect(sent).toHaveLength(0);
    for (const fn of afterCalls.splice(0)) await fn();
    expect(sent).toMatchObject([{ kind: "cta", path: "/start", ziel: "kontakt_gesendet", from_path: "/" }]);
    expect(JSON.stringify(sent)).not.toMatch(/Max|example\.org|geheim/);
  });
});
