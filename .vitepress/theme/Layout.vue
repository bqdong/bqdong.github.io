<script setup lang="ts">
import { useData, useRoute } from "vitepress";
import MdContent from "./components/MdContent.vue";
import Header from "./components/Header.vue";
import NotFound from "./NotFound.vue";
import { data } from "./data-loaders/all-post.data";
import "./styles/normalize.css";

// https://vitepress.dev/reference/runtime-api#usedata
const { site, frontmatter } = useData();
const route = useRoute();
</script>

<template>
  <NotFound v-if="route.data.isNotFound" />
  <template v-else>
    <Header :currentTab="'Home'" />
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
</template>
