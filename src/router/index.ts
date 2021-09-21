import { createRouter, createWebHistory } from 'vue-router';

import FavoriteList from '../views/FavoriteList.vue';
import FinancialResultsDetails from '../views/FinancialResultsDetails.vue';
import Home from '../views/Home.vue';
import UserFavoriteList from '../views/UserFavoriteList.vue';
import UserWatchLaterList from '../views/UserWatchLaterList.vue';
import WatchLaterList from '../views/WatchLaterList.vue';

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/financial-results', component: Home, alias: '/' },
    {
      path: '/financial-results/:id',
      component: FinancialResultsDetails,
    },
    { path: '/favorites', component: FavoriteList },
    { path: '/favorites/users', component: UserFavoriteList },
    { path: '/watch-later', component: WatchLaterList },
    { path: '/watch-later/users', component: UserWatchLaterList },
  ],
});
