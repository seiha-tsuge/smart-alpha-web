<template>
  <div class="container">
    <header class="header">あ</header>
    <aside class="sidebar">い</aside>
    <main class="main">う</main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
});
</script>

<style scoped>
.container {
  display: grid;
  grid-template:
    'header header' 56px
    'sidebar main' 1fr / 240px 1fr;
  width: 100vw;
  height: 100vh;
}

.header {
  grid-area: header;
  background-color: red;
}

.sidebar {
  grid-area: sidebar;
  background-color: yellow;
}

.main {
  grid-area: main;
  background-color: blue;
}

@media screen and (max-width: 576px) {
  .container {
    grid-template:
      'header' 56px
      'main' 1fr / 1fr;
  }

  .sidebar {
    position: fixed;
    top: 0;
    z-index: var(--z-index-sidebar);
    width: 75%;
    height: 100vh;
  }
}
</style>
