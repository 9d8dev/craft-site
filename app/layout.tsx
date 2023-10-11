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
    <html className="w-screen dark:bg-neutral-700 dark:text-neutral-50 font-light" lang="en">
      <body className={`p-6 md:p-12 max-w-screen-2xl ${inter.className}`}>
        {children}
      </body>
    </html>
  );
}
