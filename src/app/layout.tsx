import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Modern Web Studio — Client Catalogue & Pricing",
  description: "Explore our transparent website packages: Single Page (₹5k), Professional Portfolio (₹15k), Multi Page with 1 Year Support (₹20k), and Custom Software.",
  keywords: ["Website Pricing", "Web Development Catalogue", "Next.js Websites", "Single Page Website", "Portfolio Website", "Multi Page Website"],
  authors: [{ name: "ApexCraft Studio" }],
  openGraph: {
    title: "Modern Web Studio — Client Catalogue & Pricing",
    description: "Transparent, high-performance website packages built with Next.js, Tailwind CSS & Framer Motion.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased selection:bg-blue-100 selection:text-blue-900 bg-[#FBFCFE] text-slate-900">
        {children}
      </body>
    </html>
  );
}
