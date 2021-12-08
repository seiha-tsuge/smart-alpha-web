<template>
  <a-menu-item :class="$style.items">
    <AppLink :name="linkName" :class="$style.item">
      <AIcon :icon="iconName" />
      <p>{{ label }}</p>
    </AppLink>
  </a-menu-item>
</template>

<script setup lang="ts">
import AIcon from '../../../general/icon/AIcon.vue';

import type { PropType } from 'vue';
import { defineProps } from 'vue';

import type { RouteNames } from '../../../../router/types';

type IconName = 'business' | 'star_border' | 'schedule';

defineProps({
  linkName: {
    type: String as PropType<RouteNames>,
    required: true,
  },
  iconName: {
    type: String as PropType<IconName>,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
});
</script>

<style module>
.items {
  border-bottom: var(--border-solid);
}

.item {
  display: flex;
  column-gap: 2.4rem;
  padding: 1.2rem 2.4rem;
  font-size: 1.4rem;
}
</style>
