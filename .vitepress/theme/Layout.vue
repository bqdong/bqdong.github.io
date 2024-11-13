<script setup lang="ts">
import { useData } from "vitepress";
import MdContent from "./MdContent.vue";
import Header from "./Header.vue";
// @ts-ignore
import { data } from "./data-loaders/all-post.data";

// https://vitepress.dev/reference/runtime-api#usedata
const { site, frontmatter } = useData();
</script>

<template>
  <Header />
  <div v-if="frontmatter.home">
    <h1>{{ site.title }}</h1>
    <p>{{ site.description }}</p>
    <p>{{ data }}</p>
    <Content />
    <ul>
      <li><a href="/markdown-examples.html">Markdown Examples</a></li>
      <li><a href="/api-examples.html">API Examples</a></li>
    </ul>
    <span>hello wolrd</span>
  </div>
  <div v-else>
    <a href="/">Home</a>
    <MdContent />
  </div>
</template>
