import Link from "next/link";
import {
  CALENDLY_URL,
  CONTACT_EMAIL,
  CONTACT_PHONE,
  CONTACT_PHONE_TEL,
} from "@/lib/links";
import { navLinks } from "@/lib/site";
import { BrandMark } from "./BrandMark";

export default function Footer() {
  return (
    <footer className="bg-surface text-fine text-secondary">
      <div className="container-site pb-6 pt-12">
        <div className="grid gap-8 border-b border-border pb-8 sm:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Link href="/" className="inline-flex items-center gap-2 text-[15px] font-semibold tracking-[-0.015em] text-foreground">
              <BrandMark className="h-[13px] w-auto text-accent" />
              Chesterbrook AI
            </Link>
            <p className="mt-3 max-w-[34ch] text-[13px] leading-relaxed">
              The AI engineering team for commercial real estate.
            </p>
          </div>

          <div>
            <h2 className="mb-3 font-sans text-[12px] font-semibold text-foreground">Explore</h2>
            <ul className="space-y-2.5 text-[12px]">
              <li><Link href="/" className="hover:text-foreground hover:underline">Home</Link></li>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-foreground hover:underline">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="mb-3 font-sans text-[12px] font-semibold text-foreground">Contact</h2>
            <ul className="space-y-2.5 text-[12px]">
              <li>
                <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="hover:text-foreground hover:underline">
                  Book a call
                </a>
              </li>
              <li>
                <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-foreground hover:underline">
                  {CONTACT_EMAIL}
                </a>
              </li>
              <li>
                <a href={`tel:${CONTACT_PHONE_TEL}`} className="hover:text-foreground hover:underline">
                  {CONTACT_PHONE}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-2 pt-5 text-[12px] sm:flex-row sm:items-center sm:justify-between">
          <p>Copyright © 2026 Old Chesterbrook LLC. McLean, Virginia.</p>
          <Link href="/privacy" className="hover:text-foreground hover:underline">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
