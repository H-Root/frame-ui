import MdxRenderer from "@/components/mdx-renderer/mdx-renderer";
import { getAllDocPaths, readMdx } from "@/utils/readMdx";

export function generateStaticParams() {
  return getAllDocPaths();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const { metadata } = readMdx(slug);

  return metadata;
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { content } = readMdx(slug);

  return <MdxRenderer content={content} />;
}

export const dynamicParams = false;
