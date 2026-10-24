"use client";

import React from "react";
import { Layers, ArrowUp, Heart, Mail, Phone, MessageSquare, ShieldCheck } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800 text-xs">
          {/* Brand Info (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white shadow-sm">
                <Layers className="w-4 h-4" />
              </div>
              <span className="font-extrabold text-lg text-white font-['Space_Grotesk'] tracking-tight">
                Vanguard<span className="text-blue-500">Web</span> Studio
              </span>
            </div>
            <p className="text-slate-400 max-w-sm leading-relaxed text-xs">
              Specialized engineering studio building sub-second websites, landing pages, and bespoke web apps. Honest rates, transparent timelines, and guaranteed production quality.
            </p>
            <div className="pt-2 flex items-center gap-3">
              <div className="flex items-center gap-1.5 text-emerald-400 bg-emerald-950/60 border border-emerald-800/60 px-2.5 py-1 rounded-md text-[11px] font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>Available for New Projects</span>
              </div>
            </div>
          </div>

          {/* Pricing Tiers Quick Index */}
          <div>
            <div className="text-white font-bold uppercase tracking-wider text-[11px] mb-3">
              Website Packages
            </div>
            <ul className="space-y-2 text-slate-400">
              <li>
                <a href="#pricing" className="hover:text-white transition-colors">
                  Single Page (₹5,000)
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white transition-colors">
                  Professional Portfolio (₹15,000)
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white transition-colors flex items-center gap-1">
                  <span>Multi-Page (₹20,000)</span>
                  <span className="text-[9px] bg-emerald-500/20 text-emerald-300 px-1.5 py-0.2 rounded">1 Yr Supp</span>
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white transition-colors">
                  Custom Software (Quote)
                </a>
              </li>
              <li>
                <a href="#calculator" className="hover:text-white transition-colors text-blue-400">
                  Custom Cost Estimator →
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <div className="text-white font-bold uppercase tracking-wider text-[11px] mb-3">
              Navigation
            </div>
            <ul className="space-y-2 text-slate-400">
              <li>
                <a href="#comparison" className="hover:text-white transition-colors">
                  Feature Matrix
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-white transition-colors">
                  Sample Case Studies
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-white transition-colors">
                  4-Step Launch Process
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  Client FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Direct */}
          <div>
            <div className="text-white font-bold uppercase tracking-wider text-[11px] mb-3">
              Fast Pitch Contact
            </div>
            <ul className="space-y-2.5 text-slate-400">
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-blue-400" />
                <span>hello@vanguardweb.studio</span>
              </li>
              <li className="flex items-center gap-2">
                <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                <span>WhatsApp: Instant Reply</span>
              </li>
              <li className="text-[11px] text-slate-500 pt-1">
                Average reply time: under 30 minutes.
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} VanguardWeb Studio. All rights reserved. Source code transferred to client.
          </div>

          <div className="flex items-center gap-4">
            <span className="text-[11px]">Next.js 14 • Tailwind CSS • Framer Motion</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
              title="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
