"use client";

import React from "react";
import { Drawer } from "vaul";
import { X } from "lucide-react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import CopyButton from "./copy-button";
import FakeBrowser from "./fake-browser";

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
      <Drawer.Trigger asChild>
        <button className="group flex w-fit gap-px outline-none transition-all hover:-mt-1 hover:mb-1">
          {children}
        </button>
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40 " />
        <Drawer.Content className="fixed bottom-0 left-0 right-0 flex h-[96%] flex-col rounded-t-lg bg-neutral-100 dark:bg-neutral-700">
          <div className="mx-auto my-4 h-1.5 w-16 flex-shrink-0 rounded-full bg-zinc-300" />
          <div className="flex-1 flex-grow overflow-y-auto rounded-t-[10px] bg-neutral-50 p-4 dark:bg-neutral-700">
            <div className="mx-auto max-w-6xl flex-grow">
              <Drawer.Title className="mb-4 font-medium">{name}</Drawer.Title>
              <FakeBrowser component={component} />
              {/* Component Code */}
              <div className="relative mt-12 overflow-hidden rounded-lg bg-neutral-600">
                {/* Fake Code Editor Top Bar */}
                <div className="flex h-6 items-center justify-between px-2">
                  <div className="mt-2 flex gap-1">
                    <div className="h-3 w-3 rounded-3xl bg-neutral-400"></div>
                    <div className="h-3 w-3 rounded-3xl bg-neutral-400"></div>
                    <div className="h-3 w-3 rounded-3xl bg-neutral-400"></div>
                  </div>
                </div>
                <CopyButton className="mt-[44px]" textToCopy={componentCode} />
                <SyntaxHighlighter language="tsx" style={vscDarkPlus}>
                  {componentCode}
                </SyntaxHighlighter>
              </div>
            </div>
          </div>
        </Drawer.Content>
        s
      </Drawer.Portal>
    </Drawer.Root>
  );
};

export default DrawerWrapper;
