// Die Tuer. Zaehlt den Klick und leitet weiter.
//
// Bewusst duenn: faellt die Messung aus, wird trotzdem weitergeleitet. Ein
// Besucher, der wegen unserer Statistik nicht zum Shop kommt, kostet genau
// das, was hier gemessen werden soll.

import { after, NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { eigenerHerkunftsPfad, referrerHost } from "@/lib/analytics/classify";
import { clientKindAus, klickTyp, sendWebHit, utmAus } from "@/lib/analytics/web-hit";
import { istZiel, TUER_PFAD, ZIELE } from "@/lib/tuer";

export function GET(req: NextRequest) {
  const params = req.nextUrl.searchParams;
  const zielParam = params.get("ziel");

  // Unbekanntes Ziel: zur Startseite, nichts messen. Kein offener Redirect,
  // die Adresse kommt nie aus der Anfrage.
  if (!istZiel(zielParam)) {
    return antwort(NextResponse.redirect(new URL("/", req.url), 302));
  }

  const ziel = zielParam;
  const utm = utmAus(params);

  // Alle Ziele sind eigene Seiten. Gegen die eigene Origin aufloesen, dann
  // reisen nur die UTM der Tuer-Adresse mit (vor dem #-Anker).
  const url = new URL(ZIELE[ziel], req.url);
  for (const [k, v] of Object.entries(utm)) url.searchParams.set(k, v);

  const referer = req.headers.get("referer");
  const hit = {
    kind: "cta" as const,
    path: TUER_PFAD,
    ziel,
    client_kind: clientKindAus(req.headers),
    referrer_host: referrerHost(referer),
    from_path: eigenerHerkunftsPfad(referer, req.headers.get("host")),
    klick_typ: klickTyp(params),
    ...utm,
  };

  // Nach der Antwort senden (auf Vercel ueber waitUntil): der Klick wartet
  // nie auf die Messung.
  after(() => sendWebHit(hit));

  return antwort(NextResponse.redirect(url, 302));
}

function antwort(res: NextResponse): NextResponse {
  // Die Tuer ist ein Durchgang, keine Seite.
  res.headers.set("X-Robots-Tag", "noindex, nofollow");
  // Eine gezaehlte Weiterleitung darf kein Cache wiederverwenden.
  res.headers.set("Cache-Control", "no-store");
  return res;
}

export const dynamic = "force-dynamic";
