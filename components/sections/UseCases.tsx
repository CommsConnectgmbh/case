'use client';

import { motion } from 'framer-motion';
import { Building2, CalendarDays, Wrench, ShieldAlert, MapPin, Cpu } from 'lucide-react';
import { useTranslation } from '@/lib/i18n';

const caseIcons = [Building2, CalendarDays, Wrench, ShieldAlert, MapPin, Cpu];

export default function UseCases() {
  const t = useTranslation();
  return (
    <section id="usecases" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-heading text-4xl md:text-6xl font-bold text-center mb-6"
        >
          {t.useCases.headline}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-muted text-center mb-20 max-w-xl mx-auto text-lg"
        >
          {t.useCases.subline}
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {t.useCases.cases.map((c, i) => {
            const Icon = caseIcons[i];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.7, delay: i * 0.08, ease: [0.25, 0.4, 0.25, 1] }}
                whileHover={{ y: -4, transition: { duration: 0.3 } }}
                className="group relative rounded-3xl p-8 bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.06] hover:border-primary/20 transition-all duration-500 cursor-default"
              >
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/15 transition-colors duration-500">
                  <Icon size={22} className="text-primary" />
                </div>
                <h3 className="font-heading text-lg font-bold mb-2">{c.title}</h3>
                <p className="text-muted text-[15px] leading-relaxed">{c.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
