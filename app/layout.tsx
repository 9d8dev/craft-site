import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Craft UI | NextJS and Tailwind Components for Marketing Websites',
  description:
    'Crafted with Tailwind, React, and Next JS. Designed by Bridger Tower. Built with Cameron Youngblood.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`max-w-screen-lg m-auto p-6 ${inter.className}`}>{children}</body>
    </html>
  );
}
