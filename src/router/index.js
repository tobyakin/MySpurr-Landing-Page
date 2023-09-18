import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BusinessView from '../views/Business/index.vue'
import LearnView from '../views/LearnView.vue'
import HireTalent from '@/views/HireTalent.vue'
import TalentProfile from '@/views/TalentProfile.vue'
import BlogView from '@/views/Blog/BlogPage.vue'
import SingleBlog from '@/views/Blog/SingleBlogPage.vue'
import ContactUs from '@/views/ContactUs.vue'
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
      path: '/view-blog/:slug',
      name: 'SingleBlog',
      component: SingleBlog
    },
    {
      path: '/hire-talent',
      name: 'hire-talent',
      component: HireTalent
    },
    {
      path: '/contact-us',
      name: 'contact-us',
      component: ContactUs
    },
    {
      path: '/talent-profile',
      name: 'talent-profile',
      component: TalentProfile
    }
  ]
})

export default router
