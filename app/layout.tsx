import type { Metadata, Viewport } from "next";
import "./globals.css";

const SITE_URL = "https://case-connect.de";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "5G Koffer kaufen — Mobiles Internet für Baustelle, Event & BOS | Case Connect",
    template: "%s · Case Connect 5G Koffer",
  },
  description:
    "Mobiler 5G Internetkoffer — plug & play in unter 60 Sekunden online. IP67, akkubetrieben, Multi-Carrier 5G/LTE, bis zu 500 m WLAN-Reichweite. Für Baustelle, Event, BOS, Service & Film. Ab 1.999 €.",
  keywords: [
    "5G Koffer kaufen",
    "5G Koffer mieten",
    "mobiler Internetkoffer",
    "mobiles Internet Baustelle",
    "WLAN für Events",
    "5G Koffer BOS",
    "portabler 5G Router",
    "Internet ohne Festanschluss",
    "Teltonika 5G Koffer",
    "IP67 5G Router",
  ],
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: SITE_URL,
    siteName: "Case Connect — 5G Koffer",
    title: "5G Koffer kaufen — Mobiles Internet in 60 Sekunden | Case Connect",
    description:
      "Mobiler 5G Internetkoffer für Baustelle, Event, BOS & Film. IP67, akkubetrieben, bis 500 m Reichweite. Ab 1.999 €.",
  },
  twitter: {
    card: "summary_large_image",
    title: "5G Koffer kaufen — Mobiles Internet in 60 Sekunden | Case Connect",
    description: "Mobiler 5G Internetkoffer, plug & play. IP67, bis 500 m Reichweite. Ab 1.999 €.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#000000",
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "Comms Connect GmbH",
      url: "https://comms-connect.de",
      logo: `${SITE_URL}/images/logo.png`,
      address: {
        "@type": "PostalAddress",
        streetAddress: "Tal 30",
        postalCode: "80331",
        addressLocality: "München",
        addressCountry: "DE",
      },
      contactPoint: {
        "@type": "ContactPoint",
        email: "info@case-connect.de",
        telephone: "+49-89-4522-1556",
        contactType: "sales",
        availableLanguage: ["de", "en"],
      },
      sameAs: ["https://www.linkedin.com/company/comms-connect"],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "5G Case by Comms Connect",
      inLanguage: "de-DE",
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
    {
      "@type": "Product",
      "@id": `${SITE_URL}/#product-standard`,
      name: "5G Koffer Standard — Case Connect",
      description:
        "Mobiler 5G Internetkoffer mit Teltonika RUTX50. Plug & Play in unter 60 Sekunden online, IP67, akkubetrieben, bis zu 500 m WLAN-Reichweite. Für Baustelle, Event, BOS und Film.",
      brand: { "@type": "Brand", name: "5G Case" },
      manufacturer: { "@id": `${SITE_URL}/#organization` },
      category: "Industrial Networking Hardware",
      offers: {
        "@type": "Offer",
        url: `${SITE_URL}/#shop`,
        priceCurrency: "EUR",
        price: "1999",
        priceValidUntil: "2026-12-31",
        availability: "https://schema.org/InStock",
        seller: { "@id": `${SITE_URL}/#organization` },
      },
    },
    {
      "@type": "Product",
      "@id": `${SITE_URL}/#product-pro`,
      name: "5G Koffer Professional — Case Connect",
      description:
        "Mobiler 5G Internetkoffer mit Cradlepoint R980. Multi-Carrier 5G, robustes IP67-Gehäuse, akkubetrieben, weltweite Konnektivität. Für anspruchsvolle Einsätze auf Baustelle, Event und BOS.",
      brand: { "@type": "Brand", name: "5G Case" },
      manufacturer: { "@id": `${SITE_URL}/#organization` },
      category: "Industrial Networking Hardware",
      offers: {
        "@type": "Offer",
        url: `${SITE_URL}/#shop`,
        priceCurrency: "EUR",
        price: "2499",
        priceValidUntil: "2026-12-31",
        availability: "https://schema.org/InStock",
        seller: { "@id": `${SITE_URL}/#organization` },
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>
      <body className="bg-bg text-white font-body antialiased">{children}</body>
    </html>
  );
}
