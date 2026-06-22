export const HERO_SCENE = process.env.NEXT_PUBLIC_HERO_SCENE ?? "";

export const BACKDROPS = {
  "1": process.env.NEXT_PUBLIC_BACKDROP_1 ?? "",
  "2": process.env.NEXT_PUBLIC_BACKDROP_2 ?? "",
  "3": process.env.NEXT_PUBLIC_BACKDROP_3 ?? "",
  "4": process.env.NEXT_PUBLIC_BACKDROP_4 ?? "",
  "5": process.env.NEXT_PUBLIC_BACKDROP_5 ?? "",
} as const;

export type BackdropId = keyof typeof BACKDROPS | "hero";

export const BACKDROP_OPACITY: Record<BackdropId, number> = {
  hero: 0.35,
  "1": 0.35,
  "2": 0.35,
  "3": 0.35,
  "4": 0.35,
  "5": 0.15,
};
