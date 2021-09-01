<template>
  <LayoutContainer>
    <Header />
    <LayoutSidebar></LayoutSidebar>
    <LayoutMain> <router-view></router-view></LayoutMain>
  </LayoutContainer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import LayoutContainer from './components/layout/LayoutContainer.vue';
import Header from './components/organisms/Header.vue';
import LayoutSidebar from './components/layout/LayoutSidebar.vue';
import LayoutMain from './components/layout/LayoutMain.vue';

export default defineComponent({
  name: 'App',
  components: {
    LayoutContainer,
    Header,
    LayoutSidebar,
    LayoutMain,
  },
});
</script>
