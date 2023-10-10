import ComponentGrid from "./component-grid";

export default function Home() {
  return (
    <main className="grid md:gap-8 gap-6">
      <h1 className="text-8xl font-serif italic">Welcome to Craft UI</h1>
      <div>
        <h3 className="font-light">Craft UI is a component library built for React, Typescript, Next JS, and Tailwind CSS. The components are </h3>
        <h2 className="font-light">Craft UI was created by <a className="underline underline-offset-4 hover:opacity-50 transition-all" href="https://bridger.to">Bridger Tower</a> and <a className="underline underline-offset-4 hover:opacity-50 transition-all" href="https://cameronyoungblood.com">Cameron Youngblood</a> at <a className="underline underline-offset-4 hover:opacity-50 transition-all" href="https://9d8.dev">9d8</a>.</h2>
      </div>

      <ComponentGrid />
    </main >
  );
}
