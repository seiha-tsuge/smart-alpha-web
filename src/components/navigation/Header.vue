<template>
  <a-layout-header :class="$style.header">
    <AIcon icon="menu" />
    <div>login</div>
  </a-layout-header>
</template>

<script setup lang="ts">
import AIcon from '../general/icon/AIcon.vue';
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
