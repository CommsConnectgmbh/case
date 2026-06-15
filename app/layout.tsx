import type { Metadata, Viewport } from "next";
import "./globals.css";
import CookieConsent from "@/components/ui/CookieConsent";
import { FAQS as CASE_FAQS } from "@/components/sections/FAQ";

const SITE_URL = "https://case-connect.de";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Case-Connect 5G-Koffer — Mobiles Internet für Baustelle, Service & Event | Comms Connect",
    template: "%s · Case-Connect 5G-Koffer",
  },
  description:
    "Case-Connect 5G-Koffer: Plug-&-Play-Internet ohne DSL. Multi-Carrier 5G (Telekom, Vodafone, O2, 1&1), IP67, bis 500 m Reichweite, in 60 Sekunden online. Kauf ab 1.999 € oder Miete ab 49 €/Tag. Aus München, von Comms Connect.",
  keywords: [
    "5G Koffer mieten",
    "5G Koffer kaufen",
    "mobiles Internet Baustelle",
    "Internet ohne DSL",
    "portable 5G Router",
    "Notfall Internet 5G",
    "WLAN Koffer 5G",
    "5G Case Bauleitung",
    "5G Hotspot Industrie",
    "Case-Connect",
    "Case Connect 5G",
    "Teltonika RUTX50 Koffer",
    "Cradlepoint R980 Koffer",
  ],
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: SITE_URL,
    siteName: "Case-Connect — 5G-Koffer by Comms Connect",
    title: "Case-Connect 5G-Koffer — Mobiles Internet für Baustelle & Service",
    description:
      "Plug-&-Play-Internet ohne DSL. Multi-Carrier 5G, IP67, in 60 Sekunden online. Ab 1.999 € oder Miete ab 49 €/Tag.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Case-Connect 5G-Koffer — Mobiles Internet für Baustelle",
    description: "Plug-&-Play 5G ohne DSL. Multi-Carrier, IP67, in 60 Sekunden online. Ab 1.999 €.",
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
      name: "Case-Connect — 5G-Koffer by Comms Connect",
      alternateName: ["Case-Connect", "Case Connect", "5G Case Connect"],
      inLanguage: "de-DE",
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
    {
      "@type": "Brand",
      "@id": `${SITE_URL}/#brand`,
      name: "Case-Connect",
      alternateName: ["Case Connect", "5G Case"],
      logo: `${SITE_URL}/images/logo.png`,
      slogan: "Kein Netz? Unser Problem.",
      parentOrganization: { "@id": `${SITE_URL}/#organization` },
    },
    {
      "@type": "Product",
      "@id": `${SITE_URL}/#product-standard`,
      name: "Case-Connect 5G-Koffer Standard",
      description:
        "Portables Enterprise-5G-Netzwerk mit Teltonika RUTX50. Plug & Play in unter 60 Sekunden, IP67, bis zu 500 m Reichweite. Multi-Carrier 5G (Telekom, Vodafone, O2, 1&1).",
      brand: { "@id": `${SITE_URL}/#brand` },
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
      name: "Case-Connect 5G-Koffer Professional",
      description:
        "Professionelle Variante des Case-Connect 5G-Koffers mit Cradlepoint R980. Multi-Carrier 5G inkl. Network Slicing, robustes IP67-Gehäuse, weltweite Konnektivität.",
      brand: { "@id": `${SITE_URL}/#brand` },
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
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/#faq`,
      mainEntity: CASE_FAQS.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
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
      <body className="bg-bg text-white font-body antialiased">
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
