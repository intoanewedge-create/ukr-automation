"use client";

import { useEffect, useRef } from "react";

const platforms = [
  { name: "Instagram Reels", format: "9:16 Vertical" },
  { name: "TikTok",          format: "9:16 Native FYP" },
  { name: "YouTube Shorts",  format: "9:16 Vertical" },
  { name: "Meta Video Ads",  format: "9:16 / 4:5 Feed" },
  { name: "LinkedIn Video",  format: "Sponsored & Feed" },
  { name: "X (Twitter)",     format: "In-Feed Video" },
  { name: "Google PMax Ads", format: "Responsive Video" },
  { name: "Pinterest Pins",  format: "9:16 Idea Pins" },
  { name: "Facebook Watch",  format: "In-Feed Video" },
  { name: "Website Hero",    format: "Full-Bleed 9:16 / 16:9" },
];

export default function Integrations() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const row1 = platforms.slice(0, 5);
  const row2 = platforms.slice(5);

  return (
    <section
      id="platforms"
      ref={sectionRef}
      className="py-24 lg:py-32 relative overflow-hidden bg-white border-t border-[#0046c8]/10"
      aria-label="Supported advertising and social media channels"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mb-16 reveal">
          <div className="section-badge">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0046c8]" />
            Channel Ready
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#091E42] tracking-tight leading-tight">
            Built for Where Your Customers Scroll.
          </h2>
          <p className="mt-5 text-[#42526E] text-base sm:text-lg leading-relaxed">
            Every UGC video is formatted with native platform margins, optimized audio dynamics, and attention-grabbing pacing tailored for organic feeds and paid ad auctions.
          </p>
        </div>

        {/* Platform Marquee Rows */}
        <div className="space-y-4 overflow-hidden reveal" aria-label="Target channels list">
          <div className="flex gap-4" style={{ animation: "marquee-left 28s linear infinite" }}>
            {[...row1, ...row1, ...row1].map((p, i) => (
              <PlatformCapsule key={`r1-${i}`} platform={p} />
            ))}
          </div>

          <div className="flex gap-4" style={{ animation: "marquee-right 30s linear infinite" }}>
            {[...row2, ...row2, ...row2].map((p, i) => (
              <PlatformCapsule key={`r2-${i}`} platform={p} />
            ))}
          </div>
        </div>

        <style>{`
          @keyframes marquee-left {
            from { transform: translateX(0); }
            to   { transform: translateX(-50%); }
          }
          @keyframes marquee-right {
            from { transform: translateX(-50%); }
            to   { transform: translateX(0); }
          }
          @media (prefers-reduced-motion: reduce) {
            [style*="marquee"] { animation: none !important; }
          }
        `}</style>

      </div>
    </section>
  );
}

function PlatformCapsule({ platform }: { platform: { name: string; format: string } }) {
  return (
    <div className="flex items-center gap-3.5 px-6 py-3.5 rounded-full bg-[#F8FAFC] border border-[#0046c8]/15 hover:border-[#0046c8] hover:bg-[#EBF3FE] transition-all flex-shrink-0 group shadow-sm">
      <span className="w-2 h-2 rounded-full bg-[#0046c8] group-hover:scale-125 transition-transform" />
      <span className="text-[#091E42] font-semibold text-sm tracking-tight group-hover:text-[#0046c8] transition-colors">
        {platform.name}
      </span>
      <span className="text-[11px] font-mono text-[#5E6C84] pl-2 border-l border-[#DFE1E6]">
        {platform.format}
      </span>
    </div>
  );
}
