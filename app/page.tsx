import ComponentGrid from "@/app/component-grid";
import Hero from "@/app/hero";
import Footer from "@/app/footer";

export default function Home() {
  return (
    <main className="grid md:gap-8 gap-6">
      <Hero />
      <ComponentGrid />
      <Footer />
    </main>
  );
}
