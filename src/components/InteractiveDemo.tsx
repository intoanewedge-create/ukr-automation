"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { CALENDAR_URL } from "@/lib/constants";

export interface DemoStep {
  id: string;
  timestamp: string;
  speaker?: "customer" | "business" | "system";
  message?: string;
  timelineTitle: string;
  timelineDesc: string;
  statusBadge: string;
  statusType: "info" | "warning" | "danger" | "success";
  systemAction?: string;
}

export interface DemoScenario {
  id: "scenario-a" | "scenario-b" | "scenario-c";
  name: string;
  businessType: string;
  description: string;
  initialMessage: string;
  withoutAutomation: {
    steps: DemoStep[];
    outcomeTitle: string;
    outcomeSummary: string;
    metrics: { label: string; value: string; isNegative?: boolean }[];
    consequences: string[];
  };
  withAutomation: {
    steps: DemoStep[];
    outcomeTitle: string;
    outcomeSummary: string;
    metrics: { label: string; value: string; isNegative?: boolean }[];
    benefits: string[];
  };
}

export const DEMO_SCENARIOS: DemoScenario[] = [
  {
    id: "scenario-a",
    name: "The 11 PM Enquiry",
    businessType: "Service Agency & Consultancy",
    description: "A prospective client reaches out late at night when the team is asleep.",
    initialMessage: "Hi, I'm interested in your service. Can someone share the details?",
    withoutAutomation: {
      steps: [
        {
          id: "w-a-1",
          timestamp: "11:00 PM",
          speaker: "customer",
          message: "Hi, I'm interested in your service. Can someone share the details?",
          timelineTitle: "Enquiry Submitted",
          timelineDesc: "Customer discovers business online and sends a WhatsApp message.",
          statusBadge: "Enquiry Received",
          statusType: "info",
          systemAction: "Inbox updated · Notification silenced by phone sleep schedule",
        },
        {
          id: "w-a-2",
          timestamp: "11:05 PM",
          speaker: "system",
          timelineTitle: "Business Owner Unavailable",
          timelineDesc: "Office is closed. Owner and staff are asleep. No automated system is active.",
          statusBadge: "No Active Agent",
          statusType: "warning",
          systemAction: "No reply dispatched · Zero enquiry record in CRM",
        },
        {
          id: "w-a-3",
          timestamp: "02:30 AM",
          speaker: "system",
          timelineTitle: "Message Unanswered Overnight",
          timelineDesc: "Prospect waits with no acknowledgment. They begin searching competitor websites.",
          statusBadge: "Lead Going Cold",
          statusType: "danger",
          systemAction: "Hours passing · Prospect engagement rapidly dropping",
        },
        {
          id: "w-a-4",
          timestamp: "09:15 AM",
          speaker: "system",
          timelineTitle: "Manual Morning Review",
          timelineDesc: "Owner wakes up, sorts through personal messages, and finally spots the lead.",
          statusBadge: "Delayed Check",
          statusType: "warning",
          systemAction: "Manual reading required · Contact details not yet logged",
        },
        {
          id: "w-a-5",
          timestamp: "09:45 AM",
          speaker: "business",
          message: "Hi! Sorry for the delay, was away. What kind of service are you looking for?",
          timelineTitle: "Manual Reply Sent (10h 45m Later)",
          timelineDesc: "Owner types a quick response while juggling morning meetings.",
          statusBadge: "Late Response",
          statusType: "danger",
          systemAction: "Owner must remember to set a manual reminder to follow up",
        },
        {
          id: "w-a-6",
          timestamp: "11:30 AM",
          speaker: "customer",
          message: "Thanks, but I already signed up with another provider who responded last night.",
          timelineTitle: "Lead Lost to Competitor",
          timelineDesc: "Customer chose a faster-responding service. The opportunity is gone.",
          statusBadge: "Opportunity Lost",
          statusType: "danger",
          systemAction: "Lost deal · No automatic feedback collected",
        },
      ],
      outcomeTitle: "10+ Hours Response Time — Lead Lost",
      outcomeSummary: "Handling late-night enquiries manually creates long silence windows. Prospective customers in need of immediate reassurance easily move to competitors.",
      metrics: [
        { label: "Response Delay", value: "10 hrs 45 mins", isNegative: true },
        { label: "CRM Logging", value: "Manual / None", isNegative: true },
        { label: "Outcome", value: "Lost to Competitor", isNegative: true },
      ],
      consequences: [
        "Unanswered messages leave prospects feeling ignored",
        "Owner burdened with manual tracking and delayed follow-ups",
        "High risk of high-intent buyers converting elsewhere overnight",
      ],
    },
    withAutomation: {
      steps: [
        {
          id: "auto-a-1",
          timestamp: "11:00 PM",
          speaker: "customer",
          message: "Hi, I'm interested in your service. Can someone share the details?",
          timelineTitle: "Enquiry Submitted",
          timelineDesc: "Customer reaches out at 11:00 PM outside standard operating hours.",
          statusBadge: "Enquiry Received",
          statusType: "info",
          systemAction: "Trigger: Inbound WhatsApp / Webhook event detected",
        },
        {
          id: "auto-a-2",
          timestamp: "11:00:08 PM",
          speaker: "business",
          message: "Hi! Thanks for reaching out to UKR Automations. We're happy to help. Tell us a little about what you're looking for, and our team will follow up with you first thing in the morning!",
          timelineTitle: "Instant Automated Acknowledgment",
          timelineDesc: "Configured workflow replies within 8 seconds with friendly, branded reassurance.",
          statusBadge: "8s Instant Reply",
          statusType: "success",
          systemAction: "Automated greeting sent · Conversation state initialized",
        },
        {
          id: "auto-a-3",
          timestamp: "11:00:28 PM",
          speaker: "customer",
          message: "Looking for lead capture and WhatsApp automation for our local service business.",
          timelineTitle: "Customer Shares Requirements",
          timelineDesc: "Prospect willingly provides project context because they received immediate attention.",
          statusBadge: "Lead Qualified",
          statusType: "info",
          systemAction: "AI intent extraction · Requirements parsed into structured fields",
        },
        {
          id: "auto-a-4",
          timestamp: "11:00:35 PM",
          speaker: "system",
          timelineTitle: "Automated Lead Capture in CRM",
          timelineDesc: "Contact details, timestamp, and message history automatically recorded in the CRM.",
          statusBadge: "Logged in CRM",
          statusType: "success",
          systemAction: "Simulated CRM Record: #LEAD-4821 created with tag [High-Intent]",
        },
        {
          id: "auto-a-5",
          timestamp: "11:00:50 PM",
          speaker: "business",
          message: "Got it! We've saved your details. If you'd like to pick a direct time for a free 20-min strategy call, feel free to choose here: calendar.app.google/sample",
          timelineTitle: "Direct Booking Link Offered",
          timelineDesc: "Customer is empowered to lock in a consultation immediately without waiting.",
          statusBadge: "Self-Booking Enabled",
          statusType: "success",
          systemAction: "Google Calendar dispatch · Follow-up reminder queued",
        },
        {
          id: "auto-a-6",
          timestamp: "11:01:10 PM",
          speaker: "system",
          timelineTitle: "Morning Briefing Task Scheduled",
          timelineDesc: "Task scheduled on the owner's dashboard for 9:00 AM with complete conversation context.",
          statusBadge: "Workflow Complete",
          statusType: "success",
          systemAction: "Task scheduled: 'Review Lead #4821' · Owner can rest peacefully",
        },
      ],
      outcomeTitle: "Instant 8-Second Response — Lead Captured & Scheduled",
      outcomeSummary: "Even at midnight, the customer feels heard and valued. Lead details are safely stored in your system and a follow-up task is pre-scheduled for normal business hours.",
      metrics: [
        { label: "Response Delay", value: "8 Seconds" },
        { label: "CRM Logging", value: "Automatic & Instant" },
        { label: "Outcome", value: "Lead Captured & Scheduled" },
      ],
      benefits: [
        "Immediate response reassures prospect and stops competitor shopping",
        "Lead data, contact info, and intent automatically organized in CRM",
        "Business owner wakes up to qualified leads and scheduled appointments",
      ],
    },
  },
  {
    id: "scenario-b",
    name: "The Missed Appointment",
    businessType: "Clinic, Salon or Consultation",
    description: "A client has an upcoming booking and needs verification and timely reminders.",
    initialMessage: "Hi, I have an appointment scheduled for tomorrow. Could you please confirm the time and details?",
    withoutAutomation: {
      steps: [
        {
          id: "w-b-1",
          timestamp: "02:00 PM",
          speaker: "customer",
          message: "Hi, I have an appointment scheduled for tomorrow. Could you please confirm the time and details?",
          timelineTitle: "Confirmation Requested",
          timelineDesc: "Client reaches out to check their scheduled consultation time.",
          statusBadge: "Query Received",
          statusType: "info",
          systemAction: "Unread message in business phone · Reception counter is busy",
        },
        {
          id: "w-b-2",
          timestamp: "03:45 PM",
          speaker: "system",
          timelineTitle: "Staff Occupied with In-Person Tasks",
          timelineDesc: "Front desk staff is managing walk-ins, phone calls, and manual paperwork.",
          statusBadge: "Delayed Review",
          statusType: "warning",
          systemAction: "Message sits in queue for nearly 2 hours with no update",
        },
        {
          id: "w-b-3",
          timestamp: "05:10 PM",
          speaker: "system",
          timelineTitle: "Manual Register Search",
          timelineDesc: "Staff must open paper ledger or spreadsheet to look up client's slot manually.",
          statusBadge: "Manual Lookup",
          statusType: "warning",
          systemAction: "Staff spending 10 minutes cross-checking multiple calendars",
        },
        {
          id: "w-b-4",
          timestamp: "05:25 PM",
          speaker: "business",
          message: "Hi, yes your appointment is tomorrow at 11:00 AM.",
          timelineTitle: "Brief Manual Confirmation Sent",
          timelineDesc: "Staff sends text confirmation, but forgets clinic address and intake instructions.",
          statusBadge: "Sent After 3h",
          statusType: "warning",
          systemAction: "No automated calendar reminder scheduled for morning",
        },
        {
          id: "w-b-5",
          timestamp: "Next Day 11:15 AM",
          speaker: "system",
          timelineTitle: "Customer Forgets & Arrives Late",
          timelineDesc: "Without an automated morning reminder, the client forgot their slot and arrived 30 minutes late.",
          statusBadge: "Schedule Disrupted",
          statusType: "danger",
          systemAction: "No-show / late arrival · Clinic schedule thrown off track",
        },
      ],
      outcomeTitle: "Hours of Manual Searching — Late Arrival & Wasted Slot",
      outcomeSummary: "Staff had to interrupt their work to search spreadsheets, and without automated reminders, the client arrived late, disrupting the daily schedule.",
      metrics: [
        { label: "Lookup Time", value: "3+ Hours Delayed", isNegative: true },
        { label: "Staff Effort", value: "High Manual Friction", isNegative: true },
        { label: "Appointment Result", value: "Late / Disrupted Schedule", isNegative: true },
      ],
      consequences: [
        "Reception staff pulled away from in-person customer service",
        "No timely reminders lead to forgotten appointments and costly no-shows",
        "Disrupted schedule affects subsequent booked clients",
      ],
    },
    withAutomation: {
      steps: [
        {
          id: "auto-b-1",
          timestamp: "02:00 PM",
          speaker: "customer",
          message: "Hi, I have an appointment scheduled for tomorrow. Could you please confirm the time and details?",
          timelineTitle: "Confirmation Requested",
          timelineDesc: "Client asks for booking verification via WhatsApp.",
          statusBadge: "Query Received",
          statusType: "info",
          systemAction: "Trigger: Automated appointment lookup workflow started",
        },
        {
          id: "auto-b-2",
          timestamp: "02:00:06 PM",
          speaker: "business",
          message: "Hi Sarah! Your consultation is confirmed for tomorrow, Tuesday at 11:00 AM. Location: Suite 4B, Central Clinic. Here is your location link: maps.google.com/sample.",
          timelineTitle: "Instant System Verification (6 Seconds)",
          timelineDesc: "Workflow matches client's phone number against calendar database and replies with full details.",
          statusBadge: "Instant Verification",
          statusType: "success",
          systemAction: "Verified from calendar API · Full location and timing dispatched",
        },
        {
          id: "auto-b-3",
          timestamp: "02:00:15 PM",
          speaker: "system",
          timelineTitle: "Automated Reminder Pre-Scheduled",
          timelineDesc: "Workflow queues a 2-hour morning reminder alert with simple 1-click confirmation.",
          statusBadge: "Reminder Queued",
          statusType: "success",
          systemAction: "Cron job scheduled for tomorrow at 09:00 AM",
        },
        {
          id: "auto-b-4",
          timestamp: "Next Day 09:00 AM",
          speaker: "business",
          message: "Good morning Sarah! Quick reminder of your appointment today at 11:00 AM. Please reply 'YES' to confirm or click here to reschedule.",
          timelineTitle: "Automated Morning Reminder Sent",
          timelineDesc: "System triggers the reminder automatically 2 hours prior without requiring staff intervention.",
          statusBadge: "Reminder Sent",
          statusType: "success",
          systemAction: "Automated dispatch sent · Awaiting 1-tap confirmation",
        },
        {
          id: "auto-b-5",
          timestamp: "Next Day 09:02 AM",
          speaker: "customer",
          message: "YES, on my way! Thanks for the reminder.",
          timelineTitle: "Client Confirms & Arrives on Time",
          timelineDesc: "Client confirms in seconds. Staff dashboard shows confirmed status with zero manual calls.",
          statusBadge: "100% On-Time Visit",
          statusType: "success",
          systemAction: "Calendar status updated to [Confirmed] · Smooth schedule maintained",
        },
      ],
      outcomeTitle: "Instant Verification & Automated Reminders — Zero No-Shows",
      outcomeSummary: "The system verified the booking in 6 seconds, automatically sent directions, and delivered a timed reminder that guaranteed an on-time arrival with zero staff effort.",
      metrics: [
        { label: "Lookup Time", value: "6 Seconds" },
        { label: "Staff Effort", value: "Zero (100% Automated)" },
        { label: "Appointment Result", value: "On-Time & Confirmed" },
      ],
      benefits: [
        "Staff freed up from repetitive phone tag and manual calendar searches",
        "Automated morning reminders dramatically lower costly no-show rates",
        "Patients receive clear directions, timings, and intake instructions instantly",
      ],
    },
  },
  {
    id: "scenario-c",
    name: "The Product Enquiry",
    businessType: "Jewellery & E-Commerce Store",
    description: "A customer inquires about product stock, material specifications, and pricing.",
    initialMessage: "Hi, is the Emerald Diamond Ring available? Can you share the price and details?",
    withoutAutomation: {
      steps: [
        {
          id: "w-c-1",
          timestamp: "04:15 PM",
          speaker: "customer",
          message: "Hi, is the Emerald Diamond Ring available? Can you share the price and details?",
          timelineTitle: "Product Enquiry Sent",
          timelineDesc: "Customer browses Instagram, taps the chat link, and asks for item availability.",
          statusBadge: "Enquiry Received",
          statusType: "info",
          systemAction: "Notification received · Sales representative is busy on shop floor",
        },
        {
          id: "w-c-2",
          timestamp: "04:45 PM",
          speaker: "system",
          timelineTitle: "Physical Inventory Check Needed",
          timelineDesc: "Salesperson sees the message 30 minutes later, but doesn't have exact specs at hand.",
          statusBadge: "Delayed Handling",
          statusType: "warning",
          systemAction: "Associate walks to inventory stockroom to check physical tray",
        },
        {
          id: "w-c-3",
          timestamp: "05:30 PM",
          speaker: "business",
          message: "Yes it's in stock. It is $1,250 with 18k gold.",
          timelineTitle: "Manual Incomplete Reply (75m Later)",
          timelineDesc: "Associate types price from memory, but omits gemstone weight, hallmark, and certification.",
          statusBadge: "Incomplete Specs",
          statusType: "warning",
          systemAction: "No catalog photos or brochure shared · Lead unrecorded in CRM",
        },
        {
          id: "w-c-4",
          timestamp: "05:40 PM",
          speaker: "customer",
          message: "Do you have photos of the certification and warranty? Can I see it worn?",
          timelineTitle: "Customer Asks Follow-up",
          timelineDesc: "Because initial reply was basic, customer must ask follow-up questions.",
          statusBadge: "Unnecessary Friction",
          statusType: "warning",
          systemAction: "Associate must now photograph item under proper studio light",
        },
        {
          id: "w-c-5",
          timestamp: "Next Day",
          speaker: "system",
          timelineTitle: "Chat Gets Buried & Forgotten",
          timelineDesc: "Store closes, new messages flood in next morning, and this conversation is forgotten.",
          statusBadge: "Lost Prospect",
          statusType: "danger",
          systemAction: "High-value jewellery buyer lost · Zero follow-up task created",
        },
      ],
      outcomeTitle: "Slow Manual Responses — Incomplete Info & Lost Sale",
      outcomeSummary: "Without automated catalog integration, associates spend hours checking physical inventory. Conversations get buried, and high-ticket buyers lose patience.",
      metrics: [
        { label: "Spec Delivery", value: "75 Minutes Delayed", isNegative: true },
        { label: "Catalogue Detail", value: "Basic / Incomplete", isNegative: true },
        { label: "Follow-up", value: "Lost in Chat History", isNegative: true },
      ],
      consequences: [
        "Incomplete specifications force back-and-forth friction on high-ticket sales",
        "Staff tied up taking informal phone photos instead of serving showroom clients",
        "Unrecorded leads result in thousands of dollars in lost showroom visits",
      ],
    },
    withAutomation: {
      steps: [
        {
          id: "auto-c-1",
          timestamp: "04:15 PM",
          speaker: "customer",
          message: "Hi, is the Emerald Diamond Ring available? Can you share the price and details?",
          timelineTitle: "Product Enquiry Sent",
          timelineDesc: "Customer inquires about specific piece from social media showcase.",
          statusBadge: "Enquiry Received",
          statusType: "info",
          systemAction: "Trigger: Product catalogue lookup workflow activated",
        },
        {
          id: "auto-c-2",
          timestamp: "04:15:12 PM",
          speaker: "business",
          message: "Hi! Yes, the Handcrafted Emerald Diamond Ring (18K Solid Gold, BIS Hallmarked) is in stock. Price: $1,250. Includes certified gemological report, luxury gift box & lifetime cleaning.",
          timelineTitle: "Instant Verified Product Data (12s)",
          timelineDesc: "Workflow matches product name against approved catalogue and sends complete verified specs.",
          statusBadge: "12s Instant Specs",
          statusType: "success",
          systemAction: "Approved product information dispatched · Item ID #EM-802",
        },
        {
          id: "auto-c-3",
          timestamp: "04:15:25 PM",
          speaker: "business",
          message: "Would you like to book a private showroom viewing or have our senior consultant arrange insured home delivery?",
          timelineTitle: "High-Value Next Step Offered",
          timelineDesc: "System immediately presents booking link for VIP viewing while interest is peaked.",
          statusBadge: "Showroom Call-to-Action",
          statusType: "success",
          systemAction: "Calendar booking widget sent · Lead tagged [High-Value Jewellery]",
        },
        {
          id: "auto-c-4",
          timestamp: "04:15:45 PM",
          speaker: "system",
          timelineTitle: "Enquiry & Prospect Logged in CRM",
          timelineDesc: "Customer profile created, item of interest tagged, and WhatsApp alert sent to head of sales.",
          statusBadge: "Logged in Pipeline",
          statusType: "success",
          systemAction: "CRM Pipeline updated: Value $1,250 · Sales Manager pinged via WhatsApp",
        },
        {
          id: "auto-c-5",
          timestamp: "04:16:00 PM",
          speaker: "system",
          timelineTitle: "24-Hour Automated Follow-Up Task",
          timelineDesc: "System queues a follow-up task so no high-value shopper slips through the cracks.",
          statusBadge: "Pipeline Protected",
          statusType: "success",
          systemAction: "Automated task scheduled: 'Follow up on #EM-802 if booking pending in 24h'",
        },
      ],
      outcomeTitle: "12-Second Verified Response — Lead Captured with Follow-Up",
      outcomeSummary: "The customer received certified specs, hallmark details, and pricing within seconds. The high-value enquiry was logged with an automated follow-up safety net.",
      metrics: [
        { label: "Spec Delivery", value: "12 Seconds" },
        { label: "Catalogue Detail", value: "Certified & Comprehensive" },
        { label: "Follow-up", value: "Automated CRM Task Queued" },
      ],
      benefits: [
        "Instant delivery of verified specifications, hallmark, and certified pricing",
        "High-ticket jewellery shopper guided immediately to showroom booking",
        "Zero dropped leads: automated alert sent to sales team with full history",
      ],
    },
  },
];

export default function InteractiveDemo() {
  const [activeScenarioId, setActiveScenarioId] = useState<"scenario-a" | "scenario-b" | "scenario-c">("scenario-a");
  const [mode, setMode] = useState<"without" | "with">("without");
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const playbackTimerRef = useRef<NodeJS.Timeout | null>(null);

  const activeScenario = DEMO_SCENARIOS.find((s) => s.id === activeScenarioId)!;
  const currentModeData = mode === "without" ? activeScenario.withoutAutomation : activeScenario.withAutomation;
  const totalSteps = currentModeData.steps.length;
  const isCompleted = currentStepIndex >= totalSteps - 1;

  // Clear timer helper
  const stopPlayback = useCallback(() => {
    if (playbackTimerRef.current) {
      clearInterval(playbackTimerRef.current);
      playbackTimerRef.current = null;
    }
    setIsPlaying(false);
  }, []);

  // Stop playback on unmount
  useEffect(() => {
    return () => {
      if (playbackTimerRef.current) {
        clearInterval(playbackTimerRef.current);
      }
    };
  }, []);

  // When scenario changes, stop playback and reset to step 0
  const handleScenarioChange = (newId: "scenario-a" | "scenario-b" | "scenario-c") => {
    stopPlayback();
    setActiveScenarioId(newId);
    setCurrentStepIndex(0);
  };

  // When mode changes (Without vs With Automation), stop playback and reset to step 0
  const handleModeChange = (newMode: "without" | "with") => {
    stopPlayback();
    setMode(newMode);
    setCurrentStepIndex(0);
  };

  // Reset to beginning
  const handleReset = () => {
    stopPlayback();
    setCurrentStepIndex(0);
  };

  // Step forward manually
  const handleNextStep = () => {
    stopPlayback();
    setCurrentStepIndex((prev) => Math.min(prev + 1, totalSteps - 1));
  };

  // Step backward manually
  const handlePrevStep = () => {
    stopPlayback();
    setCurrentStepIndex((prev) => Math.max(prev - 1, 0));
  };

  // Play the story automatically step by step
  const handleTogglePlay = () => {
    if (isPlaying) {
      stopPlayback();
      return;
    }

    // If already at end, restart from 0
    let startIdx = currentStepIndex;
    if (currentStepIndex >= totalSteps - 1) {
      setCurrentStepIndex(0);
      startIdx = 0;
    }

    setIsPlaying(true);

    // Step every 1.5 seconds
    playbackTimerRef.current = setInterval(() => {
      setCurrentStepIndex((prev) => {
        if (prev >= totalSteps - 1) {
          if (playbackTimerRef.current) clearInterval(playbackTimerRef.current);
          setIsPlaying(false);
          return prev;
        }
        return prev + 1;
      });
    }, 1500);
  };

  // Messages up to current step
  const visibleMessages = currentModeData.steps
    .slice(0, currentStepIndex + 1)
    .filter((step) => step.speaker === "customer" || step.speaker === "business");

  return (
    <div className="w-full">
      {/* Section Subheader / Explanatory Banner */}
      <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E8F2FE] border border-[#0046C8]/25 text-xs font-mono font-bold text-[#0046C8] uppercase tracking-wider mb-4 shadow-xs">
          <span className="w-2 h-2 rounded-full bg-[#0046C8] animate-pulse" />
          Interactive Story Demonstration
        </div>
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#091E42] tracking-tight leading-tight">
          One Enquiry. Two Different Outcomes.
        </h2>
        <p className="mt-3 sm:mt-4 text-[#475569] text-base sm:text-lg leading-relaxed">
          See what happens when your business handles everything manually versus when AI automation takes care of repetitive tasks.
        </p>
      </div>

      {/* Main Interactive Demo Container */}
      <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xl shadow-slate-200/50 overflow-hidden">
        
        {/* Top Control Bar: Scenario Selector + Mode Tabs */}
        <div className="p-4 sm:p-6 bg-[#F8FAFC] border-b border-slate-200/80 flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
          
          {/* Scenario Selector Pills */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider font-mono">
              Scenario:
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-1.5 w-full sm:w-auto" role="tablist" aria-label="Demonstration Scenarios">
              {DEMO_SCENARIOS.map((scenario) => {
                const isActive = scenario.id === activeScenarioId;
                return (
                  <button
                    key={scenario.id}
                    onClick={() => handleScenarioChange(scenario.id)}
                    role="tab"
                    aria-selected={isActive}
                    className={`px-3 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all text-left sm:text-center cursor-pointer border ${
                      isActive
                        ? "bg-white text-[#0046C8] border-[#0046C8] shadow-sm font-bold ring-2 ring-[#0046C8]/10"
                        : "bg-transparent text-slate-600 border-transparent hover:bg-slate-200/60 hover:text-slate-900"
                    }`}
                  >
                    {scenario.name}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Mode Switcher: Without Automation vs With Automation */}
          <div className="flex items-center justify-center sm:justify-end gap-2 bg-slate-200/80 p-1.5 rounded-2xl self-stretch sm:self-auto">
            <button
              onClick={() => handleModeChange("without")}
              className={`flex-1 sm:flex-initial px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center justify-center gap-2 ${
                mode === "without"
                  ? "bg-white text-rose-700 shadow-sm border border-rose-200"
                  : "text-slate-600 hover:text-slate-900"
              }`}
              aria-pressed={mode === "without"}
            >
              <span className={`w-2 h-2 rounded-full ${mode === "without" ? "bg-rose-500" : "bg-slate-400"}`} />
              Without Automation
            </button>

            <button
              onClick={() => handleModeChange("with")}
              className={`flex-1 sm:flex-initial px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center justify-center gap-2 ${
                mode === "with"
                  ? "bg-[#0046C8] text-white shadow-sm shadow-[#0046C8]/25"
                  : "text-slate-600 hover:text-slate-900"
              }`}
              aria-pressed={mode === "with"}
            >
              <span className={`w-2 h-2 rounded-full ${mode === "with" ? "bg-emerald-400 animate-pulse" : "bg-slate-400"}`} />
              With Automation
            </button>
          </div>

        </div>

        {/* Scenario Description & Quick Action Bar */}
        <div className="px-4 sm:px-6 py-3.5 bg-slate-50 border-b border-slate-200/80 flex flex-col md:flex-row md:items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="font-bold text-[#091E42] bg-white px-2.5 py-1 rounded-md border border-slate-200 font-mono shadow-2xs">
              {activeScenario.businessType}
            </span>
            <span className="text-slate-600 hidden sm:inline">{activeScenario.description}</span>
          </div>

          <div className="flex items-center gap-2.5 self-start md:self-auto flex-wrap">
            {/* Quick Play Button */}
            <button
              onClick={handleTogglePlay}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 shadow-2xs ${
                mode === "with"
                  ? "bg-[#0046C8] text-white hover:bg-[#0038a8]"
                  : "bg-slate-800 text-white hover:bg-slate-900"
              }`}
              aria-label={isPlaying ? "Pause Story Playback" : "Play the Story"}
            >
              {isPlaying ? (
                <>
                  <span className="w-2 h-2 rounded-full bg-amber-300 animate-pulse" />
                  <span>Pause Story</span>
                </>
              ) : (
                <>
                  <span>▶ {isCompleted ? "Replay Story" : "Play the Story"}</span>
                </>
              )}
            </button>

            {/* Quick Reset */}
            <button
              onClick={handleReset}
              className="px-2.5 py-1.5 rounded-lg text-xs font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-200/70 border border-slate-200 bg-white transition-all cursor-pointer"
              aria-label="Reset demonstration"
              title="Reset to initial customer message"
            >
              ↺ Reset
            </button>

            {/* Step status */}
            <div className="flex items-center gap-1 text-[11px] font-mono text-slate-500 pl-1 border-l border-slate-200">
              <button
                onClick={handlePrevStep}
                disabled={currentStepIndex === 0}
                className="p-1 rounded hover:bg-slate-200 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
                aria-label="Previous step"
                title="Previous step"
              >
                ←
              </button>
              <span className="px-1 font-semibold text-slate-700">
                {currentStepIndex + 1}/{totalSteps}
              </span>
              <button
                onClick={handleNextStep}
                disabled={currentStepIndex >= totalSteps - 1}
                className="p-1 rounded hover:bg-slate-200 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
                aria-label="Next step"
                title="Next step"
              >
                →
              </button>
            </div>
          </div>
        </div>

        {/* Main Side-by-Side Playground (Desktop) / Stacked (Mobile) */}
        <div className="grid lg:grid-cols-12 min-h-[560px]">
          
          {/* Left Column (5 Cols): Realistic Simulated Messaging Interface */}
          <div className="lg:col-span-5 p-4 sm:p-6 bg-slate-100/70 border-b lg:border-b-0 lg:border-r border-slate-200/80 flex flex-col justify-between">
            <div>
              {/* Phone App Window Frame */}
              <div className="bg-white rounded-2xl border border-slate-200/90 shadow-md overflow-hidden flex flex-col h-[460px] sm:h-[480px]">
                
                {/* App Header (WhatsApp / Chat style) */}
                <div className="px-4 py-3 bg-[#091E42] text-white flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-[#0046C8] flex items-center justify-center text-white text-xs font-bold border border-white/20">
                      UKR
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm font-bold flex items-center gap-1.5 leading-tight">
                        UKR Business Desk
                        {mode === "with" && (
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" title="AI Bot Online 24/7" />
                        )}
                      </div>
                      <div className="text-[10px] text-blue-200/80 font-mono">
                        {mode === "with" ? "AI Automation Active · 24/7" : "Manual Staff Account · Offline"}
                      </div>
                    </div>
                  </div>

                  <span className={`text-[10px] px-2 py-0.5 rounded-full font-mono font-bold ${
                    mode === "with"
                      ? "bg-emerald-500/20 text-emerald-300 border border-emerald-400/30"
                      : "bg-rose-500/20 text-rose-300 border border-rose-400/30"
                  }`}>
                    {mode === "with" ? "Automated" : "Manual"}
                  </span>
                </div>

                {/* Chat Scroll Area */}
                <div className="flex-1 p-3 sm:p-4 overflow-y-auto bg-[#F4F6F9] space-y-3 flex flex-col justify-start">
                  
                  {/* Conversation Date / System Notice */}
                  <div className="text-center my-1">
                    <span className="text-[10px] bg-slate-200/80 text-slate-600 px-2.5 py-0.5 rounded-full font-mono font-medium">
                      Simulated Client Conversation
                    </span>
                  </div>

                  {/* Initial Customer Message (Always shown as common starting point) */}
                  <div className="flex flex-col items-start max-w-[85%] self-start animate-fade-in">
                    <div className="p-3 rounded-2xl rounded-tl-xs bg-white text-slate-800 text-xs sm:text-sm shadow-xs border border-slate-200/80 leading-relaxed">
                      {activeScenario.initialMessage}
                    </div>
                    <div className="flex items-center gap-1 text-[10px] text-slate-400 mt-1 pl-1 font-mono">
                      <span>Customer</span> · <span>11:00 PM</span>
                    </div>
                  </div>

                  {/* Progressively revealed subsequent chat messages */}
                  {visibleMessages.slice(1).map((msg) => {
                    const isBusiness = msg.speaker === "business";
                    return (
                      <div
                        key={msg.id}
                        className={`flex flex-col max-w-[85%] animate-fade-in ${
                          isBusiness ? "items-end self-end" : "items-start self-start"
                        }`}
                      >
                        <div
                          className={`p-3 rounded-2xl text-xs sm:text-sm shadow-xs leading-relaxed ${
                            isBusiness
                              ? mode === "with"
                                ? "bg-[#0046C8] text-white rounded-tr-xs"
                                : "bg-slate-700 text-white rounded-tr-xs"
                              : "bg-white text-slate-800 rounded-tl-xs border border-slate-200/80"
                          }`}
                        >
                          {msg.message}
                        </div>
                        <div className="flex items-center gap-1 text-[10px] text-slate-400 mt-1 px-1 font-mono">
                          <span>{isBusiness ? (mode === "with" ? "AI Workflow" : "Business Owner") : "Customer"}</span>
                          <span>·</span>
                          <span>{msg.timestamp}</span>
                          {isBusiness && (
                            <span className="text-blue-500 font-bold ml-0.5">✓✓</span>
                          )}
                        </div>
                      </div>
                    );
                  })}

                  {/* Typing Indicator during playback when next step is business */}
                  {isPlaying && !isCompleted && (
                    <div className="flex items-center gap-1.5 p-2 bg-white/80 rounded-xl w-16 shadow-xs border border-slate-200 self-start animate-pulse">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce" />
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce delay-100" />
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce delay-200" />
                    </div>
                  )}

                  {/* If without automation and overnight delay has occurred */}
                  {mode === "without" && currentStepIndex >= 2 && currentStepIndex < 4 && (
                    <div className="p-2.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-800 text-[11px] text-center my-2 font-mono">
                      ⏳ Overnight delay: No staff active. Message unread for 9+ hours.
                    </div>
                  )}
                </div>

                {/* Simulated Input Bar (Read-only simulation) */}
                <div className="p-2.5 bg-white border-t border-slate-200 flex items-center justify-between text-xs text-slate-400 font-mono">
                  <span className="truncate">Simulated messaging channel</span>
                  <span className="text-[10px] bg-slate-100 px-2 py-0.5 rounded text-slate-500">
                    Live Preview
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Context helper under chat */}
            <p className="text-[11px] text-slate-500 font-mono text-center mt-3">
              * Starts with the exact same customer message in both modes.
            </p>
          </div>

          {/* Right Column (7 Cols): Business / Automation Workflow Panel & Activity Timeline */}
          <div className="lg:col-span-7 p-4 sm:p-6 sm:p-8 flex flex-col justify-between bg-white">
            <div>
              {/* Timeline Header & Current Status */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-slate-100">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-[#091E42] flex items-center gap-2">
                    <span>Workflow &amp; Operations Timeline</span>
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Real-time operational activity behind the customer experience
                  </p>
                </div>

                {/* Mode Indicator Pill */}
                <span className={`self-start sm:self-auto px-3 py-1 rounded-full text-xs font-mono font-bold inline-flex items-center gap-1.5 ${
                  mode === "with"
                    ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                    : "bg-rose-50 text-rose-700 border border-rose-200"
                }`}>
                  <span className={`w-2 h-2 rounded-full ${mode === "with" ? "bg-emerald-500" : "bg-rose-500"}`} />
                  {mode === "with" ? "Automated Workflow Engine" : "Manual Staff Operation"}
                </span>
              </div>

              {/* Activity Timeline List */}
              <div className="space-y-4 relative before:absolute before:left-3.5 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-200">
                {currentModeData.steps.map((step, idx) => {
                  const isPastOrCurrent = idx <= currentStepIndex;
                  const isCurrent = idx === currentStepIndex;

                  // Status style mapping
                  const badgeClasses = {
                    info: "bg-blue-50 text-[#0046C8] border-blue-200",
                    warning: "bg-amber-50 text-amber-800 border-amber-200",
                    danger: "bg-rose-50 text-rose-700 border-rose-200",
                    success: "bg-emerald-50 text-emerald-700 border-emerald-200",
                  }[step.statusType];

                  const dotColor = isCurrent
                    ? mode === "with"
                      ? "bg-emerald-500 ring-4 ring-emerald-100"
                      : "bg-rose-500 ring-4 ring-rose-100"
                    : isPastOrCurrent
                    ? "bg-slate-700"
                    : "bg-slate-300";

                  return (
                    <div
                      key={step.id}
                      className={`relative flex items-start gap-4 transition-all duration-200 ${
                        isPastOrCurrent ? "opacity-100" : "opacity-35"
                      }`}
                    >
                      {/* Timeline Dot */}
                      <span className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 z-10 transition-all ${dotColor} text-white text-[11px] font-bold font-mono`}>
                        {idx + 1}
                      </span>

                      {/* Timeline Card */}
                      <div
                        className={`flex-1 p-3.5 rounded-xl border transition-all ${
                          isCurrent
                            ? "bg-[#F8FAFC] border-[#0046C8]/40 shadow-xs ring-1 ring-[#0046C8]/20"
                            : isPastOrCurrent
                            ? "bg-white border-slate-200/90"
                            : "bg-slate-50 border-slate-200/50"
                        }`}
                      >
                        <div className="flex flex-wrap items-center justify-between gap-1.5 mb-1.5">
                          <span className="text-xs sm:text-sm font-bold text-[#091E42]">
                            {step.timelineTitle}
                          </span>
                          <div className="flex items-center gap-2">
                            <span className="text-[11px] font-mono text-slate-500 font-medium">
                              {step.timestamp}
                            </span>
                            <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold border ${badgeClasses}`}>
                              {step.statusBadge}
                            </span>
                          </div>
                        </div>

                        <p className="text-xs text-slate-600 leading-relaxed mb-2">
                          {step.timelineDesc}
                        </p>

                        {/* System / CRM Action pill */}
                        {step.systemAction && (
                          <div className="p-2 rounded-lg bg-slate-100/80 border border-slate-200/60 text-[11px] font-mono text-slate-600 flex items-center gap-2">
                            <span className="text-slate-400 font-bold shrink-0">⚙</span>
                            <span className="truncate">{step.systemAction}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Playback Controls & Progress Bar */}
            <div className="mt-8 pt-5 border-t border-slate-200">
              
              {/* Progress Bar */}
              <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden mb-4">
                <div
                  className={`h-full transition-all duration-300 ${
                    mode === "with" ? "bg-emerald-500" : "bg-rose-500"
                  }`}
                  style={{ width: `${((currentStepIndex + 1) / totalSteps) * 100}%` }}
                />
              </div>

              {/* Control Buttons */}
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleTogglePlay}
                    className={`btn-primary text-xs sm:text-sm py-2.5 px-5 font-bold cursor-pointer flex items-center gap-2 ${
                      mode === "with"
                        ? "bg-[#0046C8] hover:bg-[#0038a8]"
                        : "bg-slate-800 hover:bg-slate-900"
                    }`}
                    aria-label={isPlaying ? "Pause the Story" : "Play the Story step by step"}
                  >
                    {isPlaying ? (
                      <>
                        <span>⏸ Pause Story</span>
                      </>
                    ) : (
                      <>
                        <span>▶ {isCompleted ? "Replay Story" : "Play the Story"}</span>
                      </>
                    )}
                  </button>

                  <button
                    onClick={handleReset}
                    className="btn-secondary text-xs sm:text-sm py-2.5 px-4 font-medium cursor-pointer text-slate-600 hover:text-slate-900"
                    aria-label="Reset simulation to initial state"
                  >
                    ↺ Reset
                  </button>
                </div>

                {/* Step navigation buttons */}
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={handlePrevStep}
                    disabled={currentStepIndex === 0}
                    className="p-2 rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-100 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
                    aria-label="Previous step"
                    title="Previous step"
                  >
                    ←
                  </button>
                  <span className="text-xs font-mono text-slate-500 px-2 font-medium">
                    {currentStepIndex + 1} / {totalSteps}
                  </span>
                  <button
                    onClick={handleNextStep}
                    disabled={currentStepIndex >= totalSteps - 1}
                    className="p-2 rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-100 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
                    aria-label="Next step"
                    title="Next step"
                  >
                    →
                  </button>
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* Final Outcome Summary Box (Updates automatically as story reaches conclusion) */}
        <div className={`p-6 sm:p-8 border-t transition-all duration-300 ${
          mode === "with"
            ? "bg-gradient-to-r from-emerald-50/70 via-white to-blue-50/60 border-emerald-200"
            : "bg-gradient-to-r from-rose-50/70 via-white to-amber-50/60 border-rose-200"
        }`}>
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 mb-2">
                <span className={`w-2.5 h-2.5 rounded-full ${mode === "with" ? "bg-emerald-500" : "bg-rose-500"}`} />
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500">
                  {mode === "with" ? "Automated Outcome Summary" : "Manual Process Outcome Summary"}
                </span>
                {isCompleted && (
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white border border-slate-200 text-slate-600 font-bold">
                    Story Complete
                  </span>
                )}
              </div>

              <h4 className="text-lg sm:text-xl font-extrabold text-[#091E42] mb-2">
                {currentModeData.outcomeTitle}
              </h4>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                {currentModeData.outcomeSummary}
              </p>

              {/* Key points */}
              <div className="mt-4 space-y-1.5">
                {(mode === "with"
                  ? (currentModeData as typeof activeScenario.withAutomation).benefits
                  : (currentModeData as typeof activeScenario.withoutAutomation).consequences
                ).map((point, pIdx) => (
                  <div key={pIdx} className="flex items-center gap-2 text-xs text-slate-700">
                    <span className={mode === "with" ? "text-emerald-600 font-bold" : "text-rose-600 font-bold"}>
                      {mode === "with" ? "✓" : "✕"}
                    </span>
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Metrics Cards */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3 w-full lg:w-auto shrink-0">
              {currentModeData.metrics.map((m) => (
                <div
                  key={m.label}
                  className="p-3 sm:p-4 rounded-xl bg-white border border-slate-200/90 shadow-xs flex flex-col items-center text-center min-w-[100px] sm:min-w-[120px]"
                >
                  <span className="text-[10px] text-slate-400 font-mono uppercase mb-1">
                    {m.label}
                  </span>
                  <span
                    className={`text-xs sm:text-sm font-extrabold font-mono ${
                      m.isNegative ? "text-rose-600" : "text-emerald-700"
                    }`}
                  >
                    {m.value}
                  </span>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* Explanatory Safety Disclaimer (Section 8 compliance) */}
        <div className="px-6 py-3 bg-slate-50 border-t border-slate-200/80 text-[11px] text-slate-500 font-mono text-center flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6">
          <span>* Illustrative frontend demonstration based on simulated business communication workflows.</span>
          <span>• Real systems connect securely to your authorized accounts.</span>
        </div>

      </div>

      {/* Direct CTA under Demonstration */}
      <div className="mt-8 text-center">
        <div className="inline-flex flex-col sm:flex-row items-center gap-3">
          <span className="text-xs sm:text-sm text-slate-600 font-medium">
            Ready to replace manual delays with customized automations?
          </span>
          <a
            href={CALENDAR_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-xs sm:text-sm py-2 px-5 font-semibold"
            aria-label="Discuss Your Business Automation on Google Calendar"
          >
            <span>Book Free Automation Strategy Call</span>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
