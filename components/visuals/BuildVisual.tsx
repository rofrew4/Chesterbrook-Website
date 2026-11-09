import type { BuildId } from "@/lib/site";
import { BrandMarkSquare } from "../BrandMark";
import { Avatar, CheckCircle, Dot, Pill, ScoreRing, Window } from "./primitives";

/*
 * Illustrative product screens. All names, addresses, and numbers are made up;
 * 555 numbers are reserved for fiction.
 */

export function DealSourcingVisual() {
  const rows = [
    { addr: "1820 Ridgetop Rd", meta: "38,200 SF · Flex", owner: "Halvorsen Holdings", phone: "(703) 555-0142", fit: 96 },
    { addr: "455 Carlyle Way", meta: "24,500 SF · Warehouse", owner: "M. & J. Ortiz", phone: "(571) 555-0190", fit: 91 },
    { addr: "22 Industry Dr", meta: "51,000 SF · Industrial", owner: "Brightwater LLC", phone: "(703) 555-0117", fit: 88 },
    { addr: "7 Old Mill Ct", meta: "20,800 SF · Flex", owner: "Estate of R. Klein", phone: "(540) 555-0163", fit: 84 },
  ];
  return (
    <Window title="Off-market matches">
      <div className="flex flex-wrap items-center gap-1.5 border-b border-black/[0.06] px-4 py-2.5">
        <Pill>Industrial</Pill>
        <Pill>20–60k SF</Pill>
        <Pill>Loudoun County</Pill>
        <span className="ml-auto text-[10.5px] font-semibold text-foreground/50">Today · 4 new</span>
      </div>
      <ul className="divide-y divide-black/[0.05]">
        {rows.map((r) => (
          <li key={r.addr} className="flex items-center gap-3 px-4 py-2.5">
            <ScoreRing value={r.fit} />
            <div className="min-w-0 flex-1">
              <p className="truncate text-[12.5px] font-semibold tracking-[-0.01em]">{r.addr}</p>
              <p className="truncate text-[11px] text-foreground/55">{r.meta} · {r.owner}</p>
            </div>
            <span className="hidden shrink-0 rounded-full bg-accent px-2.5 py-1 text-[10.5px] font-semibold tabular-nums text-white min-[420px]:inline-flex">
              {r.phone}
            </span>
          </li>
        ))}
      </ul>
    </Window>
  );
}

export function LeaseVisual({ compact = false }: { compact?: boolean }) {
  const fields = [
    { k: "Tenant", v: "Acme Retail, Inc." },
    { k: "Premises", v: "12,400 SF · Suite 100" },
    { k: "Term", v: "10 years · ends Mar 2036" },
    { k: "Base rent", v: "$28.50 / SF · NNN" },
    { k: "Escalations", v: "3% annually" },
    { k: "Renewal", v: "2 × 5-year options", pending: true },
  ];
  return (
    <Window title="Acme Retail — Lease Abstract">
      <div className={`grid ${compact ? "" : "sm:grid-cols-[0.85fr_1fr]"}`}>
        {!compact && (
          <div className="hidden border-r border-black/[0.06] bg-[#fbfbfd] p-4 sm:block" aria-hidden>
            <p className="text-[10px] font-semibold uppercase tracking-[0.06em] text-foreground/45">Lease_Acme.pdf · p. 4</p>
            <div className="mt-3 space-y-3">
              {[["w-full", "w-[92%]", "w-[70%]"], ["w-full", "w-[85%]", "w-[60%]"], ["w-[95%]", "w-full", "w-[78%]"], ["w-full", "w-[66%]"]].map(
                (lines, i) => (
                  <div key={i} className={`space-y-1.5 rounded-md p-1.5 ${i === 1 ? "bg-accent/[0.08] ring-1 ring-accent/25" : ""}`}>
                    {lines.map((w, j) => (
                      <div key={j} className={`h-[5px] rounded-full ${i === 1 ? "bg-accent/35" : "bg-black/[0.09]"} ${w}`} />
                    ))}
                  </div>
                ),
              )}
            </div>
            <p className="mt-3 text-[10px] font-semibold text-accent">§4.3 Base Rent</p>
          </div>
        )}
        <dl className="divide-y divide-black/[0.05] px-4 py-1.5">
          {fields.map((f) => (
            <div key={f.k} className="flex items-center gap-2.5 py-[7px]">
              <CheckCircle done={!f.pending} />
              <dt className="w-[74px] shrink-0 text-[11px] text-foreground/55">{f.k}</dt>
              <dd className="min-w-0 flex-1 truncate text-[12px] font-semibold tracking-[-0.005em]">{f.v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Window>
  );
}

export function EmailVisual() {
  const rows = [
    { who: "Dana Morales", init: "DM", subject: "Leak under the sink in 4B", tag: "Maintenance", status: "Draft ready", tone: "success" as const },
    { who: "Chris Patel", init: "CP", subject: "Can I see the 2BR on Saturday?", tag: "Tour", status: "Booked 10:30", tone: "success" as const },
    { who: "Lee Holdings", init: "LH", subject: "Renewal terms for Suite 210", tag: "Renewal", status: "Draft ready", tone: "success" as const },
    { who: "Grant & Wise LLP", init: "GW", subject: "Notice regarding Unit 12", tag: "Legal", status: "To you", tone: "accent" as const },
  ];
  return (
    <Window title="leasing@ — Inbox">
      <ul className="divide-y divide-black/[0.05]">
        {rows.map((r, i) => (
          <li key={r.who} className="flex items-center gap-3 px-4 py-2.5">
            <Avatar initials={r.init} tone={i} />
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2">
                <p className="truncate text-[12.5px] font-semibold tracking-[-0.01em]">{r.who}</p>
                <Pill className="hidden xl:inline-flex">{r.tag}</Pill>
              </div>
              <p className="truncate text-[11px] text-foreground/55">{r.subject}</p>
            </div>
            <span className={`flex shrink-0 items-center gap-1.5 text-[11px] font-semibold ${r.tone === "accent" ? "text-accent" : "text-[#1d7a46]"}`}>
              <Dot tone={r.tone} />
              {r.status}
            </span>
          </li>
        ))}
      </ul>
    </Window>
  );
}

export function DealQueueVisual() {
  const rows = [
    { name: "Garden apartments, 312 units", where: "Richmond, VA", src: "Broker email", score: 92 },
    { name: "Flex industrial, 48k SF", where: "Frederick, MD", src: "OM forward", score: 87 },
    { name: "Neighborhood retail strip", where: "Manassas, VA", src: "CRM", score: 74 },
    { name: "Medical office, 2 buildings", where: "Hagerstown, MD", src: "Broker email", score: 61 },
  ];
  return (
    <Window title="Deal queue">
      <div className="flex items-center gap-2 border-b border-black/[0.06] px-4 py-2.5">
        <p className="text-[12px] font-semibold tracking-[-0.01em]">This week</p>
        <Pill tone="blue">2 duplicates merged</Pill>
        <span className="ml-auto text-[10.5px] font-semibold text-foreground/50">Sorted by fit</span>
      </div>
      <ol className="divide-y divide-black/[0.05]">
        {rows.map((r, i) => (
          <li key={r.name} className="flex items-center gap-3 px-4 py-2.5">
            <span className="w-3 shrink-0 text-[11px] font-semibold tabular-nums text-foreground/40">{i + 1}</span>
            <div className="min-w-0 flex-1">
              <p className="truncate text-[12.5px] font-semibold tracking-[-0.01em]">{r.name}</p>
              <p className="truncate text-[11px] text-foreground/55">{r.where} · {r.src}</p>
            </div>
            <ScoreRing value={r.score} />
          </li>
        ))}
      </ol>
    </Window>
  );
}

export function CrmVisual() {
  const cols: { name: string; items: { t: string; v: string; hot?: boolean }[] }[] = [
    { name: "Prospect", items: [{ t: "Linden Partners", v: "$4.2M" }, { t: "Oakmont Family Office", v: "$2.8M" }] },
    { name: "Touring", items: [{ t: "Harbor Lane Retail", v: "$6.1M" }, { t: "R. Chen", v: "$1.9M" }] },
    { name: "LOI", items: [{ t: "Northgate Capital", v: "$9.4M", hot: true }] },
  ];
  return (
    <Window title="Pipeline">
      <div className="grid grid-cols-3 gap-2 bg-[#fbfbfd] p-3">
        {cols.map((c) => (
          <div key={c.name} className="min-w-0">
            <div className="mb-2 flex items-center justify-between px-1">
              <p className="truncate text-[11px] font-semibold text-foreground/60">{c.name}</p>
              <span className="text-[10.5px] tabular-nums text-foreground/40">{c.items.length}</span>
            </div>
            <div className="space-y-2">
              {c.items.map((it) => (
                <div
                  key={it.t}
                  className={`rounded-[10px] bg-white p-2.5 shadow-[0_1px_2px_rgba(0,0,0,0.06)] ring-1 ${it.hot ? "ring-accent/40" : "ring-black/[0.05]"}`}
                >
                  <p className="truncate text-[11.5px] font-semibold leading-tight tracking-[-0.01em]">{it.t}</p>
                  <p className={`mt-1 text-[11px] font-semibold tabular-nums ${it.hot ? "text-accent" : "text-foreground/55"}`}>{it.v}</p>
                </div>
              ))}
              {c.items.length < 2 && (
                <div className="flex h-[52px] items-center justify-center rounded-[10px] border border-dashed border-black/15 text-[10.5px] text-foreground/35">
                  Drop here
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </Window>
  );
}

export function CompetitorVisual() {
  const rows = [
    { name: "Clarendon Row", co: "Atlas Residential", vac: 9, days: 34 },
    { name: "The Linden", co: "Parkway Mgmt", vac: 6, days: 21 },
    { name: "Glebe Commons", co: "Atlas Residential", vac: 4, days: 9 },
    { name: "Fairfax Lofts", co: "Keystone PM", vac: 2, days: 3 },
  ];
  return (
    <Window title="Vacancies — Arlington">
      <div className="grid grid-cols-[1fr_auto_44px] gap-x-3 border-b border-black/[0.06] px-4 py-2 text-[10.5px] font-semibold text-foreground/45">
        <span>Property</span>
        <span className="w-[92px]">Vacant units</span>
        <span className="text-right">Listed</span>
      </div>
      <ul className="divide-y divide-black/[0.05]">
        {rows.map((r) => (
          <li key={r.name} className="grid grid-cols-[1fr_auto_44px] items-center gap-x-3 px-4 py-2.5">
            <div className="min-w-0">
              <p className="truncate text-[12.5px] font-semibold tracking-[-0.01em]">{r.name}</p>
              <p className="truncate text-[11px] text-foreground/55">{r.co}</p>
            </div>
            <div className="flex w-[92px] items-center gap-2">
              <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-black/[0.07]">
                <div className="h-full rounded-full bg-accent" style={{ width: `${(r.vac / 10) * 100}%` }} />
              </div>
              <span className="w-3 text-right text-[11px] font-semibold tabular-nums">{r.vac}</span>
            </div>
            <span className="text-right text-[11px] tabular-nums text-foreground/55">{r.days}d</span>
          </li>
        ))}
      </ul>
    </Window>
  );
}

export function ContentVisual() {
  return (
    <Window title="Morning briefing">
      <div className="grid gap-0 sm:grid-cols-[0.9fr_1fr]">
        <div className="border-b border-black/[0.06] p-4 sm:border-b-0 sm:border-r">
          <p className="text-[10.5px] font-semibold uppercase tracking-[0.06em] text-foreground/45">Tuesday · 4 stories</p>
          <ul className="mt-2.5 space-y-2.5">
            {[
              "County approves data center rezoning",
              "Multifamily starts slow for third quarter",
              "Two REITs announce merger",
            ].map((h, i) => (
              <li key={h} className="flex gap-2">
                <span className="mt-[3px] text-[10px] font-bold tabular-nums text-accent">{i + 1}</span>
                <p className="text-[11.5px] font-semibold leading-snug tracking-[-0.005em]">{h}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="p-4">
          <div className="flex items-center gap-2">
            <Avatar initials="You" tone={1} />
            <div>
              <p className="text-[11.5px] font-semibold leading-none">Draft post</p>
              <p className="mt-1 text-[10.5px] leading-none text-foreground/50">In your voice · story 1</p>
            </div>
          </div>
          <div className="mt-3 space-y-1.5" aria-hidden>
            <div className="h-[5px] w-full rounded-full bg-black/[0.09]" />
            <div className="h-[5px] w-[94%] rounded-full bg-black/[0.09]" />
            <div className="h-[5px] w-[80%] rounded-full bg-black/[0.09]" />
            <div className="h-[5px] w-[56%] rounded-full bg-black/[0.09]" />
          </div>
          <div className="mt-4 flex gap-2">
            <span className="rounded-full bg-black/[0.06] px-3 py-1 text-[11px] font-semibold">Edit</span>
            <span className="rounded-full bg-accent px-3 py-1 text-[11px] font-semibold text-white">Approve</span>
          </div>
        </div>
      </div>
    </Window>
  );
}

export function FirmBrainVisual() {
  // Positions in % of the diagram box; the hub sits at the centre.
  const nodes = [
    { label: "Email", x: 15, y: 24 },
    { label: "Leases", x: 15, y: 76 },
    { label: "CRM", x: 50, y: 9 },
    { label: "Spreadsheets", x: 50, y: 91 },
    { label: "Property mgmt", x: 85, y: 24 },
    { label: "Accounting", x: 85, y: 76 },
  ];
  return (
    <Window title="Firm brain">
      <div className="grid sm:grid-cols-[1.15fr_1fr]">
        <div className="relative aspect-[16/11] border-b border-black/[0.06] bg-[#fbfbfd] sm:border-b-0 sm:border-r" aria-hidden>
          <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            {nodes.map((n) => (
              <line
                key={n.label}
                x1="50"
                y1="50"
                x2={n.x}
                y2={n.y}
                stroke="rgb(var(--accent))"
                strokeOpacity="0.28"
                strokeWidth="1"
                vectorEffect="non-scaling-stroke"
                strokeDasharray="3 3"
              />
            ))}
          </svg>
          <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center">
            <span className="flex h-14 w-14 items-center justify-center rounded-[16px] bg-accent text-white shadow-float">
              <BrandMarkSquare className="h-10 w-10" />
            </span>
          </div>
          {nodes.map((n) => (
            <span
              key={n.label}
              className="absolute -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full bg-white px-2.5 py-1 text-[10.5px] font-semibold text-foreground/75 shadow-[0_1px_2px_rgba(0,0,0,0.08)] ring-1 ring-black/[0.06]"
              style={{ left: `${n.x}%`, top: `${n.y}%` }}
            >
              {n.label}
            </span>
          ))}
        </div>
        <div className="flex flex-col justify-center gap-2.5 p-4">
          <p className="ml-auto max-w-[88%] rounded-[14px] rounded-br-[4px] bg-black/[0.06] px-3 py-2 text-[11.5px] leading-snug">
            Which Ridgeview leases roll in 2027?
          </p>
          <div className="max-w-[94%] rounded-[14px] rounded-bl-[4px] bg-white px-3 py-2 text-[11.5px] leading-snug ring-1 ring-black/[0.07]">
            <p>
              Three: <b>Acme Retail</b> (Mar), <b>Northgate</b> (Jun), <b>Harbor Lane</b> (Nov) — $412k in annual rent.
            </p>
            <div className="mt-2 flex gap-1.5">
              <Pill>Leases</Pill>
              <Pill>CRM</Pill>
            </div>
          </div>
        </div>
      </div>
    </Window>
  );
}

export function StackVisual() {
  const rows = [
    { name: "CRM", meta: "24 seats", cost: "$34,560", replaced: true },
    { name: "Deal tracker", meta: "Annual plan", cost: "$12,000", replaced: true },
    { name: "Reporting add-on", meta: "Per property", cost: "$9,600", replaced: true },
    { name: "Property management", meta: "Core system", cost: "$48,000", replaced: false },
  ];
  return (
    <Window title="Software spend · yearly" toolbar={<Pill>Example</Pill>}>
      <ul className="divide-y divide-black/[0.05]">
        {rows.map((r) => (
          <li key={r.name} className="flex items-center gap-3 px-4 py-2.5">
            <div className="min-w-0 flex-1">
              <p className="truncate text-[12.5px] font-semibold tracking-[-0.01em]">{r.name}</p>
              <p className="truncate text-[11px] text-foreground/55">{r.meta}</p>
            </div>
            <span className={`text-[12px] font-semibold tabular-nums ${r.replaced ? "text-foreground/40 line-through" : ""}`}>
              {r.cost}
            </span>
            {r.replaced ? <Pill tone="success">Built in-house</Pill> : <Pill>Keep</Pill>}
          </li>
        ))}
      </ul>
      <div className="flex items-end justify-between gap-4 border-t border-black/[0.06] bg-[#fbfbfd] px-4 py-3.5">
        <div>
          <p className="text-[10.5px] font-semibold uppercase tracking-[0.04em] text-foreground/45">Saved per year</p>
          <p className="mt-0.5 text-[22px] font-bold tabular-nums tracking-[-0.02em] text-[#1d7a46]">$51,360</p>
        </div>
        <div className="w-[46%] space-y-1.5" aria-hidden>
          <div className="flex items-center gap-2">
            <span className="w-9 text-[10px] text-foreground/50">Before</span>
            <div className="h-2 flex-1 rounded-full bg-black/20" />
          </div>
          <div className="flex items-center gap-2">
            <span className="w-9 text-[10px] text-foreground/50">After</span>
            <div className="flex-1">
              <div className="h-2 w-[51%] rounded-full bg-accent" />
            </div>
          </div>
        </div>
      </div>
    </Window>
  );
}

/** Hero: the client's AI roadmap, with Chesterbrook doing the work. */
export function RoadmapVisual() {
  const rows = [
    { name: "Firm brain", meta: "Email, leases, CRM connected", status: "Live", tone: "success" as const },
    { name: "Lease abstraction", meta: "412 leases processed", status: "Shipped", tone: "success" as const },
    { name: "Inbox agent", meta: "leasing@ and maintenance@", status: "In review", tone: "blue" as const },
    { name: "CRM replacement", meta: "Replacing 24 seats", status: "Building", tone: "accent" as const, progress: 62 },
    { name: "Deal sourcing", meta: "Loudoun County buy box", status: "Up next", tone: "neutral" as const },
  ];
  return (
    <Window title="Your AI roadmap">
      <div className="grid grid-cols-[1fr_auto] gap-x-4 border-b border-black/[0.06] px-4 py-2 text-[10.5px] font-semibold text-foreground/45 sm:grid-cols-[1fr_120px_auto]">
        <span>Project</span>
        <span className="hidden sm:block">Owner</span>
        <span className="text-right">Status</span>
      </div>
      <ul className="divide-y divide-black/[0.05]">
        {rows.map((r) => (
          <li key={r.name} className="grid grid-cols-[1fr_auto] items-center gap-x-4 px-4 py-3 sm:grid-cols-[1fr_120px_auto]">
            <div className="min-w-0">
              <p className="truncate text-[13px] font-semibold tracking-[-0.01em]">{r.name}</p>
              <p className="truncate text-[11.5px] text-foreground/55">{r.meta}</p>
              {r.progress && (
                <div className="mt-1.5 h-1 w-full max-w-[220px] overflow-hidden rounded-full bg-black/[0.07]">
                  <div className="h-full rounded-full bg-accent" style={{ width: `${r.progress}%` }} />
                </div>
              )}
            </div>
            <span className="hidden items-center gap-2 sm:flex">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-accent text-white">
                <BrandMarkSquare className="h-4 w-4" />
              </span>
              <span className="text-[11.5px] font-semibold text-foreground/70">Chesterbrook</span>
            </span>
            <Pill tone={r.tone} className="justify-self-end">
              {r.status}
            </Pill>
          </li>
        ))}
      </ul>
    </Window>
  );
}

export default function BuildVisual({ id }: { id: BuildId }) {
  switch (id) {
    case "firm-brain":
      return <FirmBrainVisual />;
    case "stack-replacement":
      return <StackVisual />;
    case "deal-sourcing":
      return <DealSourcingVisual />;
    case "lease-abstraction":
      return <LeaseVisual />;
    case "email-agents":
      return <EmailVisual />;
    case "deal-queue":
      return <DealQueueVisual />;
    case "custom-crm":
      return <CrmVisual />;
    case "competitor-watch":
      return <CompetitorVisual />;
    case "content-engine":
      return <ContentVisual />;
  }
}
