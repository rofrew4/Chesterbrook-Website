import Link from "next/link";
import type { Build } from "@/lib/site";
import { ChevronRight } from "./Icons";
import BuildVisual from "./visuals/BuildVisual";

/**
 * Bento tile: copy on top, the product screen rising from the bottom edge.
 * `wide` lays the two side by side for the lead tile.
 */
export default function BuildTile({
  build,
  wide = false,
  surface = false,
}: {
  build: Build;
  wide?: boolean;
  /** Gray tile, for use on a white section. */
  surface?: boolean;
}) {
  return (
    <article
      className={`tile flex h-full ${surface ? "bg-surface" : "bg-white shadow-tile ring-1 ring-black/[0.04]"} ${
        wide ? "flex-col lg:grid lg:grid-cols-[0.9fr_1.1fr] lg:items-center" : "flex-col"
      }`}
    >
      <div className={wide ? "p-8 md:p-12 lg:pr-4" : "p-8 pb-0 md:p-10 md:pb-0"}>
        <p className="text-[14px] font-semibold text-accent">{build.area}</p>
        <h3 className={`mt-2 text-foreground ${wide ? "text-headline" : "text-title"}`}>{build.headline}</h3>
        <p className="mt-3 max-w-[38ch] text-[17px] leading-[1.45] text-secondary">{build.summary}</p>
        <Link
          href={`/work#${build.id}`}
          aria-label={`Learn more about ${build.name}`}
          className="link-chevron mt-4 text-[15px]"
        >
          <span className="link-label">Learn more</span>
          <ChevronRight />
        </Link>
      </div>
      <div
        className={
          wide
            ? "px-6 pb-8 md:px-12 md:pb-12 lg:py-12 lg:pl-4 lg:pr-12"
            : "-mb-6 mt-auto px-6 pt-8 md:px-10"
        }
      >
        <BuildVisual id={build.id} />
      </div>
    </article>
  );
}
