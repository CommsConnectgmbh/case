"use client";

import { useEffect, useRef } from "react";

const VS = `
attribute vec2 a_pos;
void main() {
  gl_Position = vec4(a_pos, 0.0, 1.0);
}
`;

// Industrial hex-grid + pulse + signal sweep.
// Palette: Amber/Orange (#FF6B35-ish) blended with cold steel-blue.
// Designed as a full-bleed background, not a centered "tunnel".
const FS = `
precision highp float;
uniform vec2 u_res;
uniform float u_time;

// Cheap hash for grain
float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
}

// Smooth value noise
float vnoise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  float a = hash(i);
  float b = hash(i + vec2(1.0, 0.0));
  float c = hash(i + vec2(0.0, 1.0));
  float d = hash(i + vec2(1.0, 1.0));
  return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
}

// Hex distance — returns distance to hex cell center on a flat-top hex grid.
// Returns vec2(dist, cellId-ish) for cell coloring.
vec2 hexDist(vec2 p) {
  vec2 s = vec2(1.0, 1.7320508); // sqrt(3)
  vec2 h = s * 0.5;
  vec2 a = mod(p, s) - h;
  vec2 b = mod(p + h, s) - h;
  vec2 gv = dot(a, a) < dot(b, b) ? a : b;
  // Cell id (use original p minus gv)
  vec2 id = p - gv;
  // Distance to hex edge
  float d = max(abs(gv.x) * 0.8660254 + gv.y * 0.5, abs(gv.y));
  return vec2(d, id.x * 0.3 + id.y * 0.7);
}

void main() {
  vec2 R = u_res;
  vec2 uv = (gl_FragCoord.xy - 0.5 * R) / R.y;
  float t = u_time * 0.22;

  // ── Background gradient: deep steel from bottom-left to dark from top-right
  vec3 deep   = vec3(0.020, 0.025, 0.035);   // near-black with blue cast
  vec3 steel  = vec3(0.055, 0.085, 0.115);   // cool steel blue
  vec3 amber  = vec3(1.000, 0.420, 0.180);   // industrial orange (#FF6B35-ish)
  vec3 ember  = vec3(1.000, 0.620, 0.220);   // warm highlight
  vec3 cool   = vec3(0.310, 0.520, 0.680);   // cold accent steel

  float gradT = smoothstep(-0.9, 1.1, -uv.x + uv.y * 0.4);
  vec3 col = mix(deep, steel, gradT);

  // ── Hex grid lattice
  vec2 hp = uv * 7.5 + vec2(t * 0.3, t * 0.18);
  vec2 hex = hexDist(hp);
  // Edge mask: thin lines along hex borders
  float edge = smoothstep(0.49, 0.495, hex.x) * (1.0 - smoothstep(0.498, 0.5, hex.x));
  edge = smoothstep(0.45, 0.50, hex.x); // 0..1 toward border
  float line = pow(edge, 14.0);

  // Cell-based glow: random cells light up softly
  float cellSeed = hash(floor(hp / vec2(1.0, 1.732)) + 7.0);
  float pulse = 0.5 + 0.5 * sin(t * 1.6 + cellSeed * 18.84);
  pulse = pow(pulse, 6.0) * step(0.78, cellSeed);

  // ── Concentric signal sweep emanating from lower-left "antenna" origin
  vec2 origin = vec2(-0.85, -0.55);
  float r = length(uv - origin);
  float sweep = sin(r * 9.0 - t * 5.0) * 0.5 + 0.5;
  sweep = pow(sweep, 3.5);
  // fade with distance + ahead-of-wave
  float sweepMask = smoothstep(1.6, 0.0, r);

  // ── Slow drifting flow-field haze (orange embers floating)
  float n1 = vnoise(uv * 2.2 + vec2(-t * 0.6, t * 0.3));
  float n2 = vnoise(uv * 4.4 + vec2(t * 0.4, -t * 0.5));
  float flow = pow(n1 * 0.6 + n2 * 0.4, 2.2);

  // ── Compose
  // Steel lattice
  col += cool * line * 0.18;
  // Cell pulses (warm amber pop)
  col += amber * pulse * 0.55;
  // Signal sweep — warm amber arcs
  col += amber * sweep * sweepMask * 0.22;
  col += ember * pow(sweep, 8.0) * sweepMask * 0.35;
  // Drifting embers
  col += amber * flow * 0.10;

  // Hot core near origin (the "case" emitting)
  float core = smoothstep(0.55, 0.0, r);
  col += ember * core * 0.18;
  col += amber * smoothstep(0.18, 0.0, r) * 0.45;

  // Vignette — dark edges, keep focus
  float vign = smoothstep(1.25, 0.25, length(uv * vec2(0.95, 1.0)));
  col *= mix(0.55, 1.0, vign);

  // Grain
  float g = (hash(gl_FragCoord.xy + t) - 0.5) * 0.018;
  col += g;

  // Final tonemap-ish + gamma
  col = col / (col + vec3(0.85));
  col = pow(col, vec3(0.92));

  gl_FragColor = vec4(col, 1.0);
}
`;

function compile(gl: WebGLRenderingContext, type: number, src: string): WebGLShader | null {
  const sh = gl.createShader(type);
  if (!sh) return null;
  gl.shaderSource(sh, src);
  gl.compileShader(sh);
  if (!gl.getShaderParameter(sh, gl.COMPILE_STATUS)) {
    gl.deleteShader(sh);
    return null;
  }
  return sh;
}

export function IndustrialShader({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

    const gl =
      (canvas.getContext("webgl", { antialias: false, alpha: false }) as WebGLRenderingContext | null) ||
      (canvas.getContext("experimental-webgl") as WebGLRenderingContext | null);
    if (!gl) return;

    const vs = compile(gl, gl.VERTEX_SHADER, VS);
    const fs = compile(gl, gl.FRAGMENT_SHADER, FS);
    if (!vs || !fs) return;

    const prog = gl.createProgram();
    if (!prog) return;
    gl.attachShader(prog, vs);
    gl.attachShader(prog, fs);
    gl.linkProgram(prog);
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) return;
    gl.useProgram(prog);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
      gl.STATIC_DRAW
    );
    const aPos = gl.getAttribLocation(prog, "a_pos");
    gl.enableVertexAttribArray(aPos);
    gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0);
    const uRes = gl.getUniformLocation(prog, "u_res");
    const uTime = gl.getUniformLocation(prog, "u_time");

    // DPR cap — performance over pixel-perfect
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);

    function resize() {
      if (!canvas || !gl) return;
      const rect = canvas.getBoundingClientRect();
      const w = Math.max(1, Math.floor(rect.width * dpr));
      const h = Math.max(1, Math.floor(rect.height * dpr));
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
        gl.viewport(0, 0, w, h);
      }
      gl.uniform2f(uRes, w, h);
    }

    let running = true;
    let visible = true;
    let raf = 0;
    const start = performance.now();

    function frame(now: number) {
      if (!running) return;
      if (visible && !document.hidden) {
        const t = (now - start) / 1000;
        gl!.uniform1f(uTime, reduced ? 3.4 : t);
        gl!.drawArrays(gl!.TRIANGLES, 0, 6);
      }
      raf = requestAnimationFrame(frame);
    }

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) visible = e.isIntersecting;
      },
      { threshold: 0.01 }
    );
    io.observe(canvas);

    if (reduced) {
      gl.uniform1f(uTime, 3.4);
      gl.drawArrays(gl.TRIANGLES, 0, 6);
    } else {
      raf = requestAnimationFrame(frame);
    }

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
      style={{ display: "block" }}
    />
  );
}

export default IndustrialShader;
