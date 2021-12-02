<template>
  <a-layout-header :class="$style.header">
    <AIcon icon="menu" @click="toggle" />
    <a-button type="text">
      <AppLink name="Login">Login</AppLink>
    </a-button>
  </a-layout-header>
</template>

<script setup lang="ts">
import { useCollapse } from '../../composable/useCollapse';
import AIcon from '../general/icon/AIcon.vue';

const { toggle } = useCollapse();
</script>

<style module>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--color-white);
  border-bottom: var(--border-solid);
}
</style>
