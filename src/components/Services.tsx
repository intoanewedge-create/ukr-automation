"use client";

import { useEffect, useRef } from "react";
import { CALENDAR_URL } from "@/lib/constants";

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const els = sectionRef.current?.querySelectorAll(".reveal");
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-16 sm:py-24 lg:py-32 relative overflow-hidden bg-[#F4F8FD] border-t border-slate-200/80"
      aria-label="Core Services — AI UGC Video Creation & AI Automation Solutions"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16 reveal">
          <div className="section-badge bg-white shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0046C8]" />
            Our Core Offerings
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#091E42] tracking-tight leading-tight">
            AI Automations &amp; Creative UGC Built to Grow Your Business.
          </h2>
          <p className="mt-3 sm:mt-5 text-[#475569] text-base sm:text-lg leading-relaxed">
            UKR Automations combines intelligent automations to handle enquiries and save manual hours with scroll-stopping creator-style videos to win customer attention.
          </p>
        </div>

        {/* Two Prominent Service Cards */}
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
          
          {/* Card 1: AI Automation Solutions */}
          <div className="p-6 sm:p-10 rounded-3xl bg-white border-2 border-[#0046C8]/20 hover:border-[#0046C8] shadow-md hover:shadow-xl hover:shadow-[#0046C8]/10 transition-all duration-300 reveal flex flex-col justify-between group relative overflow-hidden">
            <div
              aria-hidden="true"
              className="absolute top-0 right-0 w-60 h-60 bg-[#0046C8]/[0.04] rounded-full blur-2xl pointer-events-none"
            />

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-5">
                <span className="px-3.5 py-1.5 rounded-full bg-[#E8F2FE] border border-[#0046C8]/20 text-xs font-mono font-bold text-[#0046C8] tracking-wider uppercase">
                  Service 01 · Smart Automation
                </span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#0046C8]" />
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#091E42] mb-3 tracking-tight group-hover:text-[#0046C8] transition-colors">
                AI Automation Solutions
              </h3>

              <p className="text-[#475569] text-sm sm:text-base leading-relaxed mb-6">
                We build AI-powered workflows that help businesses handle enquiries, follow up with leads, manage routine communication, and reduce repetitive manual work.
              </p>

              {/* Specific Offerings */}
              <div className="space-y-3 pt-4 border-t border-slate-100 mb-8">
                <h4 className="text-xs font-bold text-[#091E42] uppercase tracking-wider">
                  Included Capabilities:
                </h4>
                <ul className="space-y-2.5">
                  {[
                    "WhatsApp enquiry automation & 24/7 instant replies",
                    "Website lead capture and automated follow-ups",
                    "Automated appointment booking and reminders",
                    "AI customer support and frequently asked questions",
                    "Lead management and instant team notifications",
                    "Automated business workflows & AI-assisted communication",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#334155] font-medium leading-relaxed">
                      <span className="text-[#0046C8] font-bold shrink-0 mt-0.5">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="relative z-10 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href={CALENDAR_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-sm py-3 px-6 justify-center text-center font-semibold"
                aria-label="Discuss Your Automation Needs"
              >
                <span>Discuss Your Automation Needs</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
              <button
                onClick={() => scrollTo("#ai-automation")}
                className="btn-secondary text-sm py-3 px-5 justify-center text-center font-medium cursor-pointer"
                aria-label="Explore Automation Workflows"
              >
                Explore Workflows
              </button>
            </div>
          </div>

          {/* Card 2: AI UGC Video Creation */}
          <div className="p-6 sm:p-10 rounded-3xl bg-white border-2 border-[#0046C8]/20 hover:border-[#0046C8] shadow-md hover:shadow-xl hover:shadow-[#0046C8]/10 transition-all duration-300 reveal flex flex-col justify-between group relative overflow-hidden">
            <div
              aria-hidden="true"
              className="absolute top-0 right-0 w-60 h-60 bg-[#0046C8]/[0.04] rounded-full blur-2xl pointer-events-none"
            />
            
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-5">
                <span className="px-3.5 py-1.5 rounded-full bg-[#E8F2FE] border border-[#0046C8]/20 text-xs font-mono font-bold text-[#0046C8] tracking-wider uppercase">
                  Service 02 · Video Creative
                </span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#0046C8]" />
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#091E42] mb-3 tracking-tight group-hover:text-[#0046C8] transition-colors">
                AI UGC Video Creation
              </h3>

              <p className="text-[#475569] text-sm sm:text-base leading-relaxed mb-6">
                We create realistic, creator-style promotional videos using AI. Get high-engagement video content for your products and services without expensive studio shoots, lighting equipment, or creator logistics.
              </p>

              {/* Specific Offerings */}
              <div className="space-y-3 pt-4 border-t border-slate-100 mb-8">
                <h4 className="text-xs font-bold text-[#091E42] uppercase tracking-wider">
                  Included Capabilities:
                </h4>
                <ul className="space-y-2.5">
                  {[
                    "AI UGC product advertisements",
                    "Realistic AI-generated presenters and spokesperson videos",
                    "Short-form videos for Instagram Reels, YouTube Shorts, and social media ads",
                    "Product demonstrations and promotional videos",
                    "Service-based business promotional videos",
                    "Multiple creative variations for testing advertisements",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#334155] font-medium leading-relaxed">
                      <span className="text-[#0046C8] font-bold shrink-0 mt-0.5">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="relative z-10 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href={CALENDAR_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-sm py-3 px-6 justify-center text-center font-semibold"
                aria-label="Get Free Consultation for AI UGC Videos"
              >
                <span>Get Free Consultation</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
              <button
                onClick={() => scrollTo("#ugc-videos")}
                className="btn-secondary text-sm py-3 px-5 justify-center text-center font-medium cursor-pointer"
                aria-label="View UGC Portfolio Examples"
              >
                View UGC Examples
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
