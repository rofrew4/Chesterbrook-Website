import type { BlogPost } from "../types";

export const creSoftwarePost: BlogPost = {
  slug: "what-cre-software-is-still-worth-paying-for",
  title: "What CRE software is still worth paying for",
  subtitle: "A structural shift is happening underneath the renewal forms.",
  description:
    "CRE SaaS pricing, AI bolt-ons, and switching costs are changing fast. A practical framework for which property management, deal sourcing, and document tools are still worth renewing — and when custom workflows win.",
  publishedAt: "2026-06-18",
  keywords: [
    "CRE software",
    "commercial real estate SaaS",
    "property management software",
    "deal sourcing platforms",
    "lease abstraction tools",
    "build vs buy CRE",
    "CRE technology stack",
    "AI for real estate",
  ],
  readingTimeMinutes: 10,
  visual: "software-stack",
  intro: [
    "Every CRE operator I talk to is paying for at least one piece of software they're not sure they need anymore. The renewal comes around, the price went up again, the feature set didn't change, and the conversation goes the same way every time: \"we should probably look at this, but it's not worth the disruption right now.\"",
    "That logic was correct three years ago. It's getting less correct every quarter, and most operators haven't updated their assumptions yet. The structural reasons are worth understanding even if you decide to renew everything.",
  ],
  sections: [
    {
      heading: "Why CRE SaaS is breaking specifically",
      paragraphs: [
        "This isn't a generic \"AI changes everything\" argument. The shift in CRE has four specific causes, and they all push in the same direction.",
      ],
      list: [
        "Per-unit pricing was designed for a world without custom alternatives. When the dominant CRE platforms set their pricing models a decade ago, the choice was buy-their-platform or build-nothing. Custom development meant a six-figure project, a year of timeline, and an internal team to maintain it. So per-door, per-seat, per-deal pricing felt cheap by comparison. That comparison has changed materially. The platforms haven't repriced.",
        "The big platforms were built before modern AI. They're now adding AI features to legacy codebases, which is fundamentally different from building AI-native from scratch. The results are typically narrow — a lease abstraction module, a summarization tool, an \"AI assistant\" inside the existing UI — and the price is a markup on top of your base subscription. You're paying a vendor margin for an API you could call directly.",
        "Switching costs have collapsed. Data export used to be a nightmare. Most platforms now have either documented export paths, SFTP feeds, or active third-party tools that move data between systems. Migrations that used to be six-month enterprise projects can run in six weeks if scoped properly. The \"we'd never switch because it's too painful\" defense is weaker than it was.",
        "The cost of custom has dropped by an order of magnitude. Not because development is cheap — it isn't — but because AI has compressed the parts of the build that used to take the longest. Document extraction, structured data parsing, classification, drafting, search across unstructured documents — these used to require months of engineering. They're now days of engineering. The economics flipped fast, and they kept flipping.",
      ],
    },
    {
      paragraphs: [
        "Each of these on its own is interesting. Together, they mean the build-versus-buy line for a meaningful chunk of CRE software has moved. Some categories have crossed it already. Others haven't, and might never. The work is knowing which is which.",
      ],
    },
    {
      heading: "The four categories worth re-evaluating",
      paragraphs: [
        "Property management software. The big platforms in this category are still genuinely good at what they do — accounting, compliance, tenant ledgers, integrations with the major banks and payment processors. That's not where the value gap is. The gap is in everything around the core: the workflows your team builds on top of the platform that the platform itself doesn't actually power. Inbox management, leasing communications, maintenance triage, reporting customization, the things you've duct-taped together over years. Replacing the core platform is a serious project. Replacing the workflows around it is not.",
        "Deal sourcing platforms. What you're paying for here is the comp network — the pre-aggregated database of marketed deals, recent sales, ownership records, and tenant data. If you operate at scale in core MSAs, the comp network is the product and it's hard to replicate. If you operate in tertiary markets or you only need owner contacts in a defined geography, you are almost certainly overpaying for coverage you don't use.",
        "Lease abstraction and document intelligence. This is the most replaceable category right now. The dedicated tools in this space were built when LLMs couldn't reliably read a lease. They can now. The gap between a generic AI doing this work and a specialized tool doing this work has narrowed faster than most operators realize. The specialized tools still have an edge on accuracy at scale and on workflow integration, but for most mid-market operators, the gap is no longer worth the line item.",
        "Bolt-on \"AI features\" from your existing PMS. This is almost always the worst-value category in the stack. Your platform vendor is wrapping a third-party AI API, marking it up, and selling it back to you as a premium feature. You can call the same API directly for a fraction of the cost, with more control over the prompt, more flexibility in the workflow, and no data leaving your stack into a third party's training data.",
      ],
    },
    {
      heading: "The five questions before any major renewal",
      paragraphs: ["A practical filter for whether a piece of software is still pulling its weight."],
      list: [
        "Are we using more than 40% of what we're paying for? If most of the feature set is unused, you're not paying for software — you're paying for the parts of it you actually use, at the rate of the whole thing.",
        "Is the line item growing faster than the revenue it supports? Per-unit, per-seat, and per-deal pricing scale linearly with your growth. A custom build is fixed. The gap widens with your portfolio, and it widens fastest right when you can least afford it.",
        "Can the same workflow be assembled from cheaper parts? A platform replaces ten things. If you only use three of them, those three can usually be assembled from base AI, a workflow tool, and a small custom layer.",
        "What's the real switching cost, and are we just paying to avoid it? A renewal made out of inertia is not a decision. It's a non-decision dressed up as one. The right question is whether you'd pick this tool today if you were starting from scratch.",
        "Does an LP, parent, partner, or regulator require this specific tool? If yes, the conversation is over and you renew. If no, nothing is sacred.",
      ],
    },
    {
      heading: "When not to replace",
      paragraphs: [
        "The honest part. Custom is not always the right answer, and the pitches that say otherwise are selling something.",
        "Anything tied to institutional LP reporting is off the table. If your investor expects a specific platform's reports because that's what they expect from every sponsor in their book, the cost of being different exceeds the cost of the subscription.",
        "Comp networks where the network is the product. The biggest sourcing platforms are expensive because their data is genuinely hard to replicate at scale. If you actually use the depth, you pay for it.",
        "Anything where adoption took years and the workflow is now load-bearing. Disruption has a cost that doesn't show up on the invoice. A platform your team actually uses well is worth more than a better platform they'd resent.",
        "Anything with a contractual data lock you can't unwind. Read the contract before the renewal conversation, not after.",
      ],
    },
    {
      heading: "What the alternative actually looks like",
      paragraphs: [
        "Custom in 2026 does not mean what it meant in 2018. It is not a six-month enterprise project. It is not a fixed-bid waterfall. It is not a system you can never change once it ships.",
        "The current pattern is narrow, fast, and modular. A V1 ships in one to three weeks. You see a working demo from week one. The scope is one workflow, not a platform. The system of record stays where it is — your PMS, your CRM, your accounting — and the custom layer lives around it, automating the work that the platform doesn't power.",
        "That's what we do at Chesterbrook. We build AI-powered workflows for property managers, brokers, and developers — specifically the workflows that the big platforms have stopped serving well. We don't replace your system of record. We replace the analyst hours that live in the gap between it and the rest of your business.",
        "If you're approaching a renewal and you want a second opinion on whether the math actually pencils for your situation, that's the conversation to have. Not a pitch. A look at your stack, an honest read on what's still worth keeping, and a scope on what isn't.",
      ],
    },
  ],
};
