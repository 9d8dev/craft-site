"use client";

import React from "react";
import { Drawer } from "vaul";
import { ArrowUpRight } from "lucide-react";

type Props = {
  children: React.ReactNode;
  name: string;
};

const DrawerWrapper: React.FC<Props> = ({ children, name }) => {
  return (
    <Drawer.Root>
      <Drawer.Trigger asChild>
        <button className="flex w-fit gap-px group">
          <span className="border-b">View Component</span> <ArrowUpRight className="w-4 transition-all hidden group-hover:block group-hover:-mt-2" />
        </button>
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40" />
        <Drawer.Content className="bg-neutral-100 dark:bg-neutral-700 flex flex-col rounded-t-[10px] h-[96%] mt-24 fixed bottom-0 left-0 right-0">
          <div className="mx-auto w-16 h-1.5 flex-shrink-0 rounded-full bg-zinc-300 mt-4 mb-8" />
          <div className="p-4 bg-neutral-100 dark:bg-neutral-700 rounded-t-[10px] flex-1">
            <div className="max-w-md mx-auto">
              <Drawer.Title className="font-medium mb-4">{name}</Drawer.Title>
              {children}
            </div>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
};

export default DrawerWrapper;
