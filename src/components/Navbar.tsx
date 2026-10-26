"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { CALENDAR_URL } from "@/lib/constants";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "AI Automation", href: "#ai-automation" },
  { label: "AI UGC Videos", href: "#ugc-videos" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Why Us", href: "#why-us" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* close menu on outside click */
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    if (menuOpen) document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [menuOpen]);

  /* close on Escape */
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      role="banner"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-xs"
          : "bg-white/90 backdrop-blur-sm border-b border-slate-100"
      }`}
    >
      <nav
        aria-label="Main navigation"
        className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 h-14 sm:h-20 flex items-center justify-between gap-1.5 sm:gap-4"
      >
        {/* Brand Link — prioritized layout: Logo | UKR Automations (full text, single line, no truncation) */}
        <Link
          href="/"
          aria-label="UKR Automations - Home"
          className="flex items-center gap-1.5 sm:gap-3 group shrink-0 select-none min-w-0"
          onClick={() => {
            setMenuOpen(false);
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <div className="w-7.5 h-7.5 min-[360px]:w-8 min-[360px]:h-8 sm:w-11 sm:h-11 md:w-[44px] md:h-[44px] rounded-lg sm:rounded-xl overflow-hidden flex items-center justify-center shrink-0 shadow-xs border border-[#0046C8]/20 bg-[#0046C8] group-hover:scale-105 transition-transform duration-200">
            <Image
              src="/Logo.jpeg"
              alt="UKR Automation Logo"
              width={44}
              height={44}
              priority
              className="w-full h-full object-contain rounded-lg sm:rounded-xl"
            />
          </div>
          <div className="flex flex-col shrink-0 justify-center min-w-0">
            {/* Full brand name UKR Automations without ellipsis or truncation */}
            <span className="text-[#091E42] font-extrabold text-[12.5px] min-[360px]:text-[13.5px] min-[390px]:text-[14px] sm:text-lg md:text-xl tracking-tight leading-tight group-hover:text-[#0046C8] transition-colors whitespace-nowrap">
              UKR Automations
            </span>
            {/* Tagline hidden on mobile (< 640px) to prevent truncating brand name; visible on tablet/desktop */}
            <span className="hidden sm:block text-[8px] sm:text-[9.5px] text-[#0046C8] font-bold tracking-wider uppercase mt-0.5 whitespace-nowrap">
              AI Automation &amp; AI UGC Videos
            </span>
          </div>
        </Link>

        {/* Desktop nav links */}
        <ul className="hidden lg:flex items-center gap-6 xl:gap-8" role="list">
          {navLinks.map((link) => (
            <li key={link.label}>
              <button
                onClick={() => handleNavClick(link.href)}
                className="text-sm font-semibold text-slate-600 hover:text-[#0046C8] transition-colors duration-150 cursor-pointer bg-transparent border-none tracking-normal py-1"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Right CTA + Mobile Hamburger Menu */}
        <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
          <a
            href={CALENDAR_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="nav-consultation-btn"
            aria-label="Get Free Consultation - Book consultation on Google Calendar"
          >
            <span className="nav-label-narrow">Consultation</span>
            <span className="nav-label-medium">Free Consultation</span>
            <span className="nav-label-desktop">Get Free Consultation</span>
            <svg
              width="11"
              height="11"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="nav-consultation-arrow"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>

          {/* Hamburger toggle button */}
          <button
            id="hamburger-btn"
            className="lg:hidden flex flex-col justify-center items-center w-7.5 h-7.5 min-[360px]:w-8 min-[360px]:h-8 rounded-lg border border-slate-200 hover:border-[#0046C8]/50 hover:bg-slate-50 transition-colors shrink-0 p-1 cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            <span className={`block w-3.5 min-[360px]:w-4 h-0.5 bg-slate-800 transition-all duration-200 ${menuOpen ? "rotate-45 translate-y-1" : ""}`} />
            <span className={`block w-3.5 min-[360px]:w-4 h-0.5 bg-slate-800 my-0.5 transition-all duration-200 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-3.5 min-[360px]:w-4 h-0.5 bg-slate-800 transition-all duration-200 ${menuOpen ? "-rotate-45 -translate-y-1" : ""}`} />
          </button>
        </div>
      </nav>

      {/* Mobile navigation dropdown */}
      <div
        id="mobile-menu"
        ref={menuRef}
        role="dialog"
        aria-label="Mobile navigation"
        className={`lg:hidden overflow-hidden transition-all duration-200 ease-in-out ${
          menuOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0 pointer-events-none"
        } bg-white border-b border-slate-200 shadow-xl`}
      >
        <ul className="flex flex-col px-4 py-4 gap-1.5" role="list">
          {navLinks.map((link) => (
            <li key={link.label}>
              <button
                onClick={() => handleNavClick(link.href)}
                className="w-full text-left px-3.5 py-2.5 text-sm font-semibold text-slate-700 hover:text-[#0046C8] hover:bg-[#F0F7FF] rounded-lg transition-colors bg-transparent border-none cursor-pointer"
              >
                {link.label}
              </button>
            </li>
          ))}
          <li className="pt-3 border-t border-slate-100 mt-2">
            <a
              href={CALENDAR_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full justify-center text-sm py-3"
              aria-label="Get Free Consultation - Book consultation on Google Calendar"
            >
              Get Free Consultation
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
