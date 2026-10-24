"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Zap, 
  ShieldCheck, 
  Lock, 
  TrendingUp, 
  Sparkles, 
  Headphones,
  CheckCircle2
} from "lucide-react";

export default function WhyChooseUs() {
  const points = [
    {
      icon: Zap,
      title: "Sub-Second Page Loads",
      desc: "No slow, bloated themes. We handcraft with Next.js 14 and Tailwind for instant loads and 95+ Google PageSpeed ratings.",
    },
    {
      icon: ShieldCheck,
      title: "100% Code Ownership",
      desc: "You own the full source code and GitHub repository. No proprietary locks, no recurring license fees to keep your site online.",
    },
    {
      icon: Headphones,
      title: "1 Year Free Support",
      desc: "Our Multi-Page package (₹20,000) includes a full 365 days of technical maintenance, security updates, and content assistance.",
    },
    {
      icon: TrendingUp,
      title: "Conversion-First Architecture",
      desc: "Designed with clear call-to-actions, WhatsApp quick-connect triggers, and lead capture forms tested to maximize client inquiries.",
    },
    {
      icon: Lock,
      title: "Milestone-Based Billing",
      desc: "Risk-free partnership: 50% advance to start wireframing, and the remaining 50% only after you approve the final staging demo.",
    },
    {
      icon: Sparkles,
      title: "Premium Clean Light Aesthetics",
      desc: "Modern typography, subtle drop shadows, and purposeful micro-interactions that elevate your brand above standard templates.",
    },
  ];

  return (
    <section className="py-24 bg-slate-50/50 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
            Agency Standard
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3 font-['Space_Grotesk']">
            Why Clients Choose Our Engineering
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            We bridge the gap between expensive enterprise agencies and unreliable freelancers by offering fixed rates and guaranteed delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {points.map((pt, idx) => {
            const Icon = pt.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.08 }}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs hover:shadow-premium hover:border-slate-300 transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900 font-['Space_Grotesk']">
                  {pt.title}
                </h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  {pt.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
