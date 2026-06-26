export interface ZigzagItem {
  id: string;
  tag: string;
  title: string;
  description: string;
  /** Drop your Figma export in public/mockups/ and set the path here */
  mockupSrc?: string;
  mockupAlt: string;
  /** CSS blur in pixels — applied via inline style so it always renders */
  mockupBlur?: number;
  reverse?: boolean;
}

export const projectExamples: ZigzagItem[] = [
  {
    id: "deal-sourcing",
    tag: "Acquisition",
    title: "Deal sourcing",
    description:
      "Continuous monitoring for off-market opportunities matched to your buy box. Surfaces owner contact details as a ready-to-call list of addresses and phone numbers.",
    mockupAlt: "Off-market lead list with addresses and phone numbers",
  },
  {
    id: "lease-abstraction",
    tag: "Underwriting",
    title: "Lease abstraction & underwriting",
    description:
      "Structured extraction from lease PDFs into the spreadsheet format your team already uses. OCR plus LLM parsing with human review on every field.",
    mockupAlt: "Lease abstraction interface",
  },
  {
    id: "content-engine",
    tag: "Marketing",
    title: "Content engine",
    description:
      "Scrapes relevant news sources and websites in your niche, delivers you daily reports on current events, generates posts on each topic in your voice, then routes everything through a human review queue.",
    mockupAlt: "Content review queue with drafts, channels, and statuses",
  },
  {
    id: "email-agents",
    tag: "Operations",
    title: "Email agents",
    description:
      "Reads inbound mail, classifies intent, drafts a reply in your voice, and surfaces anything that needs a human. Routine threads handled end-to-end, exceptions escalated cleanly.",
    mockupAlt: "Inbox triage with intent classification and actions",
  },
  {
    id: "inbound-investment-list",
    tag: "Investment",
    title: "Inbound investment list",
    description:
      "Normalizes incoming deals from brokers, emails, and CRMs into one ranked queue. Dedupes, enriches, and scores against your buy box so nothing slips and your team works the top of the list first.",
    mockupAlt: "Inbound deal queue ranked by fit score",
  },
  {
    id: "custom-crms",
    tag: "Platforms",
    title: "Custom CRMs",
    description:
      "Purpose-built CRMs that replace your Salesforce or HubSpot stack, modeled on how your team actually works, not a generic sales pipeline. Owns your contacts, deals, comms, and reporting in one place you control.",
    mockupAlt: "Custom CRM leads kanban board",
  },
  {
    id: "competitor-scraping",
    tag: "Property Management",
    title: "Competitor scraping",
    description:
      "Scrapes competitor listings and delivers a daily feed of property addresses with vacancy counts, so your team knows exactly who to call.",
    mockupAlt: "Competitor vacancy list by address",
  },
];

export const engagementPhases = [
  {
    id: "discovery",
    title: "Discovery",
    description:
      "We embed with your business, take calls with your employees, and walk through your day-to-day processes & operations. We find where time is being wasted, and unnecessary bottlenecks.",
  },
  {
    id: "roadmap",
    title: "Roadmap",
    description:
      "We deliver you a roadmap of where your company and employees would benefit from automation — how you can find more deals, where you can improve efficiency, and take advantage of hidden data.",
  },
  {
    id: "train-build",
    title: "Train & build",
    description:
      "We train your employees on existing AI tools and build custom software to solve your bottlenecks. You own all finished software.",
  },
];
