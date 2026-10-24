"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ExternalLink, 
  Layers, 
  Sparkles, 
  ArrowUpRight, 
  Smartphone, 
  Monitor, 
  ShieldCheck, 
  Zap,
  CheckCircle2
} from "lucide-react";
import { PORTFOLIO_SAMPLES } from "@/data/pricingData";

interface PortfolioShowcaseProps {
  onSelectTierForInquiry: (tierId: string) => void;
}

export default function PortfolioShowcase({ onSelectTierForInquiry }: PortfolioShowcaseProps) {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [previewSample, setPreviewSample] = useState<(typeof PORTFOLIO_SAMPLES)[0] | null>(null);

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "single-page", label: "Single Page (₹5k)" },
    { id: "portfolio-website", label: "Portfolio (₹15k)" },
    { id: "multi-page", label: "Multi-Page (₹20k)" },
    { id: "custom-software", label: "Custom Software" },
  ];

  const filteredSamples = activeFilter === "all"
    ? PORTFOLIO_SAMPLES
    : PORTFOLIO_SAMPLES.filter((s) => s.tier === activeFilter);

  return (
    <section id="portfolio" className="py-24 bg-slate-50/60 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
            Design & Engineering Standards
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3 font-['Space_Grotesk']">
            Visual Proof: Quality Built Into Every Tier
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            Every website we engineer adheres to strict light-theme aesthetics, micro-interactions, and blazing fast lighthouse benchmarks.
          </p>

          {/* Filter Tabs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {filters.map((f) => (
              <button
                key={f.id}
                type="button"
                onClick={() => setActiveFilter(f.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  activeFilter === f.id
                    ? "bg-slate-900 text-white shadow-xs"
                    : "bg-white text-slate-600 hover:text-slate-900 border border-slate-200/80"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredSamples.map((sample, idx) => (
            <motion.div
              key={sample.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-premium transition-all duration-300 group flex flex-col justify-between"
            >
              {/* Image Preview & Mockup Header */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                <img
                  src={sample.previewImage}
                  alt={sample.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent" />

                {/* Badge Top Left */}
                <div className="absolute top-4 left-4">
                  <span className="text-[11px] font-bold bg-white/95 text-slate-900 px-3 py-1 rounded-full shadow-md backdrop-blur-sm border border-white/40">
                    {sample.badge}
                  </span>
                </div>

                {/* Metric Bottom Left */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                  <div className="text-xs font-semibold bg-slate-900/80 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/20 flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5 text-amber-400" />
                    <span>{sample.metrics}</span>
                  </div>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-6">
                <div className="text-xs font-semibold text-blue-600 uppercase tracking-wide">
                  {sample.category}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mt-1 font-['Space_Grotesk']">
                  {sample.title}
                </h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  {sample.description}
                </p>

                {/* Tags */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {sample.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[11px] font-medium text-slate-600 bg-slate-100 px-2.5 py-0.5 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => onSelectTierForInquiry(sample.tier)}
                    className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1 group-hover:gap-1.5 transition-all"
                  >
                    <span>Request Similar Project</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>

                  <span className="text-[11px] text-slate-400">
                    Next.js 14 Production Ready
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
