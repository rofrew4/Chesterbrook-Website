import { ReactNode } from "react";
import DiscoveryMini from "@/components/mockups/strategy/DiscoveryMini";
import RoadmapMini from "@/components/mockups/strategy/RoadmapMini";
import TrainBuildMini from "@/components/mockups/strategy/TrainBuildMini";

const visuals: Record<string, ReactNode> = {
  discovery: <DiscoveryMini />,
  roadmap: <RoadmapMini />,
  "train-build": <TrainBuildMini />,
};

export function getStrategyPhaseVisual(id: string): ReactNode {
  return visuals[id] ?? <DiscoveryMini />;
}
