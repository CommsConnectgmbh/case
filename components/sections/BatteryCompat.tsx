'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useTranslation } from '@/lib/i18n';

const brands = [
  'Bosch Professional', 'Dewalt', 'Milwaukee', 'Makita',
  'Festool', 'Metabo CAS', 'Einhell', 'Hikoki', 'Fein',
];

export default function BatteryCompat() {
  const t = useTranslation();
  return (
    <section className="py-32 px-6 bg-surface/50 overflow-hidden">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-heading text-4xl md:text-6xl font-bold mb-4"
        >
          {t.batteryCompat.headline}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-muted mb-16 max-w-xl mx-auto text-lg"
        >
          {t.batteryCompat.subline}
        </motion.p>

        {/* Circular brand arrangement around product image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
          className="relative mx-auto mb-16 w-[320px] h-[320px] sm:w-[420px] sm:h-[420px] md:w-[520px] md:h-[520px] lg:w-[600px] lg:h-[600px]"
        >
          {/* Center image */}
          <div className="absolute inset-[60px] sm:inset-[80px] md:inset-[100px] lg:inset-[115px] rounded-full overflow-hidden border-2 border-white/[0.08] bg-black/40 shadow-[0_0_80px_rgba(0,196,255,0.08)]">
            <Image
              src="/images/adapters-overview.png"
              alt="9 Brennenstuhl Markenadapter – Kompatibel mit Bosch, Dewalt, Milwaukee, Makita, Festool, Metabo CAS, Einhell, Hikoki und Fein"
              width={600}
              height={600}
              className="w-full h-full object-cover scale-125"
              quality={90}
            />
          </div>

          {/* Orbit ring */}
          <div className="absolute inset-0 rounded-full border border-white/[0.06]" />

          {/* Brand nodes arranged in a circle */}
          {brands.map((b, i) => {
            const angle = (i * 360) / brands.length - 90; // start from top
            const rad = (angle * Math.PI) / 180;
            // Position on the circle edge (50% radius)
            const x = 50 + 46 * Math.cos(rad);
            const y = 50 + 46 * Math.sin(rad);

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.5 + i * 0.08,
                  duration: 0.5,
                  type: 'spring',
                  stiffness: 200,
                  damping: 15,
                }}
                whileHover={{ scale: 1.15, zIndex: 10 }}
                className="absolute -translate-x-1/2 -translate-y-1/2"
                style={{ left: `${x}%`, top: `${y}%` }}
              >
                <div className="px-3 py-1.5 sm:px-4 sm:py-2 md:px-5 md:py-2.5 rounded-full text-[10px] sm:text-xs md:text-sm font-semibold bg-black/80 backdrop-blur-sm border border-white/[0.12] shadow-[0_0_20px_rgba(0,0,0,0.5)] whitespace-nowrap cursor-default hover:border-primary/40 hover:shadow-[0_0_20px_rgba(0,196,255,0.15)] transition-all duration-300">
                  {b}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-muted text-sm mb-10"
        >
          {t.batteryCompat.note}
        </motion.p>

        <motion.a
          href="#shop"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex px-8 py-3 bg-white text-black font-medium rounded-full text-[15px] hover:bg-white/90 transition-colors duration-300"
        >
          {t.batteryCompat.ctaButton}
        </motion.a>
      </div>
    </section>
  );
}
