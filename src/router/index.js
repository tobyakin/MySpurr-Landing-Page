import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BusinessView from '../views/Business/index.vue'
import LearnView from '../views/LearnView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/business',
      name: 'business',
      component: BusinessView
    },
    {
      path: '/learn',
      name: 'learn',
      component: LearnView
    }
  ]
})

export default router
