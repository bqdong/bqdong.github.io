import { createContentLoader, defineLoader, type SiteConfig } from "vitepress";

// deno-lint-ignore no-explicit-any
const siteConfig: SiteConfig = (globalThis as any).VITEPRESS_CONFIG;

interface PostItem {
  title: string;
  postDate: string;
  path: string;
}

export type Data = PostItem[];

declare const data: Data;
export { data };

const contentLoader = createContentLoader("**/*.md");

export default defineLoader({
  watch: contentLoader.watch,
  async load() {
    const posts = await contentLoader.load();
    return {
      config: siteConfig,
      posts: posts,
    };
  },
});
