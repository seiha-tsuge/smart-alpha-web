<template>
  <div class="container">
    <header class="header">あ</header>
    <div class="sidebar">い</div>
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
  width: 100vw;
  height: 100vh;
  grid-template-columns: auto;
  grid-template-rows: 50px 1fr;
}

.header {
  background-color: red;
  grid-column-start: 1;
  grid-column-end: 3;
}

.sidebar {
  background-color: yellow;
}

.main {
  background-color: blue;
}
</style>
