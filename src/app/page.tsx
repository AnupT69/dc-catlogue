"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PricingTiers from "@/components/PricingTiers";
import ComparisonTable from "@/components/ComparisonTable";
import InteractiveEstimator from "@/components/InteractiveEstimator";
import PortfolioShowcase from "@/components/PortfolioShowcase";
import ProcessTimeline from "@/components/ProcessTimeline";
import WhyChooseUs from "@/components/WhyChooseUs";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";
import InquiryModal from "@/components/InquiryModal";
import { MessageSquare, Sparkles, ArrowUp } from "lucide-react";

export default function Home() {
  const [currency, setCurrency] = useState<"INR" | "USD">("INR");
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const [selectedTierId, setSelectedTierId] = useState<string>("multi-page");
  const [customScopeSummary, setCustomScopeSummary] = useState<string>("");

  const handleOpenInquiry = (tierId?: string) => {
    if (tierId) {
      setSelectedTierId(tierId);
    }
    setCustomScopeSummary("");
    setIsInquiryOpen(true);
  };

  const handleOpenInquiryWithCustom = (summary: string, total: number) => {
    setCustomScopeSummary(summary);
    setIsInquiryOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#FBFCFE] text-slate-900 selection:bg-blue-100 selection:text-blue-900">
      {/* Navigation */}
      <Navbar
        currency={currency}
        setCurrency={setCurrency}
        onOpenInquiry={handleOpenInquiry}
      />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section */}
        <Hero
          currency={currency}
          onOpenInquiry={handleOpenInquiry}
        />

        {/* Pricing Tiers (The Core Catalogue) */}
        <PricingTiers
          currency={currency}
          onSelectTier={handleOpenInquiry}
        />

        {/* Detailed Comparison Matrix */}
        <ComparisonTable />

        {/* Live Interactive Pitch & Cost Estimator */}
        <InteractiveEstimator
          currency={currency}
          onOpenInquiryWithCustom={handleOpenInquiryWithCustom}
        />

        {/* Visual Proof / Portfolio Samples */}
        <PortfolioShowcase
          onSelectTierForInquiry={handleOpenInquiry}
        />

        {/* 4-Step Production Process */}
        <ProcessTimeline />

        {/* Agency Value Guarantee */}
        <WhyChooseUs />

        {/* Frequently Asked Questions */}
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Action Button: Quick WhatsApp / Pitch Trigger */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2">
        <button
          onClick={() => handleOpenInquiry()}
          className="group flex items-center gap-2.5 px-4 py-3 rounded-full bg-slate-900 hover:bg-blue-600 text-white shadow-xl shadow-slate-900/20 hover:shadow-blue-500/30 transition-all duration-300 transform hover:scale-105"
        >
          <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
          <span className="text-xs font-bold tracking-wide">Get Instant Quote</span>
          <MessageSquare className="w-4 h-4 text-emerald-400 group-hover:text-white" />
        </button>
      </div>

      {/* Interactive Modal */}
      <InquiryModal
        isOpen={isInquiryOpen}
        onClose={() => setIsInquiryOpen(false)}
        defaultTierId={selectedTierId}
        customScopeText={customScopeSummary}
        currency={currency}
      />
    </div>
  );
}
