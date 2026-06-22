# Mockup assets

Drop your Figma exports here. The site will automatically swap them in when the file exists.

## Export settings (Figma)

1. Select your mockup frame
2. Export as **PNG @2x** (recommended) or **SVG**
3. Save using the exact filenames below
4. No code changes needed — paths are already wired in `lib/content.ts`

## Strategy section

| File | Slot |
|------|------|
| `strategy-01-diagnostic.png` | Workflow diagnostic scorecard |
| `strategy-02-opportunity.png` | Opportunity register |
| `strategy-03-roadmap.png` | Deployment roadmap |
| `strategy-04-build.png` | Production build status |

## Project examples

| File | Slot |
|------|------|
| `project-01-lease.png` | Lease abstraction |
| `project-02-configurator.png` | Product configurator |
| `project-03-sourcing.png` | Deal sourcing |
| `project-04-operations.png` | Operations platform |

## Tips

- **Frame width:** 720px works well (matches the layout)
- **Background:** white or transparent — the site adds the card frame
- **Until you export:** coded placeholder mockups show automatically
- **To change paths:** edit `mockupSrc` in `lib/content.ts`

## Optional: hero visual

Add `hero-visual.png` and wire it in `components/Hero.tsx` if you want a hero image later.
