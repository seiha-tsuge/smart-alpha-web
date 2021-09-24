<template>
  <router-link :to="{ name }">
    <slot />
  </router-link>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';
import { defineProps } from 'vue';

import type { RouteNames } from '../router/types';

defineProps({
  name: {
    type: String as PropType<RouteNames>,
    required: true,
  },
});
</script>
