import React from "react";
import { Copy, Check } from "lucide-react";

type CopyButtonProps = {
  textToCopy: string;
};

const CopyButton: React.FC<CopyButtonProps> = ({ textToCopy }) => {
  const [copyStatus, setCopyStatus] = React.useState(
    <>
      <span className="text-sm mr-1">Copy Code</span>
      <Copy className="w-4" />
    </>
  );

  const handleCopy = async () => {
    await navigator.clipboard.writeText(textToCopy);
    setCopyStatus(
      <>
        <span className="text-sm mr-1">Copied!</span>
        <Check className="w-4" />{" "}
      </>
    );
    setTimeout(
      () =>
        setCopyStatus(
          <>
            <span className="text-sm mr-1">Copy Code</span>
            <Copy className="w-4" />
          </>
        ),
      2000
    );
  };

  return (
    <button
      className="absolute top-0 right-0 m-4 min-w-30 h-8 px-2 py-1 cursor-pointer bg-neutral-500 rounded-md hover:scale-95 focus:scale-110 transition-all flex items-center justify-center gap-1"
      onClick={handleCopy}
    >
      {copyStatus}
    </button>
  );
};

export default CopyButton;
