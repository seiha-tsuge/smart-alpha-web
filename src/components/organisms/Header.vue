<template>
  <LayoutHeader :class="$style.header">
    <AIcon icon="menu" />
    <div>login</div>
  </LayoutHeader>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import LayoutHeader from '../layout/LayoutHeader.vue';
import AIcon from '../atoms/icon/AIcon.vue';

export default defineComponent({
  components: {
    LayoutHeader,
    AIcon,
  },
});
</script>

<style module>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
