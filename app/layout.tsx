import type { Metadata, Viewport } from "next";
import "./globals.css";
import CookieConsent from "@/components/ui/CookieConsent";
import { FAQS as CASE_FAQS } from "@/components/sections/faq-data";

const SITE_URL = "https://case-connect.de";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Case-Connect 5G-Koffer: Mobiles Internet für Baustelle, Service & Event | Comms Connect",
    template: "%s · Case-Connect 5G-Koffer",
  },
  description:
    "Case-Connect 5G-Koffer: mobiles Internet ohne DSL im robusten PARAT-Systemkoffer. 5G mit LTE-Rückfall, Dual-SIM, Dual-Band-WLAN, drei Stromquellen (Netz, Akku, Kfz), vorkonfiguriert geliefert. 1.999 € netto. Aus München, von Comms Connect.",
  keywords: [
    "5G Koffer mieten",
    "5G Koffer kaufen",
    "mobiler Internetkoffer",
    "mobiles Internet Baustelle",
    "WLAN für Events",
    "Internet ohne DSL",
    "Internet ohne Festanschluss",
    "portabler 5G Router",
    "WLAN Koffer 5G",
    "5G Case Bauleitung",
    "5G Hotspot Industrie",
    "Case-Connect",
    "Case Connect 5G",
    "Teltonika 5G Koffer",
    "Teltonika RUTX50 Koffer",
    "5G Koffer mit WLAN Repeater",
  ],
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: SITE_URL,
    siteName: "Case-Connect: 5G-Koffer by Comms Connect",
    title: "Case-Connect 5G-Koffer: Mobiles Internet für Baustelle & Service",
    description:
      "Mobiles Internet ohne DSL im robusten PARAT-Systemkoffer. 5G mit LTE-Rückfall, Dual-SIM, drei Stromquellen, vorkonfiguriert geliefert. 1.999 € netto.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Case-Connect 5G-Koffer: Mobiles Internet für Baustelle",
    description: "Mobiles 5G-Internet ohne DSL im PARAT-Systemkoffer. Dual-SIM, drei Stromquellen, vorkonfiguriert. 1.999 € netto.",
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
      name: "Case-Connect: 5G-Koffer by Comms Connect",
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
        "Mobiles 5G-Koffersystem mit Teltonika RUTX50 (5G mit LTE-Rückfall, Dual-SIM, Dual-Band-WLAN, 5 × Gigabit-Ethernet) im robusten PARAT-Systemkoffer, gefertigt von PARAT in Waldkirchen. Drei Stromquellen: Netz, Werkzeugakku, 12 V Kfz. Vorkonfiguriert geliefert, inklusive 30 m Cat6-Kabel, Cudy RE3000 Wi-Fi-6-Mesh-Repeater und Teltonika RMS mit 10-Jahres-Lizenz.",
      brand: { "@id": `${SITE_URL}/#brand` },
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
