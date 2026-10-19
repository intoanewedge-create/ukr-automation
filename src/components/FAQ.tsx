"use client";

import { useEffect, useRef, useState } from "react";

const faqs = [
  {
    q: "What is AI UGC?",
    a: "AI UGC (User-Generated Content) is short-form video content created using artificial intelligence that captures the authentic, engaging, relatable style of genuine creator videos. It incorporates photorealistic on-camera presenters, lifelike voiceovers, high-definition product staging, dynamic captions, and persuasive hooks — without the high cost and logistical headaches of traditional video shoots.",
  },
  {
    q: "How realistic are AI UGC videos?",
    a: "Our videos utilize cutting-edge video synthesis models capable of generating lifelike facial expressions, natural speech cadence, and synchronized lip movements. Viewers experience fluid, human-like presentations that seamlessly blend into native feeds like Instagram Reels and TikTok.",
  },
  {
    q: "What industries do you create content for?",
    a: "We produce UGC for a wide array of business sectors including Jewellery, Gym & Fitness, Fashion & Apparel, Beauty & Skincare, and Restaurants & Food.",
  },
  {
    q: "What types of video formats can you create?",
    a: "We produce product-led showcases, direct-response paid social ads, unboxings, creator demonstrations, lifestyle styling, on-camera reviews, promotional announcements, and multiple 3-second hook variations for ad testing.",
  },
  {
    q: "Can you use our actual products and brand assets?",
    a: "Yes. We integrate your high-resolution product photos, CAD models, branding colors, typography, logos, and packaging directly into the generation workflow so that every video accurately represents your brand.",
  },
  {
    q: "How long does production take?",
    a: "Most UGC video projects are completed within 3 to 7 business days following brief approval. Because physical film crews and studio bookings are unnecessary, our turnaround is significantly faster than traditional video production.",
  },
  {
    q: "Can the presenter style and voice be customized?",
    a: "Absolutely. You can select presenter demographics (age, ethnicity, style), energy levels (enthusiastic, professional, casual), voice characteristics (tone, gender, pacing), and background environments to match your target audience.",
  },
  {
    q: "Can you create content in different languages?",
    a: "Yes. We can produce and voice your video content in multiple languages and regional accents, allowing you to scale campaigns across domestic and international markets without hiring separate local creators.",
  },
  {
    q: "What video formats do you deliver?",
    a: "We deliver full-resolution video files formatted in 9:16 vertical (ideal for Instagram Reels, TikTok, YouTube Shorts, and Stories), 1:1 square (for feed carousels and Meta feeds), and 16:9 widescreen (for websites and YouTube). All videos include auto-captioning and sound design.",
  },
  {
    q: "How do I get started?",
    a: "Simply click 'Get Free Consultation' to book a 30-minute creative session on Google Calendar, or submit our project inquiry form. We'll discuss your products, target audience, and provide sample concepts tailored to your brand.",
  },
];

export default function FAQ() {
  const sectionRef = useRef<HTMLElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.08 }
    );
    sectionRef.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section
      id="faq"
      ref={sectionRef}
      className="py-16 sm:py-24 lg:py-36 bg-[#F8FAFC] relative border-t border-[#0046c8]/10"
      aria-label="Frequently asked questions about AI UGC"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-10 sm:mb-16 reveal">
          <div className="section-badge mx-auto">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0046c8]" />
            Frequently Asked Questions
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#091E42] tracking-tight leading-tight">
            Clear Answers on <span className="text-[#0046c8]">UGC Production.</span>
          </h2>
          <p className="mt-3 sm:mt-4 text-[#42526E] text-sm sm:text-lg max-w-xl mx-auto">
            Everything you need to know about our creative process, deliverables, and capabilities.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3 sm:space-y-3.5 reveal">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`rounded-2xl overflow-hidden transition-all duration-300 border ${
                openIndex === i
                  ? "border-[#0046c8] bg-white shadow-[0_8px_24px_rgba(0,70,200,0.08)]"
                  : "border-[#DFE1E6] bg-white hover:border-[#0046c8]/40"
              }`}
            >
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between px-4 sm:px-6 py-4 sm:py-5 text-left gap-3 sm:gap-4 cursor-pointer bg-transparent border-none"
                aria-expanded={openIndex === i}
                aria-controls={`faq-answer-${i}`}
                id={`faq-question-${i}`}
              >
                <span
                  className={`font-bold text-sm sm:text-base transition-colors duration-200 tracking-tight ${
                    openIndex === i ? "text-[#0046c8]" : "text-[#091E42]"
                  }`}
                >
                  {faq.q}
                </span>
                <div
                  className={`flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center transition-all duration-300 ${
                    openIndex === i
                      ? "bg-[#EBF3FE] text-[#0046c8] rotate-45"
                      : "bg-[#F4F5F7] text-[#5E6C84]"
                  }`}
                  aria-hidden="true"
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                </div>
              </button>

              <div
                id={`faq-answer-${i}`}
                role="region"
                aria-labelledby={`faq-question-${i}`}
                className="accordion-content"
                style={{ maxHeight: openIndex === i ? "400px" : "0" }}
              >
                <p className="px-4 sm:px-6 pb-4 sm:pb-5 text-[#5E6C84] text-xs sm:text-sm leading-relaxed">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 reveal">
          <p className="text-[#5E6C84] text-sm">
            Have a different question regarding your brand?{" "}
            <button
              onClick={() => {
                const el = document.querySelector("#contact");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="text-[#0046c8] hover:underline font-semibold transition-colors bg-transparent border-none cursor-pointer"
            >
              Ask our creative team directly.
            </button>
          </p>
        </div>

      </div>
    </section>
  );
}
