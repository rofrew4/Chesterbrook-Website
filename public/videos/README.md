# Hero background videos

Deployed clips (served to visitors):

- `hero-1.mp4` — 720p, ~1 MB
- `hero-2.mp4` — 720p, ~0.7 MB
- `hero-3.mp4` — 720p, ~0.7 MB

**Total ~2.5 MB** (was ~144 MB of 4K originals).

## Re-compress after adding new source footage

1. Drop source `.mp4` files in this folder
2. Edit `scripts/compress-hero-videos.mjs` → `SOURCES` array
3. Run: `npm run compress:videos`
4. Move outputs from `compressed/` to this folder as `hero-1.mp4`, etc.

## Host on a CDN instead of Vercel (optional)

In Vercel → Environment Variables, set:

```
NEXT_PUBLIC_HERO_VIDEO_URLS=https://cdn.example.com/hero-1.mp4,https://cdn.example.com/hero-2.mp4,https://cdn.example.com/hero-3.mp4
```

Cheap options: Cloudflare R2, Bunny.net, Mux.
