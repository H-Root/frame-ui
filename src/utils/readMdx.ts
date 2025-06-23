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

export const mapSidebarLinks = () => {
  const files = readdirSync(docsPath);

  return files
    .map((file) => {
      const filePath = path.join(docsPath, file);
      const rawFile = readFileSync(filePath, "utf-8");
      const { data } = matter(rawFile);

      return {
        title: data.title,
        presented: data.presented,
        slug: file.split(".")[0],
      };
    })
    .filter((data) => {
      if (data.presented) {
        return data;
      }
    });
};
