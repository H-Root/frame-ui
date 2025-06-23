import React from "react";
import { type Heading } from "mdast";
import Link from "next/link";

const TableOfContents = ({ headings }: { headings: Heading[] }) => {
  return (
    <>
      <span className="text-xs">On This Page</span>
      {headings.map((header) => {
        if (header.children[0].type === "text") {
          const child = header.children[0].value
            .toLowerCase()
            .split(" ")
            .join("-");

          return (
            <Link
              href={`#${child}`}
              key={child}
              className="text-muted-foreground line-clamp-1! block text-xs no-underline"
              style={{
                paddingLeft: `calc(${header.depth} * 1rem)`,
              }}
            >
              {header.children[0].value}
            </Link>
          );
        }
      })}
    </>
  );
};

export default TableOfContents;
