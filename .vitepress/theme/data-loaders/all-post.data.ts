import {
  ContentData,
  createContentLoader,
  defineLoader,
  type SiteConfig,
} from "vitepress";
import { getFileCreateTimestamp } from "../utils/git.ts";
import { format } from "@std/datetime";
import { join } from "@std/path";
import { fromFileUrl } from "@std/path";

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

const contentLoader = createContentLoader("blog/**/*.md");

async function getPostCreateDate(post: ContentData): Promise<string> {
  // TODO: from post.url to conclude file path
  const path = post.url;
  const postPath = join(siteConfig.srcDir, path);
  const resolvedPath = import.meta.resolve(postPath);
  const timestamp = await getFileCreateTimestamp(
    fromFileUrl(resolvedPath.replace(".html", ".md")),
  );
  const date = new Date(timestamp);
  return format(date, "yyyy-MM-dd HH:mm:ss");
}

export default defineLoader({
  watch: contentLoader.watch,
  async load(): Promise<Data> {
    try {
      const posts = await contentLoader.load();
      const result = posts.map(async (e) => {
        const postDate = await getPostCreateDate(e);
        const title = e.frontmatter.title as string;
        const path = e.url;
        return { title, postDate, path };
      });
      return Promise.all(result);
    } catch (e) {
      console.error(e);
      return Promise.resolve([]);
    }
  },
});
