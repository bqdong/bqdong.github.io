<script setup lang="ts">
import { useData } from "vitepress";
import MdContent from "./components/MdContent.vue";
import Header from "./components/Header.vue";
import Home from "./Home.vue";
import Post from "./components/Post.vue";
import NotFound from "./NotFound.vue";
import { usePreferredTheme } from "./composables/usePreferredTheme";
import "./styles/normalize.css";
import "latex.css";
import { watch } from "vue";

// https://vitepress.dev/reference/runtime-api#usedata
const { frontmatter, page } = useData();
const theme = usePreferredTheme();

watch(theme, (newVal) => {
  console.log(newVal);
  if (newVal === "dark") {
    window.document.body.classList.toggle("latex-dark");
  } else {
    window.document.body.classList.remove("latex-dark");
  }
}, {
  immediate: true,
});
</script>

<template>
  <div class="wrapper">
    <NotFound v-if="page.isNotFound" />
    <template v-else>
      <Header />
      <Home v-if="frontmatter.home" />
      <MdContent v-else-if="frontmatter.about" />
      <Post v-else />
    </template>
  </div>
</template>

<style scoped>
.wrapper {
  margin: 0 auto;
}
</style>
