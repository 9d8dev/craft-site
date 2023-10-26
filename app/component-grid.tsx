// Layout Components
import DrawerWrapper from "@/app/drawer-wrapper";
import Image from "next/image";
import CopyButton from "./copy-button";

// Craft Components
import One from "@/app/components/type/hero/one";
import Two from "@/app/components/type/hero/two";
import Three from "@/app/components/type/hero/three";

// Import Code
import oneCode from "!!raw-loader!@/app/components/type/hero/one";
import twoCode from "!!raw-loader!@/app/components/type/hero/two";
import threeCode from "!!raw-loader!@/app/components/type/hero/three";

// Components Config
const components = [
  {
    name: "First Component",
    type: "Hero",
    component: One,
    componentCode: oneCode,
    description:
      "This is a test component for the setup of the Craft UI library",
  },
  {
    name: "Second Component",
    type: "Hero",
    component: Two,
    componentCode: twoCode,
    description:
      "This is a test component for the setup of the Craft UI library",
  },
  {
    name: "Third Component",
    type: "Hero",
    component: Three,
    componentCode: threeCode,
    description:
      "This is a test component for the setup of the Craft UI library",
  },
  {
    name: "First Component",
    type: "Hero",
    component: One,
    componentCode: oneCode,
    description:
      "This is a test component for the setup of the Craft UI library",
  },
  {
    name: "Second Component",
    type: "Hero",
    component: Two,
    componentCode: twoCode,
    description:
      "This is a test component for the setup of the Craft UI library",
  },
  {
    name: "Third Component",
    type: "Hero",
    component: Three,
    componentCode: threeCode,
    description:
      "This is a test component for the setup of the Craft UI library",
  },
];

const ComponentGrid = () => {
  return (
    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
      {components.map((component, index) => {
        const Component = component.component;
        const componentCode = component.componentCode;
        return (
          <DrawerWrapper
            key={index}
            name={component.name}
            component={<Component />}
            componentCode={componentCode}
          >
            {/* Component Card */}
            <div className="grid gap-4 rounded-lg bg-neutral-100 p-4 focus:ring-0 dark:bg-neutral-600">
              <div className="relative h-48 group">
                <Image
                  src="/placeholder.jpg"
                  fill
                  alt="Placeholder"
                  objectFit="cover"
                  className="rounded-md"
                />
                <CopyButton
                  className="group-hover:flex hidden z-50"
                  textToCopy={componentCode}
                />
              </div>
              <h2 className="m-auto flex items-baseline gap-2 text-2xl">
                {component.name}
                <small className="text-xs text-neutral-200 dark:text-neutral-400">
                  {component.type}
                </small>
              </h2>
              <p className="m-auto w-3/4 text-neutral-500 dark:text-neutral-400">
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
