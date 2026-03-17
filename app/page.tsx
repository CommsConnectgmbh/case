import NavBar from '@/components/sections/NavBar';
import Hero from '@/components/sections/Hero';
import Problem from '@/components/sections/Problem';
import ProductIntro from '@/components/sections/ProductIntro';
import Shop from '@/components/sections/Shop';
import HowItWorks from '@/components/sections/HowItWorks';
import UseCases from '@/components/sections/UseCases';
import BatteryCompat from '@/components/sections/BatteryCompat';
import TechSpecs from '@/components/sections/TechSpecs';
import RemoteManagement from '@/components/sections/RemoteManagement';
import Connectivity from '@/components/sections/Connectivity';
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
        <Problem />
        <ProductIntro />
        <HowItWorks />
        <UseCases />
        <BatteryCompat />
        <Shop />
        <TechSpecs />
        <RemoteManagement />
        <Connectivity />
        <Contact />
      </main>
      <Footer />
      <CartDrawer />
      <FloatingCart />
    </>
  );
}
