import type { BlogPost } from "../types";

export const whatAiCostsPost: BlogPost = {
  slug: "what-ai-costs-real-estate",
  title: "What AI actually costs a real estate business",
  subtitle: "The line items nobody quotes you until after you've signed.",
  description:
    "A breakdown of what AI costs a commercial real estate or property management firm — software subscriptions, API usage, data licensing, custom build fees, and ongoing maintenance — with the ranges nobody publishes.",
  publishedAt: "2026-09-18",
  keywords: [
    "AI cost real estate",
    "custom AI software cost",
    "AI consulting cost",
    "real estate data licensing cost",
    "proptech pricing",
    "custom software pricing CRE",
    "AI implementation budget",
    "build vs buy AI",
  ],
  readingTimeMinutes: 10,
  visual: "cost-layers",
  tags: ["Budget", "Build vs buy", "Data"],
  intro: [
    "Almost nobody in this space publishes pricing, which is a decent signal about the pricing. The result is that most operators go into AI budgeting with no reference points, get one quote, and have no way to tell whether it's reasonable.",
    "This is an attempt to fix that. Not a price list — the honest answer to \"what does this cost\" depends on your situation — but a map of where the money actually goes, which line items dominate, and what makes one project a tenth the cost of a superficially similar one. These are the ranges Chesterbrook AI quotes from, and the ones it sees in competing proposals.",
    "The headline: for most real estate AI projects, the AI is the cheapest part. Data and integration are where the budget lives.",
  ],
  sections: [
    {
      heading: "The five cost layers",
      blocks: [
        {
          type: "p",
          text: "Every AI deployment in real estate is some combination of these. Knowing which layer dominates your project tells you most of what you need to know about the budget.",
        },
        {
          type: "table",
          columns: ["Layer", "Typical range", "Drives cost when"],
          rows: [
            ["Seat-based AI tools", "$20–60 per user/month", "Headcount is large"],
            ["Workflow automation tools", "$20–200 per month", "Volume of runs is high"],
            ["AI API usage", "Tens to low hundreds per month", "Document volume is high"],
            ["Data licensing", "$0 to five figures annually", "Geographic scope is broad"],
            ["Custom build", "Low four figures to five figures", "Integration is difficult"],
          ],
        },
        { type: "h3", text: "Seat-based AI tools" },
        {
          type: "p",
          text: "General assistants — Claude, ChatGPT, Copilot — run roughly $20 to $60 per user per month depending on tier. This is the floor for any firm and it's cheap relative to what it returns. Every operator should be here before spending anything else.",
        },
        {
          type: "p",
          text: "The mistake at this layer is buying an annual team plan before anyone has used the product on real work for a month. Start with a few seats.",
        },
        { type: "h3", text: "Workflow automation tools" },
        {
          type: "p",
          text: "Zapier, Make, n8n and similar run from free tiers to a few hundred a month, priced by execution volume. Real value, real ceiling. Budget for the configuration time, which usually exceeds the subscription cost in the first few months and shows up again every time an upstream API changes.",
        },
        { type: "h3", text: "AI API usage" },
        {
          type: "p",
          text: "This is the line item everyone overestimates. Running documents, emails, and records through a model API costs meaningfully less than people expect — most single-workflow deployments land in the tens to low hundreds of dollars per month.",
        },
        {
          type: "p",
          text: "Worth knowing: when your existing platform sells you an \"AI feature\" as a premium add-on, they are usually calling the same APIs and marking them up. You're paying vendor margin on something you could access directly.",
        },
        { type: "h3", text: "Data licensing — the one that actually matters" },
        {
          type: "p",
          text: "For any acquisitions, sourcing, or site selection project, this is the dominant cost, and it's driven almost entirely by geography.",
        },
        {
          type: "ul",
          items: [
            "**Single county, public sources.** County assessor records, clerk of court filings, zoning and GIS layers are public. Ingestion is engineering work, but the data itself is free or nearly so. This is why a one-county tool is dramatically cheaper than it sounds.",
            "**Multi-county within one state.** Meaningfully cheaper per county than the first one, because the ingestion infrastructure already exists and is being reused. Marginal cost, not full cost.",
            "**Multi-state or national coverage.** Now you need licensed aggregators, and the pricing changes character entirely — from a one-time engineering cost to a recurring five-figure annual commitment, depending on coverage depth and how many records you pull.",
          ],
        },
        {
          type: "p",
          text: "If you take one thing from this article: **narrow your geography before you scope anything.** \"Let's just cover the whole Southeast\" is the sentence Chesterbrook AI hears most often, and it's what turns a modest project into an expensive one — almost always prematurely. Prove the tool works in the market you know best.",
        },
        { type: "h3", text: "Custom build" },
        {
          type: "p",
          text: "Where most of the confusion lives, because \"custom software\" still carries 2018 connotations of six-figure, six-month enterprise projects.",
        },
        {
          type: "p",
          text: "That is not the current shape. A narrow single-workflow build — maintenance triage, an LOI drafter, a deal normalizer, a county screening engine — ships a first version in one to three weeks. Those four cover most of what Chesterbrook AI gets asked for. Pricing for that scope typically runs from the low four figures to the low five figures, with integration difficulty as the main variable.",
        },
        {
          type: "p",
          text: "Beyond that, cost scales with the number of distinct workflows, not with complexity of any one. Five workflows cost roughly five times one workflow, and that's usually the wrong way to buy. Sequence them.",
        },
      ],
    },
    {
      heading: "Build fee or subscription: which structure fits",
      blocks: [
        {
          type: "p",
          text: "Two common structures, and the choice matters more than the headline number.",
        },
        {
          type: "p",
          text: "**Build fee, you own it.** You pay for the build, optionally retain some ongoing support, and the software is yours. Higher upfront cost, no recurring dependency, and you can take it elsewhere. Right when the workflow is stable, the tool is core to how you operate, and you want the asset on your side of the table.",
        },
        {
          type: "p",
          text: "**Subscription, vendor owns it.** Lower or no upfront cost, a monthly fee, and the vendor maintains it. For a single-market sourcing or screening engine, monthly pricing in the several-hundred range is typical, with additional geographies priced lower because they share infrastructure. Right when data costs are ongoing anyway, criteria change frequently, or you have nobody internal who could maintain software.",
        },
        {
          type: "p",
          text: "The question that settles it: **if this vendor disappeared in eighteen months, what happens to you?** If the answer is unacceptable, pay for ownership. If the answer is that you'd stop using it and carry on, subscribe.",
        },
      ],
    },
    {
      heading: "The costs nobody quotes",
      blocks: [
        {
          type: "p",
          text: "Four line items that don't appear on proposals and account for a real share of total cost.",
        },
        {
          type: "ul",
          items: [
            "**Getting your data usable.** This is the most common source of overrun. If the information the tool needs doesn't exist in a system — reference detail about your buildings, a clean vendor list, consistent fields across your databases — someone has to create it. That's real hours, usually yours. It's also worth doing regardless of whether you build anything.",
            "**Integration discovery.** Finding out what your PMS or CRM will actually let outside software do. Do this before scoping, not after. It is the single biggest determinant of whether a project comes in at the low end or the high end of any range.",
            "**Adoption.** A tool nobody uses costs full price and returns nothing. Budget for training and for the first month of nobody quite changing their habits.",
            "**Maintenance.** Criteria change, upstream sources change format, platforms change APIs. Anything you own, you maintain — either with an internal person or a retainer. Plan for it rather than discovering it.",
          ],
        },
      ],
    },
    {
      heading: "When the math doesn't work",
      blocks: [
        {
          type: "p",
          text: "Worth being direct, because the incentive runs the other way.",
        },
        {
          type: "p",
          text: "If the workflow runs monthly rather than daily, automation rarely pays on its own.",
        },
        {
          type: "p",
          text: "If one person handles the whole process in under an hour a day, you're probably below the threshold. Volume is what makes this pencil.",
        },
        {
          type: "p",
          text: "If your team hasn't yet hit the ceiling on general AI tools, spend another quarter there first. You don't know what you actually need until you've felt where the simple version stops.",
        },
        {
          type: "p",
          text: "And if your process genuinely varies every time by design, the variation is judgment and judgment is what you're paying people for.",
        },
      ],
    },
    {
      heading: "How to get a number for your situation",
      blocks: [
        {
          type: "p",
          text: "Three things determine your quote more than anything else. Bring them to any conversation:",
        },
        {
          type: "ol",
          items: [
            "**The specific workflow**, described as steps rather than as a goal. \"Reduce admin time\" isn't scopeable. \"Tenant emails a maintenance issue, someone reads it, categorizes it, and enters a work order\" is.",
            "**What systems it has to touch**, and whether anyone has confirmed those systems have accessible APIs.",
            "**Your geographic scope**, if data is involved. One county versus one state versus national is the difference between three very different budgets.",
          ],
        },
      ],
    },
    {
      heading: "About Chesterbrook AI",
      blocks: [
        {
          type: "p",
          text: "Chesterbrook AI is a consulting and software firm based in McLean, Virginia, building custom workflows for property managers, brokers, and developers. It prices both ways described above — a build fee with the client owning the software, or a lower monthly subscription with Chesterbrook AI maintaining it.",
        },
        {
          type: "p",
          text: "Engagements start with discovery and produce a roadmap with sequencing: what to do first, what can wait, and what isn't worth doing at all. That sometimes means recommending another quarter with off-the-shelf tools instead of a build.",
        },
        {
          type: "p",
          text: "For a second opinion on a quote already received, or a real number on a workflow under consideration, that's a straightforward conversation.",
        },
      ],
    },
  ],
  faq: [
    {
      question: "How much does custom AI software cost for a real estate company?",
      answer:
        "A narrow single-workflow build typically runs from the low four figures to the low five figures, with integration difficulty as the main variable. Multi-workflow platforms cost proportionally more and are usually better sequenced than bought at once.",
    },
    {
      question: "Why is data the most expensive part of an AI project?",
      answer:
        "Because public county-level data is free but licensed multi-state data is not. Geographic scope, more than functionality, determines the budget for any sourcing or site selection project.",
    },
    {
      question: "Is it cheaper to buy AI features from an existing software vendor?",
      answer:
        "Usually not. Platform AI add-ons are generally a markup on APIs you can access directly, with less control over the workflow. This is covered in [what CRE software is still worth paying for](/blog/what-cre-software-is-still-worth-paying-for).",
    },
    {
      question: "Should a firm own its AI software or subscribe?",
      answer:
        "Own it when the workflow is stable and core to your operations. Subscribe when data costs are ongoing, criteria change often, or you have no one internal to maintain it. Ask what happens to you if the vendor disappears.",
    },
    {
      question: "What's the ongoing cost after a build?",
      answer:
        "API usage is typically tens to low hundreds per month. Data licensing depends on scope. Maintenance requires either an internal owner or a retainer — plan for it upfront rather than discovering it in month six.",
    },
  ],
  related: [
    "what-cre-software-is-still-worth-paying-for",
    "how-to-start-using-ai-in-cre",
    "ai-for-property-management",
  ],
};
