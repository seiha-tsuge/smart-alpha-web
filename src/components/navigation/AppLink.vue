<template>
  <router-link :to="{ name, params }">
    <slot />
  </router-link>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';
import { defineProps } from 'vue';

import type { RouteParams } from 'vue-router';
import type { RouteNames } from '../../router/types';

defineProps({
  name: {
    type: String as PropType<RouteNames>,
    required: true,
  },
  params: {
    type: Object as PropType<RouteParams>,
    default: () => ({}),
  },
});
</script>
