import React from "react";
import { X } from "lucide-react";

interface FakeBrowserProps {
  component: React.ReactNode;
}

const FakeBrowser: React.FC<FakeBrowserProps> = ({ component }) => {
  return (
    <div className="flex h-[860px] flex-col overflow-hidden rounded-lg">
      {/* Fake Browser Top Bar */}
      <div className="flex h-8 items-center justify-between bg-neutral-500 px-2">
        <div className="flex gap-1">
          <div className="h-3 w-3 rounded-3xl bg-neutral-400"></div>
          <div className="h-3 w-3 rounded-3xl bg-neutral-400"></div>
          <div className="h-3 w-3 rounded-3xl bg-neutral-400"></div>
        </div>
        <X className="h-5 text-neutral-400" />
      </div>
      {/* This div acts like the screen */}
      <div className="h-full w-full flex-grow overflow-y-auto">{component}</div>
    </div>
  );
};

export default FakeBrowser;
