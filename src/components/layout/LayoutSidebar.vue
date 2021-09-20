<template>
  <aside :class="$style.sidebar">
    <div :class="$style.items">
      <div :class="$style.item">
        <AIcon :icon="'business'" />
        <p>決算速報</p>
      </div>
    </div>
    <div :class="$style.items">
      <div :class="$style.item">
        <AIcon :icon="'star_border'" />
        <p>お気に入り</p>
      </div>
      <div :class="$style.item">
        <AIcon :icon="'schedule'" />
        <p>後で見る</p>
      </div>
    </div>
    <div :class="$style.items">
      <div :class="$style.label">
        <p>他のユーザー</p>
      </div>
      <div :class="$style.item">
        <AIcon :icon="'star_border'" />
        <p>お気に入り</p>
      </div>
      <div :class="$style.item">
        <AIcon :icon="'schedule'" />
        <p>後で見る</p>
      </div>
    </div>
  </aside>
</template>

<script setup lang="ts">
import AIcon from '../atoms/icon/AIcon.vue';
</script>

<style module>
.sidebar {
  display: flex;
  flex-direction: column;
  background-color: var(--color-white);
}

.items {
  border-bottom: var(--border);
  padding-left: 1.2rem;
}

.item {
  font-size: 1.4rem;
  padding: 1.2rem;
  display: flex;
  column-gap: 2.4rem;
}

.label {
  display: flex;
  column-gap: 2.4rem;
  font-size: 1.2rem;
  padding: 1.2rem;
}

@media screen and (max-width: 576px) {
  .sidebar {
    position: fixed;
    top: 0;
    z-index: var(--z-index-sidebar);
    width: 75%;
    height: 100vh;
  }
}
</style>
