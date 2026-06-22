"use client";

const tabs = ["Size", "Shape", "Floor", "Style"];

export default function ConfiguratorFallback() {
  return (
    <div className="p-6 md:p-8">
      <p className="text-[11px] uppercase tracking-[0.2em] text-muted">
        Configurator
      </p>
      <div className="mt-5 flex flex-wrap gap-2">
        {tabs.map((tab, i) => (
          <span
            key={tab}
            className={`rounded-full px-3 py-1 text-[11px] ${
              i === 2
                ? "bg-accent text-white"
                : "border border-border text-secondary"
            }`}
          >
            {tab}
          </span>
        ))}
      </div>
      <div className="mt-5 space-y-2">
        {["Single level", "Garage", "Two-floor"].map((opt, i) => (
          <div
            key={opt}
            className={`flex items-center gap-3 rounded border px-3 py-2.5 text-[12px] ${
              i === 1 ? "border-accent bg-accent/5" : "border-border"
            }`}
          >
            <span
              className={`h-3 w-3 rounded-full border ${
                i === 1 ? "border-accent bg-accent" : "border-border"
              }`}
            />
            {opt}
          </div>
        ))}
      </div>
      <div className="mt-5 flex h-32 items-center justify-center rounded border border-dashed border-border bg-surface text-[11px] uppercase tracking-wider text-muted">
        3D Preview
      </div>
    </div>
  );
}
