<template>
  <div>
    <div class="logo"></div>

    <nav class="navbar">
      <ul></ul>
    </nav>

    <div class="separator"></div>

    <div class="actions"></div>
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
