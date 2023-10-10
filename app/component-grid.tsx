// Layout Components
import DrawerWrapper from "@/components/drawer-wrapper";
import Image from "next/image";

// Hero Components
import One from "@/components/type/hero/one";

const components = [
  {
    name: "First Component",
    type: "Hero",
    component: One,
    description: "This is a test component for the setup of the Craft UI library",
  },
  {
    name: "Second Component",
    type: "Hero",
    component: One,
    description: "This is a test component for the setup of the Craft UI library",
  },
  {
    name: "Third Component",
    type: "Hero",
    component: One,
    description: "This is a test component for the setup of the Craft UI library",
  },
];

const ComponentGrid = () => {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
      {components.map((component, index) => (
        <div key={index} className="bg-neutral-100 dark:bg-neutral-600 grid gap-6 p-4 rounded-lg">
          <div className="relative h-64">
            <Image src="/placeholder.jpg" fill alt="Placeholder" objectFit="cover" className="rounded-md" />
            {/* <component.component /> */}
          </div>
          <h2 className="text-2xl">{component.name} <small className="text-xs text-neutral-200 dark:text-neutral-400">{component.type}</small></h2>
          <p className="dark:text-neutral-400 text-neutral-500">{component.description}</p>
          <DrawerWrapper name={component.name}>
            <component.component />
          </DrawerWrapper>
        </div>
      ))
      }
    </div >
  );
};

export default ComponentGrid;
