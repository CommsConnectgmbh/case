'use client';

import { motion } from 'framer-motion';
import { useTranslation } from '@/lib/i18n';

export default function HowItWorks() {
  const t = useTranslation();
  return (
    <section className="py-32 px-6 bg-surface/50">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-heading text-4xl md:text-6xl font-bold text-center mb-24"
        >
          {t.howItWorks.headline}
        </motion.h2>

        <div className="space-y-20">
          {t.howItWorks.steps.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
              className="grid grid-cols-1 md:grid-cols-[120px_1fr] gap-6 md:gap-12 items-start"
            >
              <div className="font-heading text-8xl md:text-9xl font-bold text-primary/10 leading-none">
                {String(i + 1).padStart(2, '0')}
              </div>
              <div className="md:pt-4">
                <h3 className="font-heading text-2xl md:text-3xl font-bold mb-4">{s.title}</h3>
                <p className="text-muted text-lg leading-relaxed max-w-lg">{s.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
