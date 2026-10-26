"use client";

import { useEffect, useRef } from "react";

const pillars = [
  {
    num: "01",
    title: "Systems & Content in One Agency",
    desc: "We solve both sides of customer growth: setting up intelligent automations to handle enquiries immediately, and creating scroll-stopping promotional videos to attract attention.",
    tag: "Complete Approach",
  },
  {
    num: "02",
    title: "24/7 Enquiry Response",
    desc: "Automated workflows on WhatsApp and your website ensure incoming prospects receive fast, accurate answers and booking options even outside business hours.",
    tag: "Save Hours",
  },
  {
    num: "03",
    title: "Realistic Creator-Style Video",
    desc: "Produce lifelike on-camera presentations, macro product showcases, and multiple hook variations without the friction, delay, or expense of physical video shoots.",
    tag: "High Engagement",
  },
  {
    num: "04",
    title: "Practical & Custom-Built",
    desc: "We focus on straightforward solutions tailored to your specific industry and daily routines, connecting directly with your existing spreadsheets, calendars, and tools.",
    tag: "Simple Setup",
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
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight) {
        el.classList.add("visible");
      }
    });
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="why-us"
      ref={sectionRef}
      className="py-16 sm:py-24 lg:py-32 relative overflow-hidden bg-white border-t border-slate-100"
      aria-label="Why Choose UKR Automation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16 reveal">
          <div className="section-badge bg-[#F0F7FF] border border-[#0046C8]/20">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0046C8]" />
            Why UKR Automation
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#091E42] tracking-tight leading-tight">
            Practical Benefits for Modern Businesses.
          </h2>
          <p className="mt-3 sm:mt-5 text-[#475569] text-base sm:text-lg leading-relaxed">
            We focus on real business utility: making your products look exceptional on social feeds while automating routine communication to save your team valuable hours.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {pillars.map((pillar, idx) => (
            <div
              key={pillar.title}
              className="p-6 sm:p-7 rounded-2xl bg-[#F8FAFC] border border-slate-200/90 hover:border-[#0046C8]/40 hover:bg-white hover:shadow-xl hover:shadow-[#0046C8]/6 transition-all duration-300 reveal flex flex-col justify-between group"
              style={{ transitionDelay: `${idx * 60}ms` }}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-bold text-[#0046C8] bg-[#E8F2FE] px-2.5 py-1 rounded-md">
                    {pillar.num}
                  </span>
                  <span className="text-[11px] font-mono text-slate-500 px-2.5 py-0.5 rounded bg-white border border-slate-200/60 font-medium">
                    {pillar.tag}
                  </span>
                </div>

                <h3 className="text-[#091E42] font-bold text-lg mb-2.5 group-hover:text-[#0046C8] transition-colors leading-snug">
                  {pillar.title}
                </h3>

                <p className="text-[#475569] text-xs sm:text-sm leading-relaxed">
                  {pillar.desc}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-200/50">
                <span className="text-[11px] font-mono text-[#0046C8] font-semibold">
                  Practical Advantage
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
