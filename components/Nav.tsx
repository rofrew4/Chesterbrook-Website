"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { CALENDLY_URL } from "@/lib/links";
import { SITE_NAME } from "@/lib/seo";
import { navLinks } from "@/lib/site";
import { BrandMark } from "./BrandMark";

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the sheet on navigation and lock scroll while it's open.
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.documentElement.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`material-bar relative z-[2] transition-[box-shadow] duration-300 ${
          scrolled || open ? "shadow-[0_1px_0_rgba(0,0,0,0.08)]" : ""
        }`}
      >
        <nav
          aria-label="Main"
          className="container-site flex h-[var(--nav-h)] items-center justify-between"
        >
          <Link
            href="/"
            aria-label={`${SITE_NAME} home`}
            className="-ml-1 flex items-center gap-2 rounded-md px-1 py-1 text-[17px] font-semibold tracking-[-0.02em] text-foreground"
          >
            <BrandMark className="h-[15px] w-auto text-accent" />
            <span>Chesterbrook</span>
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive(link.href) ? "page" : undefined}
                className={`text-[13px] tracking-[-0.005em] transition-colors duration-200 ${
                  isActive(link.href)
                    ? "text-foreground"
                    : "text-foreground/70 hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary btn-sm"
            >
              Book a call
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-menu"
              className="-mr-2 flex h-10 w-10 items-center justify-center rounded-full md:hidden"
            >
              <span className="relative block h-3 w-[18px]">
                <span
                  className={`absolute left-0 h-[1.5px] w-full rounded-full bg-foreground transition-transform duration-300 ease-out ${
                    open ? "top-[5px] rotate-45" : "top-0.5"
                  }`}
                />
                <span
                  className={`absolute left-0 h-[1.5px] w-full rounded-full bg-foreground transition-transform duration-300 ease-out ${
                    open ? "top-[5px] -rotate-45" : "top-[9px]"
                  }`}
                />
              </span>
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile sheet: grows down from the bar that opened it and leaves the
          same way. CSS transitions, so it reverses cleanly mid-flight. */}
      <div
        id="mobile-menu"
        data-open={open || undefined}
        // React 18 has no boolean `inert`; an empty string sets the attribute.
        {...(open ? {} : ({ inert: "" } as object))}
        className="mobile-sheet material-bar fixed inset-0 z-[1] md:hidden"
      >
        <ul className="container-site pt-[calc(var(--nav-h)+20px)]">
          {navLinks.map((link, i) => (
            <li key={link.href} style={{ transitionDelay: open ? `${40 + i * 30}ms` : "0ms" }}>
              <Link
                href={link.href}
                className={`block py-2.5 text-[28px] font-semibold tracking-[-0.025em] ${
                  isActive(link.href) ? "text-foreground" : "text-foreground/80"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
