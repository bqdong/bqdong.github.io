import {
  ContentData,
  createContentLoader,
  defineLoader,
  type SiteConfig,
  withBase,
} from "vitepress";
import { getFileCreateTimestamp } from "../utils/git.ts";
import { format } from "@std/datetime/format";

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

async function getPostCreateDate(post: ContentData): Promise<string> {
  // TODO: from post.url to conclude file path
  const path = post.url;
  const postPath = import.meta.resolve(withBase(path));
  const timestamp = await getFileCreateTimestamp(postPath);
  const date = new Date(timestamp);
  return format(date, "yyyy-MM-dd HH:mm:ss");
}

export default defineLoader({
  watch: contentLoader.watch,
  async load(): Promise<Data> {
    const posts = await contentLoader.load();
    const result = posts.map(async (e) => {
      const postDate = await getPostCreateDate(e);
      const title = e.frontmatter.title as string;
      const path = withBase(e.url);
      return { title, postDate, path };
    });
    return Promise.all(result);
  },
});
