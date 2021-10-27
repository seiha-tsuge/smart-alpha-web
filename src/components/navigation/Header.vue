<template>
  <a-layout-header :class="$style.header">
    <!-- <p>{{ collapsed }}</p> -->
    <AIcon v-if="collapsed" icon="menu" class="trigger" @click="toggle()" />
    <AIcon v-else class="trigger" icon="business" @click="toggle()" />
    <a-button type="text">
      <router-link :to="{ name: 'Login' }">Login</router-link>
    </a-button>
  </a-layout-header>
</template>

<script setup lang="ts">
import AIcon from '../general/icon/AIcon.vue';

// import { ref } from 'vue';
// let collapsed = ref<boolean>(true);

// import use from './useHoge.ts';
// const { hoge, collapsed } = use();

// import { provide } from 'vue';
// provide('collapsed', collapsed);

import { provide } from 'vue';
import { inject } from 'vue';
import useCollapse from '../../composable/useCollapse.ts';
const { toggle, a } = useCollapse();
const collapsed = inject('collapsed');
provide('collapsed');
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
