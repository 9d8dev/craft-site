import ComponentGrid from "@/app/component-grid";
import Hero from "@/app/hero";

export default function Home() {
  return (
    <main className="grid md:gap-8 gap-6">
      <Hero />
      <ComponentGrid />
    </main>
  );
}
