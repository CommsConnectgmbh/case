import { NextResponse } from "next/server";
import type { NextFetchEvent, NextRequest } from "next/server";

import { referrerHost } from "@/lib/analytics/classify";
import {
  clientKindAus,
  istDokumentAufruf,
  klickTyp,
  normalizePath,
  sendWebHit,
  utmAus,
} from "@/lib/analytics/web-hit";
import { TUER_PFAD } from "@/lib/tuer";

// Serverseitige Reichweitenmessung.
//
// In der Middleware und nicht in den Seiten: die Seiten sind statisch und
// kommen aus dem Edge-Cache, eine Zaehlung im Rendering liefe bei Cache-
// Treffern gar nicht. Nicht im Browser: ein Script dort griffe auf das
// Endgeraet zu (§ 25 TDDDG). Hier wird nur ausgewertet, was die Anfrage
// ohnehin mitbringt, und nichts Personenbezogenes gespeichert.
//
// Es wird KEIN Cookie gesetzt und keine Antwort veraendert.
export function middleware(req: NextRequest, event: NextFetchEvent) {
  const path = normalizePath(req.nextUrl.pathname);

  // /start zaehlt sich selbst (als Klick, nicht als Seitenaufruf).
  if (
    path !== TUER_PFAD &&
    istDokumentAufruf({
      method: req.method,
      pathname: path,
      secFetchDest: req.headers.get("sec-fetch-dest"),
      accept: req.headers.get("accept"),
    })
  ) {
    const params = req.nextUrl.searchParams;
    // waitUntil statt await: die Seite wartet nie auf die Messung.
    event.waitUntil(
      sendWebHit({
        kind: "view",
        path,
        client_kind: clientKindAus(req.headers),
        referrer_host: referrerHost(req.headers.get("referer")),
        klick_typ: klickTyp(params),
        ...utmAus(params),
      }),
    );
  }

  return NextResponse.next();
}

export const config = {
  // Assets, Bilder, Functions und Dateien mit Endung erreichen die Middleware
  // gar nicht erst. Die feinere Pruefung steht in istDokumentAufruf.
  matcher: ["/((?!_next/static|_next/image|api/|.*\\.[a-zA-Z0-9]+$).*)"],
};
