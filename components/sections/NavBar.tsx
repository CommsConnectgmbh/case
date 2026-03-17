'use client';

import { useState, useEffect } from 'react';
import { ShoppingCart, Menu, X } from 'lucide-react';
import Image from 'next/image';
import { useCartStore } from '@/lib/cart-store';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from '@/lib/i18n';
import LanguageSwitcher from '@/components/ui/LanguageSwitcher';

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { items, openCart } = useCartStore();
  const itemCount = items.reduce((sum, i) => sum + i.quantity, 0);
  const t = useTranslation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { href: '#shop', label: t.nav.links.produkte },
    { href: '#features', label: t.nav.links.features },
    { href: '#usecases', label: t.nav.links.anwendungen },
    { href: '#contact', label: t.nav.links.kontakt },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, delay: 1 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-bg/70 backdrop-blur-xl border-b border-white/5' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center">
          <Image src="/images/logo.png" alt="Comms Connect" width={120} height={30} className="h-6 w-auto" />
        </a>

        <div className="hidden md:flex items-center gap-8 text-[13px] text-muted/80">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-white transition-colors duration-300">
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={openCart}
            className="relative p-2 text-muted hover:text-white transition-colors duration-300"
            aria-label={t.cart.cartTitle}
          >
            <ShoppingCart size={18} />
            <AnimatePresence>
              {itemCount > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  className="absolute -top-0.5 -right-0.5 bg-cta text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold"
                >
                  {itemCount}
                </motion.span>
              )}
            </AnimatePresence>
          </button>
          <a
            href="#shop"
            className="hidden sm:inline-flex px-4 py-1.5 bg-white text-black text-[13px] font-medium rounded-full hover:bg-white/90 transition-colors duration-300"
          >
            {t.nav.buyButton}
          </a>
          <LanguageSwitcher />
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-muted"
            aria-label="Menu"
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-bg/95 backdrop-blur-xl border-t border-white/5 overflow-hidden"
          >
            <div className="px-6 py-4 space-y-3">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setMobileOpen(false)}
                  className="block text-sm text-muted hover:text-white transition-colors"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
