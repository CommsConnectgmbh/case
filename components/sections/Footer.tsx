'use client';

import Image from 'next/image';
import { useTranslation } from '@/lib/i18n';

export default function Footer() {
  const t = useTranslation();
  return (
    <footer id="contact" className="py-20 px-6 border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <Image src="/images/logo.png" alt="Comms Connect" width={120} height={30} className="h-7 w-auto mb-4" />
            <p className="text-primary font-heading font-bold text-lg tracking-tight">Plug. Play. Perform.</p>
          </div>

          <div>
            <h4 className="text-xs font-medium tracking-[0.15em] uppercase text-muted mb-4">{t.footer.sections.produkte}</h4>
            <ul className="space-y-2.5 text-[15px] text-muted/80">
              <li><a href="#shop" className="hover:text-white transition-colors duration-300">5G Case Standard</a></li>
              <li><a href="#shop" className="hover:text-white transition-colors duration-300">5G Case Professional</a></li>
              <li><a href="#shop" className="hover:text-white transition-colors duration-300">Zubehör</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-medium tracking-[0.15em] uppercase text-muted mb-4">{t.footer.sections.rechtliches}</h4>
            <ul className="space-y-2.5 text-[15px] text-muted/80">
              <li><a href="/impressum" className="hover:text-white transition-colors duration-300">{t.footer.legalLinks.impressum}</a></li>
              <li><a href="/datenschutz" className="hover:text-white transition-colors duration-300">{t.footer.legalLinks.datenschutz}</a></li>
              <li><a href="/agb" className="hover:text-white transition-colors duration-300">{t.footer.legalLinks.agb}</a></li>
              <li><a href="/widerrufsbelehrung" className="hover:text-white transition-colors duration-300">{t.footer.legalLinks.widerruf}</a></li>
              <li><a href="/versand" className="hover:text-white transition-colors duration-300">{t.footer.legalLinks.versand}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-medium tracking-[0.15em] uppercase text-muted mb-4">{t.footer.sections.kontakt}</h4>
            <ul className="space-y-2.5 text-[15px] text-muted/80">
              <li>Comms Connect GmbH</li>
              <li>Tal 30, 80331 München</li>
              <li><a href="mailto:info@comms-connect.de" className="hover:text-primary transition-colors duration-300">info@comms-connect.de</a></li>
              <li><a href="tel:+498945221556" className="hover:text-primary transition-colors duration-300">+49 89 4522 1556</a></li>
              <li><a href="https://www.linkedin.com/in/rainer-roloff/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors duration-300">LinkedIn</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/[0.04] flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted/60">
          <span>{t.footer.copyright}</span>
          <span>{t.footer.trademark}</span>
        </div>
      </div>
    </footer>
  );
}
