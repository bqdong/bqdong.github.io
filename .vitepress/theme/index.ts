// https://vitepress.dev/guide/custom-theme

// https://github.com/denoland/deno/issues/23319
// @deno-types="../../global.d.ts"
import Layout from "./Layout.vue";
import type { Theme } from "vitepress";
import "./style.css";

export default {
  Layout,
  enhanceApp({ app, router, siteData }) {
    // ...
  },
} satisfies Theme;
