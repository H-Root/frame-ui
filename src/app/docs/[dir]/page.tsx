import MdxRenderer from "@/components/mdx-renderer/mdx-renderer";
import { getAllDocPaths, readMdx } from "@/utils/readMdx";

export function generateStaticParams() {
  return getAllDocPaths();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ dir: string }>;
}) {
  const { dir } = await params;

  const { metadata } = readMdx(dir, "index");

  return metadata;
}

export default async function Page({
  params,
}: {
  params: Promise<{ dir: string }>;
}) {
  const { dir } = await params;
  const { content, metadata } = readMdx(dir, "index");

  return <MdxRenderer frontmatter={metadata} content={content} />;
}

export const dynamicParams = false;
