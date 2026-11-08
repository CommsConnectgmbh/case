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
 * Stand case-connect: ohne Werbe-IDs läuft KEIN clientseitiges Tracking
 * (HubSpot wird rein serverseitig nach Checkout/Kontakt angesprochen). Dann
 * erscheint der bisherige Hinweis-Banner unverändert (HinweisBanner unten).
 *
 * Web-Messung: sobald mindestens eine der IDs NEXT_PUBLIC_GA4_ID,
 * NEXT_PUBLIC_GADS_ID, NEXT_PUBLIC_META_PIXEL_ID oder
 * NEXT_PUBLIC_LINKEDIN_PARTNER_ID gesetzt ist, wird derselbe Banner zum
 * Kategorien-Banner (Notwendig / Statistik / Marketing) mit den gleichwertigen
 * Schaltflächen „Alle akzeptieren“, „Nur notwendige“, „Einstellungen“. Die
 * Entscheidung steht dann in localStorage „cc_consent“, die Tags lädt
 * ausschließlich lib/consent/tags.ts nach Einwilligung (Consent Mode v2 Basis).
 */

import { useCallback, useEffect, useState } from 'react';

import {
  brauchtEinwilligung,
  hatMarketing,
  hatStatistik,
  werbeIdsAusEnv,
  type WerbeIds,
} from '@/lib/consent/ids';
import { istWiderruf, leseConsent, schreibeConsent, type Consent } from '@/lib/consent/store';
import { ladeTags } from '@/lib/consent/tags';

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

/**
 * Ohne Werbe-IDs: exakt der bisherige Hinweis-Banner. Mit mindestens einer ID:
 * Kategorien-Banner mit Einwilligung je Kategorie.
 */
export default function CookieConsent({ ids: idsProp }: { ids?: WerbeIds } = {}) {
  const ids = idsProp ?? werbeIdsAusEnv();
  if (brauchtEinwilligung(ids)) return <KategorienBanner ids={ids} />;
  return <HinweisBanner />;
}

function HinweisBanner() {
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

// ---------------------------------------------------------------------------
// Kategorien-Banner (nur mit Werbe-IDs)
// ---------------------------------------------------------------------------

function dienste(ids: WerbeIds) {
  const statistik = ids.ga4 ? ['Google Analytics 4'] : [];
  const marketing = [
    ids.gads && 'Google Ads',
    ids.metaPixel && 'Meta Pixel',
    ids.linkedin && 'LinkedIn Insight Tag',
  ].filter(Boolean) as string[];
  return { statistik, marketing };
}

// Alle drei Schaltflächen in derselben Gestaltung: keine hervorgehobene
// Zustimmung, kein Dark Pattern.
const KNOPF =
  'flex-1 rounded-xl border border-white/15 bg-white/[0.04] px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-white/[0.08]';

function KategorienBanner({ ids }: { ids: WerbeIds }) {
  const { statistik: statDienste, marketing: mktDienste } = dienste(ids);

  const [offen, setOffen] = useState(false);
  const [details, setDetails] = useState(false);
  const [aktuell, setAktuell] = useState<Consent | null>(null);
  const [wahlStat, setWahlStat] = useState(false);
  const [wahlMkt, setWahlMkt] = useState(false);

  useEffect(() => {
    const c = leseConsent(window.localStorage);
    setAktuell(c);
    if (c) ladeTags(c, ids, window);
    else setOffen(true);

    const oeffnen = () => {
      const jetzt = leseConsent(window.localStorage);
      setWahlStat(jetzt?.statistik ?? false);
      setWahlMkt(jetzt?.marketing ?? false);
      setDetails(true);
      setOffen(true);
    };
    window.addEventListener('open-cookie-settings', oeffnen);
    return () => window.removeEventListener('open-cookie-settings', oeffnen);
    // ids ist pro Build fest.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const entscheide = useCallback(
    (statistik: boolean, marketing: boolean) => {
      const neu = schreibeConsent(window.localStorage, {
        statistik: statistik && hatStatistik(ids),
        marketing: marketing && hatMarketing(ids),
      });
      setOffen(false);
      setDetails(false);
      if (istWiderruf(aktuell, neu)) {
        // Geladene Skripte lassen sich nicht entladen: neu laden.
        window.location.reload();
        return;
      }
      setAktuell(neu);
      ladeTags(neu, ids, window);
    },
    [aktuell, ids],
  );

  if (!offen) return null;

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-label="Cookie-Einstellungen"
      data-consent-banner="kategorien"
      className="fixed inset-x-0 bottom-0 z-[100] px-4 pb-4 sm:px-6 sm:pb-6"
    >
      <div className="mx-auto max-w-2xl rounded-2xl border border-white/10 bg-white/[0.06] p-5 shadow-2xl backdrop-blur-xl sm:p-6">
        <h2 className="font-heading text-base font-semibold text-white">
          Datenschutz-Einstellungen
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-muted/90">
          Technisch notwendige Speicherungen (z.&nbsp;B. Warenkorb, Spracheinstellung und diese
          Auswahl) nutzen wir ohne Einwilligung. Die unten genannten Dienste für Statistik und
          Marketing laden wir nur mit Ihrer Einwilligung; ohne Einwilligung wird keiner davon
          geladen. Sie können Ihre Auswahl jederzeit über &bdquo;Cookie-Einstellungen&ldquo; im
          Footer ändern. Mehr dazu in unserer{' '}
          <a href="/datenschutz" className="text-primary underline hover:text-primary/80">
            Datenschutzerklärung
          </a>
          .
        </p>

        {details && (
          <div className="mt-4 space-y-3 text-sm">
            <Kategorie
              titel="Notwendig"
              text="Warenkorb, Spracheinstellung und Speicherung dieser Auswahl. Immer aktiv."
              an
              fest
              hinweis="immer aktiv"
            />
            {statDienste.length > 0 && (
              <Kategorie titel="Statistik" text={statDienste.join(', ')} an={wahlStat} onChange={setWahlStat} />
            )}
            {mktDienste.length > 0 && (
              <Kategorie titel="Marketing" text={mktDienste.join(', ')} an={wahlMkt} onChange={setWahlMkt} />
            )}
          </div>
        )}

        <div className="mt-5 flex flex-col gap-3 sm:flex-row">
          <button type="button" className={KNOPF} onClick={() => entscheide(true, true)}>
            Alle akzeptieren
          </button>
          <button type="button" className={KNOPF} onClick={() => entscheide(false, false)}>
            Nur notwendige
          </button>
          {details ? (
            <button type="button" className={KNOPF} onClick={() => entscheide(wahlStat, wahlMkt)}>
              Auswahl speichern
            </button>
          ) : (
            <button
              type="button"
              className={KNOPF}
              onClick={() => {
                setWahlStat(aktuell?.statistik ?? false);
                setWahlMkt(aktuell?.marketing ?? false);
                setDetails(true);
              }}
            >
              Einstellungen
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

function Kategorie({
  titel,
  text,
  an,
  fest = false,
  hinweis,
  onChange,
}: {
  titel: string;
  text: string;
  an: boolean;
  fest?: boolean;
  hinweis?: string;
  onChange?: (v: boolean) => void;
}) {
  return (
    <label className="flex cursor-pointer items-start gap-3 rounded-xl bg-white/[0.04] p-3">
      <input
        type="checkbox"
        className="mt-0.5 h-4 w-4 accent-primary"
        checked={an}
        disabled={fest}
        onChange={(e) => onChange?.(e.target.checked)}
      />
      <span>
        <span className="block font-semibold text-white">
          {titel}
          {hinweis && <span className="ml-2 font-normal text-muted">({hinweis})</span>}
        </span>
        <span className="block text-muted/90">{text}</span>
      </span>
    </label>
  );
}

/** Footer-Helper: löst das Wiederöffnen des Banners aus. */
export function openCookieSettings() {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new Event('open-cookie-settings'));
  }
}
