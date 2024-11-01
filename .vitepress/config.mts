import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Blog",
  description: "Blog for bqdong.",
  srcExclude: ["**/README.md", "**/TODO.md"],
});
