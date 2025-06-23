import MdxRenderer from "@/components/mdx-renderer/mdx-renderer";
import { readMdx } from "@/utils/readMdx";

export async function generateMetadata() {
  const { metadata } = readMdx("docs", "index");

  return metadata;
}

export default async function Page() {
  const { content } = readMdx("docs", "index");

  return <MdxRenderer content={content} />;
}
