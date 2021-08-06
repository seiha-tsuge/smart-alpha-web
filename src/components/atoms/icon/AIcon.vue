<template>
  <i class="material-icons-outlined" :class="[colors[color], size[size]]">{{
    icon
  }}</i>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AIcon',
  props: {
    icon: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      default: 'default',
    },
    size: {
      type: String,
      default: 'lg',
    },
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

<style module="size">
.sm {
  font-size: 24px;
}
.md {
  font-size: 36px;
}
.lg {
  font-size: 48px;
}
</style>
