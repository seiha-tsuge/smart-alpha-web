<template>
  <i>
    <slot />
  </i>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AIcon',
  props: {
    color: {
      type: String,
      default: null,
    },
  },
  setup() {
    this.color === colors.color;
  },
});
</script>

<style module="colors">
.primary {
  color: var(--color-primary);
}
</style>
