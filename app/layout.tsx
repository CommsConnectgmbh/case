import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import CookieConsent from "@/components/ui/CookieConsent";

// next/font/google laedt die Schriften zur Build-Zeit herunter und liefert sie
// von der eigenen Domain aus. Kein Browser-Request an fonts.googleapis.com /
// fonts.gstatic.com (LG Muenchen I, 20.01.2022, 3 O 17493/20).
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--font-inter",
});
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-space-grotesk",
});

const SITE_URL = "https://case-connect.de";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "5G-Koffer: Mobiles Internet ohne DSL | Case-Connect",
    template: "%s · Case-Connect 5G-Koffer",
  },
  description:
    "Mobiles Internet ohne DSL: Der Case-Connect 5G-Koffer mit Dual-SIM kommt vorkonfiguriert. Für Baustelle, Service und Event. 1.999 € netto.",
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
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${inter.variable} ${spaceGrotesk.variable}`}>
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
