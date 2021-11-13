<template>
  <a-layout-header :class="$style.header">
    <AIcon icon="menu" class="trigger" @click="toggle" />
    <a-button type="text">
      <router-link :to="{ name: 'Login' }">Login</router-link>
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
