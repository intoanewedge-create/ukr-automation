"use client";

import { useEffect, useRef } from "react";
import { CALENDAR_URL } from "@/lib/constants";

const formats = [
  {
    id: "product-showcase",
    title: "Product-Led Showcases",
    desc: "Highlight jewellery details, fabric drape, fitness routines, or brand textures from multiple dynamic angles with macro clarity.",
    tag: "15–20s · High Resolution",
  },
  {
    id: "short-form-ads",
    title: "Paid Social Direct-Response",
    desc: "Engineered for high initial retention and click-through on Meta, TikTok, and YouTube with immediate value propositions.",
    tag: "20–30s · Performance Ads",
  },
  {
    id: "reels-shorts",
    title: "Reels, TikTok & Shorts",
    desc: "Native, algorithm-friendly vertical video designed to look and feel like organic creator content in the feed rather than a standard commercial.",
    tag: "9:16 Vertical · Mobile Native",
  },
  {
    id: "creator-demos",
    title: "Creator Try-Ons & Demonstrations",
    desc: "Relatable on-camera demonstrations, styling tips, unboxings, and routine breakdowns that establish immediate personal connection.",
    tag: "Story-Driven · Authentic",
  },
  {
    id: "hook-testing",
    title: "Multiple Hook Variations",
    desc: "Receive 3 to 5 distinct 3-second opening hooks per concept to run A/B testing on paid ads and uncover the lowest cost per purchase.",
    tag: "A/B Testing · Scale ROAS",
  },
  {
    id: "presenter-voice",
    title: "AI Presenters & Multilingual Audio",
    desc: "Studio-quality on-camera personas and natural vocal cadences across diverse regional accents and languages.",
    tag: "Multilingual · Global Reach",
  },
];

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

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-16 sm:py-24 lg:py-32 relative overflow-hidden bg-[#F4F8FD] border-t border-slate-200/70"
      aria-label="AI UGC Content Formats"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10 sm:mb-16 reveal">
          <div className="section-badge bg-white shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0046C8]" />
            Core UGC Capabilities
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#091E42] tracking-tight leading-tight">
            UGC Formats Built for Real Engagement & Conversion.
          </h2>
          <p className="mt-3 sm:mt-5 text-[#475569] text-sm sm:text-lg leading-relaxed">
            Every video is structured from the ground up for mobile viewing habits: fast hooks, clear pacing, dynamic visual proof, and clear calls to action.
          </p>
        </div>

        {/* Formats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {formats.map((f, i) => (
            <div
              key={f.id}
              className="p-5 sm:p-8 rounded-2xl bg-white border border-slate-200/80 hover:border-[#0046C8]/40 hover:shadow-xl hover:shadow-[#0046C8]/8 transition-all duration-200 reveal flex flex-col justify-between group"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div>
                <div className="flex items-center justify-between mb-4 sm:mb-5">
                  <span className="px-3 py-1 rounded-full bg-[#E8F2FE] border border-[#0046C8]/20 text-[11px] font-mono font-bold text-[#0046C8] tracking-wide">
                    {f.tag}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-slate-300 group-hover:bg-[#0046C8] transition-colors" />
                </div>

                <h3 className="text-[#091E42] font-bold text-lg sm:text-xl mb-2 sm:mb-3 group-hover:text-[#0046C8] transition-colors">
                  {f.title}
                </h3>

                <p className="text-[#475569] text-sm leading-relaxed">
                  {f.desc}
                </p>
              </div>

              <div className="mt-6 sm:mt-8 pt-4 sm:pt-5 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-500 font-medium">9:16 Vertical Video</span>
                <span className="text-[#0046C8] text-xs font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Explore Format →
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Section Bottom CTA */}
        <div className="mt-10 sm:mt-14 p-5 sm:p-8 rounded-2xl bg-white border border-[#0046C8]/20 shadow-md shadow-[#0046C8]/5 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-5 sm:gap-6 reveal">
          <div>
            <h4 className="text-[#091E42] font-bold text-base sm:text-lg mb-1">
              Have specific creative requirements for your campaign?
            </h4>
            <p className="text-[#475569] text-sm">
              We customize hooks, presenters, and visual treatments for your brand identity.
            </p>
          </div>
          <a
            href={CALENDAR_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-sm py-3 px-6 whitespace-nowrap w-full sm:w-auto justify-center text-center shrink-0"
            aria-label="Get Free Consultation - Book consultation"
          >
            Get Free Consultation
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
}
