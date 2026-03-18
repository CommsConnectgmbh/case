'use client';

import { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';
import { useTranslation } from '@/lib/i18n';

export default function Hero() {
  const t = useTranslation();
  const ref = useRef(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);
  const imageOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.5], [0, 100]);

  return (
    <section ref={ref} className="relative h-[120vh] w-full overflow-hidden">
      {/* Video background */}
      <motion.div
        style={{ scale: imageScale, opacity: imageOpacity }}
        className="absolute inset-0 h-screen w-full sticky top-0"
      >
        {/* Fallback image while video loads */}
        <Image
          src="/images/hero-bg.png"
          alt="5G Case by Comms Connect – Kein Netz? Unser Problem."
          fill
          className={`object-cover object-center transition-opacity duration-1000 ${videoLoaded ? 'opacity-0' : 'opacity-100'}`}
          priority
          quality={90}
        />

        {/* Launch video */}
        <video
          ref={videoRef}
          src="/videos/launch-video.mp4"
          autoPlay
          muted
          loop
          playsInline
          onCanPlay={() => setVideoLoaded(true)}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${videoLoaded ? 'opacity-100' : 'opacity-0'}`}
        />

        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/30" />
      </motion.div>

      {/* Headline overlay */}
      <div className="absolute inset-0 h-screen w-full sticky top-0 flex items-center justify-center z-[5] pointer-events-none">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
          className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-white text-center px-6 drop-shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
          style={{ textShadow: '0 2px 40px rgba(0,0,0,0.6)' }}
        >
          <span className="block">{t.hero.headlineLine1}</span>
          <span className="block">{t.hero.headlineLine2}</span>
        </motion.h1>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-[40vh] bg-gradient-to-t from-bg via-bg/60 to-transparent pointer-events-none" />

      {/* CTAs at bottom */}
      <motion.div
        style={{ y: contentY }}
        className="absolute bottom-[15vh] left-0 right-0 z-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
          className="text-center px-6"
        >
          <p className="text-[15px] md:text-lg text-white/70 mb-8 max-w-xl mx-auto tracking-wide">
            {t.hero.subline}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#shop"
              className="px-8 py-3 bg-cta text-white font-medium rounded-full text-[15px] hover:bg-cta/90 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,107,53,0.3)]"
            >
              {t.hero.ctaBuy}
            </a>
            <a
              href="#problem"
              className="px-8 py-3 border border-white/20 text-white font-medium rounded-full text-[15px] hover:bg-white/10 transition-all duration-300"
            >
              {t.hero.ctaMore}
            </a>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={24} className="text-white/40" />
        </motion.div>
      </motion.div>
    </section>
  );
}
