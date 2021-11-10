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
import { ref, provide } from 'vue';

provide('collapsed', ref(false));
</script>
