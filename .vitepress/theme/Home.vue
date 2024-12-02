<script setup lang="ts">
import { data } from "./data-loaders/all-post.data";
</script>

<template>
  <div class="post-items-wrapper">
    <div v-for="d in data">
      <a :href="d.path">{{ d.title }}</a>
    </div>
  </div>
</template>

<style scoped>
.post-items-wrapper {
  margin: 0 auto;
}
</style>
