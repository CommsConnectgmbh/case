'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, Play } from 'lucide-react';
import { useTranslation } from '@/lib/i18n';
import IndustrialShader from '@/components/ui/IndustrialShader';

export default function Hero() {
  const t = useTranslation();
  const h = t.hero;
  const reduce = useReducedMotion();

  const eyebrow = h.eyebrow ?? '5G Industrie-Konnektivität · Plug & Play';
  const headline1 = h.headlineLine1;
  const headline2 = h.headlineLine2;
  const subhead = h.subhead ?? h.subline;
  const ctaPrimary = h.ctaDemo ?? h.ctaBuy;
  const ctaSecondary = h.ctaDatasheet ?? h.ctaMore;

  const year = 2026;

  const reveal = (delay: number) => ({
    initial: reduce ? false : { y: '105%' },
    animate: { y: 0 },
    transition: { duration: 1, delay, ease: [0.2, 0.65, 0.2, 0.95] as const },
  });

  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden min-h-[100svh] flex flex-col"
    >
      {/* WebGL background + readability gradients */}
      <div className="absolute inset-0 -z-10">
        <IndustrialShader />
        <div className="absolute inset-0 bg-gradient-to-b from-bg/60 via-bg/35 to-bg/95" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_72%_22%,transparent_0%,rgba(10,10,10,0.55)_72%)]" />
      </div>

      {/* Top chrome: eyebrow + chapter marker */}
      <div className="relative z-10 w-full max-w-[1500px] mx-auto px-6 md:px-10 pt-28 md:pt-32 flex items-start justify-between gap-6">
        <motion.div
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
          className="font-mono text-[10.5px] md:text-[11.5px] uppercase tracking-[0.22em] text-white/60 max-w-[60%]"
        >
          <span className="text-cta">●</span>
          <span className="ml-2">{eyebrow}</span>
        </motion.div>

        <motion.div
          aria-hidden
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 0.16, y: 0 }}
          transition={{ duration: 1.2, delay: 0.15, ease: [0.25, 0.4, 0.25, 1] }}
          className="font-heading tabular-nums text-white font-bold select-none -mt-3 md:-mt-6"
          style={{
            fontSize: 'clamp(56px, 11vw, 152px)',
            lineHeight: 0.9,
            letterSpacing: '-0.04em',
          }}
        >
          01.
        </motion.div>
      </div>

      {/* Headline anchored toward lower-half */}
      <div className="relative z-10 flex-1 w-full max-w-[1500px] mx-auto px-6 md:px-10 flex items-end pb-40 md:pb-44">
        <div className="w-full">
          <h1
            className="font-heading text-white font-bold tracking-tight"
            style={{
              fontSize: 'clamp(48px, 9.2vw, 156px)',
              lineHeight: 0.88,
              letterSpacing: '-0.035em',
            }}
          >
            <span className="block overflow-hidden pb-[0.06em]">
              <motion.span className="block" {...reveal(0.15)}>
                {headline1}
              </motion.span>
            </span>
            <span className="block overflow-hidden pb-[0.06em] text-cta">
              <motion.span className="block" {...reveal(0.28)}>
                {headline2}
              </motion.span>
            </span>
          </h1>

          {/* Subhead + CTAs */}
          <div className="mt-10 md:mt-14 grid md:grid-cols-12 gap-8 md:gap-10 items-end">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.55, ease: [0.25, 0.4, 0.25, 1] }}
              className="md:col-span-6 lg:col-span-5 text-[15px] md:text-[16.5px] leading-relaxed text-white/65 max-w-md"
            >
              {subhead}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
              className="md:col-span-6 lg:col-span-7 flex flex-col sm:flex-row md:justify-end items-start sm:items-center gap-5 sm:gap-8"
            >
              <a
                href="#kontakt"
                className="group inline-flex items-center gap-3 px-7 py-4 bg-white text-bg font-medium rounded-full text-[13px] tracking-[0.06em] uppercase hover:bg-cta hover:text-white transition-colors duration-500"
              >
                {ctaPrimary}
                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-500 group-hover:rotate-45"
                />
              </a>
              <a
                href="#technik"
                className="group inline-flex items-center gap-2 text-[12px] tracking-[0.18em] uppercase text-white/75 hover:text-white transition-colors"
              >
                <span className="border-b border-white/30 group-hover:border-white pb-0.5">
                  {ctaSecondary}
                </span>
                <ArrowUpRight
                  size={14}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom editorial chrome */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.95, ease: [0.25, 0.4, 0.25, 1] }}
        className="relative z-10 w-full max-w-[1500px] mx-auto px-6 md:px-10 pb-6 md:pb-9 flex items-end justify-between gap-6"
      >
        <div className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-white/45">
          © {year} · Case Connect
        </div>

        <a
          href="#launch"
          className="hidden md:flex items-center gap-3 group"
          aria-label="Scroll to video"
        >
          <span className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-white/55 group-hover:text-white transition-colors">
            Scroll
          </span>
          <span className="relative block h-px w-32 lg:w-48 bg-white/15 overflow-hidden">
            <span className="absolute inset-y-0 left-0 w-1/3 bg-white/65 group-hover:w-full transition-[width] duration-700" />
          </span>
        </a>

        <a
          href="#launch"
          className="group inline-flex items-center gap-2.5 font-mono text-[10.5px] uppercase tracking-[0.22em] text-white/80 hover:text-cta transition-colors"
        >
          <span className="inline-flex items-center justify-center w-7 h-7 rounded-full border border-white/30 group-hover:border-cta transition-colors">
            <Play size={9} className="ml-px fill-current" />
          </span>
          Watch Video
        </a>
      </motion.div>
    </section>
  );
}
