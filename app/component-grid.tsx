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
        // Generate a unique ID by creating a slug from the component's name
        const slugId = `component-${component.name
          .toLowerCase()
          .replace(/ /g, "-")}`;
        return (
          <DrawerWrapper
            id={slugId}
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
                  alt={component.name}
                  className="rounded-md object-cover ring-4 ring-neutral-500"
                  placeholder="blur"
                />
                <CopyButton
                  className="z-50 hidden group-hover:flex"
                  textToCopy={componentCode}
                />
                <h2 className="absolute bottom-0 left-0 m-auto hidden w-full items-baseline gap-2 rounded-b-md bg-neutral-300/40 p-2 text-2xl backdrop-blur-md group-hover:flex">
                  {component.name}
                  <small className="text-xs text-neutral-800 dark:text-neutral-400">
                    {component.type}
                  </small>
                </h2>
              </div>
            </div>
          </DrawerWrapper>
        );
      })}
    </div>
  );
};

export default ComponentGrid;
