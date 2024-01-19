// Layout Components
import DrawerWrapper from "@/app/drawer-wrapper";
import Image from "next/image";
import CopyButton from "./copy-button";
import { components } from "@/component.config";
import * as Craft from "@/components/craft/layout";

const ComponentGrid = () => {
  return (
    <Craft.Section>
      <Craft.Container className="not-prose max-w-screen grid gap-4 sm:grid-cols-2 md:grid-cols-3">
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
                    className="rounded-md object-cover ring-4 ring-secondary"
                    placeholder="blur"
                  />
                  <CopyButton
                    className="z-50 hidden shadow-sm border group-hover:flex"
                    textToCopy={componentCode}
                  />
                  <h2 className="absolute bottom-0 left-0 m-auto hidden w-full items-baseline gap-2 rounded-b-md bg-neutral-300/40 p-2 text-2xl backdrop-blur-md group-hover:flex">
                    {component.name}
                    <small className="text-xs">{component.type}</small>
                  </h2>
                </div>
              </div>
            </DrawerWrapper>
          );
        })}
      </Craft.Container>
    </Craft.Section>
  );
};

export default ComponentGrid;
