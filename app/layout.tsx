import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FreelanceTrack — Stripe Invoice & Payment Tracker",
  description: "Track freelance payments across multiple Stripe accounts. Unified dashboard for invoices, cash flow, and outstanding payments."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="02be74bb-1d89-4af9-bd18-e4b48d7eff0f"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
