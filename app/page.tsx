import type { Metadata } from 'next';
import { FAQS as CASE_FAQS } from '@/components/sections/faq-data';
import { SITE_URL } from '@/lib/seo';
import NavBar from '@/components/sections/NavBar';
import Hero from '@/components/sections/Hero';
import TrustBar from '@/components/sections/TrustBar';
import LaunchVideo from '@/components/sections/LaunchVideo';
import Problem from '@/components/sections/Problem';
import ProductIntro from '@/components/sections/ProductIntro';
import HowItWorks from '@/components/sections/HowItWorks';
import UseCases from '@/components/sections/UseCases';
import BatteryCompat from '@/components/sections/BatteryCompat';
import RemoteManagement from '@/components/sections/RemoteManagement';
import Connectivity from '@/components/sections/Connectivity';
import Shop from '@/components/sections/Shop';
import TechSpecs from '@/components/sections/TechSpecs';
import FAQ from '@/components/sections/FAQ';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/sections/Footer';
import CartDrawer from '@/components/ui/CartDrawer';
import FloatingCart from '@/components/ui/FloatingCart';


export const metadata: Metadata = {
  alternates: { canonical: SITE_URL },
};

// Produkt und Startseiten-FAQ nur auf der Startseite (vorher in app/layout.tsx
// auf jeder Seite, auch auf Rechtstexten und Ratgebern).
const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Product',
      '@id': `${SITE_URL}/#product-standard`,
      name: 'Case-Connect 5G-Koffer Standard',
      description: "Mobiles 5G-Koffersystem mit Teltonika RUTX50 (5G mit LTE-Rückfall, Dual-SIM, Dual-Band-WLAN, 5 × Gigabit-Ethernet) im robusten PARAT-Systemkoffer, gefertigt von PARAT in Waldkirchen. Poynting-Panelantenne mit 4×4 MIMO und GNSS im Deckel. Drei Stromquellen: Netz, Werkzeugakku, 12 V Kfz. Vorkonfiguriert geliefert, inklusive 30 m Cat6-Kabel, Cudy RE3000 Wi-Fi-6-Mesh-Repeater und Teltonika RMS mit 10-Jahres-Lizenz.",
      image: [
        `${SITE_URL}/images/case-offen.jpg`,
        `${SITE_URL}/images/case-geschlossen.jpg`,
        `${SITE_URL}/images/lieferumfang.jpg`,
      ],
      brand: { '@id': `${SITE_URL}/#brand` },
      category: 'Industrial Networking Hardware',
      offers: {
        '@type': 'Offer',
        url: `${SITE_URL}/#shop`,
        priceCurrency: 'EUR',
        price: '1999',
        availability: 'https://schema.org/InStock',
        seller: { '@id': `${SITE_URL}/#organization` },
      },
    },
    {
      '@type': 'FAQPage',
      '@id': `${SITE_URL}/#faq`,
      mainEntity: CASE_FAQS.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <NavBar />
      <main>
        <Hero />
        <TrustBar />
        <LaunchVideo />
        <Problem />
        <ProductIntro />
        <HowItWorks />
        <UseCases />
        <BatteryCompat />
        <RemoteManagement />
        <Connectivity />
        <Shop />
        <TechSpecs />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <CartDrawer />
      <FloatingCart />
    </>
  );
}
