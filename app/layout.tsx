import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Craft UI | NextJS and Tailwind Components for Marketing Websites",
  description:
    "Crafted with Tailwind, React, and Next JS. Designed by Bridger Tower. Built with Cameron Youngblood.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="w-screen" lang="en">
      <body className={`max-w-screen-lg p-6 md:p-12 ${inter.className}`}>
        {children}
      </body>
    </html>
  );
}
