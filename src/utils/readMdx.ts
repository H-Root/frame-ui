import { readdirSync, readFileSync } from "fs";
import path from "path";
import matter from "gray-matter";
import { Metadata } from "next";

export const docsPath = (...folder: string[]) => {
  return path.join(process.cwd(), "src", "content", ...folder);
};

export const readMdx = (folder: string, slug: string) => {
  const filePath = docsPath(folder, `${slug}.mdx`);
  const rawFile = readFileSync(filePath, "utf-8");

  const { content, data } = matter(rawFile);
  return { content, metadata: data as Metadata };
};

export const getAllDocPaths = () => {
  const files = readdirSync(docsPath("docs"));

  return files.map((file) => ({
    slug: file.split(".")[0],
  }));
};

export const mapSidebarLinks = () => {
  const folders = readdirSync(docsPath()).filter(
    (folder) => folder !== "examples",
  );

  return folders.map((folder) => {
    const dir = readdirSync(docsPath(folder));

    return {
      files: dir
        .map((file) => {
          const filePath = docsPath(folder, file);
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
        }),
      folder,
    };
  });
};
