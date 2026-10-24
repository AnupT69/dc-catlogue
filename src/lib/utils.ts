import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatCurrency(amount: number | null, currency: "INR" | "USD" = "INR"): string {
  if (amount === null) return "Custom Quote";
  
  if (currency === "INR") {
    if (amount >= 1000) {
      return `₹${amount.toLocaleString("en-IN")}`;
    }
    return `₹${amount}`;
  } else {
    // Roughly converted for USD clients if toggled
    const usd = Math.round(amount / 80);
    return `$${usd.toLocaleString("en-US")}`;
  }
}
