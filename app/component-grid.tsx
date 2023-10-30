// Layout Components
import DrawerWrapper from "@/app/drawer-wrapper";
import Image from "next/image";
import CopyButton from "./copy-button";
import { components } from "@/component.config";

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
            <div className="grid gap-4 focus:ring-0">
              <div className="group relative h-fit rounded-lg">
                <Image
                  src={component.image}
                  alt="Placeholder"
                  className="rounded-md object-cover ring-4 ring-neutral-500"
                  placeholder="blur"
                />
                <CopyButton
                  className="z-50 hidden group-hover:flex"
                  textToCopy={componentCode}
                />
              </div>
              <div className="grid gap-4 rounded-lg bg-neutral-100 p-4 ring-4 ring-neutral-200 dark:bg-neutral-700 dark:ring-neutral-700">
                <h2 className="m-auto flex items-baseline gap-2 text-2xl">
                  {component.name}
                  <small className="text-xs text-neutral-800 dark:text-neutral-400">
                    {component.type}
                  </small>
                </h2>
                <p className="m-auto w-3/4 text-neutral-500 dark:text-neutral-400">
                  {component.description}
                </p>
              </div>
            </div>
          </DrawerWrapper>
        );
      })}
    </div>
  );
};

export default ComponentGrid;
