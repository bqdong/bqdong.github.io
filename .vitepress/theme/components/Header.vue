<script setup lang="ts">
import { ref } from "vue";

const props = defineProps<{
  currentTab: "Home" | "About";
}>();

const tabs = ref([
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
]);
</script>

<template>
  <div>
    <nav class="navbar">
      <ul>
        <li
          v-for="tab in tabs"
          :key="tab.name"
          :class="tab.name === props.currentTab ? 'active' : ''"
        >
          <a :href="tab.link">
            {{ tab.name }}
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style lang="less" scoped>
.navbar {
  ul {
    display: flex;
    justify-content: space-around;
    padding: 0;

    li {
      // erase list bullet
      list-style: none;
    }

    li.active {
      a {
        color: red;
      }
    }
  }
}
</style>
