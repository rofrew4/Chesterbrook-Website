"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

// Public tracking ID from app.rb2b.com → Script setup.
const RB2B_ID = "5NRP9H304GO1";

// RB2B resolves US visitors to companies and LinkedIn profiles. Their install
// guide reloads the script on every route change so each page view is seen.
export default function RB2BScript() {
  const pathname = usePathname();

  useEffect(() => {
    // Global Privacy Control is treated as an opt-out (see /privacy).
    const gpc = (navigator as Navigator & { globalPrivacyControl?: boolean })
      .globalPrivacyControl;
    if (!RB2B_ID || gpc) return;

    document.getElementById("rb2b-script")?.remove();
    const script = document.createElement("script");
    script.id = "rb2b-script";
    script.src = `https://ddwl4m2hdecbv.cloudfront.net/b/${RB2B_ID}/${RB2B_ID}.js.gz`;
    script.async = true;
    document.body.appendChild(script);
  }, [pathname]);

  return null;
}
