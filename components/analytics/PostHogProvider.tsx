"use client";

import posthog from "posthog-js";
import { PostHogProvider as Provider } from "posthog-js/react";
import { useEffect } from "react";

const POSTHOG_KEY = process.env.NEXT_PUBLIC_POSTHOG_KEY;

export default function PostHogProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    if (!POSTHOG_KEY || posthog.__loaded) return;

    posthog.init(POSTHOG_KEY, {
      // Proxied through next.config rewrites so ad blockers don't drop events.
      api_host: "/ingest",
      ui_host: "https://us.posthog.com",
      // Captures pageviews on client-side navigation, page leaves, and web vitals.
      defaults: "2025-05-24",
      // Profiles for every visitor, so anonymous history is kept and merged
      // into the lead's profile once they submit the contact form.
      person_profiles: "always",
    });
  }, []);

  return <Provider client={posthog}>{children}</Provider>;
}
