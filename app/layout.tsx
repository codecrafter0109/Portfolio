import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

export const metadata: Metadata = {
  title: "Oisin Omaolchallan — Senior Full Stack Web Developer",
  description:
    "Senior Full Stack Engineer with 10+ years of experience building scalable web applications, cloud-native platforms, and AI-driven products with React, Next.js, Node.js, and Google Cloud.",
  keywords: [
    "Oisin Omaolchallan",
    "Full Stack Developer",
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "Portfolio",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable}`}
    >
      <body className="bg-bg font-sans text-white">{children}</body>
    </html>
  );
}
