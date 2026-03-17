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
          className="text-muted mb-12 max-w-xl mx-auto text-lg"
        >
          {t.batteryCompat.subline}
        </motion.p>

        {/* Brennenstuhl Multi Battery System Image */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
          className="relative mx-auto mb-16 rounded-3xl overflow-hidden border border-white/[0.06]"
        >
          <Image
            src="/images/adapters-overview.png"
            alt="9 Brennenstuhl Markenadapter – Kompatibel mit Bosch, Dewalt, Milwaukee, Makita, Festool, Metabo CAS, Einhell, Hikoki und Fein"
            width={1200}
            height={600}
            className="w-full h-auto"
            quality={90}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {brands.map((b, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + i * 0.06, duration: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(0, 196, 255, 0.1)', borderColor: 'rgba(0, 196, 255, 0.3)' }}
              className="px-6 py-3 rounded-full text-sm font-medium bg-white/[0.03] border border-white/[0.08] transition-colors duration-300 cursor-default"
            >
              {b}
            </motion.span>
          ))}
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
