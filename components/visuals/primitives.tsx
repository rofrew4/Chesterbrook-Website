import type { ReactNode } from "react";
import { BrandMarkSquare } from "../BrandMark";

export function Window({
  title,
  children,
  className = "",
  toolbar,
}: {
  title: string;
  children: ReactNode;
  className?: string;
  toolbar?: ReactNode;
}) {
  return (
    <div
      className={`overflow-hidden rounded-[14px] bg-white text-left font-sans text-foreground shadow-window ring-1 ring-black/[0.06] ${className}`}
    >
      <div className="flex h-9 items-center gap-3 border-b border-black/[0.06] bg-[#fbfbfd] px-3.5">
        <div className="flex gap-1.5" aria-hidden>
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        </div>
        <p className="min-w-0 flex-1 truncate text-center text-[11.5px] font-semibold tracking-[-0.005em] text-foreground/70">
          {title}
        </p>
        <div className="flex min-w-[42px] justify-end">{toolbar}</div>
      </div>
      {children}
    </div>
  );
}

export function Pill({
  children,
  tone = "neutral",
  className = "",
}: {
  children: ReactNode;
  tone?: "neutral" | "accent" | "success" | "blue";
  className?: string;
}) {
  const tones = {
    neutral: "bg-black/[0.05] text-foreground/70",
    accent: "bg-accent/10 text-accent",
    success: "bg-[#1d8a4e]/10 text-[#1d7a46]",
    blue: "bg-[#0071e3]/10 text-[#0064c8]",
  } as const;
  return (
    <span
      className={`inline-flex shrink-0 items-center gap-1 whitespace-nowrap rounded-full px-2 py-[3px] text-[10.5px] font-semibold leading-none ${tones[tone]} ${className}`}
    >
      {children}
    </span>
  );
}

export function Dot({ tone = "success" }: { tone?: "success" | "accent" | "muted" }) {
  const c = { success: "bg-[#28a35a]", accent: "bg-accent", muted: "bg-black/20" }[tone];
  return <span aria-hidden className={`inline-block h-1.5 w-1.5 shrink-0 rounded-full ${c}`} />;
}

export function CheckCircle({ done = true }: { done?: boolean }) {
  return done ? (
    <span aria-hidden className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#28a35a] text-white">
      <svg viewBox="0 0 16 16" className="h-2.5 w-2.5" fill="none" stroke="currentColor" strokeWidth={2.6} strokeLinecap="round" strokeLinejoin="round">
        <path d="m4 8.5 2.5 2.5L12 5" />
      </svg>
    </span>
  ) : (
    <span aria-hidden className="h-4 w-4 shrink-0 rounded-full border-[1.5px] border-dashed border-black/25" />
  );
}

export function ScoreRing({ value, size = 30 }: { value: number; size?: number }) {
  const r = (size - 4) / 2;
  const c = 2 * Math.PI * r;
  return (
    <span className="relative inline-flex shrink-0 items-center justify-center" style={{ width: size, height: size }}>
      <svg viewBox={`0 0 ${size} ${size}`} className="absolute inset-0 -rotate-90" aria-hidden>
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="rgba(0,0,0,0.07)" strokeWidth={3} />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke="rgb(var(--accent))"
          strokeWidth={3}
          strokeLinecap="round"
          strokeDasharray={`${(value / 100) * c} ${c}`}
        />
      </svg>
      <span className="text-[10px] font-bold tabular-nums text-foreground">{value}</span>
    </span>
  );
}

export function Avatar({ initials, tone = 0 }: { initials: string; tone?: number }) {
  const tones = ["bg-[#e8e8ed] text-foreground/70", "bg-accent/10 text-accent", "bg-[#0071e3]/10 text-[#0064c8]", "bg-[#1d8a4e]/10 text-[#1d7a46]"];
  return (
    <span
      aria-hidden
      className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[10px] font-bold ${tones[tone % tones.length]}`}
    >
      {initials}
    </span>
  );
}

/** Notification-style floating card, on translucent material. */
export function Notification({
  app,
  title,
  body,
  time = "now",
  className = "",
  action,
}: {
  app: string;
  title: string;
  body: string;
  time?: string;
  className?: string;
  action?: string;
}) {
  return (
    <div
      className={`material-chip w-[268px] rounded-[18px] p-3 text-left font-sans shadow-float ring-1 ring-black/[0.06] ${className}`}
    >
      <div className="flex items-start gap-2.5">
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[9px] bg-accent text-white">
          <BrandMarkSquare className="h-6 w-6" />
        </span>
        <div className="min-w-0 flex-1">
          <div className="flex items-baseline justify-between gap-2">
            <p className="truncate text-[10.5px] font-semibold uppercase tracking-[0.02em] text-foreground/55">{app}</p>
            <p className="shrink-0 text-[10.5px] text-foreground/45">{time}</p>
          </div>
          <p className="mt-0.5 text-[13px] font-semibold leading-snug tracking-[-0.01em] text-foreground">{title}</p>
          <p className="mt-0.5 text-[12px] leading-snug text-foreground/70">{body}</p>
          {action && (
            <span className="mt-2 inline-flex rounded-full bg-black/[0.06] px-2.5 py-1 text-[11px] font-semibold text-foreground">
              {action}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
