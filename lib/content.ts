export interface ZigzagItem {
  id: string;
  tag: string;
  title: string;
  description: string;
  /** Drop your Figma export in public/mockups/ and set the path here */
  mockupSrc?: string;
  mockupAlt: string;
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
    id: "competitor-scraping",
    tag: "Property Management",
    title: "Competitor scraping",
    description:
      "Scrapes competitor listings and delivers a daily feed of property addresses with vacancy counts — so your team knows exactly who to call.",
    mockupAlt: "Competitor vacancy list by address",
  },
  {
    id: "lease-abstraction",
    tag: "Underwriting",
    title: "Lease abstraction & underwriting",
    description:
      "Structured extraction from lease PDFs into the spreadsheet format your team already uses. OCR plus LLM parsing with human review on every field.",
    mockupAlt: "Lease abstraction interface",
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
