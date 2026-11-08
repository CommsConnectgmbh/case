// Browser-Pruefung der Web-Messung gegen einen lokalen Prod-Build.
//
//   npm run test:e2e
//
// Baut zweimal (ohne IDs, mit Test-IDs), startet jeweils `next start` und
// prueft mit Playwright (Chromium headless):
//   ohne IDs:  null Fremd-Requests, bisheriger Hinweis-Banner unveraendert,
//              Middleware schreibt bei Dokument-Navigationen an den Mock
//              (Body, x-web-hit-token, x-region), bei Assets/API nicht,
//              Klick-Tuer und gesendetes Kontaktformular als cta;
//              ohne WEB_HIT_TOKEN gar kein Messaufruf.
//   mit IDs:   Kategorien-Banner, vor Klick null Requests an Google/Meta/
//              LinkedIn, nach "Alle akzeptieren" sind sie da, nach
//              "Nur notwendige" und nach Widerruf keine.
// Der Messendpunkt ist ein lokaler Mock (WEB_HIT_URL), kein echter Token.
// Fremd-Scripte werden abgefangen und leer beantwortet: der Request ist
// sichtbar, verlaesst aber den Rechner nicht.

import { spawn, spawnSync } from "node:child_process";
import http from "node:http";
import { chromium } from "playwright";

const ROOT = new URL("../..", import.meta.url).pathname;
const PORT = 3430;
const MOCK_PORT = 3431;
const BASE = `http://localhost:${PORT}`;
const TOKEN = "test-token-lokal";
const UA_SUFFIX = " CCMessLauf";
const PAGES = ["/", "/partner", "/ratgeber", "/ratgeber/wlan-fuer-events", "/datenschutz", "/impressum", "/barrierefreiheit"];
const ARTIKEL = "/ratgeber/wlan-fuer-events";
const TRACKER = /googletagmanager|google-analytics|doubleclick|googleadservices|facebook|fbcdn|linkedin|licdn/;
const IDS = {
  NEXT_PUBLIC_GA4_ID: "G-TEST000000",
  NEXT_PUBLIC_GADS_ID: "AW-1234567890",
  NEXT_PUBLIC_META_PIXEL_ID: "1234567890123",
  NEXT_PUBLIC_LINKEDIN_PARTNER_ID: "1234567",
};
// Keine echten Dienste: ohne diese Werte rufen die API-Routen nichts Fremdes auf.
const OHNE_DIENSTE = { HUBSPOT_API_TOKEN: "", RESEND_API_KEY: "" };

let fehler = 0;
let ok = 0;
function check(bed, text) {
  console.log(`${bed ? "  OK  " : "  FAIL"}  ${text}`);
  if (bed) ok++;
  else fehler++;
}

// ---- Mock fuer web-hit ----
const hits = [];
const mock = http.createServer((req, res) => {
  let body = "";
  req.on("data", (c) => (body += c));
  req.on("end", () => {
    hits.push({
      method: req.method,
      token: req.headers["x-web-hit-token"],
      region: req.headers["x-region"],
      ct: req.headers["content-type"],
      body: JSON.parse(body || "{}"),
    });
    res.writeHead(204).end();
  });
});
await new Promise((r) => mock.listen(MOCK_PORT, "127.0.0.1", r));

function baue(env) {
  console.log(`\n== next build (${Object.keys(env).length ? "mit Test-IDs" : "ohne IDs"})`);
  const leer = Object.fromEntries(Object.keys(IDS).map((k) => [k, ""]));
  const r = spawnSync("npx", ["next", "build"], { cwd: ROOT, env: { ...process.env, ...leer, ...env }, encoding: "utf8" });
  console.log(r.stdout.split("\n").filter((l) => /Route|○|ƒ|●|✓|Middleware|error|Error/.test(l)).join("\n"));
  if (r.status !== 0) {
    console.log(r.stderr);
    throw new Error("build failed");
  }
}

// Gestartete Server; im finally sicher beendet, auch wenn eine Pruefung abbricht.
const laufend = new Set();

async function starte(env, mitToken = true) {
  const leer = Object.fromEntries(Object.keys(IDS).map((k) => [k, ""]));
  const messung = mitToken ? { WEB_HIT_TOKEN: TOKEN, WEB_HIT_URL: `http://127.0.0.1:${MOCK_PORT}/web-hit` } : { WEB_HIT_TOKEN: "", WEB_HIT_URL: `http://127.0.0.1:${MOCK_PORT}/web-hit` };
  const p = spawn("npx", ["next", "start", "-p", String(PORT)], {
    cwd: ROOT,
    env: { ...process.env, ...leer, ...OHNE_DIENSTE, ...messung, ...env },
    stdio: ["ignore", "pipe", "pipe"],
  });
  p.stderr.on("data", (d) => process.stderr.write(`[next] ${d}`));
  laufend.add(p);
  p.once("exit", () => laufend.delete(p));
  for (let i = 0; i < 60; i++) {
    try {
      const r = await fetch(`${BASE}/robots.txt`, { headers: { "user-agent": "CCMessLauf bereit" } });
      if (r.status) return p;
    } catch {
      await warte(500);
    }
  }
  throw new Error("next start not ready");
}

async function stoppe(p) {
  p.kill();
  await new Promise((r) => p.once("exit", r));
  await warte(500);
}

async function kontext(browser) {
  const ua = await browser.newPage().then(async (p) => {
    const u = await p.evaluate(() => navigator.userAgent);
    await p.close();
    return u;
  });
  const ctx = await browser.newContext({ userAgent: ua + UA_SUFFIX });
  const fremd = [];
  ctx.on("request", (r) => {
    const u = new URL(r.url());
    if (u.hostname !== "localhost" && u.hostname !== "127.0.0.1") fremd.push(r.url());
  });
  // Fremde Ziele nicht wirklich ansteuern.
  await ctx.route(/^https?:\/\/(?!localhost|127\.0\.0\.1)/, (route) =>
    route.fulfill({ status: 200, contentType: "application/javascript", body: "" }),
  );
  return { ctx, fremd };
}

const warte = (ms) => new Promise((r) => setTimeout(r, ms));
const browser = await chromium.launch({ headless: true });
const KATEGORIEN = '[data-consent-banner="kategorien"]';
const HINWEIS = '[role="dialog"][aria-label="Cookie-Einstellungen"]';

try {
  // ================= Teil 1: ohne IDs =================
  baue({});
  let server = await starte({});
  {
    console.log("\n== Teil 1: Build OHNE IDs");
    hits.length = 0;
    const { ctx, fremd } = await kontext(browser);
    const page = await ctx.newPage();
    for (const p of PAGES) {
      const q = p === "/" ? "?utm_source=e2e&utm_medium=cpc&utm_campaign=test&utm_term=SUCHWORT&gclid=GEHEIMWERT" : "";
      await page.goto(BASE + p + q, { waitUntil: "networkidle" });
      await warte(300);
      check((await page.locator(KATEGORIEN).count()) === 0, `${p}: kein Kategorien-Banner`);
    }
    await page.goto(BASE + "/", { waitUntil: "networkidle" });
    await warte(500);
    // Der bisherige Hinweis-Banner erscheint wie vorher (zwei Knoepfe, ohne Kategorien).
    const hinweis = await page.locator(`${HINWEIS} button`).allTextContents();
    check(JSON.stringify(hinweis) === '["Nur notwendige","Alle akzeptieren"]', `bisheriger Hinweis-Banner unveraendert: ${hinweis.join(" | ")}`);
    check((await page.locator(`${HINWEIS} input[type=checkbox]`).count()) === 0, "Hinweis-Banner ohne Kategorien");
    await page.locator(`${HINWEIS} button`, { hasText: "Alle akzeptieren" }).click();
    await warte(1000);
    check((await page.evaluate(() => localStorage.getItem("cc_consent"))) === null, "kein cc_consent ohne IDs");
    check(fremd.length === 0, `null Fremd-Requests auf ${PAGES.length} Seiten, auch nach "Alle akzeptieren" (gesehen: ${fremd.length})`);
    const viewsSeiten = hits.filter((h) => h.body.kind === "view").length;
    check(viewsSeiten === PAGES.length + 1, `genau ${PAGES.length + 1} Seitenaufrufe gezaehlt (gesehen: ${viewsSeiten}, keine Assets, keine RSC-Prefetches)`);

    // Sitemap
    const sm = await (await fetch(BASE + "/sitemap.xml", { headers: { "x-cc-lauf": "1" } })).text();
    const locs = [...sm.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => new URL(m[1]).pathname);
    check(PAGES.every((p) => locs.includes(p)), "alle geprueften Seiten stehen in sitemap.xml");
    check(!locs.includes("/start") && !locs.includes("/success"), "sitemap.xml ohne /start und /success");
    const robots = await (await fetch(BASE + "/robots.txt")).text();
    check(robots.includes("Disallow: /start"), "robots.txt sperrt /start");

    // Assets, API, Dateien, Nicht-Dokumente: kein Messaufruf
    const vorher = hits.length;
    const html = { accept: "text/html", "sec-fetch-dest": "document", "user-agent": "Mozilla/5.0 CCMessLauf" };
    for (const [pfad, h, m] of [
      ["/images/logo.png", { ...html, "sec-fetch-dest": "image", accept: "image/*" }, "GET"],
      ["/images/logo.png", html, "GET"],
      ["/robots.txt", html, "GET"],
      ["/sitemap.xml", html, "GET"],
      ["/favicon.ico", html, "GET"],
      ["/api/contact", html, "GET"],
      ["/partner", { ...html, "sec-fetch-dest": "empty", accept: "*/*", rsc: "1" }, "GET"],
      ["/partner", { ...html, "sec-fetch-dest": "script", accept: "*/*" }, "GET"],
    ]) {
      await fetch(BASE + pfad, { method: m, headers: h, redirect: "manual" });
    }
    const js = await page.evaluate(() => Array.from(document.scripts).map((s) => s.src).find((s) => s.includes("/_next/static/")));
    if (js) await fetch(js, { headers: html });
    await warte(1000);
    check(hits.length === vorher, `Assets/API/Dateien/fetch: kein Messaufruf (neu: ${hits.length - vorher})`);

    // Klick-Tuer ueber den echten CTA im Ratgeber-Artikel
    await page.goto(BASE + ARTIKEL, { waitUntil: "networkidle" });
    const cta = page.locator("main a", { hasText: "Zum 5G-Koffer" }).first();
    const href = await cta.getAttribute("href");
    check(href === "/start?ziel=shop", `Artikel-CTA zeigt auf die Tuer (${href})`);
    const demoHref = await page.locator("main a", { hasText: "Live-Demo anfragen" }).first().getAttribute("href");
    check(demoHref === "/start?ziel=demo", `Demo-CTA zeigt auf die Tuer (${demoHref})`);
    const kaufen = await page.locator("nav a", { hasText: "Kaufen" }).first().getAttribute("href");
    check(kaufen === "/start?ziel=shop", `Nav "Kaufen" ausserhalb der Startseite ueber die Tuer (${kaufen})`);
    const [resp] = await Promise.all([
      page.waitForResponse((r) => r.url().startsWith(BASE + "/start")),
      cta.click(),
    ]);
    check(resp.status() === 302 && resp.headers()["location"] === `${BASE}/#shop`, `Tuer 302 -> ${resp.headers()["location"]}`);
    await page.waitForLoadState("networkidle");
    check(new URL(page.url()).pathname === "/" && new URL(page.url()).hash === "#shop", `Ziel geladen: ${page.url()}`);
    await page.goto(BASE + "/", { waitUntil: "networkidle" });
    const kaufenStart = await page.locator("nav a", { hasText: "Kaufen" }).first().getAttribute("href");
    check(kaufenStart === "/#shop", `Nav "Kaufen" auf der Startseite unveraendert (${kaufenStart})`);

    for (const [q, erwartet] of [
      ["?ziel=https://evil.example", `${BASE}/`],
      ["?ziel=//evil.example", `${BASE}/`],
      ["?ziel=__proto__", `${BASE}/`],
      ["?ziel=demo&utm_source=e2e&utm_campaign=herbst", `${BASE}/?utm_source=e2e&utm_campaign=herbst#kontakt`],
    ]) {
      const r = await fetch(BASE + "/start" + q, { redirect: "manual", headers: { "x-cc-lauf": "1" } });
      check(r.status === 302 && r.headers.get("location") === erwartet, `Tuer ${q} -> ${r.headers.get("location")}`);
    }

    // Kontaktformular abschicken (ohne HubSpot-Token: nichts verlaesst den Rechner)
    await page.goto(BASE + "/#kontakt", { waitUntil: "networkidle" });
    await page.fill("#contact-name", "E2E Pruefung");
    await page.fill("#contact-email", "e2e@example.org");
    await page.fill("#kontakt textarea", "FORMULARINHALT");
    const [kr] = await Promise.all([
      page.waitForResponse((r) => r.url().endsWith("/api/contact")),
      page.locator("#kontakt button[type=submit]").click(),
    ]);
    check(kr.status() === 200, "Kontaktformular gesendet");
    await warte(1500);

    const views = hits.filter((h) => h.body.kind === "view");
    const ctas = hits.filter((h) => h.body.kind === "cta");
    console.log("  Mock-Hits:", JSON.stringify(hits.map((h) => h.body)));
    check(hits.every((h) => h.method === "POST" && h.token === TOKEN && h.ct === "application/json"), "Token-Header x-web-hit-token und JSON an jedem Hit");
    check(hits.length > 0 && hits.every((h) => h.region === "eu-central-1"), "Header x-region: eu-central-1 an jedem Hit");
    check(PAGES.every((p) => views.some((v) => v.body.path === p)), "view je Seite");
    check(views.every((v) => locs.includes(v.body.path)), "jeder gezaehlte Pfad steht exakt so in sitemap.xml");
    check(views.every((v) => v.body.client_kind === "intern"), "Lauf-Kennung CCMessLauf -> intern");
    const start = views.find((v) => v.body.path === "/" && v.body.utm_source === "e2e");
    check(start && start.body.utm_medium === "cpc" && start.body.utm_campaign === "test" && start.body.klick_typ === "gclid", "UTM und Klick-Typ beim Seitenaufruf");
    check(!JSON.stringify(hits).includes("GEHEIMWERT"), "Wert des Klick-Parameters nirgends gesendet");
    check(!JSON.stringify(hits).includes("SUCHWORT"), "utm_term nie gesendet");
    check(!JSON.stringify(hits).match(/Mozilla|HeadlessChrome|127\.0\.0\.1|::1|e2e@example|FORMULARINHALT|E2E Pruefung/), "kein User-Agent, keine IP, keine Formularinhalte im Body");
    check(ctas.some((c) => c.body.ziel === "shop" && c.body.path === "/start" && c.body.from_path === ARTIKEL), "Tuer-Klick gezaehlt (ziel shop, from_path Artikel)");
    check(ctas.some((c) => c.body.ziel === "demo" && c.body.utm_campaign === "herbst"), "Tuer demo mit UTM gezaehlt");
    check(ctas.some((c) => c.body.ziel === "kontakt_gesendet" && c.body.path === "/start" && c.body.from_path === "/"), "Kontaktformular gesendet -> cta kontakt_gesendet");
    check(!ctas.some((c) => /evil|proto/.test(String(c.body.ziel))), "unbekanntes Ziel nicht gezaehlt");
    check(!hits.some((h) => h.body.path === "/start" && h.body.kind === "view"), "/start nicht als Seitenaufruf");
    check(!hits.some((h) => /_next|\.png|\.js|\.css|\.xml|\.txt|^\/api/.test(h.body.path)), "keine Assets/API gezaehlt");
    check(fremd.length === 0, `auch danach null Fremd-Requests (gesehen: ${fremd.length})`);
    await ctx.close();
  }
  await stoppe(server);

  // ================= Teil 1b: ohne WEB_HIT_TOKEN =================
  server = await starte({}, false);
  {
    console.log("\n== Teil 1b: ohne WEB_HIT_TOKEN");
    hits.length = 0;
    const { ctx } = await kontext(browser);
    const page = await ctx.newPage();
    for (const p of ["/", "/partner", ARTIKEL]) await page.goto(BASE + p, { waitUntil: "networkidle" });
    const r = await fetch(BASE + "/start?ziel=shop", { redirect: "manual" });
    check(r.status === 302, "Tuer leitet auch ohne Token weiter");
    await warte(1500);
    check(hits.length === 0, `ohne WEB_HIT_TOKEN kein einziger Messaufruf (gesehen: ${hits.length})`);
    await ctx.close();
  }
  await stoppe(server);

  // ================= Teil 2: mit Test-IDs =================
  baue(IDS);
  server = await starte(IDS);
  {
    console.log("\n== Teil 2: Build MIT Test-IDs (G-TEST000000 u. a.)");
    // a) Alle akzeptieren
    let { ctx, fremd } = await kontext(browser);
    let page = await ctx.newPage();
    await page.goto(BASE + "/", { waitUntil: "networkidle" });
    await warte(800);
    check(await page.locator(KATEGORIEN).isVisible(), "Kategorien-Banner sichtbar");
    check((await page.locator(HINWEIS).count()) === 1, "nur ein Banner (bestehender erweitert)");
    const knoepfe = await page.locator(`${KATEGORIEN} button`).evaluateAll((b) => b.map((x) => [x.textContent, x.className]));
    check(JSON.stringify(knoepfe.map((k) => k[0])) === '["Alle akzeptieren","Nur notwendige","Einstellungen"]', `drei Schaltflaechen auf erster Ebene: ${knoepfe.map((k) => k[0]).join(" | ")}`);
    check(new Set(knoepfe.map((k) => k[1])).size === 1, "Schaltflaechen gleichwertig gestaltet");
    check(fremd.filter((u) => TRACKER.test(u)).length === 0, `vor Klick null Requests an googletagmanager/facebook/linkedin (alle Fremd: ${fremd.length})`);
    check(await page.evaluate(() => typeof window.gtag === "undefined"), "vor Klick kein gtag");
    await page.getByRole("button", { name: "Einstellungen", exact: true }).click();
    const boxen = await page.locator(`${KATEGORIEN} input[type=checkbox]`).evaluateAll((b) => b.map((x) => [x.checked, x.disabled]));
    check(JSON.stringify(boxen) === "[[true,true],[false,false],[false,false]]", `kein Vorab-Haken, Notwendig fest: ${JSON.stringify(boxen)}`);
    await page.getByRole("button", { name: "Alle akzeptieren" }).click();
    await warte(1500);
    const nach = fremd.filter((u) => TRACKER.test(u));
    console.log("  Requests nach 'Alle akzeptieren':", JSON.stringify(nach));
    check(nach.some((u) => u.includes("googletagmanager.com/gtag/js?id=G-TEST000000")), 'nach "Alle akzeptieren": gtag.js (GA4)');
    check(nach.some((u) => u.includes("connect.facebook.net")), 'nach "Alle akzeptieren": Meta Pixel');
    check(nach.some((u) => u.includes("licdn.com")), 'nach "Alle akzeptieren": LinkedIn Insight');
    check((await page.locator(KATEGORIEN).count()) === 0, "Banner danach verborgen");
    const gespeichert = await page.evaluate(() => JSON.parse(localStorage.getItem("cc_consent")));
    check(gespeichert?.v === 1 && gespeichert.statistik && gespeichert.marketing && typeof gespeichert.ts === "string", `cc_consent gespeichert: ${JSON.stringify(gespeichert)}`);
    const dl = await page.evaluate(() => (window.dataLayer || []).map((a) => Array.from(a)));
    const consent = dl.filter((a) => a[0] === "consent").map((a) => a[1]);
    check(JSON.stringify(consent) === '["default","update"]', `Consent Mode: zuerst default denied, dann update (${JSON.stringify(consent)})`);
    check(dl.find((a) => a[0] === "consent" && a[1] === "default")?.[2]?.analytics_storage === "denied", "default: analytics_storage denied");
    check(JSON.stringify(dl.filter((a) => a[0] === "config").map((a) => a[1])) === '["G-TEST000000","AW-1234567890"]', "config GA4 und AW");
    check(!JSON.stringify(dl).includes("anonymize_ip"), "kein anonymize_ip");

    // Kontaktformular -> generate_lead (ohne Inhalte)
    await page.fill("#contact-name", "E2E Pruefung");
    await page.fill("#contact-email", "e2e@example.org");
    await page.fill("#kontakt textarea", "FORMULARINHALT");
    await Promise.all([page.waitForResponse((r) => r.url().endsWith("/api/contact")), page.locator("#kontakt button[type=submit]").click()]);
    await warte(500);
    const ev = await page.evaluate(() => (window.dataLayer || []).map((a) => Array.from(a)).filter((a) => a[0] === "event"));
    check(ev.some((a) => a[1] === "generate_lead"), "Kontaktformular gesendet -> generate_lead");
    check(!JSON.stringify(ev).match(/e2e@example|FORMULARINHALT|E2E Pruefung/), "keine Formularinhalte im Ereignis");

    // Warenkorb -> Checkout-Knopf -> begin_checkout (Checkout selbst scheitert lokal ohne Stripe)
    page.on("dialog", (d) => d.dismiss());
    await page.locator("#shop button", { hasText: /Warenkorb|In den/ }).first().click();
    await warte(500);
    const kasse = page.getByRole("button", { name: /Zur Kasse/ });
    if (await kasse.count()) {
      await Promise.all([page.waitForResponse((r) => r.url().endsWith("/api/checkout")), kasse.first().click()]);
      await warte(500);
      const ev2 = await page.evaluate(() => (window.dataLayer || []).map((a) => Array.from(a)).filter((a) => a[0] === "event").map((a) => a[1]));
      check(ev2.includes("begin_checkout"), "Checkout-Knopf -> begin_checkout");
    } else {
      check(false, "Checkout-Knopf im Warenkorb gefunden");
    }

    // Tuer-Klick demo im Artikel -> generate_lead
    await page.goto(BASE + ARTIKEL, { waitUntil: "networkidle" });
    // Die Tuer kurz mit 204 beantworten: die Seite bleibt stehen, das beim
    // Klick ausgeloeste Ereignis ist im dataLayer pruefbar.
    await page.route(`${BASE}/start**`, (r) => r.fulfill({ status: 204, body: "" }));
    await page.locator("main a", { hasText: "Live-Demo anfragen" }).first().click();
    await warte(500);
    const ev3 = await page.evaluate(() => (window.dataLayer || []).map((a) => Array.from(a)).filter((a) => a[0] === "event"));
    check(ev3.some((a) => a[1] === "generate_lead" && a[2]?.ziel === "demo"), "Tuer-Klick demo -> GA4 generate_lead");
    await page.unroute(`${BASE}/start**`);
    await Promise.all([page.waitForURL((u) => u.hash === "#kontakt"), page.locator("main a", { hasText: "Live-Demo anfragen" }).first().click()]);
    check(new URL(page.url()).pathname === "/", "Tuer-Klick demo fuehrt zum Kontaktformular");
    await page.waitForLoadState("networkidle");
    check(await page.evaluate(() => typeof window.gtag === "function"), "nach Reload Tags geladen (gespeicherte Einwilligung)");
    check((await page.locator(KATEGORIEN).count()) === 0, "nach Reload kein Banner");

    // Footer-Link oeffnet Dialog mit bisheriger Wahl, Widerruf -> Reload -> keine Tracker
    await page.getByRole("button", { name: "Cookie-Einstellungen", exact: true }).first().click();
    check(await page.locator(KATEGORIEN).isVisible(), 'Footer-Link "Cookie-Einstellungen" oeffnet den Dialog');
    const wahl = await page.locator(`${KATEGORIEN} input[type=checkbox]`).evaluateAll((b) => b.map((x) => x.checked));
    check(JSON.stringify(wahl) === "[true,true,true]", `Einstellungen zeigen bisherige Wahl: ${JSON.stringify(wahl)}`);
    fremd.length = 0;
    await Promise.all([page.waitForEvent("load"), page.getByRole("button", { name: "Nur notwendige" }).click()]);
    await warte(1500);
    check(fremd.filter((u) => TRACKER.test(u)).length === 0, "nach Widerruf (Seite neu geladen) keine Tag-Requests");

    await page.goto(BASE + "/datenschutz", { waitUntil: "networkidle" });
    const dse = await page.textContent("main");
    check(
      ["Serverseitige Reichweitenmessung", "9.1 Einwilligungsverwaltung", "9.2 Google Analytics 4", "9.3 Google Ads", "9.4 Meta Pixel", "9.5 LinkedIn Insight Tag", "cc_consent"].every((s) => dse.includes(s)),
      "DSE: Bausteine A bis F gerendert",
    );
    check(!dse.includes("ausschließlich technisch notwendige Cookies"), "DSE: 'ausschliesslich notwendige Cookies' entfaellt mit IDs");
    await ctx.close();

    // b) Nur notwendige
    ({ ctx, fremd } = await kontext(browser));
    page = await ctx.newPage();
    await page.goto(BASE + "/partner", { waitUntil: "networkidle" });
    await warte(500);
    await page.getByRole("button", { name: "Nur notwendige" }).click();
    await warte(800);
    for (const p of ["/", ARTIKEL]) {
      await page.goto(BASE + p, { waitUntil: "networkidle" });
      await warte(600);
    }
    check(fremd.filter((u) => TRACKER.test(u)).length === 0, `nach "Nur notwendige": null Tag-Requests (3 Seiten, Fremd gesamt: ${fremd.length})`);
    check((await page.locator(KATEGORIEN).count()) === 0, "Banner bleibt weg");
    const c2 = await page.evaluate(() => JSON.parse(localStorage.getItem("cc_consent")));
    check(c2?.statistik === false && c2?.marketing === false, "cc_consent false/false");
    check(await page.evaluate(() => typeof window.gtag === "undefined" && typeof window.fbq === "undefined"), "track ohne Einwilligung ist No-op (keine Tag-Funktionen)");
    await ctx.close();

    // c) Nur Statistik
    ({ ctx, fremd } = await kontext(browser));
    page = await ctx.newPage();
    await page.goto(BASE + "/", { waitUntil: "networkidle" });
    await warte(500);
    await page.getByRole("button", { name: "Einstellungen", exact: true }).click();
    await page.locator(`${KATEGORIEN} label`, { hasText: "Statistik" }).locator("input").check();
    await page.getByRole("button", { name: "Auswahl speichern" }).click();
    await warte(1500);
    const nurStat = fremd.filter((u) => TRACKER.test(u));
    check(nurStat.some((u) => u.includes("googletagmanager.com/gtag/js?id=G-TEST000000")), "nur Statistik: gtag.js geladen");
    check(!nurStat.some((u) => /facebook|licdn/.test(u)), "nur Statistik: kein Meta/LinkedIn");
    const dl3 = await page.evaluate(() => (window.dataLayer || []).map((a) => Array.from(a)));
    check(!dl3.some((a) => a[0] === "config" && String(a[1]).startsWith("AW-")), "nur Statistik: kein AW-config");
    const upd = dl3.find((a) => a[0] === "consent" && a[1] === "update")?.[2];
    check(upd?.analytics_storage === "granted" && upd?.ad_storage === "denied", "update: analytics granted, ads denied");
    await ctx.close();
  }
  await stoppe(server);
} finally {
  for (const p of laufend) p.kill();
  await browser.close();
  mock.close();
}

console.log(`\nErgebnis: ${ok} OK, ${fehler} Fehler`);
process.exit(fehler === 0 ? 0 : 1);
