// Layout Components
import DrawerWrapper from "@/components/drawer-wrapper";

// Hero Components
import One from "@/components/type/hero/one";

const components = [
  {
    name: "One",
    type: "Hero",
    component: One,
    description: "This is a test component for set up of the Craft UI library",
  },
  {
    name: "Two",
    type: "Hero",
    component: One,
    description: "This is a test component for set up of the Craft UI library",
  },
  {
    name: "Three",
    type: "Hero",
    component: One,
    description: "This is a test component for set up of the Craft UI library",
  },
];

export default function Home() {
  return (
    <main className="grid md:gap-12 gap-6">
      <h1 className="text-4xl font-serif italic">Welcome to Craft UI</h1>
      <div className="grid md:grid-cols-3 gap-4">
        {components.map((component, index) => (
          <div key={index} className="bg-neutral-100 dark:bg-neutral-600 grid gap-6 p-4 rounded-lg">
            <h2 className="text-2xl">{component.name}</h2>
            <p className="dark:text-neutral-400 text-neutral-500">{component.description}</p>
            <DrawerWrapper name={component.name}>
              <component.component />
            </DrawerWrapper>
          </div>
        ))}
      </div>
    </main>
  );
}
