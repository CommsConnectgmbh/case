import type { Metadata } from 'next';
import NavBar from '@/components/sections/NavBar';
import Footer from '@/components/sections/Footer';
import PartnerLanding from '@/components/sections/PartnerLanding';
import CartDrawer from '@/components/ui/CartDrawer';
import FloatingCart from '@/components/ui/FloatingCart';

export const metadata: Metadata = {
  title: 'Partner werden',
  description:
    'Werde Case-Connect-Partner und verdien an jedem 5G-Koffer, den du vermittelst. Für Systemhäuser, Vermieter, Fachhandel und Vermittler. Kostenlos, keine Bindung.',
  alternates: { canonical: 'https://case-connect.de/partner' },
  openGraph: {
    title: 'Werde Case-Connect-Partner',
    description:
      'Verdien an jedem 5G-Koffer, den du vermittelst. Demo-Koffer, Material und Cockpit inklusive.',
    url: 'https://case-connect.de/partner',
  },
};

export default function PartnerPage() {
  return (
    <>
      <NavBar />
      <PartnerLanding />
      <Footer />
      <CartDrawer />
      <FloatingCart />
    </>
  );
}
