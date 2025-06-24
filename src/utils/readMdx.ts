import { readdirSync, readFileSync, statSync } from "fs";
import path from "path";
import matter from "gray-matter";
import { Metadata } from "next";

export const docsPath = (...folder: string[]) => {
  return path.join(process.cwd(), "src", "content", ...folder);
};
const order = ["get-started", "hooks", "components"];

export const readMdx = (folder: string, slug: string) => {
  const filePath = docsPath(folder, `${slug}.mdx`);
  const rawFile = readFileSync(filePath, "utf-8");

  const { content, data } = matter(rawFile);

  return { content, metadata: data as Metadata };
};

export const getAllDocPaths = () => {
  const files = readdirSync(docsPath("components"));

  return files.map((file) => ({
    slug: file.split(".")[0],
  }));
};

export const mapSidebarLinks = () => {
  const folders = readdirSync(docsPath()).filter(
    (folder) => folder !== "examples",
  );

  console.log(folders);

  return folders
    .filter((fileOrDir) => {
      const stats = statSync(docsPath(fileOrDir));

      return stats.isDirectory();
    })
    .map((folder) => {
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
              order: data.order,
              slug: file.split(".")[0],
            };
          })
          .sort((a, b) => {
            // sort based on prop order in mdx frontmatter
            if (typeof a.order === "number" && typeof b.order === "number") {
              return a.order - b.order;
            } else {
              return a.title.localeCompare(b.title, undefined, {
                sensitivity: "base",
              });
            }
          })
          .filter((data) => {
            if (data.presented) {
              return data;
            }
          }),
        folder,
      };
    })
    .sort((a, b) => {
      return order.indexOf(a.folder) - order.indexOf(b.folder);
    });
};
