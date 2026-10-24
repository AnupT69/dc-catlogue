# VanguardWeb Studio — Client Catalogue & Website Pricing Pitch Portal

A modern, high-conversion website catalogue built with **Next.js 14**, **Tailwind CSS**, and **Framer Motion** designed specifically to pitch prospective clients with transparent, fixed pricing and a clean light-themed aesthetic.

---

## 🌟 Pricing Tiers Included

| Tier | Price | Highlights | Target Clients |
| :--- | :---: | :--- | :--- |
| **1. Single Page Website** | **₹5,000** | 3-4 Days Delivery • Responsive • WhatsApp direct • 90+ PageSpeed | Startups, Local Businesses, Product Pre-launches |
| **2. Professional Portfolio** | **₹15,000** | 5-7 Days Delivery • Project Gallery • Filtered Case Studies • Unlimited Revisions | Freelancers, Designers, Creators, Doctors, Consultants |
| **3. Multi Page Professional** | **₹20,000** | **1 Year Free Support & Maintenance** • 5-7 Pages • CMS/Blog • GA4 Setup | Agencies, Growing Companies, Corporate, Real Estate |
| **4. Custom Software** | **Custom Scope** | Full-Stack Next.js App Router • Supabase/PostgreSQL • Auth • APIs | SaaS Founders, Portals, ERPs, Internal Tools |

---

## 🚀 Key Features

- **Clean UI & Luxury Light Aesthetic**: Soft ambient gradient meshes, crisp typography (Plus Jakarta Sans & Space Grotesk), subtle glassmorphism, and minimal borders.
- **Premium Animations**: Micro-interactions, smooth hover lifts, gradient glows, and celebratory confetti upon inquiry submission powered by Framer Motion and Canvas-Confetti.
- **Live Interactive Scope & Cost Estimator**: Clients can toggle optional add-ons (Payment Gateway +₹4.5k, Headless CMS +₹4k, WhatsApp Bot +₹3k, SEO Booster +₹3.5k, Express 48h Delivery +₹5k) with dynamic price calculation.
- **One-Click Pitch Generators**:
  - **Copy Pitch Proposal**: Formatted markdown with emojis ready to paste into WhatsApp or Email.
  - **WhatsApp Direct Connect**: Generates pre-populated WhatsApp messages with client details and chosen packages.
- **Detailed Comparison Matrix**: Side-by-side breakdown across Design, Features, Integrations, and Support SLA.
- **Currency Switcher**: Toggle effortlessly between **₹ INR** (default) and **$ USD**.
- **Interactive Project Portfolio**: Visual mockups and metrics for each package tier.
- **Client FAQ Accordion & 4-Step Production Process**: Addresses all questions regarding timelines, 1-year free support terms, milestone billing (50-50), and source code transfer.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Effects**: [Canvas Confetti](https://github.com/catdad/canvas-confetti)
- **Language**: TypeScript

---

## 💻 How to Run Locally

```bash
# 1. Install dependencies
npm install

# 2. Run the development server
npm run dev

# 3. Open in your browser
http://localhost:3000 (or http://localhost:3001)

# 4. Create an optimized production build
npm run build
npm run start
```

---

## 📁 Project Structure

```
Catlogue/
├── src/
│   ├── app/
│   │   ├── globals.css         # Light-theme styling, ambient gradients & animations
│   │   ├── layout.tsx          # Meta tags, typography & root wrapper
│   │   └── page.tsx            # Main presentation page
│   ├── components/
│   │   ├── Navbar.tsx          # Navigation, INR/USD toggle & pitch button
│   │   ├── Hero.tsx            # High-impact hero section with quick pricing glance
│   │   ├── PricingTiers.tsx    # Core 4-tier cards with 1-Year Free Support highlight
│   │   ├── ComparisonTable.tsx # Side-by-side feature comparison table
│   │   ├── InteractiveEstimator.tsx # Custom add-ons calculator & WhatsApp pitch generator
│   │   ├── PortfolioShowcase.tsx # Real-world sample project previews for each tier
│   │   ├── ProcessTimeline.tsx # 4-step streamlined delivery workflow
│   │   ├── WhyChooseUs.tsx     # Client guarantees (Ownership, 95+ PageSpeed, Support)
│   │   ├── FaqSection.tsx      # Interactive FAQ accordion
│   │   ├── InquiryModal.tsx    # Lead intake modal with confetti celebration
│   │   └── Footer.tsx          # Quick links & contact info
│   ├── data/
│   │   └── pricingData.ts      # Configurable pricing, features, FAQs & sample data
│   └── lib/
│       └── utils.ts            # Formatting helpers & class mergers
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```
