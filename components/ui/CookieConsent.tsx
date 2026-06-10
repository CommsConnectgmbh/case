'use client';

/**
 * Consent-First Cookie-Banner (§ 25 TDDDG / Art. 6 Abs. 1 lit. a DSGVO).
 *
 * Verhalten (rechtlich zwingend):
 *  - Es werden KEINE nicht-notwendigen Cookies/Tracker gesetzt, bevor der Nutzer
 *    aktiv eingewilligt hat. Tracking-Skripte werden NICHT hart im <head>
 *    eingebunden, sondern ausschließlich über loadConsentedScripts() NACH
 *    erteiltem Consent injiziert.
 *  - Gleichwertige Buttons: „Alle akzeptieren" und „Nur notwendige" sind optisch
 *    und funktional gleichrangig. Kein vorausgewähltes Häkchen, kein
 *    „Weitersurfen = Zustimmung".
 *  - Der Consent wird versioniert (localStorage + Cookie) gespeichert und ist
 *    jederzeit über den Footer-Link „Cookie-Einstellungen" widerrufbar
 *    (Event 'open-cookie-settings').
 *
 * Stand case-connect: aktuell läuft KEIN clientseitiges Tracking (HubSpot wird
 * rein serverseitig nach Checkout/Kontakt angesprochen). Dieses Gate ist die
 * vorgeschaltete Einwilligungs-Schranke: sobald clientseitige Marketing-/
 * Analytics-Skripte ergänzt werden, gehören sie ausschließlich in
 * loadConsentedScripts() — nie direkt ins Layout.
 */

import { useCallback, useEffect, useState } from 'react';

const CONSENT_VERSION = 1;
const STORAGE_KEY = 'cc_cookie_consent';
const COOKIE_NAME = 'cc_cookie_consent';
const COOKIE_MAX_AGE = 60 * 60 * 24 * 180; // 180 Tage

type ConsentValue = 'all' | 'necessary';

type StoredConsent = {
  v: number;
  value: ConsentValue;
  ts: string;
};

function readConsent(): StoredConsent | null {
  if (typeof window === 'undefined') return null;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as StoredConsent;
    if (parsed?.v !== CONSENT_VERSION) return null; // Re-Consent bei neuer Version
    if (parsed.value !== 'all' && parsed.value !== 'necessary') return null;
    return parsed;
  } catch {
    return null;
  }
}

function writeConsent(value: ConsentValue) {
  const data: StoredConsent = { v: CONSENT_VERSION, value, ts: new Date().toISOString() };
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch {
    /* localStorage kann blockiert sein — Cookie reicht als Fallback */
  }
  // SameSite=Lax, kein Secure-Flag erzwungen, damit es auch auf localhost greift;
  // in Produktion läuft die Seite ohnehin nur über https.
  document.cookie = `${COOKIE_NAME}=${value}; path=/; max-age=${COOKIE_MAX_AGE}; SameSite=Lax`;
}

/**
 * Injiziert die einwilligungspflichtigen Skripte — NUR bei value === 'all'.
 * Hier (und nur hier) gehören künftige Marketing-/Analytics-Snippets hin.
 * Aktuell bewusst leer, da case-connect kein clientseitiges Tracking lädt.
 */
function loadConsentedScripts(value: ConsentValue) {
  if (value !== 'all') return;
  if (typeof window === 'undefined') return;
  // Beispiel-Muster (bei Bedarf einkommentieren / ergänzen):
  //
  // if (!document.getElementById('hs-script-loader') && process.env.NEXT_PUBLIC_HUBSPOT_PORTAL_ID) {
  //   const s = document.createElement('script');
  //   s.id = 'hs-script-loader';
  //   s.async = true;
  //   s.defer = true;
  //   s.src = `https://js-eu1.hs-scripts.com/${process.env.NEXT_PUBLIC_HUBSPOT_PORTAL_ID}.js`;
  //   document.body.appendChild(s);
  // }
}

export default function CookieConsent() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const existing = readConsent();
    if (existing) {
      loadConsentedScripts(existing.value);
    } else {
      setOpen(true);
    }

    const reopen = () => setOpen(true);
    window.addEventListener('open-cookie-settings', reopen);
    return () => window.removeEventListener('open-cookie-settings', reopen);
  }, []);

  const decide = useCallback((value: ConsentValue) => {
    writeConsent(value);
    loadConsentedScripts(value);
    setOpen(false);
  }, []);

  if (!mounted || !open) return null;

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-label="Cookie-Einstellungen"
      className="fixed inset-x-0 bottom-0 z-[100] px-4 pb-4 sm:px-6 sm:pb-6"
    >
      <div className="mx-auto max-w-2xl rounded-2xl border border-white/10 bg-white/[0.06] p-5 shadow-2xl backdrop-blur-xl sm:p-6">
        <h2 className="font-heading text-base font-semibold text-white">
          Datenschutz-Einstellungen
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-muted/90">
          Wir setzen technisch notwendige Cookies ein, damit diese Website funktioniert
          (z.&nbsp;B. Warenkorb und Spracheinstellung). Für diese ist keine Einwilligung
          erforderlich. Darüber hinaus möchten wir – nur mit Ihrer Einwilligung – Cookies
          für Statistik und Marketing nutzen. Sie können frei entscheiden und Ihre Auswahl
          jederzeit über &bdquo;Cookie-Einstellungen&ldquo; im Footer ändern. Mehr dazu in unserer{' '}
          <a href="/datenschutz" className="text-primary underline hover:text-primary/80">
            Datenschutzerklärung
          </a>
          .
        </p>

        <div className="mt-5 flex flex-col gap-3 sm:flex-row">
          <button
            type="button"
            onClick={() => decide('necessary')}
            className="flex-1 rounded-xl border border-white/15 bg-white/[0.04] px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-white/[0.08]"
          >
            Nur notwendige
          </button>
          <button
            type="button"
            onClick={() => decide('all')}
            className="flex-1 rounded-xl border border-primary/40 bg-primary/15 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary/25"
          >
            Alle akzeptieren
          </button>
        </div>
      </div>
    </div>
  );
}

/** Footer-Helper: löst das Wiederöffnen des Banners aus. */
export function openCookieSettings() {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new Event('open-cookie-settings'));
  }
}
