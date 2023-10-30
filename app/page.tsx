import ComponentGrid from "@/app/component-grid";
import Hero from "@/app/hero";
import Footer from "@/app/footer";

export default function Home() {
  return (
    <main suppressHydrationWarning className="grid gap-6 md:gap-8">
      <Hero />
      <ComponentGrid />
      <Footer />
    </main>
  );
}
