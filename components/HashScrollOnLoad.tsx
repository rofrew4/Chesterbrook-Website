"use client";

import { useEffect } from "react";
import { scrollToSection } from "@/lib/scroll";

export default function HashScrollOnLoad() {
  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (!hash) return;
    requestAnimationFrame(() => scrollToSection(hash));
  }, []);

  return null;
}
