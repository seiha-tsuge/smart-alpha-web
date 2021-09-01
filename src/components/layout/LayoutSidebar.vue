<template>
  <Sidebar><slot /></Sidebar>
</template>

<script setup lang="ts">
import Sidebar from '../navigation/Sidebar.vue';
</script>

<style module>
.sidebar {
  grid-area: sidebar;
}
</style>
