/**
 * Site copy and structure. Everything a visitor reads outside the blog lives
 * here, so the voice stays consistent page to page.
 */

export const navLinks = [
  { label: "Work", href: "/work" },
  { label: "Approach", href: "/approach" },
  { label: "Team", href: "/team" },
  { label: "Insights", href: "/blog" },
] as const;

export type BuildId =
  | "firm-brain"
  | "stack-replacement"
  | "deal-sourcing"
  | "lease-abstraction"
  | "email-agents"
  | "deal-queue"
  | "custom-crm"
  | "competitor-watch"
  | "content-engine";

export type Build = {
  id: BuildId;
  /** The part of the business it serves. */
  area: string;
  name: string;
  /** Short, declarative headline. */
  headline: string;
  summary: string;
  /** Longer copy for the Work page. */
  detail: string;
  /** What goes in, what comes out, where a person signs off. */
  input: string;
  output: string;
  check: string;
};

export const builds: Build[] = [
  {
    id: "firm-brain",
    area: "Foundation",
    name: "Firm brain",
    headline: "One brain for your whole firm.",
    summary: "Your whole tech stack, connected to one AI that knows your business.",
    detail:
      "We connect email, leases, your CRM, your property management system, and your spreadsheets to a single AI layer. Every tool and teammate works from the same knowledge — so you pay for it once, not as an add-on in every app.",
    input: "Your whole tech stack",
    output: "One AI that knows your firm",
    check: "Runs in accounts you own",
  },
  {
    id: "stack-replacement",
    area: "Software costs",
    name: "Stack replacement",
    headline: "Stop renting your software.",
    summary: "Expensive subscriptions, rebuilt as internal tools you own.",
    detail:
      "Most firms pay for seats and features they barely use. We rebuild the parts you need — CRM, trackers, reporting — as internal tools, and you cancel the subscription.",
    input: "Your software bills",
    output: "Internal tools you own",
    check: "We only replace what pays back",
  },
  {
    id: "deal-sourcing",
    area: "Acquisitions",
    name: "Deal sourcing",
    headline: "Off-market, on your desk.",
    summary: "Properties that fit your buy box, with the owner’s number attached.",
    detail:
      "We watch public records and listings for properties that match your criteria. Each one arrives with the owner’s name and number, ready to call.",
    input: "Your buy box",
    output: "A daily call list",
    check: "You set the criteria",
  },
  {
    id: "lease-abstraction",
    area: "Underwriting",
    name: "Lease abstraction",
    headline: "Every lease, in your spreadsheet.",
    summary: "Lease terms pulled from PDFs into your template.",
    detail:
      "Drop in leases, scanned or native. We pull the terms you care about into your template, each linked to the clause it came from.",
    input: "Lease PDFs",
    output: "Your abstract, filled in",
    check: "A person reviews every field",
  },
  {
    id: "email-agents",
    area: "Operations",
    name: "Email agents",
    headline: "An inbox that sorts itself.",
    summary: "Replies drafted in your voice. Only the hard ones reach you.",
    detail:
      "Every message is sorted and answered the way your team would. Routine threads are handled. Anything unusual goes to a person.",
    input: "Your shared inboxes",
    output: "Ready-to-send drafts",
    check: "Escalations go to a person",
  },
  {
    id: "deal-queue",
    area: "Investments",
    name: "Inbound deal queue",
    headline: "Every deal. One ranked list.",
    summary: "Inbound deals merged, cleaned up, and scored.",
    detail:
      "Broker emails, forwarded OMs, and CRM entries land in one queue — de-duplicated and ranked against your buy box.",
    input: "Emails, OMs, CRM",
    output: "One scored pipeline",
    check: "You set the weights",
  },
  {
    id: "custom-crm",
    area: "Platforms",
    name: "Custom CRM",
    headline: "A CRM shaped like your firm.",
    summary: "Built around how you work. Owned by you.",
    detail:
      "Your stages, your fields, your reports. It replaces the subscription, and it’s yours outright.",
    input: "Your process and contacts",
    output: "A CRM your team uses",
    check: "You own code and data",
  },
  {
    id: "competitor-watch",
    area: "Property management",
    name: "Competitor watch",
    headline: "Know who’s vacant first.",
    summary: "Competitor vacancies by address, every morning.",
    detail:
      "We track competing listings in your market and send a daily report of who’s vacant, and for how long.",
    input: "Your market",
    output: "A daily vacancy report",
    check: "Sent where you choose",
  },
  {
    id: "content-engine",
    area: "Marketing",
    name: "Content engine",
    headline: "Stay in the conversation.",
    summary: "A daily briefing, plus posts drafted in your voice.",
    detail:
      "A short morning briefing on your niche, with a post drafted for each story worth sharing. Nothing goes out without your yes.",
    input: "Your niche",
    output: "Briefings and drafts",
    check: "You approve every post",
  },
];

export type Step = {
  number: string;
  name: string;
  headline: string;
  body: string;
  deliverables: string[];
};

export const steps: Step[] = [
  {
    number: "01",
    name: "Listen",
    headline: "We learn how you work.",
    body: "We sit in on calls and map your tools and data.",
    deliverables: ["Team interviews", "A map of your stack", "The bottlenecks worth fixing"],
  },
  {
    number: "02",
    name: "Plan",
    headline: "A roadmap, not a pitch.",
    body: "What to build, buy, or cut — ranked by return.",
    deliverables: ["Ranked projects", "Software worth cancelling", "A scoped first build"],
  },
  {
    number: "03",
    name: "Build",
    headline: "We ship it.",
    body: "First versions in weeks. You own every line.",
    deliverables: ["Custom software", "Team training", "Full ownership"],
  },
  {
    number: "04",
    name: "Run",
    headline: "We keep it running.",
    body: "Fixes, upgrades, and the next project on the list.",
    deliverables: ["Maintenance and fixes", "Improvements as you grow", "The next project, queued"],
  },
];

export const principles = [
  { title: "You meet the builders.", body: "No account managers. No hand-offs." },
  { title: "You own everything.", body: "Code, data, and accounts in your name." },
  { title: "A person checks the work.", body: "AI drafts. Your team decides." },
  { title: "It fits your stack.", body: "No new platform to move into." },
] as const;

export const faqs = [
  {
    q: "Why not hire engineers?",
    a: "You get a team that already knows real estate and AI — without recruiting, managing, or keeping them busy.",
  },
  {
    q: "What’s a firm brain?",
    a: "One AI layer connected to all your systems. Every tool and teammate draws on the same knowledge, so AI gets more useful and cheaper to run.",
  },
  {
    q: "Can you replace our software?",
    a: "Often. We’ll show you which subscriptions are worth replacing, and what you’d save, before we build anything.",
  },
  {
    q: "How fast?",
    a: "Focused builds ship a first version in one to three weeks. Bigger ones arrive in stages.",
  },
  {
    q: "What does it cost?",
    a: "Single-workflow builds usually run from the low four to low five figures. You get a fixed price before we start.",
  },
  {
    q: "Who owns it?",
    a: "You do — code, data, and accounts.",
  },
] as const;
