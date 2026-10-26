"use client";

import { useEffect, useRef } from "react";
import { CALENDAR_URL } from "@/lib/constants";
import InteractiveDemo from "@/components/InteractiveDemo";

const workflows = [
  {
    num: "01",
    title: "WhatsApp Enquiry Automation",
    desc: "Respond instantly to new customer enquiries 24/7 on WhatsApp. Share product details, answer common questions, and qualify leads immediately.",
    badge: "24/7 Instant Response",
  },
  {
    num: "02",
    title: "Website Lead Capture & Follow-Ups",
    desc: "Capture website visitors automatically, send instant confirmations via email or SMS, and schedule multi-step nurture follow-ups so no lead goes cold.",
    badge: "Never Miss a Lead",
  },
  {
    num: "03",
    title: "Automated Appointment Booking & Reminders",
    desc: "Allow prospects to book consultations or visits directly without back-and-forth messaging. Send automatic reminders to reduce no-shows.",
    badge: "Hands-Free Scheduling",
  },
  {
    num: "04",
    title: "AI Customer Support & FAQs",
    desc: "Provide accurate, conversational answers to routine questions about pricing, location, service packages, and policies without tying up your staff.",
    badge: "Reduced Support Load",
  },
  {
    num: "05",
    title: "Lead Management & Team Notifications",
    desc: "Automatically route qualified enquiries to the right team member via WhatsApp, Slack, or email with full contact history ready to close.",
    badge: "Instant Alert System",
  },
  {
    num: "06",
    title: "Automated Business Workflows",
    desc: "Connect your forms, Google Sheets, CRMs, and email tools into one seamless pipeline that eliminates manual data entry and human errors.",
    badge: "Connected Tools",
  },
  {
    num: "07",
    title: "AI-Assisted Communication Workflows",
    desc: "Draft routine responses, generate client proposals, and send automated progress updates using smart AI-assisted writing workflows.",
    badge: "Faster Communication",
  },
];

export default function AutomationSolutions() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.08 }
    );
    sectionRef.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="ai-automation"
      ref={sectionRef}
      className="py-16 sm:py-24 lg:py-32 relative overflow-hidden bg-[#F8FAFC] border-t border-slate-200/80"
      aria-label="AI Automation Solutions and Business Applications"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16 reveal">
          <div className="section-badge bg-white shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0046C8]" />
            Service 01 — AI Automation Solutions
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#091E42] tracking-tight leading-tight">
            AI Automations That Save Time &amp; Respond Faster.
          </h2>
          <p className="mt-3 sm:mt-5 text-[#475569] text-base sm:text-lg leading-relaxed">
            We build AI-powered workflows that help businesses handle enquiries, follow up with leads, manage routine communication, and reduce repetitive manual work.
          </p>
        </div>

        {/* 7 Workflow Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mb-14 sm:mb-20">
          {workflows.map((wf, idx) => (
            <div
              key={wf.title}
              className={`p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/90 hover:border-[#0046C8]/50 hover:shadow-xl hover:shadow-[#0046C8]/6 transition-all duration-300 reveal flex flex-col justify-between group ${
                idx === 6 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-bold text-[#0046C8] bg-[#E8F2FE] px-2.5 py-1 rounded-md">
                    {wf.num}
                  </span>
                  <span className="text-[11px] font-mono text-slate-500 px-2.5 py-0.5 rounded bg-slate-100 font-medium">
                    {wf.badge}
                  </span>
                </div>

                <h3 className="text-[#091E42] font-bold text-lg mb-2.5 group-hover:text-[#0046C8] transition-colors">
                  {wf.title}
                </h3>

                <p className="text-[#475569] text-sm leading-relaxed">
                  {wf.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-400 font-mono">Custom Solution</span>
                <span className="text-[#0046C8] font-bold group-hover:translate-x-1 transition-transform">
                  Automate workflow →
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Story Demonstration (Replaces static industry applications) */}
        <div className="reveal mb-14 sm:mb-20">
          <InteractiveDemo />
        </div>

        {/* Section Bottom CTA */}
        <div className="p-6 sm:p-10 rounded-2xl bg-[#091E42] text-white flex flex-col sm:flex-row items-center justify-between gap-6 reveal">
          <div>
            <h4 className="font-extrabold text-lg sm:text-xl text-white mb-1.5">
              Want to see which tasks your business can automate?
            </h4>
            <p className="text-blue-100/80 text-sm">
              Schedule a free conversation to review your current enquiry and lead process.
            </p>
          </div>
          <a
            href={CALENDAR_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-sm py-3 px-6 shrink-0 w-full sm:w-auto justify-center text-center font-semibold bg-[#0046C8] hover:bg-[#0038a8] border-none"
            aria-label="Discuss Your Automation Needs"
          >
            Discuss Your Automation Needs
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
}
