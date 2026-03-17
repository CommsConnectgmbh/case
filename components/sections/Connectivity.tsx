'use client';

import { motion } from 'framer-motion';
import { Globe, Radio, Satellite, Shield } from 'lucide-react';
import Image from 'next/image';
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
      {/* Dezentes Satelliten-Hintergrundbild */}
      <div className="absolute inset-0 pointer-events-none">
        <Image
          src="/images/sateliten.png"
          alt=""
          fill
          className="object-cover object-center opacity-[0.15]"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-bg via-transparent to-bg" />
      </div>
      <div className="relative max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-heading text-4xl md:text-6xl font-bold text-center mb-4"
        >
          {t.connectivity.headline}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-muted text-center mb-20 max-w-2xl mx-auto text-lg"
        >
          {t.connectivity.subline}
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: i * 0.1,
                ease: [0.25, 0.4, 0.25, 1],
              }}
              whileHover={{ y: -4, transition: { duration: 0.3 } }}
              className={`group relative rounded-3xl p-8 border transition-all duration-500 ${
                f.accent
                  ? 'bg-primary/[0.06] border-primary/20 hover:border-primary/40'
                  : 'bg-white/[0.03] border-white/[0.06] hover:border-primary/20'
              }`}
            >
              {/* Subtle glow for accent card */}
              {f.accent && (
                <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-primary/10 via-transparent to-transparent pointer-events-none" />
              )}

              <div className="relative">
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-all duration-500 ${
                    f.accent
                      ? 'bg-primary/15 group-hover:bg-primary/20 group-hover:shadow-[0_0_24px_rgba(0,196,255,0.15)]'
                      : 'bg-primary/10 group-hover:bg-primary/15 group-hover:shadow-[0_0_20px_rgba(0,196,255,0.1)]'
                  }`}
                >
                  <f.icon size={26} className="text-primary" />
                </div>
                <h3 className="font-heading text-lg font-bold mb-2">
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
                    className="inline-flex items-center gap-1 mt-4 text-primary text-sm font-medium hover:underline"
                  >
                    {f.link.label}
                    <span aria-hidden="true">&rarr;</span>
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
