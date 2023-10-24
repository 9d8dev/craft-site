export default function Hero() {
  return (
    <section className="grid md:gap-8 gap-6 py-16 md:py-24 text-center">
      <p className="px-4 py-2 rounded-2xl bg-neutral-600 w-fit m-auto text-neutral-200 text-xs">
        Next JS Components for Landing Pages and Marketing Websites
      </p>
      <h1 className="text-8xl font-serif">Welcome to Craft UI</h1>
      <div className="grid gap-2">
        <h3 className="font-light">
          Craft UI is a component library for marketing websites built with
          React, Typescript, Next JS, and Tailwind CSS.
        </h3>
        <h2 className="font-light">
          Craft UI was created by{" "}
          <a
            className="underline underline-offset-4 hover:opacity-50 transition-all cursor-pointer"
            href="https://bridger.to"
          >
            Bridger Tower
          </a>{" "}
          and{" "}
          <a
            className="underline underline-offset-4 hover:opacity-50 transition-all cursor-pointer"
            href="https://cameronyoungblood.com"
          >
            Cameron Youngblood
          </a>{" "}
          at{" "}
          <a
            className="underline underline-offset-4 hover:opacity-50 transition-all cursor-pointer"
            href="https://9d8.dev"
          >
            9d8
          </a>{" "}
          and{" "}
          <a
            className="underline underline-offset-4 hover:opacity-50 transition-all cursor-pointer"
            href="https://alpinecodex.com"
          >
            Alpine Codex
          </a>
          .
        </h2>
      </div>
    </section>
  );
}
