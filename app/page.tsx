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
import Contact from '@/components/sections/Contact';
import Footer from '@/components/sections/Footer';
import CartDrawer from '@/components/ui/CartDrawer';
import FloatingCart from '@/components/ui/FloatingCart';

export default function Home() {
  return (
    <>
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
        <Contact />
      </main>
      <Footer />
      <CartDrawer />
      <FloatingCart />
    </>
  );
}
