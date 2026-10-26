"use client";

import { useEffect, useRef } from "react";

const problems = [
  {
    num: "01",
    title: "Prohibitive Studio Budgets",
    desc: "Studio rentals, videographers, lighting crews, and talent fees easily total thousands per video — making regular posting financially unviable.",
  },
  {
    num: "02",
    title: "Sluggish Turnaround Cycles",
    desc: "Traditional filming takes weeks between concept, shooting, and editing. By the time assets arrive, social trends and seasonal moments have already passed.",
  },
  {
    num: "03",
    title: "Creator Friction & Chasing Samples",
    desc: "Shipping physical products, managing freelance creator delays, and dealing with ghosting drains time and delays marketing launches.",
  },
  {
    num: "04",
    title: "Impossible to Scale Full Campaigns",
    desc: "Filming videos individually for dozens of jewellery designs, fitness routines, or beauty lines is physically and financially impossible with legacy shoots.",
  },
  {
    num: "05",
    title: "Costly Creative Hook Testing",
    desc: "Testing 5 to 10 distinct opening hooks for paid ads requires multiple shoots and creator re-hires — limiting ad ROAS optimization.",
  },
  {
    num: "06",
    title: "Zero Flexibility for Revisions",
    desc: "A single script update, price adjustment, or seasonal offer requires booking another shoot from scratch rather than a rapid creative iteration.",
  },
];

export default function Problems() {
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
      id="problems"
      ref={sectionRef}
      className="py-16 sm:py-24 lg:py-32 relative overflow-hidden bg-white border-t border-slate-100"
      aria-label="The legacy video production challenge"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-10 sm:mb-16 reveal">
          <div className="section-badge">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0046C8]" />
            The Creative Bottleneck
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#091E42] tracking-tight leading-tight">
            Traditional Video Shoots Don&apos;t Scale For Today&apos;s Feeds.
          </h2>
          <p className="mt-3 sm:mt-5 text-[#475569] text-sm sm:text-lg leading-relaxed font-normal">
            TikTok, Reels, and Meta Ads demand continuous creative testing and platform-native pacing. Legacy studio production is simply too slow, rigid, and expensive to keep up.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {problems.map((p, i) => (
            <div
              key={p.title}
              className="p-5 sm:p-8 rounded-2xl bg-[#F8FAFC] border border-slate-200/80 hover:border-[#0046C8]/40 hover:bg-white hover:shadow-lg hover:shadow-[#0046C8]/5 transition-all duration-200 reveal flex flex-col justify-between group"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div>
                <span className="font-mono text-xs text-[#0046C8] font-bold tracking-wider block mb-3">
                  {p.num}
                </span>
                <h3 className="text-[#091E42] font-bold text-lg mb-2.5 group-hover:text-[#0046C8] transition-colors">
                  {p.title}
                </h3>
                <p className="text-[#475569] text-sm leading-relaxed">
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
