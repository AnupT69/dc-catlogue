"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Check, Minus, HelpCircle, ChevronDown, ChevronUp } from "lucide-react";
import { COMPARISON_FEATURES } from "@/data/pricingData";

export default function ComparisonTable() {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <section id="comparison" className="py-20 bg-slate-50/70 border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
            Deep-Dive Matrix
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3 font-['Space_Grotesk']">
            Comprehensive Feature Comparison
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            Compare all four packages side-by-side to determine the exact fit for your budget and growth roadmap.
          </p>
        </div>

        {/* Comparison Table Box */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-100/60">
                  <th className="p-4 sm:p-5 text-xs font-bold text-slate-500 uppercase tracking-wider w-[28%]">
                    Deliverable / Feature
                  </th>
                  <th className="p-4 sm:p-5 text-xs font-bold text-slate-800 uppercase tracking-wider w-[18%]">
                    Single Page
                    <span className="block text-blue-600 font-extrabold text-sm normal-case">₹5,000</span>
                  </th>
                  <th className="p-4 sm:p-5 text-xs font-bold text-slate-800 uppercase tracking-wider w-[18%]">
                    Portfolio
                    <span className="block text-blue-600 font-extrabold text-sm normal-case">₹15,000</span>
                  </th>
                  <th className="p-4 sm:p-5 text-xs font-bold text-blue-900 uppercase tracking-wider w-[18%] bg-blue-50/70 border-x border-blue-200/60">
                    Multi-Page
                    <span className="block text-blue-600 font-extrabold text-sm normal-case">₹20,000 ⭐</span>
                    <span className="text-[10px] text-emerald-600 font-semibold uppercase">1 Yr Free Support</span>
                  </th>
                  <th className="p-4 sm:p-5 text-xs font-bold text-slate-800 uppercase tracking-wider w-[18%]">
                    Custom Software
                    <span className="block text-purple-600 font-extrabold text-sm normal-case">Custom Scope</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON_FEATURES.map((categoryGroup, groupIdx) => (
                  <React.Fragment key={groupIdx}>
                    <tr className="bg-slate-50/90 border-b border-slate-200">
                      <td
                        colSpan={5}
                        className="py-3 px-5 text-xs font-extrabold uppercase tracking-wider text-slate-700 font-['Space_Grotesk']"
                      >
                        {categoryGroup.category}
                      </td>
                    </tr>
                    {categoryGroup.items.map((row, rowIdx) => (
                      <tr
                        key={rowIdx}
                        className="border-b border-slate-100 hover:bg-slate-50/50 transition-colors text-xs text-slate-700"
                      >
                        <td className="p-4 font-medium text-slate-900 border-r border-slate-100">
                          {row.name}
                        </td>
                        <td className="p-4 text-slate-600">
                          {row.single === "No" ? (
                            <span className="text-slate-300 font-bold">—</span>
                          ) : (
                            <span>{row.single}</span>
                          )}
                        </td>
                        <td className="p-4 text-slate-600">
                          {row.portfolio === "No" ? (
                            <span className="text-slate-300 font-bold">—</span>
                          ) : (
                            <span>{row.portfolio}</span>
                          )}
                        </td>
                        <td className="p-4 bg-blue-50/30 border-x border-blue-200/40 font-semibold text-slate-900">
                          {row.multi.includes("🌟") ? (
                            <span className="inline-flex items-center gap-1 text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                              {row.multi}
                            </span>
                          ) : (
                            <span>{row.multi}</span>
                          )}
                        </td>
                        <td className="p-4 text-slate-700 font-medium">
                          {row.custom}
                        </td>
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
