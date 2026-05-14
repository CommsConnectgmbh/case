'use client';

import { motion } from 'framer-motion';
import { Globe, Settings, Shield, Server } from 'lucide-react';
import { useTranslation } from '@/lib/i18n';

const featureIcons = [Globe, Settings, Shield, Server];

export default function RemoteManagement() {
  const t = useTranslation();
  return (
    <section className="py-32 px-6 bg-surface/50">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-heading text-4xl md:text-6xl font-bold text-center mb-4"
        >
          {t.remoteManagement.headline}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.4 }}
          className="text-muted text-center mb-16 max-w-lg mx-auto text-lg"
        >
          {t.remoteManagement.subline}
        </motion.p>

        {/* Numbered alternating rows — industrial spec-list look */}
        <ol className="divide-y divide-white/[0.06] rounded-3xl overflow-hidden bg-white/[0.02] border border-white/[0.06]">
          {t.remoteManagement.features.map((f, i) => {
            const Icon = featureIcons[i];
            const isOdd = i % 2 === 1;
            return (
              <motion.li
                key={i}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{
                  duration: 0.45,
                  delay: i * 0.07,
                  ease: [0.25, 0.4, 0.25, 1],
                }}
                className={`group grid grid-cols-[auto_1fr_auto] items-center gap-6 px-6 md:px-10 py-7 md:py-9 transition-colors duration-500 hover:bg-white/[0.025] ${
                  isOdd ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Index */}
                <div className="font-heading text-3xl md:text-4xl font-bold text-primary/40 tabular-nums w-10 md:w-14 group-hover:text-primary/70 transition-colors duration-500">
                  {String(i + 1).padStart(2, '0')}
                </div>

                {/* Text */}
                <div className="min-w-0">
                  <h3 className="font-heading text-lg md:text-xl font-bold mb-1">
                    {f.title}
                  </h3>
                  <p className="text-muted text-[15px] leading-relaxed">
                    {f.description}
                  </p>
                </div>

                {/* Icon */}
                <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/15 transition-colors duration-500">
                  <Icon size={24} className="text-primary" />
                </div>
              </motion.li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
