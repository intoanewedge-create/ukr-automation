"use client";

import { useEffect, useRef, useState } from "react";
import { CALENDAR_URL } from "@/lib/constants";

interface PortfolioExample {
  id: string;
  industry: string;
  category: "real-estate" | "jewellery" | "fitness" | "beauty" | "fashion" | "food" | "ecommerce";
  title: string;
  concept: string;
  format: string;
  hook: string;
  visualHighlight: string;
}

const portfolioExamples: PortfolioExample[] = [
  {
    id: "re-1",
    industry: "Real Estate",
    category: "real-estate",
    title: "Luxury Apartment Tour & Lifestyle Showcase",
    concept: "Creator-style presenter walking through modern living spaces, balcony views, and premium amenities.",
    format: "9:16 Vertical · Instagram Reel & Ads",
    hook: "Looking for your dream home in the city? Come tour this stunning space...",
    visualHighlight: "Photorealistic presenter + smooth architectural pan",
  },
  {
    id: "jewel-1",
    industry: "Jewellery",
    category: "jewellery",
    title: "Handcrafted Gold & Diamond Ring Spotlight",
    concept: "Close-up macro clarity highlighting gemstone sparkle, hallmark craftsmanship, and elegant styling.",
    format: "9:16 Vertical · Meta & Instagram Feed",
    hook: "The sparkle you never knew you needed. Here is why this design is turning heads...",
    visualHighlight: "Macro lighting, reflection details & on-hand demo",
  },
  {
    id: "fit-1",
    industry: "Gyms & Fitness",
    category: "fitness",
    title: "High-Energy Gym Tour & Membership Offer",
    concept: "Engaging trainer presenter breaking down gym equipment, community vibe, and a limited-time trial offer.",
    format: "9:16 Vertical · YouTube Shorts & Reels",
    hook: "Stop waiting for Monday. Here is what your workout could look like today...",
    visualHighlight: "Dynamic tempo, energetic audio & workout pacing",
  },
  {
    id: "beauty-1",
    industry: "Beauty & Skincare",
    category: "beauty",
    title: "Hydrating Serum Routine & Texture Demo",
    concept: "Creator demonstrating serum application, discussing key gentle ingredients, and showing skin glow.",
    format: "9:16 Vertical · TikTok & Instagram Feed",
    hook: "If your skin feels dry by mid-day, you need to see this simple 30-second routine...",
    visualHighlight: "Natural skin texture, realistic droplets & glow",
  },
  {
    id: "fash-1",
    industry: "Fashion",
    category: "fashion",
    title: "Seasonal Outfit Styling & Capsule Wardrobe",
    concept: "Trend-forward presenter showcasing three ways to style one statement jacket for work and evenings.",
    format: "9:16 Vertical · Reels & TikTok",
    hook: "3 outfits, 1 essential piece. Watch how easy it is to elevate your look...",
    visualHighlight: "Fluid fabric movement, rapid styling transitions",
  },
  {
    id: "food-1",
    industry: "Restaurants & Food",
    category: "food",
    title: "Artisanal Burger Preparation & Table Experience",
    concept: "Mouth-watering sequence of flame-grilled patties, melting cheese, fresh toppings, and dining ambience.",
    format: "9:16 Vertical · Instagram Stories & Ads",
    hook: "Craving the ultimate weekend bite? Here is what makes our burgers unforgettable...",
    visualHighlight: "High-contrast culinary colors & sizzle dynamics",
  },
  {
    id: "ecom-1",
    industry: "E-Commerce Products",
    category: "ecommerce",
    title: "Ergonomic Desk Accessory Unboxing & Review",
    concept: "Problem-solution creator demonstration highlighting packaging, quick setup, and productivity benefits.",
    format: "9:16 Vertical · Direct-Response Social Ads",
    hook: "This small desk upgrade saved my posture. Here is my honest breakdown...",
    visualHighlight: "Product-in-action, dynamic captioning & clean hook",
  },
];

const categories = [
  { label: "All Examples", value: "all" },
  { label: "Real Estate", value: "real-estate" },
  { label: "Jewellery", value: "jewellery" },
  { label: "Gyms & Fitness", value: "fitness" },
  { label: "Beauty & Skincare", value: "beauty" },
  { label: "Fashion", value: "fashion" },
  { label: "Restaurants & Food", value: "food" },
  { label: "E-Commerce", value: "ecommerce" },
];

export default function UgcPortfolio() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeTab, setActiveTab] = useState<string>("all");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.08 }
    );
    sectionRef.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const filteredExamples = activeTab === "all"
    ? portfolioExamples
    : portfolioExamples.filter((ex) => ex.category === activeTab);

  return (
    <section
      id="ugc-videos"
      ref={sectionRef}
      className="py-16 sm:py-24 lg:py-32 relative overflow-hidden bg-white border-t border-slate-100"
      aria-label="AI UGC Video Creation Services and Examples"
    >
      <div id="portfolio" className="sr-only">Portfolio and Examples</div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10 sm:mb-14 reveal">
          <div className="section-badge bg-[#F0F7FF] border border-[#0046C8]/20">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0046C8]" />
            Service 02 — AI UGC Video Creation
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#091E42] tracking-tight leading-tight">
            Realistic Creator Videos Created with AI.
          </h2>
          <p className="mt-3 sm:mt-5 text-[#475569] text-base sm:text-lg leading-relaxed">
            We help brands generate realistic, creator-style promotional videos designed for high engagement on Instagram Reels, YouTube Shorts, and paid ad feeds.
          </p>
        </div>

        {/* 6 Capabilities Badges */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12 sm:mb-16 reveal">
          {[
            {
              title: "AI UGC Product Advertisements",
              desc: "Showcase products in real-world contexts with natural creator interactions that drive purchases.",
            },
            {
              title: "Realistic AI Presenters & Spokespersons",
              desc: "Lifelike on-camera avatars with natural facial expressions, pacing, and human voice cadences.",
            },
            {
              title: "Short-Form Social Media Videos",
              desc: "Engineered specifically in 9:16 vertical format for Instagram Reels, YouTube Shorts, and TikTok.",
            },
            {
              title: "Product Demos & Promotional Videos",
              desc: "Demonstrate key features, craftsmanship, unboxings, and practical customer benefits.",
            },
            {
              title: "Service-Based Business Promos",
              desc: "Ideal for real estate agents, fitness trainers, clinics, and local services to build personal trust.",
            },
            {
              title: "Multiple Creative Variations for Testing",
              desc: "Generate distinct 3-second hook openings to run A/B ad testing and identify winning creatives.",
            },
          ].map((cap) => (
            <div
              key={cap.title}
              className="p-5 rounded-2xl bg-[#F8FAFC] border border-slate-200/80 hover:border-[#0046C8]/40 hover:bg-white hover:shadow-md transition-all duration-200"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-[#0046C8]" />
                <h3 className="text-[#091E42] font-bold text-sm sm:text-base">
                  {cap.title}
                </h3>
              </div>
              <p className="text-[#475569] text-xs sm:text-sm leading-relaxed">
                {cap.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Portfolio / Industry Filter Buttons */}
        <div className="mb-8 reveal">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
            <div>
              <h3 className="text-lg sm:text-2xl font-bold text-[#091E42] tracking-tight">
                Featured UGC Creative Portfolio
              </h3>
              <p className="text-xs sm:text-sm text-[#475569] mt-1">
                Creative formats and sample showcase concepts across key business industries.
              </p>
            </div>
            
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-[11px] font-mono text-slate-600 self-start sm:self-auto shrink-0">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
              UGC Creative Formats
            </span>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActiveTab(cat.value)}
                className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  activeTab === cat.value
                    ? "bg-[#0046C8] text-white shadow-xs"
                    : "bg-[#F1F5F9] text-slate-600 hover:bg-[#E2E8F0] hover:text-[#091E42]"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Examples Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 reveal">
          {filteredExamples.map((ex) => (
            <div
              key={ex.id}
              className="p-5 sm:p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200/90 hover:border-[#0046C8]/40 hover:bg-white hover:shadow-lg transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                {/* Industry & Label Badge */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="px-2.5 py-1 rounded-md bg-[#E8F2FE] text-[#0046C8] text-[11px] font-bold uppercase tracking-wider font-mono">
                    {ex.industry}
                  </span>
                  <span className="text-[10px] text-slate-400 font-mono">
                    9:16 Vertical
                  </span>
                </div>

                <h4 className="text-[#091E42] font-bold text-base sm:text-lg mb-2 group-hover:text-[#0046C8] transition-colors leading-snug">
                  {ex.title}
                </h4>

                <p className="text-[#475569] text-xs sm:text-sm leading-relaxed mb-4">
                  {ex.concept}
                </p>

                {/* Hook Box */}
                <div className="p-3 rounded-xl bg-white border border-slate-200/70 mb-3 text-xs">
                  <span className="font-bold text-[#0046C8] block mb-1">
                    Opening Hook Concept:
                  </span>
                  <span className="text-slate-700 italic">
                    &ldquo;{ex.hook}&rdquo;
                  </span>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-200/60 flex items-center justify-between text-xs text-slate-500">
                <span className="text-[11px] font-medium text-slate-600">
                  {ex.visualHighlight}
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-200/60 text-slate-600">
                  Example
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Note stating examples */}
        <p className="text-center text-xs text-slate-500 mt-6 italic">
          Note: Concepts above are sample creative demonstrations developed to showcase video format options for each industry.
        </p>

        {/* Section Bottom CTA */}
        <div className="mt-12 sm:mt-16 p-6 sm:p-10 rounded-2xl bg-[#F0F7FF] border border-[#0046C8]/25 flex flex-col sm:flex-row items-center justify-between gap-6 reveal">
          <div>
            <h4 className="text-[#091E42] font-extrabold text-lg sm:text-xl mb-1.5">
              Ready to create AI UGC videos for your business?
            </h4>
            <p className="text-[#475569] text-sm">
              Book a free consultation to discuss your product, target audience, and tailored video hooks.
            </p>
          </div>
          <a
            href={CALENDAR_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-sm py-3 px-6 shrink-0 w-full sm:w-auto justify-center text-center font-semibold"
            aria-label="Get Free Consultation for AI UGC Videos"
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
