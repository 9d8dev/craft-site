"use client";

import React from "react";
import { Drawer } from "vaul";

type Props = {
  children: React.ReactNode;
  name: string;
};

const DrawerWrapper: React.FC<Props> = ({ children, name }) => {
  return (
    <Drawer.Root>
      <Drawer.Trigger asChild>
        <button className="bg-slate-200 px-2 py-1 border rounded-lg">
          View Component
        </button>
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40" />
        <Drawer.Content className="bg-zinc-100 flex flex-col rounded-t-[10px] h-[96%] mt-24 fixed bottom-0 left-0 right-0">
          <div className="p-4 bg-white rounded-t-[10px] flex-1">
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
