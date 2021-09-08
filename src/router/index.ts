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
    { path: '/favorite', component: FavoriteList },
    { path: '/financial', component: FinancialResultsDetails },
    { path: '/home', component: Home },
    { path: '/userfavorite', component: UserFavoriteList },
    { path: '/userwatchlater', component: UserWatchLaterList },
    { path: '/watchlater', component: WatchLaterList },
  ],
});
