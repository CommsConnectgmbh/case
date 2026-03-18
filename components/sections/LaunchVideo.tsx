'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX, Maximize } from 'lucide-react';

export default function LaunchVideo() {
  const ref = useRef(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      // On mobile, go fullscreen automatically
      const isMobile = window.innerWidth < 768;
      if (isMobile && videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen().catch(() => {});
      } else if (isMobile && (videoRef.current as HTMLVideoElement & { webkitEnterFullscreen?: () => void }).webkitEnterFullscreen) {
        (videoRef.current as HTMLVideoElement & { webkitEnterFullscreen: () => void }).webkitEnterFullscreen();
      }
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const goFullscreen = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen().catch(() => {});
    } else if ((videoRef.current as HTMLVideoElement & { webkitEnterFullscreen?: () => void }).webkitEnterFullscreen) {
      (videoRef.current as HTMLVideoElement & { webkitEnterFullscreen: () => void }).webkitEnterFullscreen();
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
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
          className="relative rounded-2xl overflow-hidden shadow-[0_0_80px_rgba(0,0,0,0.5)] border border-white/5 cursor-pointer group"
          onClick={togglePlay}
        >
          {/* Video element — paused by default, shows first frame as poster */}
          <video
            ref={videoRef}
            src="/videos/launch-video.mp4"
            playsInline
            preload="metadata"
            onEnded={() => setIsPlaying(false)}
            className="w-full aspect-video object-cover"
          />

          {/* Play overlay — visible when paused */}
          {!isPlaying && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/30">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-white/20 transition-all duration-300">
                <Play size={32} className="text-white ml-1" fill="white" />
              </div>
            </div>
          )}

          {/* Pause hint — subtle, shows on hover when playing */}
          {isPlaying && (
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="w-16 h-16 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center">
                <Pause size={28} className="text-white" />
              </div>
            </div>
          )}

          {/* Controls — visible when playing */}
          {isPlaying && (
            <div className="absolute top-4 right-4 flex gap-2 z-10">
              <button
                onClick={toggleMute}
                className="p-3 rounded-full bg-black/40 backdrop-blur-sm border border-white/10 text-white/70 hover:text-white hover:bg-black/60 transition-all duration-300"
                aria-label={isMuted ? 'Ton einschalten' : 'Ton ausschalten'}
              >
                {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
              </button>
              <button
                onClick={goFullscreen}
                className="p-3 rounded-full bg-black/40 backdrop-blur-sm border border-white/10 text-white/70 hover:text-white hover:bg-black/60 transition-all duration-300 hidden md:flex items-center justify-center"
                aria-label="Vollbild"
              >
                <Maximize size={18} />
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
