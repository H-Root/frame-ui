import { mdxComponents } from "@/mdx-components";
import { getAllDocPaths, readMdx } from "@/utils/readMdx";
import { MDXRemote } from "next-mdx-remote/rsc";

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

  return <MDXRemote source={content} components={mdxComponents} />;
}

export const dynamicParams = false;
