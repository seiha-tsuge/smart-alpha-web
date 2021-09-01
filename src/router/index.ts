import { createRouter, createWebHashHistory } from 'vue-router';

const About = { template: '<div>About</div>' };

export const router = createRouter({
  history: createWebHashHistory(),
  routes: [{ path: '/about', component: About }],
});
