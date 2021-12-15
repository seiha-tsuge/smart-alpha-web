<template>
  <MenuItem
    link-name="FinancialResults"
    icon-name="business"
    label="決算速報"
  />
  <MenuItem
    link-name="FavoriteList"
    icon-name="star_border"
    label="お気に入り"
  />
  <MenuItem link-name="WatchLaterList" icon-name="schedule" label="後で見る" />
  <div>
    <p :class="$style.label">他のユーザー</p>
  </div>
  <MenuItem
    link-name="UserFavoriteList"
    icon-name="star_border"
    label="お気に入り"
  />
  <MenuItem
    link-name="UserWatchLaterList"
    icon-name="schedule"
    label="後で見る"
  />
</template>

<script setup lang="ts">
import MenuItem from './components/MenuItem.vue';
</script>

<style module>
.label {
  font-size: 1.2rem;
}
</style>
