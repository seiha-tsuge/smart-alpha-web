<template>
  <LayoutContainer>
    <TheHeader />
    <TheSidebar />
    <LayoutMain>
      <router-view />
    </LayoutMain>
  </LayoutContainer>
</template>

<script setup lang="ts">
import LayoutContainer from './components/layout/LayoutContainer.vue';
import TheHeader from './components/navigation/TheHeader.vue';
import TheSidebar from './components/navigation/TheSidebar.vue';
import LayoutMain from './components/layout/LayoutMain.vue';
import { provideCollapse } from './composable/useCollapse';

provideCollapse();
</script>
