<template>
  <a-layout>
    <TheHeader />
    <a-layout>
      <TheSidebar />
      <a-layout-content><router-view /></a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script setup lang="ts">
import TheHeader from './components/navigation/TheHeader.vue';
import TheSidebar from './components/navigation/TheSidebar.vue';
import { provideCollapse } from './composable/useCollapse';

provideCollapse();
</script>
