import { beforeEach, describe, expect, it, vi } from "vitest";
import { NextRequest, type NextFetchEvent } from "next/server";

const sent: unknown[] = [];
vi.mock("@/lib/analytics/web-hit", async (orig) => {
  const mod = await orig<typeof import("@/lib/analytics/web-hit")>();
  return { ...mod, sendWebHit: async (hit: unknown) => void sent.push(hit) };
});
const { middleware } = await import("@/middleware");

const SAFARI =
  "Mozilla/5.0 (iPhone; CPU iPhone OS 18_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.0 Mobile/15E148 Safari/604.1";

async function call(path: string, headers: Record<string, string>, method = "GET") {
  const waits: Promise<unknown>[] = [];
  const event = { waitUntil: (p: Promise<unknown>) => waits.push(p) } as unknown as NextFetchEvent;
  const res = middleware(new NextRequest(`https://case-connect.de${path}`, { method, headers }), event);
  await Promise.all(waits);
  return { res, waits };
}

const DOC = { "user-agent": SAFARI, "sec-fetch-dest": "document", "sec-fetch-mode": "navigate", accept: "text/html" };

beforeEach(() => {
  sent.length = 0;
});

describe("Middleware: Reichweitenmessung", () => {
  it("zaehlt eine Dokument-Navigation, ohne Cookie und ohne die Antwort zu aendern", async () => {
    const { res, waits } = await call("/partner/?utm_source=google&gclid=XYZ&email=a@b.de", {
      ...DOC,
      referer: "https://www.google.com/search?q=5g+koffer",
    });
    expect(waits).toHaveLength(1);
    expect(sent).toEqual([
      {
        kind: "view",
        path: "/partner",
        client_kind: "mensch",
        referrer_host: "www.google.com",
        klick_typ: "gclid",
        utm_source: "google",
      },
    ]);
    expect(res.headers.get("set-cookie")).toBeNull();
    expect(res.headers.get("x-middleware-next")).toBe("1");
  });

  it("Matcher laesst Assets, Bilder und API gar nicht erst in die Middleware", async () => {
    const { config } = await import("@/middleware");
    const re = new RegExp(`^${config.matcher[0]}$`);
    for (const p of ["/_next/static/x.js", "/_next/image", "/api/checkout", "/images/logo.png", "/sitemap.xml"]) {
      expect(re.test(p), p).toBe(false);
    }
    for (const p of ["/", "/partner", "/ratgeber/wlan-fuer-events"]) expect(re.test(p), p).toBe(true);
  });

  it.each([
    ["RSC-Fetch", "/partner", { ...DOC, "sec-fetch-dest": "empty", accept: "*/*", rsc: "1" }, "GET"],
    ["Bild", "/icon.svg", { ...DOC, "sec-fetch-dest": "image", accept: "image/*" }, "GET"],
    ["Datei", "/robots.txt", DOC, "GET"],
    ["POST", "/", DOC, "POST"],
    ["Tuer", "/start", DOC, "GET"],
    ["API", "/api/contact", DOC, "GET"],
    ["Next-Asset", "/_next/static/chunks/main.js", { ...DOC, "sec-fetch-dest": "script", accept: "*/*" }, "GET"],
    ["Sitemap", "/sitemap.xml", DOC, "GET"],
  ])("zaehlt nicht: %s", async (_n, path, headers, method) => {
    const { waits } = await call(path, headers as Record<string, string>, method as string);
    expect(waits).toHaveLength(0);
    expect(sent).toHaveLength(0);
  });

  it("Bots werden als bot verbucht", async () => {
    await call("/", { "user-agent": "curl/8", accept: "text/html" });
    expect(sent).toMatchObject([{ client_kind: "bot" }]);
  });
});
