import type { SiteConfig } from "vitepress";

// deno-lint-ignore no-explicit-any
const siteConfig: SiteConfig = (globalThis as any).VITEPRESS_CONFIG;

export default {
  load() {
    return {
      config: siteConfig,
    };
  },
};
