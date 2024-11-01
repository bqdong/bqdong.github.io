<script setup lang="ts">
import { onMounted } from 'vue'

onMounted(() => {
  console.log('onMounted')
})
</script>

<template>
  <div>
    <ul>
        <li>About</li>
        <li>Resource</li>
        <li>Blog</li>
        <li>Project</li>
    </ul>
  </div>
</template>

<style scoped>
div {
  color: red;
}
</style>
