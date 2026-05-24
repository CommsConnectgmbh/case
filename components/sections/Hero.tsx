'use client';

import { motion } from 'framer-motion';
import { ChevronDown, ArrowRight, FileText } from 'lucide-react';
import { useTranslation } from '@/lib/i18n';
import IndustrialShader from '@/components/ui/IndustrialShader';
import SignalDiagram from '@/components/ui/SignalDiagram';

export default function Hero() {
  const t = useTranslation();
  const h = t.hero;

  // Fallback-safe accessors — new optional keys + legacy keys.
  const eyebrow = h.eyebrow ?? '5G Industrie-Konnektivität · Plug & Play';
  const headline1 = h.headlineLine1;
  const headline2 = h.headlineLine2;
  const subhead = h.subhead ?? h.subline;
  const ctaPrimary = h.ctaDemo ?? h.ctaBuy;
  const ctaSecondary = h.ctaDatasheet ?? h.ctaMore;
  const statSetup = h.statSetup ?? '< 60 s';
  const statSetupLabel = h.statSetupLabel ?? 'Setup';
  const statUptime = h.statUptime ?? '99,9 %';
  const statUptimeLabel = h.statUptimeLabel ?? 'Uptime';
  const statRange = h.statRange ?? '500 m';
  const statRangeLabel = h.statRangeLabel ?? 'Reichweite';

  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden min-h-[100svh] flex items-center"
    >
      {/* ── WebGL background ──────────────────────────────────────────── */}
      <div className="absolute inset-0 -z-10">
        <IndustrialShader />
        {/* Readability overlay — keeps text crisp on light shader frames */}
        <div className="absolute inset-0 bg-gradient-to-br from-bg/80 via-bg/55 to-bg/85" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,transparent_0%,rgba(10,10,10,0.45)_70%)]" />
      </div>

      {/* ── Content grid ─────────────────────────────────────────────── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-32 pb-24 md:pt-36 md:pb-28">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left: copy */}
          <div className="lg:col-span-7">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-cta/30 bg-cta/[0.07] backdrop-blur-sm mb-7"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cta opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-cta" />
              </span>
              <span className="text-[11px] md:text-[12px] tracking-[0.14em] uppercase text-cta/95 font-medium">
                {eyebrow}
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.08, ease: [0.25, 0.4, 0.25, 1] }}
              className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-[5.25rem] leading-[0.98] font-bold tracking-tight text-white"
              style={{ textShadow: '0 2px 40px rgba(0,0,0,0.55)' }}
            >
              <span className="block">{headline1}</span>
              <span className="block bg-gradient-to-r from-white via-cta to-cta/70 bg-clip-text text-transparent">
                {headline2}
              </span>
            </motion.h1>

            {/* Subhead */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.22, ease: [0.25, 0.4, 0.25, 1] }}
              className="mt-6 max-w-xl text-[15px] md:text-[17px] leading-relaxed text-white/75"
            >
              {subhead}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.34, ease: [0.25, 0.4, 0.25, 1] }}
              className="mt-9 flex flex-col sm:flex-row gap-3"
            >
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-cta text-white font-medium rounded-full text-[14.5px] hover:bg-cta/90 transition-all duration-300 shadow-[0_8px_30px_-8px_rgba(255,107,53,0.55)] hover:shadow-[0_10px_40px_-6px_rgba(255,107,53,0.75)]"
              >
                {ctaPrimary}
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5" />
              </a>
              <a
                href="#techspecs"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-white/15 bg-white/[0.03] text-white font-medium rounded-full text-[14.5px] hover:bg-white/[0.08] hover:border-white/25 transition-all duration-300 backdrop-blur-sm"
              >
                <FileText size={15} className="opacity-80" />
                {ctaSecondary}
              </a>
            </motion.div>

            {/* Stats strip */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
              className="mt-12 grid grid-cols-3 max-w-md gap-px bg-white/10 rounded-xl overflow-hidden border border-white/10 backdrop-blur-md"
            >
              {[
                { v: statSetup, l: statSetupLabel },
                { v: statUptime, l: statUptimeLabel },
                { v: statRange, l: statRangeLabel },
              ].map((s, i) => (
                <div
                  key={i}
                  className="bg-bg/55 px-4 py-3.5 text-center"
                >
                  <div className="font-heading text-xl md:text-2xl font-semibold text-white tabular-nums">
                    {s.v}
                  </div>
                  <div className="mt-0.5 text-[10.5px] md:text-[11px] uppercase tracking-[0.12em] text-muted/80">
                    {s.l}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: signal diagram */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-2xl border border-white/8 bg-white/[0.025] backdrop-blur-xl p-6 md:p-8 overflow-hidden">
              {/* corner glow */}
              <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-cta/15 blur-3xl pointer-events-none" />
              <div className="absolute -bottom-12 -left-12 w-40 h-40 rounded-full bg-[#3A6A8C]/20 blur-3xl pointer-events-none" />

              {/* status header */}
              <div className="flex items-center justify-between mb-4 relative">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                  </span>
                  <span className="text-[11px] uppercase tracking-[0.14em] text-emerald-300/90 font-medium">
                    Live
                  </span>
                </div>
                <span className="font-mono text-[10.5px] text-muted/80">
                  PORT-01 · 5G-NSA
                </span>
              </div>

              <SignalDiagram />

              {/* footer telemetry */}
              <div className="mt-5 grid grid-cols-3 text-center relative">
                <div>
                  <div className="font-mono text-[11px] text-white/85">12 ms</div>
                  <div className="text-[9.5px] uppercase tracking-[0.12em] text-muted/70 mt-0.5">Latenz</div>
                </div>
                <div className="border-x border-white/8">
                  <div className="font-mono text-[11px] text-white/85">↓ 940 Mbps</div>
                  <div className="text-[9.5px] uppercase tracking-[0.12em] text-muted/70 mt-0.5">Throughput</div>
                </div>
                <div>
                  <div className="font-mono text-[11px] text-white/85">8 / 64</div>
                  <div className="text-[9.5px] uppercase tracking-[0.12em] text-muted/70 mt-0.5">Devices</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-5 left-1/2 -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={22} className="text-white/35" />
        </motion.div>
      </motion.div>
    </section>
  );
}
