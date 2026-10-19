"use client";

import { useEffect, useRef } from "react";

const pillars = [
  {
    num: "01",
    title: "Feels Authentic",
    desc: "UGC feels natural and relatable, helping brands connect with real people.",
    tag: "Authentic",
  },
  {
    num: "02",
    title: "Builds Trust",
    desc: "People are more likely to trust content that feels like a genuine experience rather than a traditional advertisement.",
    tag: "Trust",
  },
  {
    num: "03",
    title: "Made for Social",
    desc: "UGC is created in a format that naturally fits platforms like Instagram, YouTube and TikTok.",
    tag: "Social Native",
  },
  {
    num: "04",
    title: "More Creative Options",
    desc: "Create different hooks, styles and perspectives so brands have more content to test and use.",
    tag: "Variations",
  },
];

export default function WhyChooseUs() {
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
      { threshold: 0.05, rootMargin: "50px" }
    );

    const els = sectionRef.current?.querySelectorAll(".reveal");
    els?.forEach((el) => {
      observer.observe(el);
      // Fallback: if already within viewport
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight) {
        el.classList.add("visible");
      }
    });
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="why-ugc"
      ref={sectionRef}
      className="py-16 sm:py-20 lg:py-28 relative overflow-hidden bg-[#F0F6FE] border-t border-[#0046c8]/10"
      aria-label="Why Brands Choose UGC"
    >
      <div id="why-us" className="sr-only">Why Choose UKR Automation</div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-8 sm:mb-12 reveal">
          <div className="section-badge">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0046c8]" />
            The UGC Advantage
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#091E42] tracking-tight leading-tight">
            Why UGC?
          </h2>
          <p className="mt-3 sm:mt-4 text-[#42526E] text-sm sm:text-lg leading-relaxed">
            Content that connects with modern audiences.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {pillars.map((pillar, idx) => (
            <div
              key={pillar.title}
              className="p-5 sm:p-6 rounded-2xl bg-white border border-[#0046c8]/10 shadow-[0_4px_20px_rgba(0,70,200,0.04)] hover:border-[#0046c8]/40 hover:shadow-[0_12px_30px_rgba(0,70,200,0.08)] transition-all duration-300 reveal flex flex-col justify-between group"
              style={{ transitionDelay: `${idx * 60}ms` }}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-bold text-[#0046c8] bg-[#EBF3FE] px-2.5 py-1 rounded-md">
                    {pillar.num}
                  </span>
                  <span className="text-[11px] font-mono text-[#5E6C84] px-2 py-0.5 rounded bg-[#F4F5F7]">
                    {pillar.tag}
                  </span>
                </div>

                <h3 className="text-[#091E42] font-bold text-lg mb-2 group-hover:text-[#0046c8] transition-colors">
                  {pillar.title}
                </h3>

                <p className="text-[#5E6C84] text-sm leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
