import type { Metadata } from 'next';

export const SITE_URL = 'https://case-connect.de';

// Vorschaubild aus app/opengraph-image.tsx. Seiten mit eigenem openGraph-Objekt
// erben das dateibasierte Bild nicht, deshalb hier ausdruecklich.
export const OG_IMAGE = {
  url: `${SITE_URL}/opengraph-image`,
  width: 1200,
  height: 630,
  alt: '5G Case: mobiles 5G-Internet im robusten PARAT-Systemkoffer',
};

// Canonical und og:url je Seite. Ohne eigenes alternates erbte jede Seite das
// Canonical der Startseite aus app/layout.tsx.
// Ein eigenes openGraph-Objekt ersetzt das aus dem Layout vollstaendig, deshalb
// Titel, Beschreibung, Typ, Sprache und Seitenname hier mitgeben.
export function seitenMeta(
  pfad: string,
  titel: string,
  beschreibung?: string,
): Pick<Metadata, 'alternates' | 'openGraph'> {
  const url = `${SITE_URL}${pfad}`;
  return {
    alternates: { canonical: url },
    openGraph: {
      type: 'website',
      locale: 'de_DE',
      siteName: 'Case-Connect: 5G-Koffer by Comms Connect',
      url,
      title: titel,
      ...(beschreibung ? { description: beschreibung } : {}),
      images: [OG_IMAGE],
    },
  };
}
