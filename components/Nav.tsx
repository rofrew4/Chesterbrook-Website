"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { scrollToSection } from "@/lib/scroll";
import { CALENDLY_URL } from "@/lib/links";

const sectionLinks = [
  { label: "Strategy", href: "strategy" },
  { label: "Common projects", href: "examples" },
  { label: "Contact", href: "contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleSectionNav = (id: string) => {
    setMenuOpen(false);
    if (isHome) {
      scrollToSection(id);
      return;
    }
    router.push(`/#${id}`);
  };

  const handleTopNav = () => {
    setMenuOpen(false);
    if (isHome) {
      scrollToSection("top");
      return;
    }
    router.push("/");
  };

  const overDarkHero = isHome && !scrolled && !menuOpen;
  const isBlog = pathname.startsWith("/blog");

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          overDarkHero
            ? "border-b border-white/10 bg-transparent"
            : scrolled || menuOpen
              ? "border-b border-border bg-background/95 backdrop-blur-md shadow-sm"
              : "bg-background/80 backdrop-blur-sm"
        }`}
      >
        <nav className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-4 md:px-10">
          <button
            type="button"
            onClick={handleTopNav}
            className={`font-display text-[18px] tracking-tight transition-colors ${
              overDarkHero ? "text-white" : "text-foreground"
            }`}
          >
            Chesterbrook
          </button>

          <div className="hidden items-center gap-8 md:flex">
            {sectionLinks.map((link) => (
              <button
                key={link.href}
                type="button"
                onClick={() => handleSectionNav(link.href)}
                className={`nav-link text-[13px] transition-colors ${
                  overDarkHero
                    ? "text-white/85 hover:text-white"
                    : "text-secondary hover:text-accent"
                }`}
              >
                {link.label}
              </button>
            ))}
            <Link
              href="/blog"
              className={`nav-link text-[13px] transition-colors ${
                overDarkHero
                  ? "text-white/85 hover:text-white"
                  : isBlog
                    ? "text-accent"
                    : "text-secondary hover:text-accent"
              }`}
            >
              Blog
            </Link>
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary btn-primary--sm"
            >
              Book a consult
            </a>
          </div>

          <button
            type="button"
            className="relative z-50 flex h-8 w-8 flex-col items-center justify-center gap-1.5 md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <span
              className={`block h-px w-5 transition-all duration-300 ${
                overDarkHero ? "bg-white" : "bg-foreground"
              } ${menuOpen ? "translate-y-[3.5px] rotate-45" : ""}`}
            />
            <span
              className={`block h-px w-5 transition-all duration-300 ${
                overDarkHero ? "bg-white" : "bg-foreground"
              } ${menuOpen ? "-translate-y-[3.5px] -rotate-45" : ""}`}
            />
          </button>
        </nav>
      </header>

      <div
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center bg-background transition-opacity duration-300 md:hidden ${
          menuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        <div className="flex flex-col items-center gap-8">
          {sectionLinks.map((link) => (
            <button
              key={link.href}
              type="button"
              onClick={() => handleSectionNav(link.href)}
              className="font-display text-3xl tracking-tight text-foreground"
            >
              {link.label}
            </button>
          ))}
          <Link
            href="/blog"
            onClick={() => setMenuOpen(false)}
            className="font-display text-3xl tracking-tight text-foreground"
          >
            Blog
          </Link>
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="btn-primary mt-4"
          >
            Book a consult
          </a>
        </div>
      </div>
    </>
  );
}
