import { ReactNode } from "react";
import DealSourcingListFallback from "@/components/mockups/DealSourcingListFallback";
import CompetitorScrapingFallback from "@/components/mockups/CompetitorScrapingFallback";
import LeaseExtractionFallback from "@/components/mockups/LeaseExtractionFallback";
import ContentReviewQueueFallback from "@/components/mockups/ContentReviewQueueFallback";
import InboxTriageFallback from "@/components/mockups/InboxTriageFallback";
import InboundDealQueueFallback from "@/components/mockups/InboundDealQueueFallback";
import CustomCrmFallback from "@/components/mockups/CustomCrmFallback";

const projectFallbacks: Record<string, ReactNode> = {
  "deal-sourcing": <DealSourcingListFallback />,
  "competitor-scraping": <CompetitorScrapingFallback />,
  "lease-abstraction": <LeaseExtractionFallback />,
  "content-engine": <ContentReviewQueueFallback />,
  "email-agents": <InboxTriageFallback />,
  "inbound-investment-list": <InboundDealQueueFallback />,
  "custom-crms": <CustomCrmFallback />,
};

export function getMockupFallback(id: string): ReactNode {
  return projectFallbacks[id] ?? <LeaseExtractionFallback />;
}
