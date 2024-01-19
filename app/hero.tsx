import { Info, Mail } from "lucide-react";
import { Instrument_Serif } from "next/font/google";

const font = Instrument_Serif({ subsets: ["latin"], weight: "400" });

export default function Hero() {
  return (
    <section className="grid gap-6 py-8 md:gap-8 md:py-12">
      <p className="flex w-fit items-center gap-2 rounded-2xl bg-neutral-100 px-3 py-1 text-xs dark:bg-neutral-600 dark:text-neutral-200">
        <Info className="w-4" />
        Next JS Components for Landing Pages and Marketing Websites
      </p>
      <h1 className={font.className}>Craft UI Components</h1>
      <div className="grid not-prose gap-2">
        <h3 className="font-light">
          <a
            className="cursor-pointer underline underline-offset-4 transition-all hover:opacity-50"
            href="https://github.com/9d8dev/craft"
          >
            Craft UI
          </a>{" "}
          is a component library for marketing websites built with React,
          Typescript, Next JS, and Tailwind CSS.
        </h3>
        <h2 className="font-light">
          Below is a collection of components build with Craft UI and shadcn/ui
          created by{" "}
          <a
            className="cursor-pointer underline underline-offset-4 transition-all hover:opacity-50"
            href="https://bridger.to"
          >
            Bridger Tower
          </a>
          .
        </h2>
        <a
          className="mt-8 flex w-fit items-center gap-1 rounded-md border py-1 pl-1 pr-2 hover:bg-white hover:text-neutral-700"
          href="#tally-open=n08R86&tally-emoji-text=👋&tally-emoji-animation=wave"
        >
          <Mail className="h-4" /> Subscribe for Updates
        </a>
      </div>
    </section>
  );
}
