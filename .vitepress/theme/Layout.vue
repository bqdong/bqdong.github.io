<script setup lang="ts">
import { useData } from "vitepress";
import MdContent from "./components/MdContent.vue";
import Header from "./components/Header.vue";
import Home from "./Home.vue";
import Post from "./components/Post.vue";
import NotFound from "./NotFound.vue";
import "./styles/normalize.css";

// https://vitepress.dev/reference/runtime-api#usedata
const { frontmatter, page } = useData();
const a = "b";
</script>

<template>
  <NotFound v-if="page.isNotFound" />
  <template v-else>
    <Header :currentTab='"Home"' />
    <Home v-if="frontmatter.home" />
    <MdContent v-else-if="frontmatter.about" />
    <Post v-else />
  </template>
</template>
