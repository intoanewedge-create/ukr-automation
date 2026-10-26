"use client";

import { useEffect, useRef } from "react";
import { CALENDAR_URL } from "@/lib/constants";

const steps = [
  {
    num: "01",
    title: "Discuss Your Needs",
    subtitle: "Free Discovery Session",
    desc: "We discuss your business, target audience, customer enquiry channels, and workflow bottlenecks to identify where automation and creator videos create the highest impact.",
  },
  {
    num: "02",
    title: "Plan the Solution",
    subtitle: "Workflow & Creative Strategy",
    desc: "We map out the automation triggers (like WhatsApp replies, form follow-ups, and calendar bookings), alongside tailored video concepts, hooks, and presentation styles.",
  },
  {
    num: "03",
    title: "Create and Implement",
    subtitle: "System Setup & Production",
    desc: "We configure your automated workflows, thoroughly testing responses and lead alerts before deployment, while producing your high-clarity AI UGC promotional videos.",
  },
  {
    num: "04",
    title: "Review and Improve",
    subtitle: "Feedback & Optimization",
    desc: "We review results together, make any requested adjustments to automation rules or video hooks, and ensure your new systems run smoothly and reliably.",
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
      id="process"
      ref={sectionRef}
      className="py-16 sm:py-24 lg:py-32 relative overflow-hidden bg-[#F8FAFC] border-t border-slate-200/80"
      aria-label="How It Works — Simple 4-Step Process"
    >
      <div id="how-it-works" className="sr-only">How It Works</div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16 reveal">
          <div className="section-badge bg-white shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0046C8]" />
            Simple 4-Step Process
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#091E42] tracking-tight leading-tight">
            How We Work With You.
          </h2>
          <p className="mt-3 sm:mt-5 text-[#475569] text-base sm:text-lg leading-relaxed">
            A straightforward, practical collaborative workflow designed to get high-performing assets and smart automations working for your business quickly.
          </p>
        </div>

        {/* 4 Steps Minimalist Layout */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-8">
          {steps.map((step, idx) => (
            <div
              key={step.num}
              className="relative p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:border-[#0046C8]/40 hover:shadow-xl hover:shadow-[#0046C8]/6 transition-all duration-300 reveal flex flex-col justify-between group"
              style={{ transitionDelay: `${idx * 80}ms` }}
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="text-3xl sm:text-4xl font-extrabold font-mono text-[#0046C8] tracking-tighter">
                    {step.num}
                  </span>
                  <span className="w-2.5 h-2.5 rounded-full bg-[#0046C8]/20 group-hover:bg-[#0046C8] transition-colors" />
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-[#091E42] mb-1 tracking-tight group-hover:text-[#0046C8] transition-colors">
                  {step.title}
                </h3>
                
                <h4 className="text-xs font-mono font-semibold text-[#0046C8] uppercase tracking-wider mb-3">
                  {step.subtitle}
                </h4>

                <p className="text-[#475569] text-xs sm:text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-100">
                <span className="text-[11px] text-slate-400 uppercase tracking-wider font-mono">
                  Step {step.num}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA inline */}
        <div className="mt-12 sm:mt-16 text-center reveal">
          <p className="text-[#475569] text-sm sm:text-base mb-5">
            Ready to discuss your creative video concepts or automation requirements?
          </p>
          <a
            href={CALENDAR_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex w-full sm:w-auto justify-center text-center font-semibold"
            aria-label="Get Free Consultation - Book a session on Google Calendar"
          >
            <span>Get Free Consultation</span>
            <svg className="w-4 h-4 ml-1.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
}
