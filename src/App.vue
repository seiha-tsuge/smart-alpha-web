<template>
  <LayoutContainer>
    <LayoutHeader></LayoutHeader>
    <LayoutSidebar></LayoutSidebar>
    <LayoutMain></LayoutMain>
  </LayoutContainer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import LayoutContainer from './components/layout/LayoutContainer.vue';
import LayoutHeader from './components/layout/LayoutHeader.vue';
import LayoutSidebar from './components/layout/LayoutSidebar.vue';
import LayoutMain from './components/layout/LayoutMain.vue';

export default defineComponent({
  name: 'App',
  components: {
    LayoutContainer,
    LayoutHeader,
    LayoutSidebar,
    LayoutMain,
  },
});
</script>
