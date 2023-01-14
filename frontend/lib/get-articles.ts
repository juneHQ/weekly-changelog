import fs from "fs";
import path from "path";
import { remark } from "remark";
import mdx from "remark-mdx";

const MDX_DIR = "changelogs";

export function getArticles() {
  const files = fs.readdirSync(path.join(process.cwd(), "pages", MDX_DIR), {
    withFileTypes: true,
  });
  const articles = files
    .map((file) => {
      if (!file.name.endsWith(".mdx")) {
        return null;
      }
      const content = fs.readFileSync(
        path.join(process.cwd(), "pages", MDX_DIR, file.name),
        "utf-8"
      );
      const result = remark()
        .use(mdx)
        .use(() => (tree) => {
          console.log(`tree.children`, tree.children);
        })
        .processSync(content);
      return result;
    })
    .filter((article) => article);
  return articles;
}
