<template>
  <a-button v-bind="$attrs" :type="type" :class="[colors[color]]">
    <slot />
  </a-button>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';
import { defineProps } from 'vue';

type Type = 'primary' | 'default' | 'dashed' | 'danger' | 'link' | 'ghost';
type Color = 'primary' | 'secondary';

defineProps({
  type: {
    type: String as PropType<Type>,
    default: 'primary',
  },
  color: {
    type: String as PropType<Color>,
    default: 'primary',
  },
});
</script>

<style module="colors">
.primary {
  background: var(--color-primary);
  border-color: var(--color-primary);
}
.primary:hover,
.primary:focus {
  background: var(--color-primary-light);
  border-color: var(--color-primary-light);
}
.primary:active {
  background: var(--color-primary-dark);
  border-color: var(--color-primary-dark);
}
</style>
