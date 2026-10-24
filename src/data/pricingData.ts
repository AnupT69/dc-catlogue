export interface PricingTier {
  id: string;
  name: string;
  tagline: string;
  badge?: string;
  popular?: boolean;
  priceInr: number | null; // null for custom
  displayPrice: string;
  usdPrice: string;
  deliveryTime: string;
  revisions: string;
  idealFor: string;
  features: string[];
  notIncluded?: string[];
  techStack: string[];
  highlights: string[];
  ctaText: string;
}

export const PRICING_TIERS: PricingTier[] = [
  {
    id: "single-page",
    name: "Single Page Website",
    tagline: "High-converting landing page to launch your idea fast.",
    badge: "Quick Launch",
    popular: false,
    priceInr: 5000,
    displayPrice: "₹5,000",
    usdPrice: "$69",
    deliveryTime: "3 to 4 Days",
    revisions: "2 Iteration Rounds",
    idealFor: "Startups, Product Launches, Local Businesses, Event Promotions",
    features: [
      "Custom responsive 1-page layout (Hero, About, Services, Contact)",
      "Mobile, tablet & desktop optimized",
      "Interactive contact form & WhatsApp direct chat",
      "Speed optimized (Score 90+ on Google PageSpeed)",
      "Standard on-page SEO meta tags",
      "Social media links & Google Maps integration",
      "Free 30 days post-launch bug fixes",
      "Deployment on Vercel / Netlify / Hostinger",
    ],
    notIncluded: [
      "Multi-page navigation",
      "Content management system (CMS)",
      "1 Year priority support",
    ],
    techStack: ["Next.js 14", "Tailwind CSS", "Framer Motion", "Vercel"],
    highlights: ["Delivery in 72-96h", "Zero bloat, pure speed", "Direct WhatsApp link"],
    ctaText: "Choose Single Page (₹5k)",
  },
  {
    id: "portfolio-website",
    name: "Professional Portfolio",
    tagline: "Showcase your work, awards, and personal brand with authority.",
    badge: "Brand Builder",
    popular: false,
    priceInr: 15000,
    displayPrice: "₹15,000",
    usdPrice: "$199",
    deliveryTime: "5 to 7 Days",
    revisions: "Unlimited Revisions during build",
    idealFor: "Freelancers, Designers, Developers, Doctors, Consultants, Creators",
    features: [
      "Dynamic Case Studies & Project Gallery showcase",
      "Interactive filtered project showcase & lightbox previews",
      "Resume / CV download & Experience timeline",
      "Bespoke micro-interactions & smooth scroll animations",
      "Contact form with instant email alerts (Resend/EmailJS)",
      "Full On-Page SEO + OpenGraph Social Sharing cards",
      "Custom domain configuration & SSL setup",
      "60 Days dedicated technical support",
      "Dark / Light theme toggle support (Optional)",
    ],
    techStack: ["Next.js 14", "TypeScript", "Tailwind CSS", "Framer Motion", "Resend"],
    highlights: ["Interactive project gallery", "Social proof & testimonials", "Email notifications"],
    ctaText: "Choose Portfolio (₹15k)",
  },
  {
    id: "multi-page",
    name: "Multi Page Professional",
    tagline: "Complete corporate website with dedicated pages & full year support.",
    badge: "Most Popular • 1 Year Free Support",
    popular: true,
    priceInr: 20000,
    displayPrice: "₹20,000",
    usdPrice: "$269",
    deliveryTime: "7 to 10 Days",
    revisions: "Unlimited Revisions during build",
    idealFor: "Agencies, Corporate Companies, Clinics, Consultancies, Real Estate",
    features: [
      "Up to 5 to 7 bespoke pages (Home, About, Services, Case Studies, Team, Contact, Blog)",
      "🛡️ 1 Year FREE Technical Support & Maintenance included",
      "Dynamic Content Management System (CMS) or Markdown blog",
      "Advanced Lead Capture Form + CRM / Google Sheets sync",
      "Interactive pricing tables, service cards & FAQ accordions",
      "Core Web Vitals 95+ score guaranteed",
      "Advanced Schema markup & local Google SEO",
      "Google Analytics 4 & Meta Pixel setup",
      "Free domain connection, DNS setup & Cloudflare CDN",
      "Comprehensive admin training video on hand-off",
    ],
    techStack: ["Next.js 14", "TypeScript", "Tailwind CSS", "Framer Motion", "Sanity / Markdown", "Resend"],
    highlights: ["1 Year Free Maintenance", "5-7 Custom Pages", "Lead Capture Automation"],
    ctaText: "Get Multi-Page (₹20k)",
  },
  {
    id: "custom-software",
    name: "Custom Software",
    tagline: "Tailor-made web applications, SaaS platforms, portals & automated workflows.",
    badge: "Enterprise & SaaS",
    popular: false,
    priceInr: null,
    displayPrice: "Based on Requirement",
    usdPrice: "Custom Quote",
    deliveryTime: "Milestone-driven (2 to 6 Weeks)",
    revisions: "Agile sprints & weekly demos",
    idealFor: "Startups building MVP, SaaS founders, Internal tools, ERPs, E-commerce",
    features: [
      "Custom Full-Stack architecture (Next.js App Router + Node/Serverless)",
      "Secure Authentication (NextAuth, Supabase, Clerk or Auth0)",
      "Relational or NoSQL Database (PostgreSQL / Supabase / MongoDB)",
      "Payment Gateway integration (Stripe, Razorpay, LemonSqueezy)",
      "Role-based access control (Admin, Manager, Customer dashboards)",
      "RESTful API & Webhooks development",
      "Real-time notifications, automated emails, PDF report generators",
      "Automated CI/CD pipelines and production scalability",
      "Custom SLA & post-launch scaling retainer available",
    ],
    techStack: ["Next.js 14", "TypeScript", "Supabase / PostgreSQL", "Prisma / Drizzle", "Stripe / Razorpay", "Tailwind"],
    highlights: ["Bespoke Architecture", "Payment & Auth ready", "Agile weekly sprints"],
    ctaText: "Discuss Custom Scope",
  },
];

export interface AddOnOption {
  id: string;
  name: string;
  description: string;
  priceInr: number;
  popular?: boolean;
}

export const ADD_ON_OPTIONS: AddOnOption[] = [
  {
    id: "cms",
    name: "Headless CMS Panel (Blog/News)",
    description: "Easily publish blogs and update text without touching code",
    priceInr: 4000,
  },
  {
    id: "payment",
    name: "Payment Gateway Integration",
    description: "Razorpay / Stripe integration with instant receipt generation",
    priceInr: 4500,
    popular: true,
  },
  {
    id: "whatsapp-bot",
    name: "WhatsApp Automated Lead Bot",
    description: "Auto-reply to leads with instant catalog & notification alerts",
    priceInr: 3000,
  },
  {
    id: "seo-pack",
    name: "Growth SEO Booster Pack",
    description: "Keyword research, XML sitemaps, Google Search Console & indexing",
    priceInr: 3500,
  },
  {
    id: "express-launch",
    name: "Express 48-Hour Priority Delivery",
    description: "Fast-track development with dedicated focus and weekend sprints",
    priceInr: 5000,
  },
];

export const COMPARISON_FEATURES = [
  {
    category: "General & Design",
    items: [
      { name: "Number of Pages", single: "1 Long-form Page", portfolio: "3-4 Pages / Sections", multi: "5-7 Full Pages", custom: "Unlimited Custom Views" },
      { name: "Design System", single: "Clean Modern Template", portfolio: "Bespoke Portfolio Brand", multi: "Full Corporate UI/UX", custom: "Design System & Figma Spec" },
      { name: "Mobile Responsiveness", single: "100% Adaptive", portfolio: "100% Adaptive", multi: "100% Adaptive", custom: "100% Adaptive + PWA ready" },
      { name: "Animations & Motion", single: "Basic Smooth Transitions", portfolio: "Signature Micro-Interactions", multi: "Premium Scroll Animations", custom: "Complex Interactive UX" },
    ],
  },
  {
    category: "Features & Integration",
    items: [
      { name: "Contact & Lead Forms", single: "Direct WhatsApp / Email", portfolio: "Interactive Lead Form", multi: "Multi-Step CRM Synced Form", custom: "Custom Lead Engine & Webhooks" },
      { name: "CMS / Content Updates", single: "Static (Developer Managed)", portfolio: "Optional Add-on", multi: "Included CMS Dashboard", custom: "Full Admin Dashboard" },
      { name: "Authentication / Login", single: "No", portfolio: "No", multi: "Optional Add-on", custom: "Full Auth (Clerk / Supabase)" },
      { name: "Payment Gateway", single: "UPI QR / Link only", portfolio: "Optional Add-on", multi: "Optional Add-on", custom: "Razorpay / Stripe / Subscriptions" },
      { name: "Database & Backend API", single: "No", portfolio: "No", multi: "Headless CMS API", custom: "Full PostgreSQL / Prisma / Supabase" },
    ],
  },
  {
    category: "Support & Guarantees",
    items: [
      { name: "Free Support Period", single: "30 Days", portfolio: "60 Days", multi: "🌟 1 Full Year Included", custom: "Custom SLA & Retainer" },
      { name: "Delivery Timeline", single: "3 to 4 Days", portfolio: "5 to 7 Days", multi: "7 to 10 Days", custom: "Milestone Sprints" },
      { name: "Source Code Ownership", single: "100% Client Owned", portfolio: "100% Client Owned", multi: "100% Client Owned", custom: "100% Client Owned (IP Transfer)" },
      { name: "PageSpeed Guarantee (90+)", single: "Yes", portfolio: "Yes", multi: "Yes (95+ score)", custom: "Yes (High Performance Tier)" },
    ],
  },
];

export const FAQS = [
  {
    question: "What does the 1 Year Free Support include for the Multi Page Website (₹20k)?",
    answer:
      "Our 1 Year Free Support covers routine content updates (changing text, images, contact details), monthly security & dependency patches, hosting & domain uptime monitoring, performance health checks, and priority bug resolution within 24 hours. It ensures your business website remains fast, secure, and modern all year round with zero stress.",
  },
  {
    question: "Can I start with a Single Page (₹5k) and upgrade to Multi-Page later?",
    answer:
      "Yes! Because we build using modular Next.js architecture and clean component trees, scaling your website from 1 page to a multi-page portal is completely seamless. You only pay the incremental cost difference when you are ready to expand.",
  },
  {
    question: "What is your payment structure and milestone schedule?",
    answer:
      "We operate on a transparent, client-friendly milestone structure: 50% advance to initiate wireframing and design sprint, and the remaining 50% upon final demo approval, testing, and deployment to your production domain.",
  },
  {
    question: "Do you assist with Domain, Hosting, and Business Email setup?",
    answer:
      "Yes, absolutely. We assist you in selecting and configuring your domain (GoDaddy, Namecheap, Google Domains) and deploy your website on high-performance global CDN infrastructure (Vercel, Cloudflare) with automated SSL security certificates and business email forwarding at no extra consulting charge.",
  },
  {
    question: "How do you scope and price Custom Software projects?",
    answer:
      "For Custom Software, we conduct an initial 30-minute discovery call to map your product architecture, user roles, database schema, and third-party APIs. We then provide a modular Scope of Work (SOW) with milestone breakdown, time estimates, and fixed milestone pricing so there are never any unexpected surprises.",
  },
  {
    question: "Will I own the complete source code and design files?",
    answer:
      "Yes, 100%. Upon final project sign-off and balance settlement, the complete GitHub repository, production deployment access, and Figma/design assets are transferred directly to your organization.",
  },
];

export const PORTFOLIO_SAMPLES = [
  {
    id: "sample-1",
    title: "Apex Solar & Energy",
    category: "Single Page Website",
    tier: "single-page",
    description: "Sleek, high-converting solar consultation landing page with ROI calculator and instant WhatsApp lead capture.",
    metrics: "3.4x Lead Conversion • 98 Google PageSpeed",
    tags: ["Landing Page", "Next.js", "Clean Energy"],
    color: "from-blue-500/10 to-indigo-500/10",
    badge: "₹5,000 Tier",
    previewImage: "https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "sample-2",
    title: "Elena Vance | Architect & Design",
    category: "Professional Portfolio",
    tier: "portfolio-website",
    description: "Minimalist architectural portfolio featuring interactive blueprint lightboxes, project filters, and press citations.",
    metrics: "Featured in ArchDaily • 60+ Inquiries/Mo",
    tags: ["Portfolio", "Minimalist", "Architecture"],
    color: "from-amber-500/10 to-stone-500/10",
    badge: "₹15,000 Tier",
    previewImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "sample-3",
    title: "Vanguard Wealth Management",
    category: "Multi Page Professional",
    tier: "multi-page",
    description: "Complete corporate website with 7 distinct pages, team directory, dynamic blog, client portal link, and 1 Year active SLA.",
    metrics: "1 Year Support • 99 PageSpeed • 150+ Monthly Leads",
    tags: ["Corporate", "Finance", "Multi-Page", "CMS"],
    color: "from-emerald-500/10 to-teal-500/10",
    badge: "₹20,000 Tier",
    previewImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "sample-4",
    title: "Logistiq Fleet SaaS Portal",
    category: "Custom Software",
    tier: "custom-software",
    description: "Real-time dispatch system, GPS tracking web app, driver payroll generator, and multi-tenant admin console.",
    metrics: "Automated 2,400+ Shipments • 99.98% Uptime",
    tags: ["SaaS", "Dashboard", "PostgreSQL", "Full-Stack"],
    color: "from-violet-500/10 to-purple-500/10",
    badge: "Custom Tier",
    previewImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
  },
];
