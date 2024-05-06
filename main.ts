import MarkdownIt from "markdown-it";
import Shiki from "@shikijs/markdown-it";
import { ensureFile, walk } from "@std/fs";

const md = MarkdownIt();
md
  .use(
    await Shiki({
      themes: {
        light: "vitesse-light",
        dark: "vitesse-dark",
      },
    }),
  );

const srcDir = "blog";
const targetDir = "dist";

for await (const entry of walk(srcDir)) {
  if (entry.isFile) {
    const content = await Deno.readTextFile(entry.path);
    const result = md.render(content);
    const mdFilePath = entry.path;
    const htmlFilePath = targetDir + "/" + mdFilePath.substring(mdFilePath.indexOf(targetDir) + targetDir.length + 1).replace(".md", ".html");
    await ensureFile(htmlFilePath);
    await Deno.writeTextFile(htmlFilePath, result);
  }
}

