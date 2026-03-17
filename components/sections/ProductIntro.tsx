'use client';

import { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Plug, BatteryCharging, Wifi } from 'lucide-react';
import Image from 'next/image';
import { useTranslation } from '@/lib/i18n';

const featureIcons = [Plug, BatteryCharging, Wifi];

const productImages = [
  { src: '/images/Bild2.png', alt: '5G Case – geschlossen' },
  { src: '/images/Bild5.png', alt: '5G Case – geöffnet mit Zubehör' },
  { src: '/images/Bild6.png', alt: '5G Case – Professional Variante' },
  { src: '/images/bild1.png', alt: '5G Case – Power Button Detail' },
  { src: '/images/Bild3.png', alt: '5G Case – Innenleben' },
  { src: '/images/Bild4.png', alt: '5G Case – Akku-Slot' },
];

export default function ProductIntro() {
  const t = useTranslation();
  const [activeImage, setActiveImage] = useState(0);
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ['8%', '-8%']);

  return (
    <section id="features" ref={sectionRef} className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left: Stacked product gallery */}
          <motion.div
            style={{ y: imageY }}
            className="relative"
          >
            {/* Main active image */}
            <div className="relative rounded-3xl overflow-hidden bg-white border border-white/[0.06] aspect-[4/5]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeImage}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
                  className="absolute inset-0"
                >
                  <Image
                    src={productImages[activeImage].src}
                    alt={productImages[activeImage].alt}
                    fill
                    className="object-contain p-4"
                    quality={90}
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Thumbnail stack row */}
            <div className="flex gap-2 mt-4">
              {productImages.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(i)}
                  className={`relative flex-1 aspect-square rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                    i === activeImage
                      ? 'border-primary/60 bg-white'
                      : 'border-white/20 bg-white hover:border-white/40'
                  }`}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-contain p-1"
                    sizes="80px"
                  />
                  {i === activeImage && (
                    <motion.div
                      layoutId="activeThumb"
                      className="absolute inset-0 border-2 border-primary rounded-xl"
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Glow effect */}
            <div className="absolute -inset-4 bg-primary/5 rounded-3xl blur-3xl -z-10" />
          </motion.div>

          {/* Right: Text + features */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-primary text-xs font-medium tracking-[0.2em] uppercase mb-6"
            >
              {t.productIntro.overline}
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="font-heading text-4xl md:text-6xl font-bold mb-4 leading-[1.1]"
            >
              {t.productIntro.headline}
            </motion.h2>

            <div className="space-y-8 mt-12">
              {t.productIntro.features.map((feature, i) => {
                const Icon = featureIcons[i % featureIcons.length];
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.15, ease: [0.25, 0.4, 0.25, 1] }}
                    className="group flex gap-5"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-white/[0.05] border border-white/[0.08] flex items-center justify-center group-hover:bg-primary/10 group-hover:border-primary/20 transition-all duration-500">
                      <Icon size={22} className="text-muted group-hover:text-primary transition-colors duration-500" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-lg mb-1">{feature}</h3>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
