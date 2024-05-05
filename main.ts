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

for await (const entry of walk("blog")) {
  if (entry.isFile) {
    const content = await Deno.readTextFile(entry.path);
    const result = md.render(content);
    console.log(result);
  }
}

const targetDir = "dist";


const indexHtml =
`<h1>Hello world</h1>
<p>This is a test</p>
`;

// write index
await ensureFile(`${targetDir}/index.html`)
await Deno.writeTextFile(`${targetDir}/index.html`, indexHtml)
