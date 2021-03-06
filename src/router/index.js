import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '@/pages/Home.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/pages/About.vue')
  },
  {
    path: '/demo',
    name: 'Demo',
    component: () => import('@/pages/Demo.vue')
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
