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

  // for now it's going to be link this after that it going to be /path/slug
  const { metadata } = readMdx("docs", slug);

  return metadata;
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { content } = readMdx("docs", slug);

  return <MdxRenderer content={content} />;
}

export const dynamicParams = false;
