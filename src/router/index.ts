import { createRouter, createWebHistory } from 'vue-router';

const About = { template: '<div>About</div>' };

export const router = createRouter({
  history: createWebHistory(),
  routes: [{ path: '/about', component: About }],
});
