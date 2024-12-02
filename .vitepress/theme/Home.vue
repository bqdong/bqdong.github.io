<script setup lang="ts">
import { computed } from "vue";
import { data } from "./data-loaders/all-post.data";

const postItems = computed(() => {
  return data.sort((p1, p2) => p1.postDate > p2.postDate ? -1 : 0);
});
</script>

<template>
  <div class="post-items-wrapper">
    <div v-for="d in postItems">
      <a :href="d.path">{{ d.title }}</a>
    </div>
  </div>
</template>

<style scoped>
.post-items-wrapper {
  margin: 0 auto;
}
</style>
