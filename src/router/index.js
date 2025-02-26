import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import EditView from '@/views/EditView.vue';
import CreateView from '@/views/CreateView.vue';

const routes = [
  { path: '/', name: 'home', component: HomeView }, 
  { path: '/edit/:id', name: 'edit', component: EditView },
  { path: '/create', name: 'create', component: CreateView } 
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
