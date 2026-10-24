"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Compass, 
  Palette, 
  Code2, 
  Rocket, 
  CheckCircle,
  ArrowRight
} from "lucide-react";

export default function ProcessTimeline() {
  const steps = [
    {
      num: "01",
      title: "Discovery & Structure",
      subtitle: "Day 1",
      icon: Compass,
      desc: "We analyze your business goals, target audience, and finalize content structure, navigation wireframes, and tech requirements.",
      deliverable: "Wireframe layout & milestone roadmap",
    },
    {
      num: "02",
      title: "Design & Prototype",
      subtitle: "Days 2 – 3",
      icon: Palette,
      desc: "Crafting a clean, light-themed aesthetic with crisp typography, subtle borders, and harmonious color accents for your approval.",
      deliverable: "Figma design preview & style guide",
    },
    {
      num: "03",
      title: "Engineering & Motion",
      subtitle: "Days 4 – 6",
      icon: Code2,
      desc: "Full Next.js 14 & Tailwind coding with silky Framer Motion micro-interactions, mobile optimization, and lead form hookups.",
      deliverable: "Private preview staging link",
    },
    {
      num: "04",
      title: "SEO, Speed & Launch",
      subtitle: "Day 7",
      icon: Rocket,
      desc: "Lighthouse 95+ score audit, meta tags, domain DNS configuration, SSL certification, and complete source code repository handover.",
      deliverable: "Live website & ownership transfer",
    },
  ];

  return (
    <section id="process" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
            Frictionless Execution
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3 font-['Space_Grotesk']">
            How We Take You From Idea to Production
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            A structured 4-step workflow engineered to eliminate delays, respect your time, and deliver pixel-perfect execution.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="relative bg-slate-50/70 hover:bg-white rounded-2xl p-6 border border-slate-200/80 hover:border-blue-300 hover:shadow-premium transition-all duration-300 group"
              >
                {/* Number & Day */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-black text-slate-300 group-hover:text-blue-600 transition-colors font-['Space_Grotesk']">
                    {step.num}
                  </span>
                  <span className="text-xs font-semibold text-slate-500 bg-white group-hover:bg-blue-50 group-hover:text-blue-700 px-2.5 py-1 rounded-md border border-slate-200 transition-colors">
                    {step.subtitle}
                  </span>
                </div>

                {/* Icon */}
                <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-700 group-hover:text-blue-600 group-hover:border-blue-200 shadow-xs mb-4">
                  <Icon className="w-5 h-5" />
                </div>

                {/* Title & Desc */}
                <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-900 font-['Space_Grotesk']">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  {step.desc}
                </p>

                {/* Deliverable Pill */}
                <div className="mt-5 pt-4 border-t border-slate-200/60 flex items-center gap-1.5 text-[11px] font-semibold text-emerald-700">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>{step.deliverable}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
