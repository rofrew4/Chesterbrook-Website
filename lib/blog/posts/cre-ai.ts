import type { BlogPost } from "../types";

export const creAiPost: BlogPost = {
  slug: "how-to-start-using-ai-in-cre",
  title: "How to actually start using AI in your CRE business",
  subtitle: "A practical sequence — not a platform pitch.",
  description:
    "A step-by-step guide for CRE operators adopting AI: from Claude and ChatGPT basics to workflow automation and custom builds. Know when off-the-shelf stops working and what custom actually means in 2026.",
  publishedAt: "2026-06-18",
  keywords: [
    "AI for commercial real estate",
    "CRE AI adoption",
    "property management AI",
    "real estate workflow automation",
    "custom CRE software",
    "ChatGPT for real estate",
    "CRE technology",
    "AI implementation CRE",
  ],
  readingTimeMinutes: 11,
  visual: "ai-stages",
  intro: [
    "Every AI vendor pitching CRE right now wants to sell you a platform. Most operators I talk to are paralyzed by where to start, and the platforms aren't actually the answer — at least not first. This is the sequence we walk new clients through when they're trying to figure out where to begin and what's worth committing to.",
    "It's not a list of tools. It's a way of thinking about the progression. Each stage has real value, and each stage has a ceiling that comes faster than most operators expect.",
  ],
  sections: [
    {
      heading: "The mindset shift, before anything else",
      paragraphs: [
        "AI is not a product you buy. It is not a platform you log into. It is not a feature your existing software vendor sells you as a premium upgrade. AI is how the work gets done — and the operators getting real leverage from it are the ones who treat it that way.",
        "The most expensive mistake we see at the starting line is signing an annual contract with an AI vendor before anyone on the team has spent a month using base AI on real workflows. You don't know what you actually need until you've felt the ceiling on the simple version. Start with experiments. Commitments come later.",
      ],
    },
    {
      heading: "Stage 1: the basics, and where they fall over",
      paragraphs: [
        "A general-purpose AI tool — Claude, ChatGPT, similar — handles a real set of tasks well. It's where every operator should start. It's also where most operators overestimate what they're getting, which is why a clear-eyed view of the ceiling matters.",
        "What it does well, used carefully:",
      ],
      list: [
        "Document Q&A — Upload a lease, an OM, an inspection report, or a financial package and ask specific questions. It's faster than skimming and the answers are usually right — though usually is the operative word, and you should always verify on anything that matters.",
        "Email drafting — Routine emails draft well. The 40% that require real judgment do not. Knowing the difference matters more than knowing the tool.",
        "Market research — Useful for getting up to speed on a submarket you don't know. Not useful for anything where current data matters.",
        "Spreadsheet and modeling help — Good for structural work, not for the actual numbers — never trust it on financial figures without verification.",
      ],
    },
    {
      paragraphs: [
        "The ceiling on Stage 1 comes faster than most operators expect:",
      ],
      list: [
        "It has no access to your data unless you paste it in. Every task starts and ends with copy-paste.",
        "It doesn't remember anything between conversations.",
        "The outputs are generic by default.",
        "It can't trigger anything on a schedule or when an event happens.",
        "Most operators hit the ceiling on Stage 1 within a few months of regular use. That's not a failure of the tool — it's the tool working exactly as designed.",
      ],
    },
    {
      heading: "Stage 2: light automation, and where it falls over too",
      paragraphs: [
        "The next layer is workflow tools — Zapier, Make, n8n — connected to AI APIs. This unlocks scheduled tasks, triggered workflows, and light integration with the tools you already use.",
        "What this unlocks: auto-logging broker emails into a deal tracker, pulling data on a schedule, drafting reply suggestions, routing classified inquiries, generating weekly summaries from new documents.",
        "These are real, useful, and worth doing. They're also general-purpose tools that have no idea what a lease is or what your portfolio looks like. You'll spend significant time configuring them, debugging them, and rebuilding them when APIs change.",
        "The honest framing on Stage 2: it's a meaningful upgrade from Stage 1, and it has its own ceiling. For some operators, Stage 2 is the right permanent home. For most who reach it, it becomes a stepping stone.",
      ],
    },
    {
      heading: "The signs you've outgrown off-the-shelf",
      paragraphs: [
        "There are four signals that consistently mean off-the-shelf has stopped working. You don't need all four. Two is usually enough to start the conversation.",
      ],
      list: [
        "You're copy-pasting into a generic AI tool dozens of times a day.",
        "You have data sources nobody else has — your lease library, deal flow, tenant communications — and none of it is being used by your AI workflows.",
        "You have workflows with four or more steps that always run together.",
        "The outputs are generic because the AI doesn't know your business.",
        "When two of these are true, the math has flipped. The cost of staying on off-the-shelf exceeds the cost of custom.",
      ],
    },
    {
      heading: "What custom actually is",
      paragraphs: [
        "Custom doesn't mean a six-month enterprise project. It doesn't mean software that's frozen once it ships.",
        "The current pattern is narrow and fast. A V1 ships in one to three weeks. The scope is one workflow, not a platform. You see a working demo from the first week.",
        "Custom means the AI knows your business. It has access to your leases, deals, communications, and portfolio. It triggers automatically when an event happens. The output lives where your work already lives — Gmail, Outlook, your PMS, your CRM.",
        "This is what we do at Chesterbrook. We don't sell platforms. We don't replace your system of record. We build the workflows around it that make AI actually useful for a real CRE business.",
      ],
    },
    {
      heading: "The five pitfalls",
      paragraphs: ["A few of the patterns that consistently go wrong, at every stage."],
      list: [
        "Don't sign annual contracts with AI vendors before you've validated the workflow.",
        "Don't pay your existing software vendor a premium for bolted-on AI features.",
        "Don't let any vendor own your data. Always have an export path documented before you sign.",
        "Don't start with your hardest problem. Start with the most repetitive one.",
        "Don't build something nobody on your team will actually use.",
      ],
    },
    {
      paragraphs: [
        "If you've worked through the stages above and you're seeing the signs in section four, that's the conversation we have with new clients. Reach out — we'll figure out whether you're actually ready for custom, or whether another quarter in Stage 1 is the right call for where you are.",
      ],
    },
  ],
};
