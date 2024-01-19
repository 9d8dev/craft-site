import ComponentGrid from "@/app/component-grid";
import Hero from "@/app/hero";
import Footer from "@/app/footer";
import * as Craft from "@/components/craft/layout";

export default function Home() {
  return (
    <Craft.Main className="grid gap-6 md:gap-8">
      <Hero />
      <ComponentGrid />
      <Footer />
    </Craft.Main>
  );
}
