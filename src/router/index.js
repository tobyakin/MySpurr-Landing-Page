import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BusinessView from '../views/Business/index.vue'
import LearnView from '../views/LearnView.vue'
import HireTalent from '@/views/HireTalent.vue'
import TalentProfile from '@/views/TalentProfile.vue'
import BlogView from '@/views/Blog/BlogPage.vue'
import SingleBlog from '@/views/Blog/SingleBlogPage.vue'
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
    },
    {
      path: '/blog',
      name: 'blog',
      component: BlogView
    },
    {
      path: '/view-blog',
      name: 'view-blog',
      component: SingleBlog
    },
    {
      path: '/hire-talent',
      name: 'hire-talent',
      component: HireTalent
    },
    {
      path: '/talent-profile',
      name: 'talent-profile',
      component: TalentProfile
    }
  ]
})

export default router
