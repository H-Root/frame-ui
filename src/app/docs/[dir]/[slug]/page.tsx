import MdxRenderer from "@/components/mdx-renderer/mdx-renderer";
import { getAllDocPaths, readMdx } from "@/utils/readMdx";

export function generateStaticParams() {
  return getAllDocPaths();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ dir: string; slug: string }>;
}) {
  const { slug, dir } = await params;

  // for now it's going to be link this after that it going to be /path/slug
  const { metadata } = readMdx(dir, slug);

  return metadata;
}

export default async function Page({
  params,
}: {
  params: Promise<{ dir: string; slug: string }>;
}) {
  const { slug, dir } = await params;
  const { content } = readMdx(dir, slug);

  return <MdxRenderer content={content} />;
}

export const dynamicParams = false;
