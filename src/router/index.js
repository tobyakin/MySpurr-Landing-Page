import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BusinessView from '../views/Business/index.vue'
import LearnView from '../views/LearnView.vue'
import HireTalent from '@/views/HireTalent.vue'
import TalentProfile from '@/views/TalentProfile.vue'
import BlogView from '@/views/Blog/BlogPage.vue'
import SingleBlog from '@/views/Blog/SingleBlogPage.vue'
import ContactUs from '@/views/ContactUs.vue'
import FQAs from '@/views/FQAs.vue'
import AboutView from '@/views/AboutView.vue'
import InternshipView from '@/views/InternshipView.vue'
import CaseStudyPage from '@/views/CaseStudy/CaseStudyPage.vue'
import GoPro from '@/views/GoPro.vue'
import SinglePortfolio from '@/views/Portfolio/SinglePortfolio.vue'
import AllJobs from '@/views/Job/AllJobs.vue'
import JobDetails from '@/views/Job/JobDetails.vue'
import NotFoundPage from '@/views/NotFoundPage.vue'
import PrivacyPolicy from '@/views/PrivacyPolicy.vue'
import TermsAndConditions from '@/views/TermsAndConditions.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: 'MySpurr | Home',
        metaTags: [
          {
            name: 'description',
            content: ''
          },
          {
            property: 'keywords',
            content: ''
          }
        ]
      }
    },
    {
      path: '/business',
      name: 'business',
      component: BusinessView,
      meta: {
        title: 'MySpurr | Business'
      }
    },
    {
      path: '/courses',
      name: 'courses',
      component: LearnView,
      meta: {
        title: 'MySpurr | Courses'
      }
    },
    {
      path: '/jobs',
      name: 'jobs',
      component: AllJobs,
      meta: {
        title: 'MySpurr | Jobs'
      }
    },
    {
      path: '/privacy-policy',
      name: 'privacy-policy',
      component: PrivacyPolicy,
      meta: {
        title: 'MySpurr | Privacy Policy'
      }
    },
    {
      path: '/terms-and-conditions',
      name: 'terms-and-conditions',
      component: TermsAndConditions,
      meta: {
        title: 'MySpurr | Privacy Policy'
      }
    },

    {
      path: '/job-details/:slug',
      name: 'job-details',
      component: JobDetails,
      meta: {
        title: 'MySpurr | Jobs'
      }
    },
    {
      path: '/blog',
      name: 'blog',
      component: BlogView,
      meta: {
        title: 'MySpurr | Blog'
      }
    },
    {
      path: '/:category/:slug',
      name: 'SingleBlog',
      component: SingleBlog,
      meta: {
        title: 'MySpurr | Blog'
      }
    },
    {
      path: '/about-us',
      name: 'aboutUs',
      component: AboutView
    },
    {
      path: '/hire-talent',
      name: 'hire-talent',
      component: HireTalent
    },
    {
      path: '/faqs',
      name: 'FAQs',
      component: FQAs
    },
    {
      path: '/internship',
      name: 'internship',
      component: InternshipView
    },
    {
      path: '/portfolio/:name/:id/:title',
      name: 'single-portfolio',
      component: SinglePortfolio
    },
    {
      path: '/contact-us',
      name: 'contact-us',
      component: ContactUs
    },
    {
      path: '/talent/:name/:id',
      name: 'talent-profile',
      component: TalentProfile
    },
    {
      path: '/goPro',
      name: 'goPro',
      component: GoPro
    },
    {
      path: '/case-study',
      name: 'case-study',
      component: CaseStudyPage
    },
    {
      path: '/:catchAll(.*)',
      component: NotFoundPage
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  }
})

export default router
