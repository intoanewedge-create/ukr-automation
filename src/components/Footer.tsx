"use client";

import Link from "next/link";
import { COMPANY, CALENDAR_URL } from "@/lib/constants";

const navCols = [
  {
    title: "UGC Formats",
    links: [
      { label: "Product-Led Showcases",  href: "#services" },
      { label: "Direct-Response Ads",    href: "#services" },
      { label: "Reels & TikTok Formats", href: "#services" },
      { label: "Creator Demonstrations", href: "#services" },
      { label: "Hook Variation Testing", href: "#services" },
      { label: "Multilingual Voiceover", href: "#services" },
    ],
  },
  {
    title: "Industries",
    links: [
      { label: "Jewellery",          href: "#services" },
      { label: "Gym & Fitness",      href: "#services" },
      { label: "Fashion & Apparel",  href: "#services" },
      { label: "Beauty & Skincare",  href: "#services" },
      { label: "Food & Restaurants", href: "#services" },
    ],
  },
  {
    title: "Studio",
    links: [
      { label: "Capabilities",     href: "#services" },
      { label: "Why UGC",          href: "#why-ugc" },
      { label: "How It Works",     href: "#how-it-works" },
      { label: "Target Channels",  href: "#platforms" },
      { label: "FAQ",              href: "#faq" },
      { label: "Contact Us",       href: "#contact" },
    ],
  },
];

const legalLinks = [
  { label: "Privacy Policy",   href: "#" },
  { label: "Terms of Service", href: "#" },
];

export default function Footer() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      role="contentinfo"
      className="bg-[#051026] border-t border-[#0046c8]/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 pb-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-10 sm:mb-14">

          {/* Brand + contact */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link
              href="/"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex items-center gap-3 mb-5 group inline-flex"
              aria-label="UKR Automation - Home"
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl overflow-hidden flex items-center justify-center flex-shrink-0 border-2 border-[#0046c8] shadow-md group-hover:border-white transition-all duration-200 bg-[#0046c8]">
                <img src="/Logo.jpeg?v=2" alt="UKR Automation" width={56} height={56} className="w-full h-full object-contain rounded-lg group-hover:scale-105 transition-transform duration-200" />
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold text-base sm:text-lg md:text-xl tracking-tight leading-none group-hover:text-[#93C5FD] transition-colors">
                  {COMPANY.name}
                </span>
                <span className="text-[10px] text-[#60A5FA] font-medium tracking-widest uppercase mt-1">
                  UGC Creative Studio
                </span>
              </div>
            </Link>

            <p className="text-blue-100/70 text-sm leading-relaxed mb-6 max-w-xs">
              Crafting authentic, high-converting UGC videos for modern brands. Engineered for mobile feeds and paid performance.
            </p>

            {/* Contact info */}
            <div className="space-y-2.5 mb-6">
              <a
                href={COMPANY.phoneHref}
                className="flex items-center gap-2.5 text-sm text-blue-100/80 hover:text-white transition-colors duration-200"
                aria-label={`Phone: ${COMPANY.phone}`}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#60A5FA]">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.15 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.06 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 17z" />
                </svg>
                {COMPANY.phone}
              </a>
              <a
                href={COMPANY.emailHref}
                className="flex items-center gap-2.5 text-sm text-blue-100/80 hover:text-white transition-colors duration-200 break-all"
                aria-label={`Email: ${COMPANY.email}`}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 text-[#60A5FA]">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                {COMPANY.email}
              </a>
            </div>

            {/* Get Free Consultation CTA */}
            <a
              href={CALENDAR_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm py-2.5 px-5 w-full justify-center inline-flex items-center"
              aria-label="Get Free Consultation — opens Google Calendar booking"
            >
              <span>Get Free Consultation</span>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="ml-1.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          {/* Nav columns */}
          {navCols.map((col) => (
            <div key={col.title}>
              <h3 className="text-white font-bold text-xs uppercase tracking-widest mb-5 font-mono">
                {col.title}
              </h3>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => scrollTo(link.href)}
                      className="text-blue-100/70 hover:text-white text-sm transition-colors duration-200 bg-transparent border-none cursor-pointer text-left tracking-wide"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/10">
          <p className="text-blue-200/60 text-xs">
            © {new Date().getFullYear()} {COMPANY.name}. All rights reserved. Built for modern brands.
          </p>
          <div className="flex gap-6">
            {legalLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-blue-200/60 hover:text-white text-xs transition-colors duration-200"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
