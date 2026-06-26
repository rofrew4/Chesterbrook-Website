/**
 * Hero background clips. Defaults to local 720p files (~2 MB total).
 *
 * Sources: 7224494 → hero-1, 8170481 → hero-2, 8425718 → hero-3
 *
 * Optional: set NEXT_PUBLIC_HERO_VIDEO_URLS in Vercel to comma-separated CDN URLs
 * (Cloudflare R2, Bunny.net, Mux, etc.) to serve video off Vercel entirely.
 */
export const HERO_SOURCE_MAP = {
  "hero-1.mp4": "7224494-uhd_3840_2160_25fps.mp4",
  "hero-2.mp4": "8170481-uhd_3840_2160_25fps.mp4",
  "hero-3.mp4": "8425718-uhd_3840_2160_25fps.mp4",
} as const;

const LOCAL_HERO_VIDEOS = [
  "/videos/hero-1.mp4",
  "/videos/hero-2.mp4",
  "/videos/hero-3.mp4",
] as const;

function videosFromEnv(): string[] | null {
  const raw = process.env.NEXT_PUBLIC_HERO_VIDEO_URLS?.trim();
  if (!raw) return null;
  const urls = raw.split(",").map((u) => u.trim()).filter(Boolean);
  return urls.length > 0 ? urls : null;
}

export function getHeroVideos(): readonly string[] {
  return videosFromEnv() ?? LOCAL_HERO_VIDEOS;
}

/** @deprecated Use getHeroVideos() — kept for any static imports */
export const HERO_VIDEOS = LOCAL_HERO_VIDEOS;
