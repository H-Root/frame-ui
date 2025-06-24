import MdxRenderer from "@/components/mdx-renderer/mdx-renderer";
import { readMdx } from "@/utils/readMdx";

export async function generateMetadata() {
  const { metadata } = readMdx("", "index");

  return metadata;
}

export default async function Page() {
  const { content } = readMdx("", "index");

  return <MdxRenderer content={content} />;
}
