<template>
  <LayoutContainer>
    <Header />
    <LayoutSidebar></LayoutSidebar>
    <LayoutMain>
      <router-view />
    </LayoutMain>
  </LayoutContainer>
</template>

<script setup lang="ts">
import LayoutContainer from './components/layout/LayoutContainer.vue';
import Header from './components/navigation/Header.vue';
import LayoutSidebar from './components/layout/LayoutSidebar.vue';
import LayoutMain from './components/layout/LayoutMain.vue';
</script>
