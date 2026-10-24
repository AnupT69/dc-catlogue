"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  X, 
  Send, 
  CheckCircle2, 
  MessageSquare, 
  Sparkles, 
  ShieldCheck, 
  Phone, 
  Mail, 
  Building,
  Calendar
} from "lucide-react";
import confetti from "canvas-confetti";
import { PRICING_TIERS } from "@/data/pricingData";
import { formatCurrency } from "@/lib/utils";

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTierId?: string;
  customScopeText?: string;
  currency: "INR" | "USD";
}

export default function InquiryModal({
  isOpen,
  onClose,
  defaultTierId = "multi-page",
  customScopeText,
  currency,
}: InquiryModalProps) {
  const [tierId, setTierId] = useState(defaultTierId);
  const [clientName, setClientName] = useState("");
  const [contactPhone, setContactPhone] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [projectNotes, setProjectNotes] = useState("");
  const [timelinePreference, setTimelinePreference] = useState("Standard Timeline");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (defaultTierId) {
      setTierId(defaultTierId);
    }
  }, [defaultTierId]);

  useEffect(() => {
    if (isOpen) {
      setSubmitted(false);
    }
  }, [isOpen]);

  const selectedTier = PRICING_TIERS.find((t) => t.id === tierId) || PRICING_TIERS[2];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    
    // Trigger festive celebratory confetti
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#3b82f6", "#10b981", "#6366f1", "#f59e0b"],
    });
  };

  const generateWhatsAppMessage = () => {
    const text = `*New Project Inquiry from Catalogue Website*
👤 Name: ${clientName || "Prospective Client"}
📱 Phone: ${contactPhone || "Not specified"}
✉️ Email: ${clientEmail || "Not specified"}
📦 Selected Tier: ${selectedTier.name} (${selectedTier.priceInr ? formatCurrency(selectedTier.priceInr, currency) : "Custom Scope"})
${selectedTier.id === "multi-page" ? "🛡️ Note: Includes 1 Year Free Support\n" : ""}
⏱️ Timeline: ${timelinePreference}
📝 Project Requirements:
${projectNotes || customScopeText || "I want to get a high performance website built for my brand."}

Looking forward to your quotation and timeline!`;

    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, "_blank");
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden z-10 my-8"
        >
          {/* Header */}
          <div className="px-6 py-5 bg-gradient-to-r from-slate-900 to-slate-800 text-white flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center border border-blue-400/30">
                <Sparkles className="w-4 h-4 text-blue-400" />
              </div>
              <div>
                <h3 className="text-base font-bold font-['Space_Grotesk']">
                  {submitted ? "Inquiry Received!" : "Initiate Your Project Pitch"}
                </h3>
                <p className="text-[11px] text-slate-300">
                  {submitted ? "We will reach out within 2 hours" : "Choose package & share your specifications"}
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-700/60 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Content */}
          <div className="p-6">
            {submitted ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8 stroke-[2.5]" />
                </div>
                <h4 className="text-xl font-extrabold text-slate-900 font-['Space_Grotesk']">
                  Thank You, {clientName || "Friend"}!
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
                  Your project requirements for the <strong className="text-slate-900">{selectedTier.name}</strong> package have been registered. Our lead engineer will contact you shortly.
                </p>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    onClick={generateWhatsAppMessage}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-sm transition-colors"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Ping Directly on WhatsApp</span>
                  </button>
                  <button
                    onClick={onClose}
                    className="w-full sm:w-auto px-5 py-2.5 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50 text-xs font-semibold transition-colors"
                  >
                    Close Window
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Select Tier */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">
                    Select Target Tier
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {PRICING_TIERS.map((tier) => (
                      <button
                        key={tier.id}
                        type="button"
                        onClick={() => setTierId(tier.id)}
                        className={`p-2.5 rounded-xl text-left border text-xs transition-all ${
                          tierId === tier.id
                            ? "border-blue-600 bg-blue-50/60 font-bold text-blue-900 ring-1 ring-blue-600"
                            : "border-slate-200 text-slate-700 hover:border-slate-300"
                        }`}
                      >
                        <div className="truncate">{tier.name}</div>
                        <div className="text-[11px] text-blue-600 font-extrabold font-['Space_Grotesk']">
                          {tier.priceInr ? formatCurrency(tier.priceInr, currency) : "Custom Scope"}
                        </div>
                      </button>
                    ))}
                  </div>

                  {selectedTier.id === "multi-page" && (
                    <div className="mt-2 text-[11px] text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200 flex items-center gap-1.5 font-medium">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Includes 1 Year Free Technical Support & Maintenance</span>
                    </div>
                  )}
                </div>

                {/* Name & Contact */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Your Name / Business <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Building className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-3" />
                      <input
                        type="text"
                        required
                        value={clientName}
                        onChange={(e) => setClientName(e.target.value)}
                        placeholder="e.g. John Doe / Apex Corp"
                        className="w-full pl-8 pr-3 py-2 text-xs rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-hidden"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      WhatsApp / Phone <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Phone className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-3" />
                      <input
                        type="tel"
                        required
                        value={contactPhone}
                        onChange={(e) => setContactPhone(e.target.value)}
                        placeholder="e.g. +91 98765 43210"
                        className="w-full pl-8 pr-3 py-2 text-xs rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-hidden"
                      />
                    </div>
                  </div>
                </div>

                {/* Email & Timeline */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-3" />
                      <input
                        type="email"
                        value={clientEmail}
                        onChange={(e) => setClientEmail(e.target.value)}
                        placeholder="name@company.com"
                        className="w-full pl-8 pr-3 py-2 text-xs rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-hidden"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Timeline Urgency
                    </label>
                    <div className="relative">
                      <Calendar className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-3" />
                      <select
                        value={timelinePreference}
                        onChange={(e) => setTimelinePreference(e.target.value)}
                        className="w-full pl-8 pr-3 py-2 text-xs rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-hidden bg-white"
                      >
                        <option>Standard Timeline ({selectedTier.deliveryTime})</option>
                        <option>Urgent / Fast-Track (Within 48-72h)</option>
                        <option>Flexible / Planning Ahead (2-4 Weeks)</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Requirements / Notes */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Project Details or Reference Links
                  </label>
                  <textarea
                    rows={3}
                    value={projectNotes || customScopeText || ""}
                    onChange={(e) => setProjectNotes(e.target.value)}
                    placeholder="Briefly describe your business, existing website (if any), and desired features..."
                    className="w-full p-2.5 text-xs rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-hidden"
                  />
                </div>

                {/* Actions */}
                <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
                  <button
                    type="submit"
                    className="flex-1 py-3 px-4 rounded-xl text-xs font-bold bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-500/20 transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Submit Project Inquiry</span>
                  </button>

                  <button
                    type="button"
                    onClick={generateWhatsAppMessage}
                    className="py-3 px-4 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white shadow-xs transition-all flex items-center justify-center gap-2"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>WhatsApp Directly</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
