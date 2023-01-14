import axios from "axios";
import { exec } from "child_process";
import fs from "fs";

const OUTPUT_FOLDER = `../pages/changelogs`;

/**
 * Fetches articles from strapi and converts them to MDX files
 *
 * Usage:
 * ```bash
 * # Run the following in the terminal
 * cd bin && node strapi-to-mdx.mjs
 * ```
 */
async function strapiToMdx() {
  const response = await axios.get(
    "https://content.june.so/articles?status=published&_sort=publishedAt:DESC"
  );

  if (response.status === 200) {
    const articles = response.data;

    const promises = articles.map((article) => {
      const meta = {
        publishedAt: article.publishedAt,
        title: article.title,
        headerImage: article.image.url,
        authors: article.authors.map((author) => ({
          name: author.name,
          description: author.bio,
          avatarUrl: author.picture.url,
        })),
      };

      const content = [
        'import { VStack, Heading, Image } from "@chakra-ui/react";',
        'import { MdxLayout } from "components/mdx-layout.tsx";',
        "",
        `export const meta = ${JSON.stringify(meta)}`,
        "",
      ];

      const markdown = article.content.replace(/<br>/gi, "");
      content.push(markdown);
      content.push(
        "\nexport default ({ children }) => <MdxLayout meta={meta}>{children}</MdxLayout>;"
      );
      content.push("");

      if (!fs.existsSync(OUTPUT_FOLDER)) {
        fs.mkdirSync(OUTPUT_FOLDER);
      }

      const outputPath = `${OUTPUT_FOLDER}/${article.slug}.mdx`;

      return new Promise((resolve, reject) => {
        fs.writeFile(outputPath, content.join("\n"), (error) => {
          if (error) {
            reject(`Failed to write ${article.slug} - ${error}`);
          } else {
            resolve(`Written ${article.slug}`);
          }
        });
      });
    });

    const results = await Promise.allSettled(promises);
    results.forEach((result) => {
      console.log(`${result.status} - ${result.value}`);
    });
    console.log("\nDone!");
    console.log("\nFormatting result with prettier...");
    exec(`npx prettier --write ${OUTPUT_FOLDER}`, (error, stdout, stderr) => {
      console.log(stdout);
    });
  }
}

strapiToMdx();
