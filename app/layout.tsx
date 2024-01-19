import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster, toast } from "sonner";
import * as Craft from "@/components/craft/layout";

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
    <Craft.Layout>
      {children}\
      <Toaster position="bottom-center" />
    </Craft.Layout>
  );
}
