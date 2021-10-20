import { createRouter, createWebHistory } from 'vue-router';

import FavoriteList from '../views/FavoriteList.vue';
import FinancialResultsDetails from '../views/FinancialResultsDetails.vue';
import Home from '../views/Home.vue';
import UserFavoriteList from '../views/UserFavoriteList.vue';
import UserWatchLaterList from '../views/UserWatchLaterList.vue';
import WatchLaterList from '../views/WatchLaterList.vue';
import Login from '../views/Login.vue';

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/financial-results',
      component: Home,
      name: 'FinancialResults',
      alias: '/',
    },
    {
      path: '/financial-results/:id',
      component: FinancialResultsDetails,
    },
    {
      path: '/favorites',
      component: FavoriteList,
      name: 'FavoriteList',
    },
    {
      path: '/favorites/users',
      component: UserFavoriteList,
      name: 'UserFavoriteList',
    },
    {
      path: '/watch-later',
      component: WatchLaterList,
      name: 'WatchLaterList',
    },
    {
      path: '/watch-later/users',
      component: UserWatchLaterList,
      name: 'UserWatchLaterList',
    },
    {
      path: '/login',
      component: Login,
      name: 'Login',
    },
  ],
});
