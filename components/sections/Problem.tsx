'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { Building2, CalendarDays, ShieldAlert } from 'lucide-react';
import { useTranslation } from '@/lib/i18n';

function AnimatedCounter({ target, prefix = '', suffix = '' }: { target: number; prefix?: string; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const duration = 2500;
    const startTime = performance.now();

    function animate(currentTime: number) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(animate);
    }
    requestAnimationFrame(animate);
  }, [isInView, target]);

  return <span ref={ref}>{prefix}{count}{suffix}</span>;
}

function RevealText({ children, className = '' }: { children: string; className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const words = children.split(' ');

  return (
    <span ref={ref} className={className}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden mr-[0.25em]">
          <motion.span
            className="inline-block"
            initial={{ y: '100%' }}
            animate={isInView ? { y: 0 } : { y: '100%' }}
            transition={{ duration: 0.5, delay: i * 0.04, ease: [0.25, 0.4, 0.25, 1] }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

const cardIcons = [Building2, CalendarDays, ShieldAlert];

export default function Problem() {
  const t = useTranslation();
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ['-5%', '5%']);

  return (
    <section id="problem" ref={sectionRef} className="relative py-32 px-6 overflow-hidden">
      {/* Subtle background gradient movement */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent pointer-events-none"
      />

      <div className="max-w-7xl mx-auto relative">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-primary text-xs font-medium tracking-[0.2em] uppercase mb-6"
        >
          Das Problem
        </motion.p>

        <h2 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold mb-20 leading-[1.1]">
          <RevealText>{t.problem.headline}</RevealText>
        </h2>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24">
          {t.problem.stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.15, ease: [0.25, 0.4, 0.25, 1] }}
              className="text-center"
            >
              <div className="font-heading text-6xl md:text-7xl font-bold text-primary mb-3 tabular-nums">
                <AnimatedCounter target={s.value} suffix={s.suffix} />
              </div>
              <div className="text-base font-medium mb-1">{s.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {t.problem.cards.map((c, i) => {
            const Icon = cardIcons[i];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.12, ease: [0.25, 0.4, 0.25, 1] }}
                className="group relative rounded-3xl p-8 bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.06] hover:border-white/[0.1] transition-all duration-500"
              >
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/15 transition-colors duration-500">
                  <Icon size={24} className="text-primary" />
                </div>
                <h3 className="font-heading text-xl font-bold mb-3">{c.title}</h3>
                <p className="text-muted text-[15px] leading-relaxed">{c.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
