<template>
  <a-layout-sider
    v-model:collapsed="state.collapsed"
    :class="$style.sidebar"
    :trigger="null"
    collapsible
  >
    <TheSideMenu />
  </a-layout-sider>
</template>

<script setup lang="ts">
import { useCollapse } from '../../composable/useCollapse';
import TheSideMenu from './side-menu/TheSideMenu.vue';

const { state } = useCollapse();
</script>

<style module>
.sidebar {
  display: flex;
  flex-direction: column;
  grid-area: sidebar;
  background-color: var(--color-white);
}

@media screen and (max-width: 576px) {
  .sidebar {
    position: fixed;
    top: 0;
    z-index: var(--z-index-sidebar);
    width: 75%;
    height: 100vh;
  }
}
</style>
