import { readdirSync, readFileSync } from "fs";
import path from "path";
import matter from "gray-matter";
import { Metadata } from "next";

export const docsPath = path.join(process.cwd(), "src", "docs");

export const readMdx = (slug: string) => {
  const filePath = path.join(docsPath, `${slug}.mdx`);
  const rawFile = readFileSync(filePath, "utf-8");

  const { content, data } = matter(rawFile);
  return { content, metadata: data as Metadata };
};

export const getAllDocPaths = () => {
  const files = readdirSync(docsPath);

  return files.map((file) => ({
    slug: file.split(".")[0],
  }));
};
