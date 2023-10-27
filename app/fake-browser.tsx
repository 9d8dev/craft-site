import React from "react";
import { X } from "lucide-react";

interface FakeBrowserProps {
  component: React.ReactNode;
}

const FakeBrowser: React.FC<FakeBrowserProps> = ({ component }) => {
  return (
    <div className="rounded-lg overflow-hidden flex flex-col">
      {/* Fake Browser Top Bar */}
      <div className="h-8 bg-neutral-500 flex justify-between items-center px-2">
        <div className="flex gap-1">
          <div className="bg-neutral-400 h-3 w-3 rounded-3xl"></div>
          <div className="bg-neutral-400 h-3 w-3 rounded-3xl"></div>
          <div className="bg-neutral-400 h-3 w-3 rounded-3xl"></div>
        </div>
        <X className="h-5 text-neutral-400" />
      </div>
      {component}
    </div>
  );
};

export default FakeBrowser;
