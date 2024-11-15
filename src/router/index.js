// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Portfolio from '../components/Portfolio.vue';
import About from '/src/components/About.vue';


const routes = [
  { path: '/portfolio', component: Portfolio },
  { path: '/about', component: About },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
