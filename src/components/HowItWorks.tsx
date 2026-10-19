"use client";

import { useEffect, useRef } from "react";
import { CALENDAR_URL } from "@/lib/constants";

const steps = [
  {
    num: "01",
    title: "Brief",
    subtitle: "Share Your Vision",
    desc: "You tell us what you need.",
  },
  {
    num: "02",
    title: "Concept",
    subtitle: "Creative Strategy",
    desc: "We create the content direction.",
  },
  {
    num: "03",
    title: "Create",
    subtitle: "UGC Production",
    desc: "Creators produce the UGC.",
  },
  {
    num: "04",
    title: "Deliver",
    subtitle: "Ready to Post",
    desc: "You receive ready-to-use content.",
  },
];

export default function HowItWorks() {
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
      id="how-it-works"
      ref={sectionRef}
      className="py-16 sm:py-24 lg:py-36 relative overflow-hidden bg-white border-t border-[#0046c8]/10"
      aria-label="How our UGC production process works"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10 sm:mb-20 reveal">
          <div className="section-badge">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0046c8]" />
            Simple 4-Step Process
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#091E42] tracking-tight leading-tight">
            From Brand Brief to Platform-Ready Assets.
          </h2>
          <p className="mt-3 sm:mt-5 text-[#42526E] text-sm sm:text-lg leading-relaxed">
            No endless email threads, no shipping delays, no complex logistics. A streamlined creative pipeline designed for modern brand teams.
          </p>
        </div>

        {/* 4 Steps Minimalist Editorial Layout */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 lg:gap-10">
          {steps.map((step, idx) => (
            <div
              key={step.num}
              className="relative p-5 sm:p-8 rounded-2xl bg-[#F8FAFC] border border-[#0046c8]/10 shadow-[0_4px_20px_rgba(0,70,200,0.03)] hover:border-[#0046c8]/40 hover:shadow-[0_12px_30px_rgba(0,70,200,0.08)] transition-all duration-300 reveal flex flex-col justify-between group"
              style={{ transitionDelay: `${idx * 80}ms` }}
            >
              <div>
                <div className="flex items-center justify-between mb-6 sm:mb-8">
                  <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-mono text-[#0046c8] tracking-tighter">
                    {step.num}
                  </span>
                  <span className="w-2.5 h-2.5 rounded-full bg-[#0046c8]/20 group-hover:bg-[#0046c8] transition-colors" />
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-[#091E42] mb-1 tracking-tight group-hover:text-[#0046c8] transition-colors">
                  {step.title}
                </h3>
                
                <h4 className="text-xs font-mono font-semibold text-[#0046c8]/90 uppercase tracking-wider mb-3 sm:mb-4">
                  {step.subtitle}
                </h4>

                <p className="text-[#5E6C84] text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>

              <div className="mt-6 sm:mt-10 pt-4 border-t border-[#DFE1E6]/60">
                <span className="text-[11px] text-[#7A869A] uppercase tracking-wider font-mono">
                  Phase {step.num}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA inline */}
        <div className="mt-12 sm:mt-16 text-center reveal">
          <p className="text-[#5E6C84] text-sm sm:text-base mb-5 sm:mb-6">
            Ready to turn your product into captivating mobile UGC?
          </p>
          <a
            href={CALENDAR_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex w-full sm:w-auto justify-center text-center"
          >
            <span>Start Your UGC Campaign</span>
            <svg className="w-4 h-4 ml-2 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
}
