"use client";

import { motion } from "framer-motion";

/**
 * Industrial signal-flow diagram: Case (left) emits 5G arcs to three
 * device nodes (right) — machine, sensor, laptop. Pure SVG, no images,
 * brand-consistent (amber + steel-blue), accessible (aria-hidden=false
 * with descriptive title).
 */
export default function SignalDiagram() {
  return (
    <div className="relative w-full max-w-md mx-auto select-none">
      <svg
        viewBox="0 0 480 360"
        className="w-full h-auto"
        role="img"
        aria-labelledby="signal-diagram-title"
      >
        <title id="signal-diagram-title">
          5G Case verbindet Maschinen, Sensoren und Endgeräte
        </title>

        <defs>
          <linearGradient id="caseGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FF8A4C" />
            <stop offset="100%" stopColor="#D9491A" />
          </linearGradient>
          <linearGradient id="deviceGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#5C8AA8" />
            <stop offset="100%" stopColor="#2C4A60" />
          </linearGradient>
          <radialGradient id="pulse" cx="0.5" cy="0.5" r="0.5">
            <stop offset="0%" stopColor="#FF6B35" stopOpacity="0.45" />
            <stop offset="60%" stopColor="#FF6B35" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#FF6B35" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Faint grid backdrop */}
        <g opacity="0.08" stroke="#7FAACB" strokeWidth="0.5">
          {Array.from({ length: 9 }).map((_, i) => (
            <line key={`h${i}`} x1="0" y1={i * 45} x2="480" y2={i * 45} />
          ))}
          {Array.from({ length: 11 }).map((_, i) => (
            <line key={`v${i}`} x1={i * 48} y1="0" x2={i * 48} y2="360" />
          ))}
        </g>

        {/* === Case (left) === */}
        <g transform="translate(60 140)">
          {/* Pulse ring */}
          <motion.circle
            cx="50"
            cy="40"
            r="60"
            fill="url(#pulse)"
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: [0.85, 1.55, 0.85], opacity: [0, 0.85, 0] }}
            transition={{ duration: 3.2, repeat: Infinity, ease: "easeOut" }}
            style={{ transformOrigin: "50px 40px" }}
          />
          {/* Trolley body */}
          <rect x="0" y="0" width="100" height="80" rx="8" fill="url(#caseGrad)" />
          <rect x="0" y="0" width="100" height="80" rx="8" fill="none" stroke="#FF6B35" strokeOpacity="0.6" strokeWidth="1" />
          {/* Handle */}
          <rect x="35" y="-14" width="30" height="6" rx="3" fill="#2C2C2C" />
          <rect x="33" y="-18" width="4" height="14" rx="1.5" fill="#2C2C2C" />
          <rect x="63" y="-18" width="4" height="14" rx="1.5" fill="#2C2C2C" />
          {/* Status LEDs */}
          <motion.circle
            cx="20" cy="20" r="3" fill="#5CE08A"
            animate={{ opacity: [1, 0.4, 1] }}
            transition={{ duration: 1.4, repeat: Infinity }}
          />
          <circle cx="32" cy="20" r="3" fill="#5CE08A" opacity="0.85" />
          <circle cx="44" cy="20" r="3" fill="#FFB347" opacity="0.85" />
          {/* Display */}
          <rect x="55" y="14" width="35" height="14" rx="2" fill="#0A0A0A" stroke="#FF6B35" strokeOpacity="0.5" strokeWidth="0.7" />
          <text x="72.5" y="24" textAnchor="middle" fontFamily="ui-monospace, monospace" fontSize="7" fill="#FF8A4C">5G · ON</text>
          {/* Slots */}
          <line x1="10" y1="50" x2="90" y2="50" stroke="#0A0A0A" strokeOpacity="0.4" strokeWidth="1" />
          <rect x="14" y="56" width="20" height="12" rx="1.5" fill="#0A0A0A" opacity="0.55" />
          <rect x="40" y="56" width="20" height="12" rx="1.5" fill="#0A0A0A" opacity="0.55" />
          <rect x="66" y="56" width="20" height="12" rx="1.5" fill="#0A0A0A" opacity="0.55" />
          {/* Wheels hint */}
          <circle cx="15" cy="86" r="4" fill="#1A1A1A" />
          <circle cx="85" cy="86" r="4" fill="#1A1A1A" />
          {/* Antenna */}
          <line x1="92" y1="-2" x2="92" y2="-22" stroke="#FF6B35" strokeWidth="1.5" />
          <circle cx="92" cy="-24" r="2.5" fill="#FF6B35" />
        </g>

        {/* === Signal arcs === */}
        {/* Each path: from case (~170,170) curving to device target */}
        {[
          { d: "M 170 170 Q 280 90 380 80",  delay: 0,   target: "machine" },
          { d: "M 170 180 Q 280 180 380 180", delay: 0.4, target: "sensor"  },
          { d: "M 170 190 Q 280 270 380 280", delay: 0.8, target: "laptop"  },
        ].map((arc, i) => (
          <g key={i}>
            <path
              d={arc.d}
              fill="none"
              stroke="#FF6B35"
              strokeOpacity="0.18"
              strokeWidth="1"
              strokeDasharray="3 5"
            />
            <motion.path
              d={arc.d}
              fill="none"
              stroke="#FF8A4C"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeDasharray="40 200"
              initial={{ strokeDashoffset: 240 }}
              animate={{ strokeDashoffset: -240 }}
              transition={{
                duration: 2.6,
                repeat: Infinity,
                ease: "linear",
                delay: arc.delay,
              }}
              style={{ filter: "drop-shadow(0 0 4px rgba(255,107,53,0.55))" }}
            />
          </g>
        ))}

        {/* === Devices (right column) === */}
        {/* Machine (top) */}
        <g transform="translate(380 50)">
          <rect x="0" y="0" width="60" height="60" rx="6" fill="url(#deviceGrad)" />
          <rect x="0" y="0" width="60" height="60" rx="6" fill="none" stroke="#7FAACB" strokeOpacity="0.4" strokeWidth="1" />
          {/* gear icon */}
          <g transform="translate(30 30)" fill="none" stroke="#E8F0F6" strokeWidth="1.5">
            <circle r="9" />
            <circle r="3.5" />
            {[0, 60, 120, 180, 240, 300].map((ang) => (
              <line
                key={ang}
                x1="0"
                y1="-9"
                x2="0"
                y2="-13"
                strokeWidth="2"
                transform={`rotate(${ang})`}
              />
            ))}
          </g>
          <text x="30" y="78" textAnchor="middle" fontFamily="ui-sans-serif, system-ui" fontSize="9" fill="#A0B8CC">
            Maschine
          </text>
        </g>

        {/* Sensor (middle) */}
        <g transform="translate(380 150)">
          <rect x="0" y="0" width="60" height="60" rx="6" fill="url(#deviceGrad)" />
          <rect x="0" y="0" width="60" height="60" rx="6" fill="none" stroke="#7FAACB" strokeOpacity="0.4" strokeWidth="1" />
          {/* signal bars */}
          <g transform="translate(30 32)" fill="#E8F0F6">
            <rect x="-12" y="0" width="4" height="6" rx="1" />
            <rect x="-4" y="-4" width="4" height="10" rx="1" />
            <rect x="4" y="-9" width="4" height="15" rx="1" />
            <circle cx="-4" cy="-12" r="1.5" fill="#5CE08A" />
          </g>
          <text x="30" y="78" textAnchor="middle" fontFamily="ui-sans-serif, system-ui" fontSize="9" fill="#A0B8CC">
            IoT-Sensor
          </text>
        </g>

        {/* Laptop (bottom) */}
        <g transform="translate(380 250)">
          <rect x="0" y="0" width="60" height="60" rx="6" fill="url(#deviceGrad)" />
          <rect x="0" y="0" width="60" height="60" rx="6" fill="none" stroke="#7FAACB" strokeOpacity="0.4" strokeWidth="1" />
          {/* laptop icon */}
          <g transform="translate(30 32)" stroke="#E8F0F6" strokeWidth="1.4" fill="none">
            <rect x="-11" y="-8" width="22" height="14" rx="1.5" />
            <line x1="-14" y1="9" x2="14" y2="9" strokeLinecap="round" strokeWidth="1.6" />
          </g>
          <text x="30" y="78" textAnchor="middle" fontFamily="ui-sans-serif, system-ui" fontSize="9" fill="#A0B8CC">
            Crew / IT
          </text>
        </g>

        {/* Labels — case label */}
        <text x="110" y="270" textAnchor="middle" fontFamily="ui-sans-serif, system-ui" fontSize="10" fill="#FF8A4C" fontWeight="600">
          5G Case
        </text>
        <text x="110" y="284" textAnchor="middle" fontFamily="ui-monospace, monospace" fontSize="8" fill="#A0A0A0">
          Multi-Carrier · IP67
        </text>
      </svg>
    </div>
  );
}
