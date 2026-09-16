import type { BlogPost } from "../types";

export const howFirmsUseAiPost: BlogPost = {
  slug: "how-real-estate-firms-use-ai",
  title: "How real estate firms are actually using AI",
  subtitle: "What's in production, what's still a demo, and how the gap is widening.",
  description:
    "A function-by-function look at how commercial real estate firms use AI in 2026, from deal sourcing and underwriting to lease abstraction, property operations, and investor reporting, and which use cases are genuinely in production.",
  publishedAt: "2026-09-16",
  keywords: [
    "AI in real estate",
    "AI in commercial real estate",
    "real estate AI use cases",
    "AI deal sourcing",
    "AI underwriting",
    "lease abstraction AI",
    "CRE automation",
    "proptech AI",
    "real estate workflow automation",
  ],
  readingTimeMinutes: 11,
  visual: "function-map",
  tags: ["Acquisitions", "Brokerage", "Operations", "Development"],
  intro: [
    "There's a wide gap in this industry right now between firms that have AI running in production and firms that have AI in a pilot deck. The gap isn't about budget and it isn't about sophistication. It's mostly about whether someone picked a narrow workflow and finished it, versus trying to adopt AI as a category.",
    "Across commercial real estate, property management, and development teams, the pattern is consistent enough to map. This is a function-by-function read on what's actually running, organized the way a real estate business is organized rather than the way a software vendor organizes it.",
  ],
  sections: [
    {
      heading: "Acquisitions and deal sourcing",
      blocks: [
        {
          type: "p",
          text: "This is where AI has produced the most measurable change, because sourcing is fundamentally a data problem and data problems are what software is good at.",
        },
        {
          type: "ul",
          items: [
            "**Off-market identification.** Public records (county assessor data, clerk of court filings, zoning and land use layers, tax status) contain motivation signals that never appear on a listing platform. Ownership structures, transfer history, liens, and permit activity can be assembled into a screening pipeline that surfaces owners worth a call before the property ever goes to market. Most firms pay for a comp network and ignore this layer entirely; it's the most common gap Chesterbrook AI finds in a sourcing operation. It's covered in [the public data no one in CRE actually uses](/blog/public-cre-data-no-one-uses).",
            "**Buy box screening at volume.** A screening engine applies your actual criteria (size, zoning, submarket, tenancy, age, ownership type) across thousands of parcels continuously, rather than an analyst applying them across a few dozen when someone remembers to. The output is a ranked list, not a database dump.",
            "**Inbound deal normalization.** Broker emails, CRM entries, and blind PDFs arrive in a dozen formats. AI normalizes them into one queue, dedupes against what you've already seen, enriches with data you have, and scores against your criteria. Firms that do this stop losing deals in an inbox.",
            "**Owner contact resolution.** Turning an LLC on a deed into a human with a phone number is a research task that used to eat analyst days. It's now an on-demand lookup.",
          ],
        },
      ],
    },
    {
      heading: "Underwriting and diligence",
      blocks: [
        {
          type: "p",
          text: "Underwriting AI is real but narrower than the marketing suggests. The document work has largely been solved; the judgment work has not.",
        },
        {
          type: "ul",
          items: [
            "**Lease abstraction.** Extracting terms, dates, options, escalations, and clauses from lease PDFs into a structured format is the most mature AI capability in real estate. Specialized tools still have an edge at institutional scale, but for most mid-market operators the gap has closed.",
            "**Document review and issue flagging.** PSAs, leases, and loan documents can be read against a criteria set to surface unusual terms before they reach counsel. This does not replace legal review — it narrows what you're paying counsel to find, which is a real and underrated saving.",
            "**Diligence package triage.** A data room arrives with several hundred files. AI inventories it, identifies what's missing against a checklist, and summarizes what's there. Analysts still verify, but they start from a map instead of a pile.",
            "**Model support, not model outputs.** AI is useful for building and checking the structure of an underwriting model. It should not be trusted to produce the numbers inside it. Anything arithmetic should be computed by code or pulled from a system, never generated in a model's reasoning.",
          ],
        },
      ],
    },
    {
      heading: "Brokerage",
      blocks: [
        {
          type: "p",
          text: "Brokerage adoption is the most uneven of any segment: some shops are running sophisticated workflows and others are entirely untouched.",
        },
        {
          type: "ul",
          items: [
            "**LOI and proposal drafting.** Built on a curated library of your own past deals, a drafting tool produces a first pass in your firm's language and structure rather than generic output. This is one of the highest-leverage brokerage builds because the raw material already exists in your files.",
            "**Deal and comp lookup.** Natural-language search across your own historical deals, comps, and email history. Most brokerages have a decade of institutional knowledge sitting in an inaccessible archive.",
            "**Pursuit and marketing content.** Property one-pagers, market summaries, and outreach material drafted from your data and reviewed by a person.",
            "**Pipeline hygiene.** Automatic logging of broker communications into a deal tracker, so the CRM reflects reality without anyone maintaining it.",
          ],
        },
      ],
    },
    {
      heading: "Property management and operations",
      blocks: [
        {
          type: "p",
          text: "The highest-volume category, and the one with the clearest daily payback. Maintenance intake and triage, inbound tenant and prospect communication, vendor coordination, monthly owner reporting, and review monitoring are all running in production today, and together they make up the largest share of what Chesterbrook AI builds. This segment is covered in depth in [AI for property management](/blog/ai-for-property-management).",
        },
        {
          type: "p",
          text: "The constraint in this category is rarely capability. It's integration, meaning how accessible your property management platform is to outside software, and whether the reference information about your buildings exists anywhere an automated system can reach.",
        },
      ],
    },
    {
      heading: "Development",
      blocks: [
        {
          type: "p",
          text: "Development has been slower to adopt than acquisitions, largely because the workflows are less uniform. The use cases that work are the ones tied to public information and long timelines.",
        },
        {
          type: "ul",
          items: [
            "**Site identification and feasibility screening** against zoning, land use, utility, and environmental constraints.",
            "**Entitlement and approval tracking** across municipal meeting agendas, minutes, and permit systems.",
            "**Construction administration**: RFI and submittal triage, change order summarization, draw package assembly.",
          ],
        },
        {
          type: "p",
          text: "This segment is covered in more depth in [AI for real estate developers](/blog/ai-for-real-estate-developers).",
        },
      ],
    },
    {
      heading: "Asset management and investor relations",
      blocks: [
        {
          type: "p",
          text: "The newest area of real adoption, and the one likely to see the most movement over the next year.",
        },
        {
          type: "ul",
          items: [
            "**Investor reporting.** Quarterly letters, capital account summaries, and LP updates involve assembling the same narrative around different numbers every period. The narrative layer drafts well.",
            "**Lease administration.** Critical date tracking, option windows, escalation triggers, obligations that are expensive to miss and tedious to monitor.",
            "**Portfolio question answering.** Natural-language questions across your own lease library, budgets, and reporting, answered from your actual documents rather than someone's recollection.",
          ],
        },
      ],
    },
    {
      heading: "What separates the firms that get it working",
      blocks: [
        {
          type: "p",
          text: "Four things, consistently, across the engagements Chesterbrook AI has run, and none of them are about which model or platform anyone chose.",
        },
        {
          type: "ul",
          items: [
            "**They started narrow and finished.** One workflow, shipped, in production, being used daily. Firms that tried to adopt AI as a program rather than a project are mostly still in pilot.",
            "**They put the output where the work already happens.** Outlook, Gmail, Slack, the PMS, the CRM. Tools that live in their own tab get abandoned.",
            "**They kept a human at the decision point.** AI drafts, a person approves. This is what makes the system trustworthy internally, and internal trust is what determines whether anyone keeps using it.",
            "**They fixed the data layer first when they needed to.** Not a full data project — just enough to make answers specific. The firms with the most impressive AI results almost always did unglamorous work on their records first.",
          ],
        },
      ],
    },
    {
      heading: "What isn't working yet",
      blocks: [
        {
          type: "p",
          text: "Fully autonomous decisioning. Any workflow where AI executes a consequential action without review has a poor track record in this industry, not because the technology can't but because the accountability structure can't absorb it.",
        },
        {
          type: "p",
          text: "Anything requiring genuinely current market data that isn't in a system you can query. General AI tools are not a market data source, and treating them as one produces confident, wrong answers.",
        },
        {
          type: "p",
          text: "Highly variable judgment work with no consistent output shape. If the process is different every time by design, automating it isn't the opportunity — your people are.",
        },
      ],
    },
    {
      heading: "About Chesterbrook AI",
      blocks: [
        {
          type: "p",
          text: "Chesterbrook AI is a consulting and software firm based in McLean, Virginia, serving commercial real estate, property management, and development clients. Its work spans deal sourcing engines, lease abstraction, custom CRMs, email agents, and internal tooling.",
        },
        {
          type: "p",
          text: "Engagements generally begin with a discovery period: calls with the team, a walkthrough of day-to-day operations, a review of existing data. That produces a roadmap of what to automate and in what sequence. From there the work splits between training staff on tools that already exist and building custom software for the parts that need it. Clients own everything built for them.",
        },
        {
          type: "p",
          text: "If any of the use cases above describes work a team is currently doing by hand, it's worth a conversation.",
        },
      ],
    },
  ],
  faq: [
    {
      question: "What is the most common AI use case in commercial real estate?",
      answer:
        "Document extraction, meaning lease abstraction and structured data pulled from PDFs, is the most widely deployed, followed by inbound communication handling and deal sourcing from public records.",
    },
    {
      question: "Do real estate firms build AI tools or buy them?",
      answer:
        "Both. Off-the-shelf platforms handle common needs; custom builds handle workflows specific to a firm's data and process. The line has moved toward custom as build costs have fallen. A framework for deciding is in [what CRE software is still worth paying for](/blog/what-cre-software-is-still-worth-paying-for).",
    },
    {
      question: "How large does a firm need to be to use AI effectively?",
      answer:
        "Smaller than most people assume. The threshold is workflow volume, not headcount — a five-person shop with high daily transaction volume gets more from automation than a fifty-person firm with variable, judgment-heavy work.",
    },
    {
      question: "Which AI tools do real estate firms use?",
      answer:
        "General-purpose assistants like Claude and ChatGPT for individual work, workflow tools like Zapier, Make, and n8n for light automation, and custom software for anything that needs to know the firm's own data.",
    },
    {
      question: "What's the biggest mistake firms make adopting AI?",
      answer:
        "Signing an annual platform contract before validating the workflow, and starting with the hardest problem instead of the most repetitive one.",
    },
  ],
  related: [
    "ai-for-property-management",
    "public-cre-data-no-one-uses",
    "how-to-start-using-ai-in-cre",
  ],
};
