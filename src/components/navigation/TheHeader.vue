<template>
  <LayoutHeader :class="$style.header">
    <AIcon icon="menu" @click="toggle" />
    <a-button type="text">
      <AppLink name="Login">Login</AppLink>
    </a-button>
  </LayoutHeader>
</template>

<script setup lang="ts">
import { useCollapse } from '../../composable/useCollapse';
import AIcon from '../general/icon/AIcon.vue';
import LayoutHeader from '../layout/LayoutHeader.vue';

const { toggle } = useCollapse();
</script>

<style module>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: var(--border-solid);
  padding: 0 2.4rem;
}
</style>
