import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "UDGAMA 1.O — 24-Hour National Level Hackathon",
  description:
    "UDGAMA is a 24-hour offline hackathon organized by VVITU ACM Student Chapter. Join us March 14–15 for collaborative innovation, rapid prototyping, and real-world problem solving.",
  keywords: [
    "hackathon",
    "UDGAMA",
    "VVITU",
    "coding",
    "innovation",
    "ACM",
    "2026",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
