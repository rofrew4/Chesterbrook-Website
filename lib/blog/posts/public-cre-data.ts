import type { BlogPost } from "../types";

export const publicCreDataPost: BlogPost = {
  slug: "public-cre-data-no-one-uses",
  title: "The public data no one in CRE actually uses",
  subtitle: "And how to turn it into a call list.",
  description:
    "Most CRE acquisitions teams overpay for comp networks while ignoring free county assessor, clerk, tax, and GIS data. Learn what public records expose, which motivation signals matter, and when custom sourcing beats another subscription.",
  publishedAt: "2026-06-18",
  keywords: [
    "CRE public records",
    "off-market deal sourcing",
    "county property data",
    "commercial real estate acquisitions",
    "property owner contact list",
    "assessor NAL file",
    "motivated seller signals",
    "CRE data scraping",
  ],
  readingTimeMinutes: 9,
  visual: "public-records",
  intro: [
    "Every acquisitions team I talk to is paying for the same three or four data subscriptions, complaining about the same three or four limitations, and missing the same fact: most of what they need is already public. It's just hard enough to use that almost nobody does.",
    "This post is about what's actually in county records, what's worth pulling out, and when it's worth building against versus just buying another seat.",
  ],
  sections: [
    {
      heading: "The data you're paying for is the wrong data",
      paragraphs: [
        "The dominant CRE data platforms — you know the names — built their value on the comp network. Properties that have transacted, properties currently marketed, properties listed by brokers in their system. That's the product. It works extremely well if you're underwriting on-market deals or comping a recent sale.",
        "It does not work for sourcing off-market. By definition, the deals worth chasing aren't in those databases yet. The owner hasn't engaged a broker. The property hasn't traded in a decade. The signals that something's about to move — a transfer into a trust, a long hold approaching the end of a hold period, a tax delinquency — don't show up on a comp platform because they're not comps.",
        "That data exists. It's just sitting in the wrong place for the people who built the SaaS you're paying for.",
      ],
    },
    {
      heading: "What county portals actually expose",
      paragraphs: [
        "Every U.S. county exposes a meaningful chunk of property data through a combination of three or four offices. The vocabulary varies by state, but the structure is consistent.",
      ],
      list: [
        "Property appraiser or assessor — Parcel records with assessed values, ownership, sale history, and property characteristics like year built, square footage, and unit count. In many counties the full database is downloadable as a free CSV — sometimes called the NAL file (Name, Address, Legal). Most operators have no idea this exists.",
        "Clerk of court or recorder — Recorded instruments: deeds, mortgages, liens, judgments, lis pendens. This is where you find ownership transfers and the early signals of distress. The online indexes typically go back at least two decades.",
        "Tax collector — Property tax payment history and delinquency status. A property that's two years behind on taxes is a different conversation than a property that's current.",
        "GIS open data — County GIS departments publish shapefiles and feature layers — zoning, land use, parcel polygons — often pre-joined with assessor data. The good ones have the entire county pre-assembled into a single layer you can pull in one request.",
      ],
    },
    {
      paragraphs: [
        "None of this is hidden. All of it is free. It's just spread across four offices with different interfaces, different update schedules, and different data quality.",
      ],
    },
    {
      heading: "The five motivation signals worth tracking",
      paragraphs: [
        "If you're systematically prospecting, these are the patterns that consistently correlate with motivated sellers. Not every signal is a deal — most aren't. But the conversion rate on a cold call into a property flagged on two or three of these is meaningfully higher than calling the broad assessor list.",
      ],
      list: [
        "Long hold periods — Ownership beyond 10 years on a property that's no longer the highest-and-best use of the parcel. The owner has equity, no debt urgency, and is approaching tax planning age.",
        "Trust or estate ownership — Estate properties tend to move within 2–3 years of the original owner's death. Trustees and beneficiaries are usually not in the real estate business and don't want to be.",
        "Recent deed transfers — Especially intra-family or LLC restructurings. Sometimes these precede a quick flip; sometimes they signal distress; sometimes they're the cleanup before a sale.",
        "Tax delinquency or lis pendens — The clearest distress signal in the public record. Filter for properties more than a year delinquent or with active foreclosure filings.",
        "Low improvement-to-land ratio — A parcel where the building value is a small fraction of the land value. This is the redevelopment signal. A 1960s strip retail center on a half-acre lot in a path-of-growth submarket reads loud in this filter.",
      ],
    },
    {
      paragraphs: [
        "A good tool doesn't surface any one of these in isolation — it lets you compound them. Long hold and trust ownership and underbuilt parcel is a different list than any one signal alone.",
      ],
    },
    {
      heading: "Why this is harder than it looks",
      paragraphs: [
        "The scraping part is the easy part. Most operators who try this themselves underestimate the normalization work, which is where the project actually lives.",
        "A few of the recurring problems:",
      ],
      list: [
        "Every county does it differently. Some have APIs. Most have search forms with session-based URLs that can't be deep-linked. Some block automated requests aggressively. Some publish bulk downloads quarterly; some never update; some are a year stale. A scraper that works in one county breaks in the next.",
        "Condo mapping is the worst case. In some markets, large apartment complexes are platted as condominiums, meaning each unit is its own parcel record. An 800-unit complex shows up as 800 separate assessor records that need to be identified, scraped, and rolled back up into a single property-level view. Off-the-shelf tools simply don't do this. They show you 800 rows and let you sort it out.",
        "Owner enrichment is the gap nobody talks about. The assessor tells you who owns the property — usually an LLC. The LLC mailing address is often a registered agent, not the actual decision-maker. Turning \"ABC Holdings LLC\" into \"Steve, who lives in Boca and you can reach at this cell\" requires cross-referencing entity filings, skip-trace data, and sometimes paid APIs. This is where the real call list gets built. It's also where most DIY attempts collapse.",
        "Data refresh is the maintenance burden. The signals you care about — recent transfers, new lis pendens — only matter if they're current. A static one-time pull goes stale within a quarter. A real tool refreshes on a schedule and flags what changed.",
      ],
    },
    {
      heading: "When to build versus when to buy",
      paragraphs: [
        "This is the part most operators want a single answer to and there isn't one. The honest framework is two questions.",
        "How many markets do you actively prospect? If you do six deals a year in one county, the off-the-shelf tools — LandGlide, PropertyShark, the bigger platforms — are almost certainly the right answer. The build doesn't pencil at that volume, and the coverage gap doesn't matter because your universe is small enough to hand-walk.",
        "Are your markets well-covered? The major platforms are deepest in dense metros and weakest in tertiary markets and secondary submarkets. If you're systematically prospecting a region — multiple counties, recurring volume, a defined buy box — the gap between what off-the-shelf gives you and what you actually need usually widens over time. Custom starts to win on coverage, not on cost.",
        "The deciding question isn't price. It's whether the markets you care about are well-served by the existing platforms. In core MSAs, mostly yes. In the Sunbelt secondaries, mixed. In tertiary markets and small-to-mid metros, mostly no.",
        "If you're trying to figure out whether your target markets are actually well-served by the data you're paying for — or whether there's a custom version of this that pencils — drop me a line. Happy to walk through it.",
      ],
    },
  ],
};
