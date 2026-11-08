import { beforeEach, describe, expect, it, vi } from "vitest";

// Die API-Routen melden einen Abschluss erst, wenn er wirklich passiert ist,
// und ohne Formular- oder Warenkorbinhalte.

const afterCalls: (() => unknown)[] = [];
vi.mock("next/server", async (orig) => {
  const mod = await orig<typeof import("next/server")>();
  return { ...mod, after: (fn: () => unknown) => afterCalls.push(fn) };
});
const sent: Record<string, unknown>[] = [];
vi.mock("@/lib/analytics/web-hit", async (orig) => {
  const mod = await orig<typeof import("@/lib/analytics/web-hit")>();
  return { ...mod, sendWebHit: async (hit: Record<string, unknown>) => void sent.push(hit) };
});
const create = vi.fn();
vi.mock("@/lib/stripe", () => ({ stripe: { checkout: { sessions: { create } } } }));

vi.stubEnv("HUBSPOT_API_TOKEN", "");
vi.stubEnv("STRIPE_PRICE_5G_STANDARD", "price_test");

const checkout = await import("@/app/api/checkout/route");
const contact = await import("@/app/api/contact/route");
const partner = await import("@/app/api/partner/route");

const HEADERS = {
  "content-type": "application/json",
  "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.0 Safari/605.1.15",
  referer: "https://case-connect.de/",
  host: "case-connect.de",
};

let ip = 0;
function post(url: string, body: unknown) {
  ip++;
  return new Request(`https://case-connect.de${url}`, {
    method: "POST",
    headers: { ...HEADERS, "x-forwarded-for": `10.0.0.${ip}` },
    body: JSON.stringify(body),
  });
}

async function flush() {
  for (const fn of afterCalls.splice(0)) await fn();
}

beforeEach(() => {
  sent.length = 0;
  afterCalls.length = 0;
  create.mockReset();
});

describe("Checkout", () => {
  it("erfolgreich gestartet: cta checkout, ohne Warenkorb", async () => {
    create.mockResolvedValue({ url: "https://checkout.stripe.com/c/pay/x" });
    const res = await checkout.POST(post("/api/checkout", { items: [{ productId: "case-standard", quantity: 2 }] }));
    expect(res.status).toBe(200);
    await flush();
    expect(sent).toEqual([{ kind: "cta", path: "/start", ziel: "checkout", client_kind: "mensch", referrer_host: null, from_path: "/" }]);
    expect(JSON.stringify(sent)).not.toContain("case-standard");
  });

  it("Stripe-Fehler oder leerer Warenkorb: nichts gezaehlt", async () => {
    create.mockRejectedValue(new Error("stripe down"));
    expect((await checkout.POST(post("/api/checkout", { items: [{ productId: "case-standard", quantity: 1 }] }))).status).toBe(500);
    expect((await checkout.POST(post("/api/checkout", { items: [] }))).status).toBe(400);
    await flush();
    expect(sent).toHaveLength(0);
  });
});

describe("Formulare", () => {
  it("Kontakt gesendet: kontakt_gesendet, ohne Inhalte", async () => {
    const res = await contact.POST(post("/api/contact", { name: "Erika Muster", email: "erika@example.org", message: "Geheimtext" }));
    expect(res.status).toBe(200);
    await flush();
    expect(sent).toMatchObject([{ kind: "cta", path: "/start", ziel: "kontakt_gesendet", from_path: "/" }]);
    expect(JSON.stringify(sent)).not.toMatch(/Erika|example\.org|Geheimtext/);
  });

  it("Kontakt: Honeypot und fehlende Pflichtfelder zaehlen nicht", async () => {
    await contact.POST(post("/api/contact", { name: "Bot", email: "b@example.org", message: "x", company: "spam" }));
    await contact.POST(post("/api/contact", { name: "", email: "b@example.org", message: "x" }));
    await flush();
    expect(sent).toHaveLength(0);
  });

  it("Partner gesendet: partner, ohne Inhalte; Honeypot zaehlt nicht", async () => {
    const ok = await partner.POST(
      post("/api/partner", { name: "Erika Muster", firma: "Muster GmbH", email: "erika@example.org", phone: "", partnertyp: "reseller", branche: "bau", website: "" }),
    );
    expect(ok.status).toBe(200);
    await partner.POST(post("/api/partner", { name: "Bot", firma: "x", email: "b@example.org", website: "http://spam" }));
    await flush();
    expect(sent).toHaveLength(1);
    expect(sent[0]).toMatchObject({ ziel: "partner", path: "/start" });
    expect(JSON.stringify(sent)).not.toMatch(/Erika|Muster|example\.org/);
  });
});
