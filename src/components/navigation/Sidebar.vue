<template>
  <aside :class="$style.sidebar">
    <div :class="$style.column">
      <div />
      <AIcon :icon="'business'" />
      <p>決算速報</p>
    </div>
    <div :class="$style.border" />
    <div :class="$style.column">
      <div />
      <AIcon :icon="'star_border'" />
      <p>お気に入り</p>
    </div>
    <div :class="$style.column">
      <div />
      <AIcon :icon="'schedule'" />
      <p>後で見る</p>
    </div>
    <div :class="$style.border" />
    <div :class="$style.label">
      <div />
      <p>他のユーザー</p>
    </div>
    <div :class="$style.column">
      <div />
      <AIcon :icon="'star_border'" />
      <p>お気に入り</p>
    </div>
    <div :class="$style.column">
      <div />
      <AIcon :icon="'schedule'" />
      <p>後で見る</p>
    </div>
    <div :class="$style.border" />
  </aside>
</template>

<script setup lang="ts">
import AIcon from '../atoms/icon/AIcon.vue';
</script>

<style module>
.sidebar {
  grid-area: sidebar;
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: 3.6rem 0.1rem 3.6rem 3.6rem 0.1rem 3.6rem 3.6rem 3.6rem 0.1rem;
  align-items: center;
  font-size: 1.4rem;
  background-color: var(--color-white);
}

.border {
  border-bottom: solid;
  border-width: 0.1rem;
  border-color: var(--border-color);
}

.column {
  display: flex;
  grid-template-columns: auto;
  column-gap: 2.4rem;
}

.label {
  display: flex;
  column-gap: 2.4rem;
  font-size: 1.2rem;
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
