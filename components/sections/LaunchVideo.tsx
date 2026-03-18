'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Play, Volume2, VolumeX } from 'lucide-react';

export default function LaunchVideo() {
  const ref = useRef(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.muted = false;
      setIsMuted(false);
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <section ref={ref} className="relative py-20 md:py-32 bg-bg">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-white mb-4">
            Plug. Play. Perform.
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Erlebe den 5G Case in Aktion – mobile Konnektivität ohne Kompromisse.
          </p>
        </motion.div>

        {/* Video container */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.4, 0.25, 1] }}
          className="relative rounded-2xl overflow-hidden shadow-[0_0_80px_rgba(0,0,0,0.5)] border border-white/5"
        >
          {/* Video element */}
          <video
            ref={videoRef}
            src="/videos/launch-video.mp4"
            muted
            playsInline
            autoPlay
            loop
            onPlay={() => setIsPlaying(true)}
            className="w-full aspect-video object-cover"
          />

          {/* Play button overlay — shows when muted/autoplay */}
          {isMuted && (
            <motion.button
              onClick={handlePlay}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors duration-300 cursor-pointer group"
            >
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-white/20 transition-all duration-300">
                <Play size={32} className="text-white ml-1" fill="white" />
              </div>
              <span className="absolute bottom-8 text-white/60 text-sm tracking-wider">
                MIT TON ABSPIELEN
              </span>
            </motion.button>
          )}

          {/* Mute toggle — visible when unmuted */}
          {!isMuted && (
            <button
              onClick={toggleMute}
              className="absolute top-4 right-4 p-3 rounded-full bg-black/40 backdrop-blur-sm border border-white/10 text-white/70 hover:text-white hover:bg-black/60 transition-all duration-300 z-10"
              aria-label="Ton ausschalten"
            >
              <Volume2 size={18} />
            </button>
          )}
        </motion.div>
      </div>
    </section>
  );
}
