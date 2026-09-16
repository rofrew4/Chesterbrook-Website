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
  const stages = [
    {
      step: "01",
      label: "Basics",
      tools: "Claude · ChatGPT",
      does: ["Doc Q&A", "Drafting", "Research"],
      ceiling: "Copy-paste only",
    },
    {
      step: "02",
      label: "Automation",
      tools: "Zapier · Make · n8n",
      does: ["Scheduled", "Triggered", "Routing"],
      ceiling: "Generic output",
    },
    {
      step: "03",
      label: "Custom",
      tools: "Built for you",
      does: ["Your leases", "Your deals", "In your inbox"],
      ceiling: "V1 in 1\u20133 weeks",
    },
  ];

  return (
    <div className="grid min-h-[140px] grid-cols-3 gap-2 p-5 md:gap-3 md:p-6">
      {stages.map((stage, i) => {
        const isCustom = i === 2;
        return (
          <div
            key={stage.label}
            className={`flex flex-col rounded border ${
              isCustom
                ? "border-accent/40 bg-accent/5"
                : "border-border bg-widget"
            }`}
          >
            <div
              className={`flex items-baseline gap-1.5 border-b px-2 py-1.5 ${
                isCustom ? "border-accent/25" : "border-border"
              }`}
            >
              <span
                className={`text-[8px] tabular-nums ${
                  isCustom ? "text-accent/70" : "text-muted/50"
                }`}
              >
                {stage.step}
              </span>
              <span
                className={`truncate text-[9px] uppercase tracking-wider ${
                  isCustom ? "text-accent" : "text-muted"
                }`}
              >
                {stage.label}
              </span>
            </div>

            <div className="flex flex-1 flex-col gap-1 px-2 py-2">
              <span
                className={`mb-0.5 block truncate text-[8px] ${
                  isCustom ? "text-accent/60" : "text-muted/55"
                }`}
              >
                {stage.tools}
              </span>
              {stage.does.map((item) => (
                <span
                  key={item}
                  className={`flex items-center gap-1 text-[9px] leading-tight ${
                    isCustom ? "text-accent/90" : "text-muted/85"
                  }`}
                >
                  <span
                    aria-hidden
                    className={`h-1 w-1 shrink-0 rounded-full ${
                      isCustom ? "bg-accent/60" : "bg-border"
                    }`}
                  />
                  <span className="truncate">{item}</span>
                </span>
              ))}
            </div>

            <div
              className={`border-t border-dashed px-2 py-1.5 ${
                isCustom ? "border-accent/30" : "border-border"
              }`}
            >
              <span
                className={`block truncate text-[8px] uppercase tracking-wide ${
                  isCustom ? "text-accent" : "text-muted/50"
                }`}
              >
                {stage.ceiling}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function FunctionMapVisual() {
  const functions = [
    "Sourcing",
    "Underwriting",
    "Brokerage",
    "Operations",
    "Development",
    "Asset mgmt",
  ];
  return (
    <div className="grid h-full min-h-[140px] grid-cols-2 content-center gap-2 p-6">
      {functions.map((label, i) => (
        <div
          key={label}
          className={`rounded border px-2 py-2.5 text-[9px] uppercase tracking-wider ${
            i === 3
              ? "border-accent/40 bg-accent/5 text-accent"
              : "border-border bg-widget text-muted"
          }`}
        >
          <span className="block truncate">{label}</span>
          <div
            className={`mt-1.5 h-1 rounded-sm ${
              i === 3 ? "w-full bg-accent/40" : "bg-border/70"
            }`}
            style={i === 3 ? undefined : { width: `${45 + i * 9}%` }}
          />
        </div>
      ))}
    </div>
  );
}

function OperationsQueueVisual() {
  const rows = ["Leak, unit 4B", "Tour request", "Renewal question", "Escalation"];
  return (
    <div className="flex h-full min-h-[140px] flex-col justify-center gap-1.5 p-6">
      {rows.map((label, i) => (
        <div
          key={label}
          className={`flex items-center gap-2 rounded border px-3 py-2 text-[10px] ${
            i === 3
              ? "border-accent/40 bg-accent/5 text-accent"
              : "border-border bg-widget text-muted"
          }`}
        >
          <span
            className={`h-1.5 w-1.5 shrink-0 rounded-full ${
              i === 3 ? "bg-accent" : "bg-border"
            }`}
          />
          <span className="flex-1 truncate">{label}</span>
          <span className="text-[9px] uppercase tracking-wider">
            {i === 3 ? "To a person" : "Drafted"}
          </span>
        </div>
      ))}
    </div>
  );
}

function CostLayersVisual() {
  const layers = [
    { label: "Seats", width: 28 },
    { label: "Automation", width: 36 },
    { label: "API usage", width: 22 },
    { label: "Data", width: 100 },
    { label: "Build", width: 64 },
  ];
  return (
    <div className="flex h-full min-h-[140px] flex-col justify-center gap-1.5 p-6">
      {layers.map((layer) => {
        const dominant = layer.width === 100;
        return (
          <div key={layer.label} className="flex items-center gap-2">
            <span className="w-[68px] shrink-0 text-right text-[9px] uppercase tracking-wider text-muted">
              {layer.label}
            </span>
            <div className="min-w-0 flex-1">
              <div
                className={`h-3 rounded-sm border ${
                  dominant
                    ? "border-accent/40 bg-accent/10"
                    : "border-border bg-widget"
                }`}
                style={{ width: `${layer.width}%` }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

function SiteScreeningVisual() {
  const matches = new Set([3, 9, 16]);
  return (
    <div className="flex h-full min-h-[140px] items-center justify-center p-6">
      <div className="grid grid-cols-7 gap-1.5">
        {Array.from({ length: 21 }, (_, i) => (
          <div
            key={i}
            className={`h-5 w-5 rounded-sm border ${
              matches.has(i)
                ? "border-accent/50 bg-accent/10 ring-1 ring-accent/20"
                : "border-border bg-widget"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

function RoleTasksVisual() {
  const columns = [
    { heading: "Moves", items: ["Intake", "Extraction", "Reporting"] },
    { heading: "Stays", items: ["Judgment", "Negotiation", "Presence"] },
  ];
  return (
    <div className="grid h-full min-h-[140px] grid-cols-2 content-center gap-3 p-6">
      {columns.map((column, ci) => (
        <div key={column.heading} className="space-y-1.5">
          <p
            className={`text-[9px] uppercase tracking-wider ${
              ci === 0 ? "text-accent" : "text-muted"
            }`}
          >
            {column.heading}
          </p>
          {column.items.map((item) => (
            <div
              key={item}
              className={`rounded border px-2 py-1.5 text-[10px] ${
                ci === 0
                  ? "border-accent/40 bg-accent/5 text-accent"
                  : "border-border bg-widget text-muted"
              }`}
            >
              {item}
            </div>
          ))}
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
      {id === "function-map" && <FunctionMapVisual />}
      {id === "operations-queue" && <OperationsQueueVisual />}
      {id === "cost-layers" && <CostLayersVisual />}
      {id === "site-screening" && <SiteScreeningVisual />}
      {id === "role-tasks" && <RoleTasksVisual />}
    </div>
  );
}
