import { ReactNode } from "react";
import DealSourcingListFallback from "@/components/mockups/DealSourcingListFallback";
import CompetitorScrapingFallback from "@/components/mockups/CompetitorScrapingFallback";
import LeaseExtractionFallback from "@/components/mockups/LeaseExtractionFallback";

const projectFallbacks: Record<string, ReactNode> = {
  "deal-sourcing": <DealSourcingListFallback />,
  "competitor-scraping": <CompetitorScrapingFallback />,
  "lease-abstraction": <LeaseExtractionFallback />,
};

export function getMockupFallback(id: string): ReactNode {
  return projectFallbacks[id] ?? <LeaseExtractionFallback />;
}
