<template>
  <LayoutContainer>
    <Header />
    <Sidebar />
    <LayoutMain>
      <router-view />
    </LayoutMain>
  </LayoutContainer>
</template>

<script setup lang="ts">
import LayoutContainer from './components/layout/LayoutContainer.vue';
import Header from './components/organisms/Header.vue';
import Sidebar from './components/navigation/Sidebar.vue';
import LayoutMain from './components/layout/LayoutMain.vue';
</script>
