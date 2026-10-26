"use client";

import { useEffect, useRef, useState } from "react";
import { COMPANY, CALENDAR_URL } from "@/lib/constants";

interface FormData {
  name: string;
  business: string;
  email: string;
  phone: string;
  serviceNeeded: string;
  industry: string;
  message: string;
}

const serviceOptions = [
  "AI Automation Solutions",
  "AI UGC Video Creation",
  "Both AI Automation & AI UGC Videos",
];

const industries = [
  "Real Estate",
  "Jewellery",
  "Gyms & Fitness",
  "Beauty & Skincare",
  "Fashion & Apparel",
  "Restaurants & Food",
  "Clinics & Service Businesses",
  "E-Commerce Products",
  "Other Business",
];

export default function ContactForm() {
  const sectionRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    business: "",
    email: "",
    phone: "",
    serviceNeeded: "",
    industry: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.08 }
    );
    sectionRef.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const validate = (): boolean => {
    const errs: Partial<FormData> = {};
    if (!formData.name.trim()) errs.name = "Name is required";
    if (!formData.email.trim()) errs.email = "Email is required";
    else if (!/^\S+@\S+\.\S+$/.test(formData.email)) errs.email = "Please enter a valid email address";
    if (!formData.serviceNeeded) errs.serviceNeeded = "Please select the service you are interested in";
    if (!formData.industry) errs.industry = "Please select your industry";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 800));
    setSubmitting(false);
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-16 sm:py-24 lg:py-32 relative overflow-hidden bg-white border-t border-[#0046C8]/10"
      aria-label="Contact and Consultation Inquiry Form"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          
          {/* Left info column */}
          <div className="lg:col-span-5 reveal">
            <div className="section-badge bg-[#F0F7FF] border border-[#0046C8]/20">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0046C8]" />
              Start The Conversation
            </div>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#091E42] tracking-tight leading-tight mb-3 sm:mb-4">
              Let&apos;s Discuss Your <span className="text-[#0046C8]">Growth Needs.</span>
            </h2>

            <p className="text-[#475569] text-sm sm:text-base leading-relaxed mb-6 sm:mb-8">
              Whether you need realistic AI UGC videos that sell your products, or smart AI workflows that automate your enquiries and bookings, we are here to help.
            </p>

            {/* Direct contact cards */}
            <div className="space-y-3 mb-6 sm:mb-8">
              <a
                href={COMPANY.phoneHref}
                className="flex items-center gap-3.5 p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-[#F8FAFC] border border-[#0046C8]/15 hover:border-[#0046C8] hover:bg-[#EBF3FE] transition-colors group shadow-xs"
                aria-label={`Call UKR Automation: ${COMPANY.phone}`}
              >
                <div className="w-10 h-10 rounded-xl bg-[#0046C8]/10 border border-[#0046C8]/20 flex items-center justify-center text-[#0046C8] group-hover:bg-[#0046C8] group-hover:text-white transition-colors shrink-0">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.15 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.06 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 17z" />
                  </svg>
                </div>
                <div>
                  <p className="text-slate-500 text-xs font-mono">Phone / WhatsApp</p>
                  <p className="text-[#091E42] font-semibold text-sm">{COMPANY.phone}</p>
                </div>
              </a>

              <a
                href={COMPANY.emailHref}
                className="flex items-center gap-3.5 p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-[#F8FAFC] border border-[#0046C8]/15 hover:border-[#0046C8] hover:bg-[#EBF3FE] transition-colors group shadow-xs"
                aria-label={`Email UKR Automation: ${COMPANY.email}`}
              >
                <div className="w-10 h-10 rounded-xl bg-[#0046C8]/10 border border-[#0046C8]/20 flex items-center justify-center text-[#0046C8] group-hover:bg-[#0046C8] group-hover:text-white transition-colors shrink-0">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div>
                  <p className="text-slate-500 text-xs font-mono">Direct Email</p>
                  <p className="text-[#091E42] font-semibold text-sm break-all">{COMPANY.email}</p>
                </div>
              </a>
            </div>

            {/* Direct Booking CTA */}
            <div className="p-5 sm:p-6 rounded-xl sm:rounded-2xl bg-[#F0F6FE] border border-[#0046C8]/20 shadow-xs">
              <p className="text-[#091E42] font-bold text-sm mb-1">Prefer an immediate conversation?</p>
              <p className="text-[#475569] text-xs leading-relaxed mb-4">
                Schedule a 30-minute creative strategy call directly on Google Calendar.
              </p>
              <a
                href={CALENDAR_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full justify-center text-sm py-3 font-semibold"
                aria-label="Book 1-on-1 Strategy Session"
              >
                <span>Book 1-on-1 Strategy Session</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right form column */}
          <div className="lg:col-span-7 reveal">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-16 sm:py-20 bg-[#F8FAFC] border border-[#0046C8]/30 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-sm">
                <div className="w-16 h-16 rounded-full bg-[#E8F2FE] border border-[#0046C8]/30 flex items-center justify-center mb-5 text-[#0046C8]">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 className="text-[#091E42] font-bold text-xl sm:text-2xl mb-2">Inquiry Received</h3>
                <p className="text-[#475569] max-w-md text-xs sm:text-sm leading-relaxed">
                  Thank you for sharing your details. Our team will review your business requirements and follow up within 24 hours.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-[#F8FAFC] border border-slate-200/90 rounded-2xl sm:rounded-3xl p-5 sm:p-9 space-y-5 shadow-xs"
                noValidate
                aria-label="Project consultation inquiry form"
              >
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
                  <div>
                    <label htmlFor="name" className="block text-xs font-bold text-[#091E42] mb-1.5 uppercase tracking-wider font-mono">
                      Full Name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-3.5 py-2.5 rounded-xl border bg-white text-sm text-[#091E42] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0046C8]/30 ${
                        errors.name ? "border-red-500" : "border-slate-300"
                      }`}
                      aria-required="true"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-xs mt-1" role="alert">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="business" className="block text-xs font-bold text-[#091E42] mb-1.5 uppercase tracking-wider font-mono">
                      Business / Brand Name
                    </label>
                    <input
                      id="business"
                      name="business"
                      type="text"
                      autoComplete="organization"
                      placeholder="e.g. Acme Studio / Company"
                      value={formData.business}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-sm text-[#091E42] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0046C8]/30"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
                  <div>
                    <label htmlFor="email" className="block text-xs font-bold text-[#091E42] mb-1.5 uppercase tracking-wider font-mono">
                      Email Address *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder="you@company.com"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-3.5 py-2.5 rounded-xl border bg-white text-sm text-[#091E42] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0046C8]/30 ${
                        errors.email ? "border-red-500" : "border-slate-300"
                      }`}
                      aria-required="true"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs mt-1" role="alert">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-xs font-bold text-[#091E42] mb-1.5 uppercase tracking-wider font-mono">
                      Phone / WhatsApp Number
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      placeholder="+91 9652609101"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-sm text-[#091E42] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0046C8]/30"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
                  <div>
                    <label htmlFor="serviceNeeded" className="block text-xs font-bold text-[#091E42] mb-1.5 uppercase tracking-wider font-mono">
                      Service Interested In *
                    </label>
                    <select
                      id="serviceNeeded"
                      name="serviceNeeded"
                      value={formData.serviceNeeded}
                      onChange={handleChange}
                      className={`w-full px-3.5 py-2.5 rounded-xl border bg-white text-sm text-[#091E42] focus:outline-none focus:ring-2 focus:ring-[#0046C8]/30 ${
                        errors.serviceNeeded ? "border-red-500" : "border-slate-300"
                      }`}
                    >
                      <option value="">Select service</option>
                      {serviceOptions.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                    {errors.serviceNeeded && (
                      <p className="text-red-500 text-xs mt-1" role="alert">
                        {errors.serviceNeeded}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="industry" className="block text-xs font-bold text-[#091E42] mb-1.5 uppercase tracking-wider font-mono">
                      Industry *
                    </label>
                    <select
                      id="industry"
                      name="industry"
                      value={formData.industry}
                      onChange={handleChange}
                      className={`w-full px-3.5 py-2.5 rounded-xl border bg-white text-sm text-[#091E42] focus:outline-none focus:ring-2 focus:ring-[#0046C8]/30 ${
                        errors.industry ? "border-red-500" : "border-slate-300"
                      }`}
                    >
                      <option value="">Select industry</option>
                      {industries.map((ind) => (
                        <option key={ind} value={ind}>{ind}</option>
                      ))}
                    </select>
                    {errors.industry && (
                      <p className="text-red-500 text-xs mt-1" role="alert">
                        {errors.industry}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-bold text-[#091E42] mb-1.5 uppercase tracking-wider font-mono">
                    Project Details or Specific Questions
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Tell us about the products you want to promote, current enquiry channels (like WhatsApp or website forms), or tasks you would like to automate..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-sm text-[#091E42] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0046C8]/30 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="btn-primary w-full justify-center text-sm sm:text-base py-3.5 sm:py-4 font-bold tracking-tight cursor-pointer disabled:opacity-50"
                  aria-label="Submit project inquiry"
                >
                  <span>{submitting ? "Submitting Details..." : "Submit Consultation Inquiry"}</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>

                <p className="text-center text-xs text-slate-500">
                  We respect your privacy. No spam, ever.
                </p>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
