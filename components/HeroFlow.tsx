"use client";

import { useEffect, useRef } from "react";

/**
 * Hero flow field.
 *
 * Records enter from the left scattered and unstructured, are drawn through a
 * converging waist, and leave to the right resolved onto ordered rows. It is
 * the product as motion: unstructured documents in, structured data out.
 *
 * Canvas 2D, ~160 particles, no external asset. Paints one static frame under
 * prefers-reduced-motion.
 */

const ACCENT = "196,66,95"; // oxblood, lifted for a dark ground
const DATA = "90,160,208"; // survey blue
const ROWS = 9;

type P = {
  t: number; // 0..1 progress across the field
  lane: number; // destination row, 0..ROWS-1
  entry: number; // vertical scatter on entry, -1..1
  speed: number;
  size: number;
  hue: 0 | 1; // 0 accent, 1 data
  wob: number;
};

function seedParticles(n: number): P[] {
  let s = 987654321;
  const rnd = () => ((s = (s * 1664525 + 1013904223) % 4294967296) / 4294967296);
  return Array.from({ length: n }, () => ({
    t: rnd(),
    lane: Math.floor(rnd() * ROWS),
    entry: rnd() * 2 - 1,
    speed: 0.045 + rnd() * 0.055,
    size: 0.9 + rnd() * 1.5,
    hue: rnd() > 0.68 ? 0 : 1,
    wob: rnd() * Math.PI * 2,
  }));
}

/** Ease that holds the waist tight in the middle of the field. */
function pathAt(p: P, t: number, w: number, h: number, time: number) {
  const x = t * w;
  const midY = h / 2;
  const laneY = h * 0.18 + (p.lane / (ROWS - 1)) * h * 0.64;

  // scattered on entry -> pinched at the waist -> resolved onto its row
  const scatter = midY + p.entry * h * 0.46;
  const waist = 0.5;
  let y: number;
  if (t < waist) {
    const k = t / waist;
    const e = k * k * (3 - 2 * k); // smoothstep
    y = scatter + (midY - scatter) * e;
    y += Math.sin(time / 900 + p.wob + t * 6) * (1 - e) * h * 0.035;
  } else {
    const k = (t - waist) / (1 - waist);
    const e = k * k * (3 - 2 * k);
    y = midY + (laneY - midY) * e;
  }
  return { x, y };
}

export default function HeroFlow() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const parts = seedParticles(reduced ? 90 : 170);

    let w = 0;
    let h = 0;
    let raf = 0;
    let last = 0;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const r = canvas.getBoundingClientRect();
      w = r.width;
      h = r.height;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const frame = (time: number) => {
      const dt = last ? Math.min((time - last) / 1000, 0.05) : 0;
      last = time;
      ctx.clearRect(0, 0, w, h);

      for (const p of parts) {
        if (!reduced) {
          p.t += p.speed * dt;
          if (p.t > 1) {
            p.t -= 1;
            p.lane = (p.lane + 1 + Math.floor(Math.random() * (ROWS - 1))) % ROWS;
          }
        }
        const { x, y } = pathAt(p, p.t, w, h, time);
        // a short trail reads as motion without smearing the frame
        const prev = pathAt(p, Math.max(p.t - 0.028, 0), w, h, time);
        const col = p.hue === 0 ? ACCENT : DATA;
        // fade in at the left edge, out at the right
        const edge = Math.min(p.t / 0.12, 1) * Math.min((1 - p.t) / 0.1, 1);
        const alpha = (p.hue === 0 ? 0.85 : 0.6) * edge;

        ctx.strokeStyle = `rgba(${col},${alpha * 0.5})`;
        ctx.lineWidth = p.size * 0.8;
        ctx.lineCap = "round";
        ctx.beginPath();
        ctx.moveTo(prev.x, prev.y);
        ctx.lineTo(x, y);
        ctx.stroke();

        ctx.fillStyle = `rgba(${col},${alpha})`;
        ctx.beginPath();
        ctx.arc(x, y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }

      if (!reduced) raf = requestAnimationFrame(frame);
    };

    resize();
    frame(0);
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      className="h-full w-full"
      aria-hidden
    />
  );
}
