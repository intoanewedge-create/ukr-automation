"use client";

import { useEffect, useRef, useState } from "react";
import { CALENDAR_URL } from "@/lib/constants";

const faqs = [
  {
    q: "What is AI Automation and how can it help my business?",
    a: "We build AI-powered workflows that handle repetitive manual tasks — such as answering common customer questions on WhatsApp 24/7, capturing website leads, sending follow-up messages, booking appointments, and notifying your team. This saves valuable staff hours and ensures prospective customers get instant replies.",
  },
  {
    q: "How does WhatsApp enquiry automation work?",
    a: "When a potential client messages your WhatsApp business number, an automated workflow can immediately welcome them, answer common questions regarding services, pricing, or catalog items, collect key details, and schedule a call or notify your sales representative.",
  },
  {
    q: "Can you automate appointment booking and customer reminders?",
    a: "Yes. We connect your calendar to automated booking links and reminder sequences via WhatsApp, SMS, or email. Prospective clients can pick a convenient time, and automated reminders help reduce no-shows.",
  },
  {
    q: "What is AI UGC Video Creation?",
    a: "AI UGC (User-Generated Content) video creation uses artificial intelligence to produce realistic, creator-style promotional videos for your brand. It incorporates lifelike on-camera presenters, natural voiceovers, macro product showcases, dynamic captions, and persuasive hooks — without the high cost and scheduling headaches of traditional video shoots.",
  },
  {
    q: "How realistic are your AI UGC videos?",
    a: "Our videos utilize advanced video generation models capable of producing natural facial expressions, synchronized lip movements, and authentic speech pacing. Viewers experience fluid, human-like presentations that blend natively into Instagram Reels, YouTube Shorts, and TikTok feeds.",
  },
  {
    q: "What industries do you work with?",
    a: "We create videos and automations for businesses in Real Estate, Jewellery, Gyms & Fitness, Beauty & Skincare, Fashion, Restaurants & Food, Clinics, and E-Commerce.",
  },
  {
    q: "Can you integrate with our existing tools like Google Sheets or CRM?",
    a: "Yes. Our automations can connect directly to your Google Calendar, Google Sheets, WhatsApp Business, email platforms, web forms, and standard CRMs so you don't need to change your core software.",
  },
  {
    q: "How long does video production or automation setup take?",
    a: "Most AI UGC video concepts are delivered within 3 to 7 business days following brief approval. Automation workflows are typically designed, configured, and tested within 5 to 10 business days depending on complexity.",
  },
  {
    q: "Can we start with just one service (UGC videos or automation)?",
    a: "Absolutely. Many businesses start with either AI UGC video creation for ad campaigns or an automation workflow to solve enquiry bottlenecks. You can choose one or combine both as your business requires.",
  },
  {
    q: "How do I get started?",
    a: "Click 'Get Free Consultation' to book a 30-minute discovery call directly on Google Calendar, or submit our consultation form. We'll discuss your specific goals and outline a tailored plan.",
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
      className="py-16 sm:py-24 lg:py-32 bg-[#F8FAFC] relative border-t border-slate-200/80"
      aria-label="Frequently Asked Questions about UKR Automation services"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-10 sm:mb-16 reveal">
          <div className="section-badge mx-auto bg-white shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0046C8]" />
            Frequently Asked Questions
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#091E42] tracking-tight leading-tight">
            Clear Answers on <span className="text-[#0046C8]">Our Services.</span>
          </h2>
          <p className="mt-3 sm:mt-4 text-[#475569] text-sm sm:text-lg max-w-xl mx-auto">
            Everything you need to know about our AI UGC video creation and AI automation solutions.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3 sm:space-y-3.5 reveal">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`rounded-2xl overflow-hidden transition-all duration-300 border ${
                openIndex === i
                  ? "border-[#0046C8] bg-white shadow-lg shadow-[#0046C8]/6"
                  : "border-slate-200/90 bg-white hover:border-[#0046C8]/40"
              }`}
            >
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between px-5 sm:px-6 py-4 sm:py-5 text-left gap-3 sm:gap-4 cursor-pointer bg-transparent border-none"
                aria-expanded={openIndex === i}
              >
                <span className="text-[#091E42] font-bold text-sm sm:text-base leading-snug">
                  {faq.q}
                </span>
                <span className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 border transition-all ${
                  openIndex === i
                    ? "bg-[#0046C8] text-white border-[#0046C8]"
                    : "bg-[#F1F5F9] text-slate-600 border-slate-200"
                }`}>
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`transition-transform duration-200 ${openIndex === i ? "rotate-180" : ""}`}
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </span>
              </button>

              {openIndex === i && (
                <div className="px-5 sm:px-6 pb-5 pt-1 text-[#475569] text-xs sm:text-sm leading-relaxed border-t border-slate-100">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA inline */}
        <div className="mt-10 sm:mt-12 text-center reveal">
          <p className="text-xs sm:text-sm text-slate-500 mb-4">
            Have a question not listed here?
          </p>
          <a
            href={CALENDAR_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex text-xs sm:text-sm py-2.5 px-5 font-semibold"
            aria-label="Get Free Consultation"
          >
            <span>Ask Us in a Free Consultation</span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="ml-1.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
}
