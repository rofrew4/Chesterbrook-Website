"use client";

import { useEffect, useRef } from "react";

/**
 * Generative background for the hero: a drifting field of the brand arch.
 *
 * Each unit is the logo abstracted — four nested strands over splayed legs —
 * scattered at varying scale, depth and opacity. The field drifts slowly and
 * leans toward the pointer, so the page feels responsive rather than looped.
 *
 * Honours prefers-reduced-motion by painting a single static frame.
 */

const ACCENT = [123, 30, 58] as const;

type Arc = {
  x: number; // 0..1 across the field
  y: number; // 0..1 down the field
  scale: number;
  strands: number;
  alpha: number;
  speed: number; // drift, field-widths per second
  depth: number; // parallax weight, 0..1
  bob: number; // vertical drift phase
};

function makeArcs(count: number): Arc[] {
  // deterministic scatter so server and client agree and reloads look stable
  let seed = 20260930;
  const rnd = () => {
    seed = (seed * 1664525 + 1013904223) % 4294967296;
    return seed / 4294967296;
  };
  return Array.from({ length: count }, () => {
    const depth = rnd();
    return {
      x: rnd(),
      // sit low: the arches rise from below the fold, only their sweep shows
      y: 0.92 + rnd() * 0.38,
      scale: 1.1 + depth * 2.2,
      strands: 2 + Math.floor(rnd() * 2),
      alpha: 0.028 + (1 - depth) * 0.042,
      speed: 0.004 + depth * 0.011,
      depth,
      bob: rnd() * Math.PI * 2,
    };
  }).sort((a, b) => a.depth - b.depth);
}

/** One arch: nested strands springing from splayed feet, mirrored about cx. */
function strand(
  ctx: CanvasRenderingContext2D,
  cx: number,
  baseY: number,
  halfWidth: number,
  height: number,
) {
  ctx.beginPath();
  ctx.moveTo(cx - halfWidth, baseY);
  ctx.bezierCurveTo(
    cx - halfWidth * 0.92,
    baseY - height * 0.52,
    cx - halfWidth * 0.46,
    baseY - height,
    cx,
    baseY - height,
  );
  ctx.bezierCurveTo(
    cx + halfWidth * 0.46,
    baseY - height,
    cx + halfWidth * 0.92,
    baseY - height * 0.52,
    cx + halfWidth,
    baseY,
  );
  ctx.stroke();
}

export default function HeroArcField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const arcs = makeArcs(reduced ? 7 : 10);

    let width = 0;
    let height = 0;
    let raf = 0;
    const pointer = { x: 0.5, y: 0.5 };
    const eased = { x: 0.5, y: 0.5 };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const draw = (t: number) => {
      ctx.clearRect(0, 0, width, height);

      // ease the pointer so the lean is inertial, not twitchy
      eased.x += (pointer.x - eased.x) * 0.045;
      eased.y += (pointer.y - eased.y) * 0.045;
      const leanX = (eased.x - 0.5) * 2;
      const leanY = (eased.y - 0.5) * 2;

      const unit = Math.max(width, height);

      for (const a of arcs) {
        const drift = reduced ? 0 : (t / 1000) * a.speed;
        // wrap with margin so arcs enter and leave off-canvas
        const px =
          (((a.x - drift) % 1) + 1) % 1 * (width + unit * 0.6) - unit * 0.3;
        const bobY = reduced ? 0 : Math.sin(t / 3400 + a.bob) * unit * 0.012;

        const cx = px + leanX * a.depth * unit * 0.035;
        const baseY = a.y * height + bobY + leanY * a.depth * unit * 0.022;

        const halfWidth = unit * 0.13 * a.scale;
        const archHeight = halfWidth * 1.18;

        ctx.lineCap = "round";
        for (let s = 0; s < a.strands; s++) {
          const k = s / Math.max(1, a.strands - 1);
          const inset = 1 - k * 0.3;
          ctx.strokeStyle = `rgba(${ACCENT[0]}, ${ACCENT[1]}, ${ACCENT[2]}, ${
            a.alpha * (1 - k * 0.35)
          })`;
          ctx.lineWidth = Math.max(1, unit * 0.0022 * a.scale * (1 - k * 0.2));
          strand(ctx, cx, baseY, halfWidth * inset, archHeight * inset);
        }
      }

      if (!reduced) raf = requestAnimationFrame(draw);
    };

    const onPointer = (e: PointerEvent) => {
      pointer.x = e.clientX / window.innerWidth;
      pointer.y = e.clientY / window.innerHeight;
    };

    resize();
    draw(0);
    if (!reduced) {
      window.addEventListener("pointermove", onPointer, { passive: true });
    }
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onPointer);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <canvas ref={canvasRef} className="h-full w-full" />
      {/* hairline rule anchoring the field to the section edge */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-border" />
    </div>
  );
}
