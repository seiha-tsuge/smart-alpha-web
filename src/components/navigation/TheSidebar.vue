<template>
  <LayoutSidebar :class="$style.sidebar">
    <TheSideMenu />
  </LayoutSidebar>
</template>

<script setup lang="ts">
import { useCollapse } from '../../composable/useCollapse';
import TheSideMenu from './side-menu/TheSideMenu.vue';
import LayoutSidebar from '../layout/LayoutSidebar.vue';

const { state } = useCollapse();
</script>

<style module>
.sidebar {
  display: flex;
  flex-direction: column;
}
</style>
