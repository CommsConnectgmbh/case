'use client';

import { motion } from 'framer-motion';
import { Globe, Radio, Satellite, Shield } from 'lucide-react';
import { useTranslation } from '@/lib/i18n';

interface Feature {
  icon: typeof Globe;
  title: string;
  text: string;
  accent?: boolean;
  link?: { href: string; label: string };
}

const features: Feature[] = [
  {
    icon: Globe,
    title: 'Globale Netzabdeckung',
    text: 'Kompatibel mit 5G, LTE und 3G – funktioniert in allen großen Mobilfunknetzen weltweit. Von AT&T über Deutsche Telekom bis Vodafone.',
  },
  {
    icon: Radio,
    title: 'Multi-Carrier Failover',
    text: 'Automatischer Wechsel zwischen Mobilfunknetzen für maximale Verfügbarkeit. Kein manuelles Umschalten.',
  },
  {
    icon: Satellite,
    title: 'Starlink-kompatibel',
    text: 'Für Standorte komplett ohne Mobilfunkempfang: Starlink via WAN-Port anschließen und sofort online.',
    accent: true,
    link: { href: 'https://starlink.com/de', label: 'Mehr zu Starlink' },
  },
  {
    icon: Shield,
    title: 'Enterprise-Sicherheit',
    text: 'VPN-fähig, verschlüsselte Verbindungen, private APN-Unterstützung für maximale Datensicherheit.',
  },
];

export default function Connectivity() {
  const t = useTranslation();
  return (
    <section className="relative py-32 px-6 bg-bg overflow-hidden">
      {/* Dezentes Satelliten-Hintergrundbild – optimiert AVIF/WebP */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.12]">
        <picture>
          <source srcSet="/images/sateliten.avif" type="image/avif" />
          <source srcSet="/images/sateliten.webp" type="image/webp" />
          <img
            src="/images/sateliten.png"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover object-center"
            loading="lazy"
            decoding="async"
          />
        </picture>
        <div className="absolute inset-0 bg-gradient-to-b from-bg via-transparent to-bg" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-heading text-4xl md:text-6xl font-bold text-center mb-4"
        >
          {t.connectivity.headline}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.4 }}
          className="text-muted text-center mb-20 max-w-2xl mx-auto text-lg"
        >
          {t.connectivity.subline}
        </motion.p>

        {/* Diagonal connector-line modules — alternating left/right with center spine */}
        <div className="relative">
          {/* Vertical center spine line (desktop) */}
          <div
            aria-hidden="true"
            className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/30 to-transparent -translate-x-1/2"
          />

          <ul className="space-y-12 md:space-y-20">
            {features.map((f, i) => {
              const isRight = i % 2 === 1;
              return (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{
                    duration: 0.45,
                    delay: i * 0.08,
                    ease: [0.25, 0.4, 0.25, 1],
                  }}
                  className="relative md:grid md:grid-cols-2 md:gap-12 items-center"
                >
                  {/* Connector node on spine */}
                  <div
                    aria-hidden="true"
                    className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
                  >
                    <div
                      className={`w-3 h-3 rounded-full ring-4 ${
                        f.accent
                          ? 'bg-primary ring-primary/15'
                          : 'bg-primary/70 ring-primary/10'
                      }`}
                    />
                  </div>

                  {/* Diagonal connector segment */}
                  <div
                    aria-hidden="true"
                    className={`hidden md:block absolute top-1/2 h-px bg-gradient-to-r from-primary/40 to-transparent ${
                      isRight
                        ? 'left-1/2 w-[8%] -translate-y-1/2'
                        : 'right-1/2 w-[8%] -translate-y-1/2 bg-gradient-to-l'
                    }`}
                  />

                  {/* Content cell */}
                  <div
                    className={`${
                      isRight ? 'md:col-start-2 md:pl-[10%]' : 'md:pr-[10%]'
                    }`}
                  >
                    <div
                      className={`flex items-start gap-5 ${
                        isRight ? 'md:flex-row' : 'md:flex-row-reverse md:text-right'
                      }`}
                    >
                      <div
                        className={`flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 ${
                          f.accent
                            ? 'bg-primary/15 shadow-[0_0_24px_rgba(0,196,255,0.15)]'
                            : 'bg-primary/10'
                        }`}
                      >
                        <f.icon size={26} className="text-primary" />
                      </div>
                      <div className="min-w-0">
                        <h3 className="font-heading text-lg md:text-xl font-bold mb-2">
                          {f.title}
                        </h3>
                        <p className="text-muted text-[15px] leading-relaxed">
                          {f.text}
                        </p>
                        {f.link && (
                          <a
                            href={f.link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 mt-3 text-primary text-sm font-medium hover:underline"
                          >
                            {f.link.label}
                            <span aria-hidden="true">&rarr;</span>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Empty placeholder cell for grid alignment */}
                  <div className="hidden md:block" />
                </motion.li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
