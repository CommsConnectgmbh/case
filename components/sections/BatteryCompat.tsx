'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useTranslation } from '@/lib/i18n';

const brands = [
  { name: 'Bosch Professional', logo: '/images/Bosch.jpg' },
  { name: 'Dewalt', logo: '/images/MILWAUKEE-und-Dewalt.jpg' },
  { name: 'Milwaukee', logo: '/images/MILWAUKEE-und-Dewalt.jpg' },
  { name: 'Makita', logo: '/images/MAKITA.jpg' },
  { name: 'Festool', logo: '/images/Festool.jpg' },
  { name: 'Metabo CAS', logo: '/images/Metabo.jpg' },
  { name: 'Einhell', logo: '/images/einhell.jpg' },
  { name: 'Hikoki', logo: '/images/hikoki.jpg' },
  { name: 'Fein', logo: '/images/fein.jpg' },
];

export default function BatteryCompat() {
  const t = useTranslation();

  return (
    <section className="py-32 md:py-40 px-6 relative overflow-hidden">
      {/* Subtle ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/[0.03] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
        {/* Headline section — Apple-style centered typography */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="text-primary text-xs font-medium tracking-[0.25em] uppercase text-center mb-5"
        >
          Universelle Kompatibilität
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-heading text-4xl sm:text-5xl md:text-7xl font-bold text-center mb-5 leading-[1.05] tracking-tight"
        >
          {t.batteryCompat.headline}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-muted text-center text-lg md:text-xl max-w-2xl mx-auto mb-20 leading-relaxed"
        >
          {t.batteryCompat.subline}
        </motion.p>

        {/* Hero product image — large, centered, breathing room */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 1, ease: [0.25, 0.4, 0.25, 1] }}
          className="relative mx-auto mb-20 max-w-3xl"
        >
          <div
            style={{
              maskImage: 'radial-gradient(ellipse 80% 75% at 50% 45%, black 50%, transparent 100%)',
              WebkitMaskImage: 'radial-gradient(ellipse 80% 75% at 50% 45%, black 50%, transparent 100%)',
            }}
          >
            <Image
              src="/images/adapters-overview.png"
              alt="9 Brennenstuhl Markenadapter – Kompatibel mit Bosch, Dewalt, Milwaukee, Makita, Festool, Metabo CAS, Einhell, Hikoki und Fein"
              width={1200}
              height={800}
              className="w-full h-auto object-contain"
              quality={95}
            />
          </div>
          {/* Soft ambient glow beneath product */}
          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-2/3 h-24 bg-primary/[0.06] blur-[60px] rounded-full" />
        </motion.div>

        {/* Brand grid — clean, minimal cards */}
        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-3 md:gap-4 mb-16">
          {brands.map((brand, i) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.06 + i * 0.035,
                duration: 0.4,
                ease: [0.25, 0.4, 0.25, 1],
              }}
              className="group"
            >
              <div className="relative flex flex-col items-center justify-center aspect-square rounded-2xl bg-white/[0.03] border border-white/[0.06] p-4 transition-all duration-500 hover:bg-white/[0.07] hover:border-white/[0.12] hover:scale-[1.04] hover:shadow-[0_8px_40px_rgba(0,196,255,0.08)] cursor-default">
                {brand.logo ? (
                  <div className="relative w-12 h-12 sm:w-14 sm:h-14 mb-3 rounded-xl overflow-hidden bg-white/90 p-1.5 shadow-sm">
                    <Image
                      src={brand.logo}
                      alt={brand.name}
                      fill
                      className="object-contain"
                      sizes="56px"
                    />
                  </div>
                ) : (
                  <div className="w-12 h-12 sm:w-14 sm:h-14 mb-3 rounded-xl bg-white/[0.06] border border-white/[0.08] flex items-center justify-center">
                    <span className="text-white/40 text-lg font-bold">
                      {brand.name.charAt(0)}
                    </span>
                  </div>
                )}
                <span className="text-[10px] sm:text-[11px] text-white/60 font-medium text-center leading-tight group-hover:text-white/90 transition-colors duration-500">
                  {brand.name}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-white/30 text-xs text-center mb-4 tracking-wide"
        >
          {t.batteryCompat.note}
        </motion.p>

        {/* Markenrechtlicher Disclaimer nach § 23 Nr. 3 MarkenG (Bestimmungsangabe) */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-white/25 text-[10px] text-center mb-10 max-w-3xl mx-auto leading-relaxed px-4"
        >
          Bosch Professional, Dewalt, Milwaukee, Makita, Festool, Metabo CAS, Einhell, Hikoki und Fein
          sind eingetragene Marken ihrer jeweiligen Inhaber. Die hier abgebildeten Adapter werden von der
          Brennenstuhl GmbH &amp; Co. KG hergestellt und vertrieben. Es besteht keine geschäftliche Verbindung
          oder Kooperation zwischen Comms Connect GmbH und den genannten Markeninhabern. Die Markennennung
          erfolgt ausschließlich als Hinweis auf die Bestimmung der Adapter (§ 23 Nr. 3 MarkenG).
        </motion.p>

        {/* CTA — Apple-style pill button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <a
            href="#shop"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-[#0A0A0A] font-semibold rounded-full text-[15px] hover:bg-white/90 active:scale-[0.98] transition-all duration-300 shadow-[0_2px_20px_rgba(255,255,255,0.1)]"
          >
            {t.batteryCompat.ctaButton}
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              className="transition-transform duration-300 group-hover:translate-x-0.5"
            >
              <path
                d="M6 3L11 8L6 13"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
