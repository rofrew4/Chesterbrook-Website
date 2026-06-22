"use client";

import { useEffect, useRef } from "react";
import { HERO_VIDEOS } from "@/lib/heroVideos";

const CLIP_DURATION_MS = 6000;

function waitToPlay(video: HTMLVideoElement, src: string): Promise<void> {
  return new Promise((resolve, reject) => {
    let settled = false;

    const finish = (result: "ok" | "err") => {
      if (settled) return;
      settled = true;
      video.removeEventListener("canplay", onReady);
      video.removeEventListener("error", onError);
      if (result === "ok") resolve();
      else reject(new Error("video failed"));
    };

    const onReady = () => {
      video.currentTime = 0;
      void video.play().then(
        () => finish("ok"),
        () => finish("err"),
      );
    };

    const onError = () => finish("err");

    video.src = src;
    video.load();

    if (video.readyState >= HTMLMediaElement.HAVE_FUTURE_DATA) {
      onReady();
      return;
    }

    video.addEventListener("canplay", onReady);
    video.addEventListener("error", onError);
  });
}

export default function HeroVideoBackground() {
  const videoA = useRef<HTMLVideoElement>(null);
  const videoB = useRef<HTMLVideoElement>(null);
  const indexRef = useRef(0);
  const frontIsA = useRef(true);
  const timerRef = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) return;

    const a = videoA.current;
    const b = videoB.current;
    if (!a || !b) return;

    let cancelled = false;

    const front = () => (frontIsA.current ? a : b);
    const back = () => (frontIsA.current ? b : a);

    const scheduleNext = () => {
      clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => {
        void swapToNext();
      }, CLIP_DURATION_MS);
    };

    const swapToNext = async () => {
      if (cancelled) return;

      for (let attempt = 0; attempt < HERO_VIDEOS.length; attempt++) {
        indexRef.current = (indexRef.current + 1) % HERO_VIDEOS.length;
        const src = HERO_VIDEOS[indexRef.current];
        const next = back();
        const current = front();

        try {
          await waitToPlay(next, src);
        } catch {
          continue;
        }

        if (cancelled) return;

        next.style.opacity = "1";
        current.style.opacity = "0";
        current.pause();
        frontIsA.current = !frontIsA.current;
        scheduleNext();
        return;
      }
    };

    const start = async () => {
      a.style.opacity = "1";
      b.style.opacity = "0";

      for (let attempt = 0; attempt < HERO_VIDEOS.length; attempt++) {
        indexRef.current = attempt;
        try {
          await waitToPlay(a, HERO_VIDEOS[attempt]);
          if (!cancelled) scheduleNext();
          return;
        } catch {
          continue;
        }
      }
    };

    void start();

    return () => {
      cancelled = true;
      clearTimeout(timerRef.current);
      a.pause();
      b.pause();
    };
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <video
        ref={videoA}
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 h-full w-full scale-105 object-cover opacity-100"
      />
      <video
        ref={videoB}
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 h-full w-full scale-105 object-cover opacity-0"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-accent-dark/95 to-black/70" />
    </div>
  );
}
