import { afterEach, describe, expect, it, vi } from "vitest";
import { renderToStaticMarkup } from "react-dom/server";

import DatenschutzPage from "@/app/datenschutz/page";
import robots from "@/app/robots";
import sitemap from "@/app/sitemap";

const IDS = {
  NEXT_PUBLIC_GA4_ID: "G-TEST000000",
  NEXT_PUBLIC_GADS_ID: "AW-1234567890",
  NEXT_PUBLIC_META_PIXEL_ID: "1234567890123",
  NEXT_PUBLIC_LINKEDIN_PARTNER_ID: "1234567",
};

function text(): string {
  return renderToStaticMarkup(<DatenschutzPage />)
    .replace(/<[^>]+>/g, " ")
    .replace(/&quot;/g, '"')
    .replace(/\s+/g, " ");
}

afterEach(() => vi.unstubAllEnvs());

describe("Datenschutzerklaerung", () => {
  it("ohne IDs: Reichweitenmessung da, keine Dienst-Abschnitte, Cookie-Aussage wie bisher", () => {
    for (const k of Object.keys(IDS)) vi.stubEnv(k, "");
    const t = text();
    expect(t).toContain("8. Serverseitige Reichweitenmessung");
    expect(t).toContain("Supabase in der Region Frankfurt");
    expect(t).toContain("nach 25 Monaten gelöscht");
    expect(t).toContain("Art. 21 Abs. 1 DSGVO");
    expect(t).toContain("Diese Website verwendet ausschließlich technisch notwendige Cookies");
    expect(t).not.toMatch(/Google Analytics|Google Ads|Meta Pixel|LinkedIn Insight|cc_consent/);
    expect(t).toContain("10. Speicherdauer");
    expect(t).toContain("11. Ihre Rechte");
    expect(t).not.toContain("—");
  });

  it("mit allen IDs: Bausteine B bis F als 9.1 bis 9.5, 'ausschliesslich notwendige' entfaellt", () => {
    for (const [k, v] of Object.entries(IDS)) vi.stubEnv(k, v);
    const t = text();
    expect(t).toContain("8. Serverseitige Reichweitenmessung");
    expect(t).toContain("9.1 Einwilligungsverwaltung");
    expect(t).toContain("9.2 Google Analytics 4");
    expect(t).toContain("9.3 Google Ads Conversion-Tracking und Remarketing");
    expect(t).toContain("9.4 Meta Pixel");
    expect(t).toContain("9.5 LinkedIn Insight Tag");
    expect(t).not.toContain("ausschließlich technisch notwendige Cookies");
    expect(t).toContain("setzen wir ohne Einwilligung ein");
    expect(t).not.toContain("—");
  });

  it("nur Meta-ID: nur B und Meta, fortlaufend nummeriert", () => {
    for (const k of Object.keys(IDS)) vi.stubEnv(k, "");
    vi.stubEnv("NEXT_PUBLIC_META_PIXEL_ID", "1234567890123");
    const t = text();
    expect(t).toContain("9.1 Einwilligungsverwaltung");
    expect(t).toContain("9.2 Meta Pixel");
    expect(t).not.toMatch(/Google Analytics 4|LinkedIn Insight/);
  });
});

describe("Sitemap und robots", () => {
  it("alle oeffentlichen Seiten, keine Tuer, kein /success", () => {
    const pfade = sitemap().map((e) => new URL(e.url).pathname);
    for (const p of ["/", "/partner", "/ratgeber", "/impressum", "/datenschutz", "/agb", "/versand", "/widerrufsbelehrung", "/widerruf", "/barrierefreiheit"]) {
      expect(pfade).toContain(p);
    }
    expect(pfade.filter((p) => p.startsWith("/ratgeber/")).length).toBeGreaterThan(0);
    expect(pfade).not.toContain("/start");
    expect(pfade).not.toContain("/success");
    expect(sitemap().every((e) => e.url.startsWith("https://case-connect.de/"))).toBe(true);
  });

  it("robots sperrt /start", () => {
    const r = robots();
    const rules = Array.isArray(r.rules) ? r.rules : [r.rules];
    expect(rules[0].disallow).toContain("/start");
  });
});
