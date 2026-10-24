"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  Zap, 
  CheckCircle, 
  Clock, 
  Award, 
  Code2, 
  FileText,
  ChevronDown
} from "lucide-react";

interface HeroProps {
  currency: "INR" | "USD";
  onOpenInquiry: (tierId?: string) => void;
}

export default function Hero({ currency, onOpenInquiry }: HeroProps) {
  const quickHighlights = [
    { label: "Single Page", price: currency === "INR" ? "₹5,000" : "$69", time: "3-4 Days" },
    { label: "Portfolio Site", price: currency === "INR" ? "₹15,000" : "$199", time: "5-7 Days" },
    { label: "Multi-Page", price: currency === "INR" ? "₹20,000" : "$269", time: "1 Year Free Support" },
    { label: "Custom Software", price: "Custom Scope", time: "Full-Stack Sprints" },
  ];

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-ambient-light">
      {/* Background Decorative Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      
      {/* Subtle Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-blue-300/30 to-indigo-200/30 blur-3xl rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Eyebrow Pill */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-blue-200/80 shadow-xs mb-6 text-xs font-semibold text-blue-900"
          >
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-blue-700 font-bold">2026 Website Pitch & Services Catalogue</span>
            <span className="text-slate-300">|</span>
            <span className="text-slate-600 font-medium">Fixed & Honest Pricing</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12] font-['Space_Grotesk']"
          >
            Clean Engineering. Transparent Pricing.{" "}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-600 bg-clip-text text-transparent">
              Zero Surprises.
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed font-normal"
          >
            We build ultra-fast, modern websites and custom web applications powered by{" "}
            <span className="font-semibold text-slate-800">Next.js 14 & Tailwind CSS</span>.
            Browse our curated tiers with full feature breakdowns and guaranteed launch timelines.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3.5"
          >
            <a
              href="#pricing"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-md shadow-blue-500/25 hover:shadow-lg hover:shadow-blue-500/35 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Explore All 4 Pricing Tiers</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#calculator"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200/90 rounded-xl shadow-xs hover:border-slate-300 transition-all duration-200"
            >
              <span>Custom Cost Calculator</span>
            </a>
          </motion.div>

          {/* Quick Pricing Glance Strip */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-12 max-w-4xl mx-auto"
          >
            <div className="bg-white/90 backdrop-blur-md rounded-2xl border border-slate-200/80 shadow-premium p-4 md:p-5">
              <div className="text-left mb-3 px-2 flex items-center justify-between">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  Quick Package Index
                </span>
                <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                  ✓ Instant Pitch Specs
                </span>
              </div>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                {quickHighlights.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-slate-50/80 hover:bg-blue-50/60 border border-slate-200/60 hover:border-blue-200 transition-all text-left group"
                  >
                    <div className="text-xs text-slate-500 font-medium group-hover:text-blue-700">
                      {item.label}
                    </div>
                    <div className="text-lg font-extrabold text-slate-900 mt-0.5 group-hover:text-blue-600 font-['Space_Grotesk']">
                      {item.price}
                    </div>
                    <div className="text-[11px] text-slate-500 flex items-center gap-1 mt-1">
                      <Clock className="w-3 h-3 text-slate-400" />
                      <span>{item.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Guarantee Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-y-3 gap-x-8 text-xs font-medium text-slate-500"
          >
            <div className="flex items-center gap-1.5">
              <Zap className="w-4 h-4 text-amber-500" />
              <span>95+ Google PageSpeed Score</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>100% Clean Code & Full Ownership</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Award className="w-4 h-4 text-blue-600" />
              <span>1 Year Free Support on Multi-Page</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Code2 className="w-4 h-4 text-indigo-600" />
              <span>Next.js 14 App Router</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
