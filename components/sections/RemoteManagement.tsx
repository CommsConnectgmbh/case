'use client';

import { motion } from 'framer-motion';
import { Globe, Settings, Shield, Server } from 'lucide-react';
import { useTranslation } from '@/lib/i18n';

const featureIcons = [Globe, Settings, Shield, Server];

export default function RemoteManagement() {
  const t = useTranslation();
  return (
    <section className="py-32 px-6 bg-surface/50">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-heading text-4xl md:text-6xl font-bold text-center mb-4"
        >
          {t.remoteManagement.headline}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-muted text-center mb-20 max-w-lg mx-auto text-lg"
        >
          {t.remoteManagement.subline}
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {t.remoteManagement.features.map((f, i) => {
            const Icon = featureIcons[i];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.1, ease: [0.25, 0.4, 0.25, 1] }}
                whileHover={{ y: -4, transition: { duration: 0.3 } }}
                className="group relative rounded-3xl p-8 bg-white/[0.03] border border-white/[0.06] hover:border-primary/20 transition-all duration-500 text-center"
              >
                <div className="w-14 h-14 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/15 group-hover:shadow-[0_0_20px_rgba(0,196,255,0.1)] transition-all duration-500">
                  <Icon size={26} className="text-primary" />
                </div>
                <h3 className="font-heading text-lg font-bold mb-2">{f.title}</h3>
                <p className="text-muted text-[15px]">{f.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
