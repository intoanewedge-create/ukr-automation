"use client";

import { useEffect, useRef, useState } from "react";
import { COMPANY, CALENDAR_URL } from "@/lib/constants";

interface FormData {
  name: string;
  business: string;
  email: string;
  phone: string;
  industry: string;
  contentType: string;
  videoVolume: string;
  mainGoal: string;
  message: string;
}

const industries = [
  "Jewellery",
  "Gym & Fitness",
  "Fashion",
  "Beauty & Skincare",
  "Food & Beverage",
  "Other",
];

const contentTypes = [
  "Product-Led Showcases",
  "Creator Try-Ons & Demonstrations",
  "Paid Social Video Ads",
  "Instagram Reels & YouTube Shorts",
  "TikTok-Style Creator Videos",
  "Product Demos & Reviews",
  "Multiple Hook Variations",
  "Other / Custom Combination",
];

const volumeOptions = [
  "1–5 videos / month",
  "6–15 videos / month",
  "16–30 videos / month",
  "30+ videos / month",
  "Custom / One-time campaign",
  "Not sure yet",
];

const goalOptions = [
  "Boost paid ad conversions & ROAS",
  "Increase organic social reach & engagement",
  "Promote a new product / collection launch",
  "Scale video creative for brand campaigns",
  "Test new creative hooks on social media",
  "Other",
];

export default function ContactForm() {
  const sectionRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    business: "",
    email: "",
    phone: "",
    industry: "",
    contentType: "",
    videoVolume: "",
    mainGoal: "",
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
    if (!formData.industry) errs.industry = "Please select your industry";
    if (!formData.contentType) errs.contentType = "Please select what type of video content you need";
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
    await new Promise((r) => setTimeout(r, 900));
    setSubmitting(false);
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-24 lg:py-36 relative overflow-hidden bg-white border-t border-[#0046c8]/10"
      aria-label="Contact and UGC video inquiry form"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left info column */}
          <div className="lg:col-span-5 reveal">
            <div className="section-badge">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0046c8]" />
              Direct Studio Contact
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#091E42] tracking-tight leading-tight mb-4">
              Let&apos;s Create Something <span className="text-[#0046c8]">People Remember.</span>
            </h2>

            <p className="text-[#42526E] text-base leading-relaxed mb-8">
              Share your brand details, website link, or campaign timeline. Our creative team will develop custom UGC concepts, opening hooks, and visual treatments for your brand.
            </p>

            {/* Direct contact cards */}
            <div className="space-y-3 mb-8">
              <a
                href={COMPANY.phoneHref}
                className="flex items-center gap-3.5 p-4 rounded-2xl bg-[#F8FAFC] border border-[#0046c8]/15 hover:border-[#0046c8] hover:bg-[#EBF3FE] transition-colors group shadow-sm"
                aria-label={`Call UKR Automation: ${COMPANY.phone}`}
              >
                <div className="w-10 h-10 rounded-xl bg-[#0046c8]/10 border border-[#0046c8]/20 flex items-center justify-center text-[#0046c8] group-hover:bg-[#0046c8] group-hover:text-white transition-colors flex-shrink-0">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.15 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.06 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 17z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[#7A869A] text-xs font-mono">Phone / WhatsApp</p>
                  <p className="text-[#091E42] font-semibold text-sm">{COMPANY.phone}</p>
                </div>
              </a>

              <a
                href={COMPANY.emailHref}
                className="flex items-center gap-3.5 p-4 rounded-2xl bg-[#F8FAFC] border border-[#0046c8]/15 hover:border-[#0046c8] hover:bg-[#EBF3FE] transition-colors group shadow-sm"
                aria-label={`Email UKR Automation: ${COMPANY.email}`}
              >
                <div className="w-10 h-10 rounded-xl bg-[#0046c8]/10 border border-[#0046c8]/20 flex items-center justify-center text-[#0046c8] group-hover:bg-[#0046c8] group-hover:text-white transition-colors flex-shrink-0">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div>
                  <p className="text-[#7A869A] text-xs font-mono">Direct Email</p>
                  <p className="text-[#091E42] font-semibold text-sm break-all">{COMPANY.email}</p>
                </div>
              </a>
            </div>

            {/* Direct Booking CTA */}
            <div className="p-6 rounded-2xl bg-[#F0F6FE] border border-[#0046c8]/20 shadow-sm">
              <p className="text-[#091E42] font-bold text-sm mb-1">Prefer an immediate conversation?</p>
              <p className="text-[#42526E] text-xs leading-relaxed mb-4">
                Schedule a 30-minute creative strategy call directly on Google Calendar.
              </p>
              <a
                href={CALENDAR_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full justify-center text-sm py-3"
                aria-label="Book 30-min strategy session"
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
              <div className="h-full flex flex-col items-center justify-center text-center py-20 bg-[#F8FAFC] border border-[#0046c8]/30 rounded-3xl p-8 shadow-md">
                <div className="w-16 h-16 rounded-full bg-[#EBF3FE] border border-[#0046c8]/30 flex items-center justify-center mb-5 text-[#0046c8]">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 className="text-[#091E42] font-bold text-2xl mb-2">Inquiry Received</h3>
                <p className="text-[#5E6C84] max-w-md text-sm leading-relaxed">
                  Thank you for sharing your brand details. Our creative team will review your requirements and follow up with tailored UGC concepts within 24 hours.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-[#F8FAFC] border border-[#DFE1E6] rounded-3xl p-8 sm:p-10 space-y-6 shadow-[0_8px_30px_rgba(0,70,200,0.06)]"
                noValidate
                aria-label="AI UGC inquiry form"
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="form-label">Full Name *</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`form-input bg-white ${errors.name ? "border-red-500" : ""}`}
                      aria-required="true"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-xs mt-1.5" role="alert">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="business" className="form-label">Brand / Business Name</label>
                    <input
                      id="business"
                      name="business"
                      type="text"
                      autoComplete="organization"
                      placeholder="e.g. Acme Jewellery / Brand Website"
                      value={formData.business}
                      onChange={handleChange}
                      className="form-input bg-white"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="email" className="form-label">Work Email *</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder="you@company.com"
                      value={formData.email}
                      onChange={handleChange}
                      className={`form-input bg-white ${errors.email ? "border-red-500" : ""}`}
                      aria-required="true"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs mt-1.5" role="alert">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="phone" className="form-label">Phone / WhatsApp</label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      placeholder="+91 9652609101"
                      value={formData.phone}
                      onChange={handleChange}
                      className="form-input bg-white"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="industry" className="form-label">Industry *</label>
                    <select
                      id="industry"
                      name="industry"
                      value={formData.industry}
                      onChange={handleChange}
                      className={`form-input bg-white ${errors.industry ? "border-red-500" : ""}`}
                    >
                      <option value="">Select industry</option>
                      {industries.map((ind) => (
                        <option key={ind} value={ind}>{ind}</option>
                      ))}
                    </select>
                    {errors.industry && (
                      <p className="text-red-500 text-xs mt-1.5" role="alert">
                        {errors.industry}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="contentType" className="form-label">Content Format Needed *</label>
                    <select
                      id="contentType"
                      name="contentType"
                      value={formData.contentType}
                      onChange={handleChange}
                      className={`form-input bg-white ${errors.contentType ? "border-red-500" : ""}`}
                    >
                      <option value="">Select format</option>
                      {contentTypes.map((c) => (
                        <option key={c} value={c}>{c}</option>
                      ))}
                    </select>
                    {errors.contentType && (
                      <p className="text-red-500 text-xs mt-1.5" role="alert">
                        {errors.contentType}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="videoVolume" className="form-label">Monthly Volume</label>
                    <select
                      id="videoVolume"
                      name="videoVolume"
                      value={formData.videoVolume}
                      onChange={handleChange}
                      className="form-input bg-white"
                    >
                      <option value="">Select requirement</option>
                      {volumeOptions.map((v) => (
                        <option key={v} value={v}>{v}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="mainGoal" className="form-label">Primary Campaign Goal</label>
                    <select
                      id="mainGoal"
                      name="mainGoal"
                      value={formData.mainGoal}
                      onChange={handleChange}
                      className="form-input bg-white"
                    >
                      <option value="">Select primary goal</option>
                      {goalOptions.map((g) => (
                        <option key={g} value={g}>{g}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="form-label">Project Details & Brand Overview</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Tell us about the products or services you want to feature, any reference accounts you admire, or upcoming campaign deadlines..."
                    value={formData.message}
                    onChange={handleChange}
                    className="form-input bg-white resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="btn-primary w-full justify-center text-base py-4 font-bold tracking-tight cursor-pointer disabled:opacity-50"
                  aria-label="Submit project inquiry"
                >
                  <span>{submitting ? "Sending Project Details..." : "Submit Project Inquiry"}</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>

                <p className="text-center text-xs text-[#7A869A]">
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
