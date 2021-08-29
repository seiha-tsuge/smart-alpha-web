<template>
  <i class="material-icons-outlined" :class="[colors[color], sizes[size]]">
    {{ icon }}
  </i>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import type { PropType } from 'vue';

type Color = 'primary' | 'default';
type Size = 'default' | 'small' | 'large';

defineProps({
  color: {
    type: String as PropType<Color>,
    default: 'default',
  },
  icon: {
    type: String as PropType<string>,
    required: true,
  },
  size: {
    type: String as PropType<Size>,
    default: 'small',
  },
});
</script>

<style module="colors">
.primary {
  color: var(--color-primary);
}
.default {
  color: var(--color-gray-darker);
}
</style>

<style module="sizes">
.small {
  font-size: 1.6rem !important;
}
.default {
  font-size: 2.4rem;
}
.large {
  font-size: 3.6rem !important;
}
</style>
