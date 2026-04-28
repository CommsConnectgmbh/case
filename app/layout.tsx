import type { Metadata, Viewport } from "next";
import "./globals.css";

const SITE_URL = "https://case-connect.de";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "5G Case — Mobiles Enterprise-Netzwerk kaufen | Comms Connect",
    template: "%s · 5G Case",
  },
  description:
    "Das portable 5G-Koffersystem für Baustellen, Events, Wartung und Notfälle. Plug & Play in unter 60 Sekunden. CE & IP67 zertifiziert, Multi-Carrier 5G/LTE, bis zu 500m Reichweite. Ab 1.999 €.",
  keywords: [
    "5G Koffer kaufen",
    "mobiles 5G Internet",
    "Baustelle WLAN",
    "portable 5G Router",
    "Enterprise Konnektivität",
    "5G Case",
    "Teltonika 5G Koffer",
    "Cradlepoint Mobil",
    "Eventnetzwerk 5G",
    "Notfall Internet 5G",
  ],
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: SITE_URL,
    siteName: "5G Case by Comms Connect",
    title: "Kein Netz? Unser Problem. | 5G Case by Comms Connect",
    description:
      "Portable 5G-Konnektivität für Baustellen, Events und Notfälle. In unter 60 Sekunden online. Ab 1.999 €.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kein Netz? Unser Problem. | 5G Case",
    description: "Portable 5G-Konnektivität in unter 60 Sekunden. Ab 1.999 €.",
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
      name: "5G Case Standard",
      description:
        "Portables Enterprise-5G-Netzwerk mit Teltonika RUTX50. Plug & Play in unter 60 Sekunden, IP67, bis zu 500 m Reichweite.",
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
      name: "5G Case Professional",
      description:
        "Professionelle Variante mit Cradlepoint R980. Multi-Carrier 5G, robustes IP67-Gehäuse, weltweite Konnektivität.",
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
