import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import EditView from '@/views/EditView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/edit/:id',
    name: 'edit',
    component: EditView
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
