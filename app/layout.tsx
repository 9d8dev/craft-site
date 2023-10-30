import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster, toast } from "sonner";

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
    <html
      className="w-screen font-light dark:bg-neutral-800 dark:text-neutral-50"
      lang="en"
    >
      <Toaster position="bottom-center" />
      <body className={`max-w-screen-2xl p-6 md:p-12 ${inter.className}`}>
        {children}
      </body>
    </html>
  );
}
