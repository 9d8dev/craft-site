"use client";

import React from "react";
import { Drawer } from "vaul";
import { X } from "lucide-react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

type Props = {
  children: React.ReactNode;
  name: string;
  component: React.ReactNode;
  componentCode: string;
};

const DrawerWrapper: React.FC<Props> = ({
  children,
  name,
  component,
  componentCode,
}) => {
  return (
    <Drawer.Root>
      <Drawer.Trigger asChild id={name}>
        <button className="flex w-fit gap-px group hover:-mt-1 hover:mb-1 hover:shadow-md transition-all">
          {children}
        </button>
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40" />
        <Drawer.Content className="bg-neutral-100 dark:bg-neutral-700 flex flex-col rounded-t-[10px] h-[96%] mt-24 fixed bottom-0 left-0 right-0">
          <div className="mx-auto w-16 h-1.5 flex-shrink-0 rounded-full bg-zinc-300 mt-4 mb-8" />
          <div className="p-4 bg-neutral-100 dark:bg-neutral-700 rounded-t-[10px] flex-1">
            <div className="max-w-6xl mx-auto">
              <Drawer.Title className="font-medium mb-4">{name}</Drawer.Title>
              {/* Fake Browser Window */}
              <div className="rounded-lg ring-4 ring-neutral-400 ring-offset-neutral-400 overflow-hidden flex flex-col">
                {/* Fake Browser Top Bar */}
                <div className="h-8 bg-neutral-500 flex justify-between items-center px-2">
                  <div className="flex gap-1">
                    <div className="bg-neutral-400 h-3 w-3 rounded-3xl"></div>
                    <div className="bg-neutral-400 h-3 w-3 rounded-3xl"></div>
                    <div className="bg-neutral-400 h-3 w-3 rounded-3xl"></div>
                  </div>
                  <X className="h-5 text-neutral-400" />
                </div>
                <div className="h-[560px]">{component}</div>
              </div>
              {/* Component Code */}
              <div className="mt-12 rounded-lg overflow-hidden bg-neutral-600">
                {/* Fake Code Editor Top Bar */}
                <div className="h-8 flex justify-between items-center px-2">
                  <div className="flex gap-1">
                    <div className="bg-neutral-400 h-3 w-3 rounded-3xl"></div>
                    <div className="bg-neutral-400 h-3 w-3 rounded-3xl"></div>
                    <div className="bg-neutral-400 h-3 w-3 rounded-3xl"></div>
                  </div>
                  <X className="h-5 text-neutral-400" />
                </div>
                <SyntaxHighlighter language="jsx" style={vscDarkPlus}>
                  {componentCode}
                </SyntaxHighlighter>
              </div>
            </div>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
};

export default DrawerWrapper;
