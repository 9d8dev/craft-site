// Layout Components
import DrawerWrapper from "@/app/drawer-wrapper";
import Image from "next/image";

// Hero Components
import One from "@/app/components/type/hero/one";

const components = [
  {
    name: "First Component",
    type: "Hero",
    component: One,
    componentCode: "Working on this.",
    description:
      "This is a test component for the setup of the Craft UI library",
  },
  {
    name: "Second Component",
    type: "Hero",
    component: One,
    componentCode: "Working on this.",
    description:
      "This is a test component for the setup of the Craft UI library",
  },
  {
    name: "Third Component",
    type: "Hero",
    component: One,
    componentCode: "Working on this.",
    description:
      "This is a test component for the setup of the Craft UI library",
  },
];

const ComponentGrid = () => {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
      {components.map((component, index) => {
        const Component = component.component;
        return (
          <DrawerWrapper
            key={index}
            name={component.name}
            component={<Component />}
            componentCode={component.componentCode}
          >
            <div className="bg-neutral-100 dark:bg-neutral-600 grid gap-6 p-4 rounded-lg">
              <div className="relative h-48">
                <Image
                  src="/placeholder.jpg"
                  fill
                  alt="Placeholder"
                  objectFit="cover"
                  className="rounded-md"
                />
              </div>
              <h2 className="text-2xl">
                {component.name}
                <small className="text-xs text-neutral-200 dark:text-neutral-400">
                  {component.type}
                </small>
              </h2>
              <p className="dark:text-neutral-400 text-neutral-500">
                {component.description}
              </p>
            </div>
          </DrawerWrapper>
        );
      })}
    </div>
  );
};

export default ComponentGrid;
