<template>
  <LayoutHeader :class="$style.header">
    <AIcon icon="menu" />

    <a-button type="text"
      ><router-link :to="{ name: 'Login' }">Login</router-link></a-button
    >
  </LayoutHeader>
</template>

<script setup lang="ts">
import LayoutHeader from '../layout/LayoutHeader.vue';
import AIcon from '../general/icon/AIcon.vue';
</script>

<style module>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
