"use client";

import { CALENDAR_URL } from "@/lib/constants";

export default function Hero() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-[85vh] flex items-center justify-center pt-24 pb-14 sm:pt-32 sm:pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-gradient-to-b from-[#F4F8FD] via-[#F8FAFC] to-white"
      aria-label="UKR Automation — AI UGC Creative Studio"
    >
      {/* Subtle blue radiance */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(0, 70, 200, 0.12) 0%, transparent 70%)",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute -top-32 right-1/4 w-[550px] h-[550px] bg-[#0046C8]/[0.05] rounded-full blur-3xl pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute top-1/2 -left-40 w-[500px] h-[500px] bg-[#0046C8]/[0.03] rounded-full blur-3xl pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 grid-bg-light opacity-60 pointer-events-none"
      />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 flex flex-col items-center text-center">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#E8F2FE] border border-[#0046C8]/20 mb-6 sm:mb-8 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-[#0046C8] animate-pulse" />
          <span className="text-[11px] sm:text-xs font-bold text-[#0046C8] tracking-wider uppercase">
            UGC Creative Studio
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-3xl sm:text-5xl lg:text-7xl font-extrabold text-[#091E42] tracking-tight leading-[1.12] mb-4 sm:mb-6 max-w-4xl px-1 sm:px-0">
          UGC That <span className="text-[#0046C8]">Feels Real.</span>
        </h1>

        {/* Supporting Copy */}
        <p className="text-[#475569] text-base sm:text-lg lg:text-2xl leading-relaxed max-w-2xl mb-8 sm:mb-10 font-normal px-1 sm:px-0">
          Authentic creator content engineered for brands that value engagement, trust, and creative velocity.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch sm:items-center justify-center w-full max-w-xs sm:max-w-none mx-auto mb-10 sm:mb-16">
          <a
            href={CALENDAR_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-sm sm:text-base py-3.5 px-6 sm:py-4 sm:px-8 shadow-lg shadow-[#0046C8]/20 justify-center text-center"
            aria-label="Get Free Consultation — book a free creative consultation"
          >
            Get Free Consultation
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>

          <button
            onClick={() => scrollTo("#services")}
            className="btn-secondary text-sm sm:text-base py-3.5 px-6 sm:py-4 sm:px-8 cursor-pointer justify-center text-center"
            aria-label="Explore Services — scrolls to capabilities section"
          >
            Explore Services
          </button>
        </div>

        {/* Quality Pillars / Badges */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-5 w-full max-w-3xl pt-6 sm:pt-8 border-t border-slate-200/80">
          <div className="flex flex-col items-center text-center p-4 sm:p-5 rounded-2xl bg-white/70 backdrop-blur-sm border border-slate-200/80 shadow-xs">
            <span className="w-8 h-8 rounded-full bg-[#E8F2FE] text-[#0046C8] font-bold text-sm flex items-center justify-center mb-2">
              ✓
            </span>
            <span className="text-sm font-bold text-[#091E42] mb-1">Made for Social Media</span>
            <span className="text-xs text-[#5E6C84]">Optimized for TikTok, Reels & Shorts feeds</span>
          </div>

          <div className="flex flex-col items-center text-center p-4 sm:p-5 rounded-2xl bg-white/70 backdrop-blur-sm border border-slate-200/80 shadow-xs">
            <span className="w-8 h-8 rounded-full bg-[#E8F2FE] text-[#0046C8] font-bold text-sm flex items-center justify-center mb-2">
              ✓
            </span>
            <span className="text-sm font-bold text-[#091E42] mb-1">Authentic Creators</span>
            <span className="text-xs text-[#5E6C84]">Natural presence, lifelike cadences & relatable tone</span>
          </div>

          <div className="flex flex-col items-center text-center p-4 sm:p-5 rounded-2xl bg-white/70 backdrop-blur-sm border border-slate-200/80 shadow-xs">
            <span className="w-8 h-8 rounded-full bg-[#E8F2FE] text-[#0046C8] font-bold text-sm flex items-center justify-center mb-2">
              ✓
            </span>
            <span className="text-sm font-bold text-[#091E42] mb-1">Rapid Turnaround</span>
            <span className="text-xs text-[#5E6C84]">Fast delivery without physical studio or filming delays</span>
          </div>
        </div>

      </div>
    </section>
  );
}
