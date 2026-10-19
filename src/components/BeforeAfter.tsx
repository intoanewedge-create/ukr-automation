"use client";

import { useEffect, useRef } from "react";

const traditional = [
  "Thousands spent per video on studio rental, lighting gear, and talent",
  "Weeks of turnaround delay from initial concept to final export",
  "High friction coordinating with multiple creators and shipping samples",
  "Single creative concept produced with zero budget left for testing",
  "Costly reshoots required for simple script updates or price changes",
  "Impossible to scale across rapid campaign calendars or social schedules",
];

const modernUGC = [
  "Studio-grade creator visuals at a fraction of legacy shoot costs",
  "Rapid delivery within days to capture emerging viral trends",
  "Photorealistic on-camera personas and natural vocal cadence",
  "Multiple 3-second hook variations generated for high-ROAS ad testing",
  "Effortless digital revisions without scheduling physical reshoots",
  "Seamlessly scale video creative across all your brand campaigns",
];

export default function BeforeAfter() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="comparison"
      ref={sectionRef}
      className="py-24 lg:py-36 relative overflow-hidden bg-[#F8FAFC] border-t border-[#0046c8]/10"
      aria-label="Comparison between Traditional Shoots and UKR Automation UGC"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mb-16 reveal">
          <div className="section-badge">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0046c8]" />
            The Creative Shift
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#091E42] tracking-tight leading-tight">
            Traditional Shoots vs. UKR Automation UGC.
          </h2>
          <p className="mt-5 text-[#42526E] text-base sm:text-lg leading-relaxed">
            See how forward-looking brands replace production friction with agile, high-converting video creative.
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          
          {/* Legacy Shoots */}
          <div className="p-8 sm:p-10 rounded-3xl bg-white border border-[#DFE1E6] shadow-sm reveal flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-8">
                <span className="text-xs font-mono font-semibold text-[#7A869A] uppercase tracking-widest">
                  Legacy Approach
                </span>
                <span className="px-3 py-1 rounded-full bg-[#F4F5F7] text-[11px] font-mono text-[#5E6C84] border border-[#DFE1E6]">
                  High Friction
                </span>
              </div>

              <h3 className="text-2xl font-bold text-[#091E42] mb-6 tracking-tight">
                Traditional Video Shoots
              </h3>

              <ul className="space-y-4">
                {traditional.map((point) => (
                  <li key={point} className="flex items-start gap-3.5 text-sm text-[#5E6C84] leading-relaxed">
                    <span className="text-[#97A0AF] font-bold flex-shrink-0 mt-0.5">✕</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-10 pt-5 border-t border-[#EBECF0]">
              <p className="text-xs text-[#7A869A] font-mono">
                Outcome: Low output volume, high customer acquisition cost
              </p>
            </div>
          </div>

          {/* UKR Automation UGC */}
          <div className="p-8 sm:p-10 rounded-3xl bg-white border-2 border-[#0046c8] shadow-[0_12px_40px_rgba(0,70,200,0.12)] reveal flex flex-col justify-between relative overflow-hidden">
            <div
              aria-hidden="true"
              className="absolute top-0 right-0 w-64 h-64 bg-[#0046c8]/[0.06] rounded-full blur-3xl pointer-events-none"
            />

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-8">
                <span className="text-xs font-mono font-bold text-[#0046c8] uppercase tracking-widest">
                  The Modern Agency
                </span>
                <span className="px-3 py-1 rounded-full bg-[#EBF3FE] border border-[#0046c8]/30 text-[11px] font-mono font-bold text-[#0046c8]">
                  Agile & Scalable
                </span>
              </div>

              <h3 className="text-2xl font-bold text-[#091E42] mb-6 tracking-tight">
                UKR Automation UGC
              </h3>

              <ul className="space-y-4">
                {modernUGC.map((point) => (
                  <li key={point} className="flex items-start gap-3.5 text-sm text-[#172B4D] font-medium leading-relaxed">
                    <span className="text-[#0046c8] font-bold flex-shrink-0 mt-0.5">✓</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative z-10 mt-10 pt-5 border-t border-[#0046c8]/15">
              <p className="text-xs text-[#0046c8] font-mono font-semibold">
                Outcome: High creative velocity, rapid iterations & higher ROAS
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
