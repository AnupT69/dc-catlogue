"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Check, 
  Sparkles, 
  Clock, 
  RotateCcw, 
  Users, 
  ArrowRight, 
  Copy, 
  CheckCheck,
  ShieldAlert,
  ShieldCheck,
  Code
} from "lucide-react";
import { PRICING_TIERS, PricingTier } from "@/data/pricingData";
import { formatCurrency } from "@/lib/utils";

interface PricingTiersProps {
  currency: "INR" | "USD";
  onSelectTier: (tierId: string) => void;
}

export default function PricingTiers({ currency, onSelectTier }: PricingTiersProps) {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopyPitch = (tier: PricingTier) => {
    const price = tier.priceInr ? formatCurrency(tier.priceInr, currency) : "Based on Requirement";
    const text = `*${tier.name} Pitch Proposal*\nPrice: ${price}\nTimeline: ${tier.deliveryTime}\nRevisions: ${tier.revisions}\nIdeal For: ${tier.idealFor}\nKey Features:\n${tier.features.slice(0, 5).map(f => `• ${f}`).join('\n')}\n\nBuilt with Next.js 14 & Tailwind CSS. Let's discuss your project!`;
    
    navigator.clipboard.writeText(text);
    setCopiedId(tier.id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  return (
    <section id="pricing" className="py-24 bg-white relative">
      {/* Background soft decoration */}
      <div className="absolute inset-0 bg-dot-pattern opacity-30 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-semibold text-blue-700 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Official 2026 Rate Card</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-['Space_Grotesk']">
            Clear, Fair Pricing For Every Stage
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            No hidden clauses, no recurring lock-ins. Pick a standalone tier or configure custom software engineering.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-6 items-stretch">
          {PRICING_TIERS.map((tier, index) => {
            const isPopular = tier.popular;

            return (
              <motion.div
                key={tier.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative rounded-2xl flex flex-col justify-between transition-all duration-300 ${
                  isPopular
                    ? "bg-white border-2 border-blue-600 shadow-xl shadow-blue-500/10 scale-[1.02] lg:-translate-y-2 z-10"
                    : "bg-white border border-slate-200/90 shadow-sm hover:shadow-premium hover:border-slate-300"
                }`}
              >
                {/* Popular Highlight Badge */}
                {isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-[11px] font-bold px-3.5 py-1 rounded-full shadow-md flex items-center gap-1.5 whitespace-nowrap">
                    <Sparkles className="w-3 h-3 text-amber-300" />
                    <span>BEST VALUE • 1 YEAR FREE SUPPORT</span>
                  </div>
                )}

                {/* Card Top Section */}
                <div className="p-6 md:p-7">
                  {/* Badge & Category */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span
                      className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md ${
                        isPopular
                          ? "bg-blue-50 text-blue-700 border border-blue-200"
                          : "bg-slate-100 text-slate-700"
                      }`}
                    >
                      {tier.badge || "Standard"}
                    </span>
                    
                    {/* Copy pitch snippet button */}
                    <button
                      onClick={() => handleCopyPitch(tier)}
                      title="Copy pitch summary to clipboard"
                      className="text-slate-400 hover:text-slate-700 p-1.5 rounded-lg hover:bg-slate-100 transition-colors text-xs flex items-center gap-1"
                    >
                      {copiedId === tier.id ? (
                        <>
                          <CheckCheck className="w-3.5 h-3.5 text-emerald-600" />
                          <span className="text-[10px] text-emerald-600 font-semibold">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span className="text-[10px] hidden sm:inline">Pitch</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-xl font-bold text-slate-900 font-['Space_Grotesk']">
                    {tier.name}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 min-h-[36px] leading-relaxed">
                    {tier.tagline}
                  </p>

                  {/* Price display */}
                  <div className="mt-5 pb-5 border-b border-slate-100">
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-['Space_Grotesk']">
                        {tier.priceInr !== null
                          ? formatCurrency(tier.priceInr, currency)
                          : "Custom Scope"}
                      </span>
                      {tier.priceInr !== null && (
                        <span className="text-xs font-medium text-slate-400">
                          / one-time
                        </span>
                      )}
                    </div>
                    {tier.priceInr === null && (
                      <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-0.5 rounded mt-1 inline-block">
                        Based on Requirement
                      </span>
                    )}

                    {/* Support Highlight for Multi-Page */}
                    {tier.id === "multi-page" && (
                      <div className="mt-2.5 flex items-center gap-1.5 text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1.5 rounded-lg border border-emerald-200">
                        <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>Includes 1 Year Free Support</span>
                      </div>
                    )}
                  </div>

                  {/* Quick Meta: Timeline & Revisions */}
                  <div className="py-4 space-y-2 text-xs text-slate-600 border-b border-slate-100">
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-1.5 text-slate-500">
                        <Clock className="w-3.5 h-3.5 text-slate-400" />
                        Delivery:
                      </span>
                      <span className="font-semibold text-slate-800">{tier.deliveryTime}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-1.5 text-slate-500">
                        <RotateCcw className="w-3.5 h-3.5 text-slate-400" />
                        Revisions:
                      </span>
                      <span className="font-semibold text-slate-800">{tier.revisions}</span>
                    </div>
                    <div className="flex items-start justify-between pt-1">
                      <span className="flex items-center gap-1.5 text-slate-500 shrink-0">
                        <Users className="w-3.5 h-3.5 text-slate-400" />
                        Ideal for:
                      </span>
                      <span className="font-medium text-slate-700 text-right text-[11px] max-w-[65%]">
                        {tier.idealFor}
                      </span>
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="pt-4">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-3">
                      Deliverables Included:
                    </span>
                    <ul className="space-y-2.5">
                      {tier.features.map((feat, fIndex) => (
                        <li key={fIndex} className="flex items-start gap-2 text-xs text-slate-700 leading-snug">
                          <div className={`mt-0.5 rounded-full p-0.5 shrink-0 ${isPopular ? "bg-blue-100 text-blue-700" : "bg-emerald-100 text-emerald-700"}`}>
                            <Check className="w-3 h-3 stroke-[2.5]" />
                          </div>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Bottom CTA */}
                <div className="p-6 pt-2 bg-slate-50/50 rounded-b-2xl border-t border-slate-100">
                  <button
                    onClick={() => onSelectTier(tier.id)}
                    className={`w-full py-3 px-4 rounded-xl text-xs font-bold transition-all duration-200 flex items-center justify-center gap-2 ${
                      isPopular
                        ? "bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-500/25 hover:shadow-lg"
                        : "bg-white hover:bg-slate-900 hover:text-white text-slate-800 border border-slate-200 shadow-xs"
                    }`}
                  >
                    <span>{tier.ctaText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <p className="text-[10px] text-center text-slate-400 mt-2">
                    {tier.priceInr !== null ? "Fixed price • Milestone billing" : "Free architectural discovery call"}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Banner Note */}
        <div className="mt-14 max-w-3xl mx-auto bg-slate-50 border border-slate-200 rounded-2xl p-5 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-left">
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
              <Code className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <div className="text-xs font-bold text-slate-900">Need something specific or custom add-ons?</div>
              <div className="text-xs text-slate-500">Use our interactive estimator below to calculate customized add-ons or tailored requirements.</div>
            </div>
          </div>
          <a
            href="#calculator"
            className="shrink-0 text-xs font-bold text-blue-600 hover:text-blue-700 hover:underline flex items-center gap-1"
          >
            <span>Open Estimator</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
