"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Calculator, 
  Check, 
  Plus, 
  Sparkles, 
  ArrowRight, 
  MessageSquare, 
  Copy, 
  CheckCheck,
  Zap,
  ShieldCheck
} from "lucide-react";
import { ADD_ON_OPTIONS, PRICING_TIERS } from "@/data/pricingData";
import { formatCurrency } from "@/lib/utils";

interface InteractiveEstimatorProps {
  currency: "INR" | "USD";
  onOpenInquiryWithCustom: (summary: string, total: number) => void;
}

export default function InteractiveEstimator({ currency, onOpenInquiryWithCustom }: InteractiveEstimatorProps) {
  const [selectedTierId, setSelectedTierId] = useState<string>("multi-page");
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>(["payment"]);
  const [copied, setCopied] = useState(false);

  const selectedTier = PRICING_TIERS.find((t) => t.id === selectedTierId) || PRICING_TIERS[2];

  // Base price computation
  const basePrice = selectedTier.priceInr || 35000; // Custom software default base for estimation
  
  // Add-ons computation
  const addOnsTotal = selectedAddOns.reduce((acc, addOnId) => {
    const item = ADD_ON_OPTIONS.find((a) => a.id === addOnId);
    return acc + (item ? item.priceInr : 0);
  }, 0);

  const grandTotal = basePrice + addOnsTotal;

  const toggleAddOn = (id: string) => {
    if (selectedAddOns.includes(id)) {
      setSelectedAddOns(selectedAddOns.filter((item) => item !== id));
    } else {
      setSelectedAddOns([...selectedAddOns, id]);
    }
  };

  const getPitchText = () => {
    const activeAddonsList = selectedAddOns
      .map((id) => ADD_ON_OPTIONS.find((a) => a.id === id)?.name)
      .filter(Boolean);

    return `*Project Estimate & Pitch Proposal*
📦 Base Tier: ${selectedTier.name} (${selectedTier.priceInr ? formatCurrency(selectedTier.priceInr, currency) : "Custom Scope"})
${selectedTier.id === "multi-page" ? "🛡️ Includes: 1 Year Free Technical Support\n" : ""}
➕ Selected Add-ons:
${activeAddonsList.length > 0 ? activeAddonsList.map(a => `  • ${a}`).join("\n") : "  • Standard Package (No add-ons)"}

💰 Estimated Total: ${formatCurrency(grandTotal, currency)}
⏱️ Estimated Timeline: ${selectedTier.deliveryTime}

Next.js 14 • High Speed • Clean Codebase. Ready to launch? Let's connect!`;
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(getPitchText());
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent(getPitchText());
    window.open(`https://wa.me/?text=${text}`, "_blank");
  };

  return (
    <section id="calculator" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-xs font-semibold text-indigo-700 mb-3">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Pitch & Scope Builder</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-['Space_Grotesk']">
            Build Your Tailored Website Estimate
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            Customize deliverables, toggle specific functionality add-ons, and instantly generate a formatted pitch proposal.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Configurator (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            {/* Step 1: Base Tier Selection */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
                  Step 1: Choose Foundation Tier
                </span>
                <span className="text-xs text-blue-600 font-semibold">
                  Selected: {selectedTier.name}
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {PRICING_TIERS.map((tier) => {
                  const isSelected = selectedTierId === tier.id;
                  return (
                    <button
                      key={tier.id}
                      type="button"
                      onClick={() => setSelectedTierId(tier.id)}
                      className={`p-4 rounded-xl text-left border transition-all duration-200 relative ${
                        isSelected
                          ? "border-blue-600 bg-blue-50/50 shadow-sm ring-1 ring-blue-600"
                          : "border-slate-200 hover:border-slate-300 bg-white"
                      }`}
                    >
                      {tier.id === "multi-page" && (
                        <span className="absolute -top-2.5 right-3 text-[10px] font-bold bg-emerald-600 text-white px-2 py-0.5 rounded-full shadow-xs">
                          1 Yr Free Support
                        </span>
                      )}
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-bold text-slate-900">
                          {tier.name}
                        </span>
                        <span className="text-sm font-extrabold text-blue-600 font-['Space_Grotesk']">
                          {tier.priceInr ? formatCurrency(tier.priceInr, currency) : "Custom Scope"}
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 mt-1 line-clamp-1">{tier.tagline}</p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Add-Ons Selection */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
                  Step 2: Add-on Capabilities (Optional)
                </span>
                <span className="text-xs text-slate-500">
                  {selectedAddOns.length} selected
                </span>
              </div>

              <div className="space-y-2.5">
                {ADD_ON_OPTIONS.map((addOn) => {
                  const isChecked = selectedAddOns.includes(addOn.id);
                  return (
                    <div
                      key={addOn.id}
                      onClick={() => toggleAddOn(addOn.id)}
                      className={`p-3.5 rounded-xl border cursor-pointer transition-all flex items-center justify-between gap-3 ${
                        isChecked
                          ? "border-blue-500 bg-blue-50/40"
                          : "border-slate-200 hover:border-slate-300 bg-white"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-5 h-5 rounded-md flex items-center justify-center transition-colors ${
                            isChecked
                              ? "bg-blue-600 text-white"
                              : "border border-slate-300 bg-white"
                          }`}
                        >
                          {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                        </div>
                        <div>
                          <div className="text-xs font-bold text-slate-900 flex items-center gap-2">
                            <span>{addOn.name}</span>
                            {addOn.popular && (
                              <span className="text-[10px] bg-amber-100 text-amber-800 px-1.5 py-0.2 rounded font-semibold">
                                Popular
                              </span>
                            )}
                          </div>
                          <div className="text-[11px] text-slate-500">{addOn.description}</div>
                        </div>
                      </div>

                      <div className="text-xs font-extrabold text-slate-800 shrink-0 font-['Space_Grotesk']">
                        +{formatCurrency(addOn.priceInr, currency)}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Live Summary & Action Card (5 cols) */}
          <div className="lg:col-span-5">
            <div className="sticky top-24 bg-gradient-to-b from-slate-900 to-slate-950 text-white rounded-2xl p-6 sm:p-7 shadow-xl">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <span className="text-xs uppercase font-bold tracking-wider text-slate-400">
                  Live Project Proposal
                </span>
                <span className="text-xs bg-emerald-500/20 text-emerald-300 px-2.5 py-0.5 rounded-full border border-emerald-500/30 font-medium">
                  Active Spec
                </span>
              </div>

              {/* Price Breakdown */}
              <div className="py-6 space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-300">{selectedTier.name} Foundation:</span>
                  <span className="font-semibold text-white">
                    {formatCurrency(basePrice, currency)}
                  </span>
                </div>

                {selectedAddOns.map((id) => {
                  const item = ADD_ON_OPTIONS.find((a) => a.id === id);
                  if (!item) return null;
                  return (
                    <div key={id} className="flex items-center justify-between text-xs text-slate-400">
                      <span>+ {item.name}:</span>
                      <span className="text-slate-300">
                        {formatCurrency(item.priceInr, currency)}
                      </span>
                    </div>
                  );
                })}

                {selectedTier.id === "multi-page" && (
                  <div className="flex items-center justify-between text-xs text-emerald-400 pt-1">
                    <span className="flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      1 Year Free Maintenance:
                    </span>
                    <span className="font-bold">FREE (₹0)</span>
                  </div>
                )}

                <div className="pt-4 border-t border-slate-800 flex items-baseline justify-between">
                  <div>
                    <div className="text-xs text-slate-400">Estimated Total</div>
                    <div className="text-[11px] text-slate-500">Milestone schedule available</div>
                  </div>
                  <div className="text-3xl font-extrabold text-white tracking-tight font-['Space_Grotesk'] text-right">
                    {formatCurrency(grandTotal, currency)}
                  </div>
                </div>
              </div>

              {/* Quick Spec Highlights */}
              <div className="bg-slate-800/60 rounded-xl p-3.5 mb-6 text-xs text-slate-300 space-y-1.5 border border-slate-700/60">
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Target Timeline:</span>
                  <span className="font-semibold text-white">{selectedTier.deliveryTime}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Tech Architecture:</span>
                  <span className="font-semibold text-white">Next.js 14 + Tailwind</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Code Handover:</span>
                  <span className="font-semibold text-white">100% Repository Transfer</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="space-y-2.5">
                <button
                  type="button"
                  onClick={() => onOpenInquiryWithCustom(getPitchText(), grandTotal)}
                  className="w-full py-3.5 px-4 rounded-xl text-xs font-bold bg-blue-500 hover:bg-blue-600 text-white shadow-lg shadow-blue-500/25 transition-all flex items-center justify-center gap-2"
                >
                  <span>Submit Estimate & Lock Timeline</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={handleCopy}
                    className="py-2.5 px-3 rounded-lg text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors flex items-center justify-center gap-1.5 border border-slate-700"
                  >
                    {copied ? (
                      <>
                        <CheckCheck className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Pitch</span>
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={handleWhatsApp}
                    className="py-2.5 px-3 rounded-lg text-xs font-semibold bg-emerald-600 hover:bg-emerald-500 text-white transition-colors flex items-center justify-center gap-1.5 shadow-sm"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>WhatsApp Spec</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
