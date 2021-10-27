<template>
  <a-layout>
    <Header />
    <a-layout>
      <Sidebar />
      <a-layout-content><router-view /></a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script setup lang="ts">
import Header from './components/navigation/Header.vue';
import Sidebar from './components/navigation/Sidebar.vue';

// import { ref } from 'vue';
// import { provide } from 'vue';
// const collapsed = ref<boolean>(true);
// provide('collapsed', collapsed);

import { ref } from 'vue';
import { provide } from 'vue';
import useCollapse from './composable/useCollapse.ts';

const { toggle, collapsed } = useCollapse();
provide('collapsed', collapsed);
</script>
