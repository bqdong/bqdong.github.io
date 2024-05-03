import MarkdownIt from "markdown-it";
import Shiki from "@shikijs/markdown-it";
import { walk } from "@std/fs";

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

for await (const entry of walk("blog")) {
  if (entry.isFile) {
    const content = await Deno.readTextFile(entry.path);
    const result = md.render(content);
    console.log(result);
  }
}
