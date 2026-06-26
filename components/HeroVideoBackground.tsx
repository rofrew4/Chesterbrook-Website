"use client";

import { useEffect, useRef, useState } from "react";
import { getHeroVideos } from "@/lib/heroVideos";

const CLIP_DURATION_MS = 6000;
const MOBILE_MAX_WIDTH = 768;

function shouldSkipVideo(): boolean {
  if (typeof window === "undefined") return true;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return true;
  if (window.matchMedia(`(max-width: ${MOBILE_MAX_WIDTH}px)`).matches) return true;
  const conn = (
    navigator as Navigator & {
      connection?: { saveData?: boolean; effectiveType?: string };
    }
  ).connection;
  if (conn?.saveData) return true;
  if (conn?.effectiveType === "slow-2g" || conn?.effectiveType === "2g") {
    return true;
  }
  return false;
}

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

function StaticHeroBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div className="absolute inset-0 bg-gradient-to-br from-accent-dark via-[#1a0a10] to-black" />
      <div className="absolute inset-0 bg-gradient-to-r from-accent-dark/95 to-black/70" />
    </div>
  );
}

export default function HeroVideoBackground() {
  const videoA = useRef<HTMLVideoElement>(null);
  const videoB = useRef<HTMLVideoElement>(null);
  const indexRef = useRef(0);
  const frontIsA = useRef(true);
  const timerRef = useRef<ReturnType<typeof setTimeout>>();
  const [skipVideo, setSkipVideo] = useState(true);

  useEffect(() => {
    setSkipVideo(shouldSkipVideo());
  }, []);

  useEffect(() => {
    if (skipVideo) return;

    const videos = getHeroVideos();
    if (videos.length === 0) return;

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

      for (let attempt = 0; attempt < videos.length; attempt++) {
        indexRef.current = (indexRef.current + 1) % videos.length;
        const src = videos[indexRef.current];
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

      for (let attempt = 0; attempt < videos.length; attempt++) {
        indexRef.current = attempt;
        try {
          await waitToPlay(a, videos[attempt]);
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
  }, [skipVideo]);

  if (skipVideo) return <StaticHeroBackground />;

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <video
        ref={videoA}
        muted
        playsInline
        preload="metadata"
        className="absolute inset-0 h-full w-full scale-105 object-cover opacity-100"
      />
      <video
        ref={videoB}
        muted
        playsInline
        preload="none"
        className="absolute inset-0 h-full w-full scale-105 object-cover opacity-0"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-accent-dark/95 to-black/70" />
    </div>
  );
}
