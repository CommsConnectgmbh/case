'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguageStore } from '@/lib/i18n/language-store';
import type { Language } from '@/lib/i18n/translations';
import { Globe } from 'lucide-react';

const languages: { code: Language; label: string }[] = [
  { code: 'de', label: 'Deutsch' },
  { code: 'en', label: 'English' },
  { code: 'fr', label: 'Français' },
  { code: 'es', label: 'Español' },
  { code: 'it', label: 'Italiano' },
];

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguageStore();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full text-[12px] font-medium
                   text-muted/70 hover:text-white
                   bg-white/[0.04] hover:bg-white/[0.08]
                   border border-white/[0.06] hover:border-white/[0.12]
                   backdrop-blur-md transition-all duration-300 cursor-pointer"
        aria-label="Select language"
      >
        <Globe className="w-3.5 h-3.5 opacity-50" />
        <span className="uppercase tracking-wide">{language}</span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -4, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -4, scale: 0.96 }}
            transition={{ duration: 0.15, ease: 'easeOut' }}
            className="absolute right-0 top-full mt-2 min-w-[160px] py-1.5
                       rounded-xl overflow-hidden
                       bg-[#1a1a1e]/90 backdrop-blur-2xl
                       border border-white/[0.08]
                       shadow-2xl shadow-black/40"
          >
            {languages.map(({ code, label }) => (
              <button
                key={code}
                onClick={() => {
                  setLanguage(code);
                  setOpen(false);
                }}
                className={`w-full flex items-center justify-between px-4 py-2.5 text-[13px]
                            transition-all duration-200 cursor-pointer
                            ${
                              code === language
                                ? 'text-white bg-white/[0.06]'
                                : 'text-muted/60 hover:text-white hover:bg-white/[0.04]'
                            }`}
              >
                <span>{label}</span>
                <span className="uppercase text-[11px] tracking-wider opacity-40 font-mono">
                  {code}
                </span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
