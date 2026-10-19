"use client";

import { useEffect, useRef } from "react";
import { CALENDAR_URL } from "@/lib/constants";

export default function ConsultationCTA() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.15 }
    );
    sectionRef.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const scrollToContact = () => {
    const el = document.querySelector("#contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="consultation"
      ref={sectionRef}
      className="py-24 lg:py-36 relative overflow-hidden bg-white border-t border-[#0046c8]/10"
      aria-label="Free AI UGC consultation"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="relative rounded-3xl border border-[#0046c8]/30 overflow-hidden reveal p-8 sm:p-14 lg:p-20 text-center shadow-2xl shadow-[#0046c8]/10"
          style={{
            background:
              "linear-gradient(145deg, #051026 0%, #06132D 60%, #002878 100%)",
          }}
        >
          {/* Subtle blue ambient glow */}
          <div
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 70% 60% at 50% 0%, rgba(0,70,200,0.3) 0%, transparent 65%)",
            }}
          />

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-semibold text-white tracking-wide uppercase font-mono mx-auto mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#60A5FA]" />
              Start The Conversation
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
              Prefer an immediate conversation?
            </h2>

            <p className="text-blue-100/90 text-base sm:text-lg max-w-xl mx-auto leading-relaxed mb-8">
              Schedule a 30-minute creative strategy call directly on Google Calendar.
            </p>

            <div className="flex flex-wrap gap-4 justify-center items-center">
              <a
                href={CALENDAR_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-white text-base py-3.5 px-8 inline-flex items-center"
                aria-label="Book 1-on-1 Strategy Session on Google Calendar"
              >
                <span>Book 1-on-1 Strategy Session</span>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>

              <button
                onClick={scrollToContact}
                className="px-8 py-3.5 rounded-full text-base font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/25 transition-all"
                aria-label="Contact Us - scroll to form"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
