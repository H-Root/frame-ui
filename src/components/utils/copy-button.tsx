"use client";

import { Check, Copy } from "lucide-react";
import { Button } from "../ui/button";
import useCopyToClipboard from "@/hooks/use-copy-to-clipboard";

const CopyButton = ({ content }: { content: string }) => {
  const { copy, isCopied } = useCopyToClipboard({});

  return (
    <Button
      variant={"outline"}
      size={"icon"}
      className="absolute top-5 right-5"
      onClick={() => copy(content)}
    >
      {isCopied ? <Check /> : <Copy />}
    </Button>
  );
};

export default CopyButton;
