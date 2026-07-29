'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { FAQS } from './faq-data';

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="bg-bg py-24 sm:py-32 px-6 border-t border-white/[0.06]">
      <div className="max-w-3xl mx-auto">
        <p className="text-xs font-medium tracking-[0.18em] uppercase text-primary mb-3">
          Häufige Fragen
        </p>
        <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight mb-4">
          Was Kunden vor dem Kauf wissen wollen.
        </h2>
        <p className="text-muted/80 leading-relaxed mb-12">
          Acht typische Fragen zum 5G-Koffer von Case-Connect — Multi-Carrier, IP67, Plug &
          Play in unter 60 Sekunden. Mehr Details auf Anfrage über{' '}
          <a href="mailto:info@case-connect.de" className="text-primary underline">
            info@case-connect.de
          </a>
          .
        </p>

        <ul className="space-y-1">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <li
                key={f.q}
                className="border-b border-white/[0.08] first:border-t first:border-white/[0.08]"
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-${i}`}
                  className="w-full text-left flex items-start justify-between gap-4 py-5 hover:text-primary transition-colors"
                >
                  <span className="font-heading text-lg font-semibold tracking-tight">
                    {f.q}
                  </span>
                  <ChevronDown
                    size={20}
                    className={`mt-1 flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-primary' : 'text-muted/60'
                    }`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-${i}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeOut' }}
                      className="overflow-hidden"
                    >
                      <p className="pb-5 pr-8 text-muted/85 leading-relaxed">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
