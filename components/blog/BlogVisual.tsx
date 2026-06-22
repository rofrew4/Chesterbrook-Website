import type { BlogVisualId } from "@/lib/blog";

function PublicRecordsVisual() {
  return (
    <div className="relative flex h-full min-h-[140px] items-end justify-center gap-2 p-6">
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className={`w-14 rounded border border-border bg-widget shadow-sm ${
            i === 1 ? "h-24 border-accent/30 ring-1 ring-accent/20" : "h-20"
          }`}
        >
          <div className="mx-auto mt-2 h-1 w-6 rounded-full bg-border" />
          <div className="mt-3 space-y-1 px-2">
            <div className="h-1 w-full rounded-sm bg-border/80" />
            <div className="h-1 w-[80%] rounded-sm bg-border/60" />
            {i === 1 && <div className="mt-1 h-1 w-[60%] rounded-sm bg-accent/40" />}
          </div>
        </div>
      ))}
    </div>
  );
}

function SoftwareStackVisual() {
  const layers = ["PMS", "Sourcing", "Docs", "AI add-on"];
  return (
    <div className="flex h-full min-h-[140px] flex-col justify-center gap-2 p-6">
      {layers.map((label, i) => (
        <div
          key={label}
          className={`flex items-center justify-between rounded border px-3 py-2 text-[10px] uppercase tracking-wider ${
            i === 3
              ? "border-accent/40 bg-accent/5 text-accent"
              : "border-border bg-widget text-muted"
          }`}
          style={{ marginLeft: `${i * 8}px`, width: `calc(100% - ${i * 8}px)` }}
        >
          <span>{label}</span>
          {i === 3 && <span className="text-[9px]">Renew?</span>}
        </div>
      ))}
    </div>
  );
}

function AiStagesVisual() {
  const stages = ["Basics", "Automation", "Custom"];
  return (
    <div className="flex h-full min-h-[140px] items-end gap-3 p-6">
      {stages.map((stage, i) => (
        <div key={stage} className="flex flex-1 flex-col items-center gap-2">
          <div
            className={`w-full rounded-t border border-b-0 border-border bg-widget ${
              i === 2 ? "border-accent/30 bg-accent/5" : ""
            }`}
            style={{ height: `${48 + i * 28}px` }}
          />
          <span className="text-[9px] uppercase tracking-wider text-muted">{stage}</span>
        </div>
      ))}
    </div>
  );
}

export default function BlogVisual({ id }: { id: BlogVisualId }) {
  return (
    <div className="overflow-hidden rounded-t-xl border-b border-border bg-surface/50">
      {id === "public-records" && <PublicRecordsVisual />}
      {id === "software-stack" && <SoftwareStackVisual />}
      {id === "ai-stages" && <AiStagesVisual />}
    </div>
  );
}
