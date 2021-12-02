<template>
  <a-layout-sider
    v-model:collapsed="state.collapsed"
    :class="$style.sidebar"
    :trigger="null"
    collapsible
  >
    <a-menu>
      <a-menu-item :class="$style.items">
        <AppLink name="FinancialResults" :class="$style.item">
          <AIcon :icon="'business'" />
          <p>決算速報</p>
        </AppLink>
      </a-menu-item>
      <a-menu-item :class="$style.items">
        <AppLink name="FavoriteList" :class="$style.item">
          <AIcon :icon="'star_border'" />
          <p>お気に入り</p>
        </AppLink>
      </a-menu-item>
      <a-menu-item>
        <AppLink name="WatchLaterList" :class="$style.item">
          <AIcon :icon="'schedule'" />
          <p>後で見る</p>
        </AppLink>
      </a-menu-item>
      <a-menu-item :class="$style.item">
        <p :class="$style.label">他のユーザー</p>
      </a-menu-item>
      <a-menu-item>
        <AppLink name="UserFavoriteList" :class="$style.item">
          <AIcon :icon="'star_border'" />
          <p>お気に入り</p>
        </AppLink>
      </a-menu-item>
      <a-menu-item>
        <AppLink name="UserWatchLaterList" :class="$style.item">
          <AIcon :icon="'schedule'" />
          <p>後で見る</p>
        </AppLink>
      </a-menu-item>
    </a-menu>
  </a-layout-sider>
</template>

<script setup lang="ts">
import { useCollapse } from '../../composable/useCollapse';
import AIcon from '../general/icon/AIcon.vue';

const { state } = useCollapse();
</script>

<style module>
.sidebar {
  display: flex;
  flex-direction: column;
  grid-area: sidebar;
  background-color: var(--color-white);
}

.items {
  border-bottom: var(--border-solid);
}

.item {
  display: flex;
  column-gap: 2.4rem;
  padding: 1.2rem 2.4rem;
  font-size: 1.4rem;
}

.label {
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
