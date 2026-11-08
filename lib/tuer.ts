// Die Klick-Tuer /start: geschlossene Liste der Ziele.
//
// Das Ziel kommt nie aus der Anfrage, sondern immer aus diesem Objekt. Ein
// Weiterleiter, der ein beliebiges Ziel aus der Query nimmt, waere eine offene
// Weiterleitung, mit der fremde Seiten case-connect.de als Sprungbrett fuer
// Phishing-Links benutzen koennten. Die Anfrage waehlt nur einen Schluessel.
//
// Alle Ziele sind eigene Seiten (relativ). Die Route loest sie gegen die
// eigene Origin auf, damit die Tuer auch auf Vorschau-Adressen und lokal
// funktioniert.
//
// Bewusst ohne "use client" und ohne Server-Abhaengigkeiten: die Route und die
// Links in den Komponenten lesen dieselbe Liste.

export const TUER_PFAD = "/start";

export const ZIELE = {
  /** Zum Shop-Bereich der Startseite (Koffer kaufen). */
  shop: "/#shop",
  /** Live-Demo anfragen: Kontaktformular der Startseite. */
  demo: "/#kontakt",
  /** Kontakt: Kontaktformular der Startseite. */
  kontakt: "/#kontakt",
} as const;

export type Ziel = keyof typeof ZIELE;

export function istZiel(v: string | null | undefined): v is Ziel {
  return typeof v === "string" && Object.prototype.hasOwnProperty.call(ZIELE, v);
}

/** Link auf die Tuer fuer ein Ziel. */
export function tuerHref(ziel: Ziel): string {
  return `${TUER_PFAD}?ziel=${ziel}`;
}

/**
 * Welche Conversion ein Tuer-Klick ist (fuer die einwilligungspflichtigen
 * Tags). Der Weg zum Shop ist noch keine Conversion; der Kaufbeginn wird am
 * Checkout-Knopf im Warenkorb gemeldet.
 */
export function conversionArt(ziel: Ziel): "lead" | null {
  return ziel === "demo" || ziel === "kontakt" ? "lead" : null;
}
