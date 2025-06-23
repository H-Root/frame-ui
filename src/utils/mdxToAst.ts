import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkMdx from "remark-mdx";

export const processor = unified().use(remarkParse).use(remarkMdx);

// shameful implementation but for now it works
// // todo refine the internal logic
// as much I am seeing as a stupid implementation I am actually happy to solve it that easy
export const refineAst = (content: string) => {
  const ast = processor.parse(content);

  const data = ast.children;

  const extractedHeaders = data.filter((child) => child.type === "heading");

  return extractedHeaders;
};
