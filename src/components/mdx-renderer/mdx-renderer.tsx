import { mdxComponents } from "@/mdx-components";
import { refineAst } from "@/utils/mdxToAst";
import { MDXRemote } from "next-mdx-remote/rsc";
import TableOfContents from "../utils/table-of-contents";
import Breadcrumber from "../layout/docs/breadcrumber";
import { Metadata } from "next";

const MdxRenderer = ({
  content,
  frontmatter,
}: {
  content: string;
  frontmatter: Metadata;
}) => {
  const refinedAst = refineAst(content);

  return (
    <>
      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-12 lg:col-span-9">
          <div className="mt-[5px]">
            <Breadcrumber />
          </div>
          <div className="prose prose-headings:mt-8 prose-headings:font-semibold prose-h1:text-5xl prose-h2:text-4xl prose-h3:text-3xl prose-h4:text-2xl prose-h5:text-xl prose-h6:text-lg dark:prose-invert">
            <h1>{frontmatter.title as string}</h1>
            <p>{frontmatter.description}</p>
            <MDXRemote source={content} components={mdxComponents} />
          </div>
        </div>
        <div className="top-20 mt-0! hidden h-fit max-h-96 w-full overflow-y-auto pt-0! lg:sticky lg:col-span-3 lg:block">
          <TableOfContents headings={refinedAst} />
        </div>
      </div>
    </>
  );
};

export default MdxRenderer;
