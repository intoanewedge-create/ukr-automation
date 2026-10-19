"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { CALENDAR_URL, COMPANY } from "@/lib/constants";

const navLinks = [
  { label: "Services",     href: "#services" },
  { label: "Why UGC",      href: "#why-ugc" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Channels",     href: "#platforms" },
  { label: "Contact",      href: "#contact" },
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
          ? "bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-sm"
          : "bg-white/80 backdrop-blur-sm border-b border-slate-100"
      }`}
    >
      <nav
        aria-label="Main navigation"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between"
      >
        {/* Logo */}
        <Link
          href="/"
          aria-label={`${COMPANY.name} - Home`}
          className="flex items-center gap-3.5 group"
          onClick={() => {
            setMenuOpen(false);
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <div className="w-[46px] h-[46px] md:w-[52px] md:h-[52px] rounded-xl overflow-hidden flex items-center justify-center flex-shrink-0 shadow-md shadow-[#0046C8]/15 border border-[#0046C8]/20 bg-[#0046C8] group-hover:scale-105 transition-transform duration-200">
            <img src="/Logo.jpeg?v=2" alt="UKR Automation Logo" width={52} height={52} className="w-full h-full object-contain rounded-xl" />
          </div>
          <div className="flex flex-col">
            <span className="text-[#091E42] font-bold text-lg md:text-xl tracking-tight leading-none group-hover:text-[#0046C8] transition-colors">
              {COMPANY.name}
            </span>
            <span className="text-[10px] text-[#0046C8] font-bold tracking-widest uppercase mt-1">
              AI UGC Creative Studio
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-8" role="list">
          {navLinks.map((link) => (
            <li key={link.label}>
              <button
                onClick={() => handleNavClick(link.href)}
                className="text-sm font-semibold text-slate-600 hover:text-[#0046C8] transition-colors duration-150 cursor-pointer bg-transparent border-none tracking-normal"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* CTA + hamburger */}
        <div className="flex items-center gap-3">
          <a
            href={CALENDAR_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary hidden sm:inline-flex text-sm py-2.5 px-5"
            aria-label="Get Free Consultation - Book consultation on Google Calendar"
          >
            Get Free Consultation
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>

          {/* Hamburger */}
          <button
            id="hamburger-btn"
            className="lg:hidden flex flex-col gap-1.5 p-2.5 rounded-lg border border-slate-200 hover:border-[#0046C8]/50 hover:bg-slate-50 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            <span className={`block w-5 h-0.5 bg-slate-800 transition-all duration-200 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-5 h-0.5 bg-slate-800 transition-all duration-200 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-0.5 bg-slate-800 transition-all duration-200 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        ref={menuRef}
        role="dialog"
        aria-label="Mobile navigation"
        className={`lg:hidden overflow-hidden transition-all duration-200 ease-in-out ${
          menuOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
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
