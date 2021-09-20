<template>
  <LayoutSidebar :class="$style.header"><slot /></LayoutSidebar>
</template>

<script setup lang="ts">
import LayoutSidebar from '../layout/LayoutSidebar.vue';
</script>

<style module>
.sidebar {
  grid-area: sidebar;
}
</style>
