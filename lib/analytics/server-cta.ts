// Messpunkt fuer Abschluesse, die der Server selbst sieht: ein gesendetes
// Kontakt- oder Partnerformular, ein gestarteter Checkout.
//
// Bewusst ohne jede Formular- oder Bestellangabe: weder Name noch Firma noch
// Warenkorb gehen in die Messung. Der Punkt sagt nur "das ist passiert", von
// welcher eigenen Seite (Referer des Formular-Requests) und wie der Aufrufer
// eingestuft ist.
//
// path ist die Tuer: der Messpunkt speichert nur Sitemap-Pfade und die
// Tuer-Pfade; als /api/... landete der Zaehler unter /:andere.

import { after } from "next/server";

import { eigenerHerkunftsPfad, referrerHost } from "./classify";
import { clientKindAus, sendWebHit, type WebHit } from "./web-hit";
import { TUER_PFAD } from "../tuer";

/** Ziele aus der festen Liste des Messpunkts. */
export type ServerZiel = "kontakt_gesendet" | "partner" | "checkout";

export function serverCtaHit(headers: Headers, ziel: ServerZiel): WebHit {
  const referer = headers.get("referer");
  return {
    kind: "cta",
    path: TUER_PFAD,
    ziel,
    client_kind: clientKindAus(headers),
    referrer_host: referrerHost(referer),
    from_path: eigenerHerkunftsPfad(referer, headers.get("host")),
  };
}

/** Nach der Antwort senden; die Anfrage wartet nie auf die Messung. */
export function meldeServerCta(req: Request, ziel: ServerZiel): void {
  try {
    const hit = serverCtaHit(req.headers, ziel);
    after(() => sendWebHit(hit));
  } catch (err) {
    // Messung darf den Abschluss nie stoeren.
    console.error("web-hit cta skipped", err instanceof Error ? err.name : "unknown");
  }
}
