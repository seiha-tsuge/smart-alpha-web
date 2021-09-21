<template>
  <button @click="onClick">
    <slot />
  </button>
</template>

<script setup lang="ts">
import { defineEmits } from 'vue';

const emit = defineEmits<{
  (event: 'click', e: Event): void;
}>();

const onClick = (e: Event) => {
  emit('click', e);
};
</script>
