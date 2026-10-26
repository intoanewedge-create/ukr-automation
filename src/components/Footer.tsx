"use client";

import Link from "next/link";
import Image from "next/image";
import { COMPANY, CALENDAR_URL } from "@/lib/constants";

const navCols = [
  {
    title: "AI Automation",
    links: [
      { label: "WhatsApp Enquiry Bot",     href: "#ai-automation" },
      { label: "Lead Capture & Follow-Up", href: "#ai-automation" },
      { label: "Appointment Booking",      href: "#ai-automation" },
      { label: "AI Customer Support",      href: "#ai-automation" },
      { label: "Lead Alerts & Routing",    href: "#ai-automation" },
      { label: "Business Workflows",       href: "#ai-automation" },
    ],
  },
  {
    title: "AI UGC Videos",
    links: [
      { label: "Product Advertisements",   href: "#ugc-videos" },
      { label: "AI Presenters & Voices",   href: "#ugc-videos" },
      { label: "Reels & Shorts Formats",   href: "#ugc-videos" },
      { label: "Product Demonstrations",   href: "#ugc-videos" },
      { label: "Creative Hook Variations", href: "#ugc-videos" },
      { label: "Portfolio Examples",       href: "#portfolio" },
    ],
  },
  {
    title: "Company & Links",
    links: [
      { label: "Home",                     href: "#home" },
      { label: "Core Services",            href: "#services" },
      { label: "Why UKR Automation",       href: "#why-us" },
      { label: "Our Process",              href: "#process" },
      { label: "FAQ",                      href: "#faq" },
      { label: "Contact Us",               href: "#contact" },
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
      className="bg-[#051026] border-t border-[#0046C8]/20 text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 pb-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-10 sm:mb-14">

          {/* Brand + contact */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link
              href="/"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex items-center gap-3 mb-5 group inline-flex"
              aria-label={`${COMPANY.name} - Home`}
            >
              <div className="w-12 h-12 rounded-xl overflow-hidden flex items-center justify-center shrink-0 border-2 border-[#0046C8] shadow-md group-hover:border-white transition-all duration-200 bg-[#0046C8]">
                <Image
                  src="/Logo.jpeg"
                  alt={`${COMPANY.name} Logo`}
                  width={48}
                  height={48}
                  className="w-full h-full object-contain rounded-lg group-hover:scale-105 transition-transform duration-200"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-white font-extrabold text-base sm:text-lg md:text-xl tracking-tight leading-none group-hover:text-[#93C5FD] transition-colors">
                  {COMPANY.name}
                </span>
                <span className="text-[10px] text-[#60A5FA] font-bold tracking-wider uppercase mt-1">
                  AI Automation &amp; AI UGC
                </span>
              </div>
            </Link>

            <p className="text-blue-100/70 text-xs sm:text-sm leading-relaxed mb-6 max-w-xs">
              Smart AI automations that reduce repetitive manual work and respond to leads faster, combined with realistic AI UGC videos that sell products and services.
            </p>

            {/* Contact info */}
            <div className="space-y-2.5 mb-6">
              <a
                href={COMPANY.phoneHref}
                className="flex items-center gap-2.5 text-xs sm:text-sm text-blue-100/80 hover:text-white transition-colors duration-200"
                aria-label={`Phone: ${COMPANY.phone}`}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#60A5FA] shrink-0">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.15 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.06 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 17z" />
                </svg>
                {COMPANY.phone}
              </a>
              <a
                href={COMPANY.emailHref}
                className="flex items-center gap-2.5 text-xs sm:text-sm text-blue-100/80 hover:text-white transition-colors duration-200 break-all"
                aria-label={`Email: ${COMPANY.email}`}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-[#60A5FA]">
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
              className="btn-primary text-xs sm:text-sm py-2.5 px-5 w-full justify-center inline-flex items-center font-semibold"
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
                      className="text-blue-100/70 hover:text-white text-xs sm:text-sm transition-colors duration-200 bg-transparent border-none cursor-pointer text-left tracking-wide"
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
            © {new Date().getFullYear()} {COMPANY.name}. All rights reserved.
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
