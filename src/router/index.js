import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: HomeView },
    { path: '/about', component: () => import('../views/AboutView.vue') },
    { path: '/team', component: () => import('../views/TeamView.vue') },
    { path: '/robot-gallery', component: () => import('../views/RobotGalleryView.vue') },
    { path: '/competitions', component: () => import('../views/CompetitionsView.vue') },
    { path: '/outreach', component: () => import('../views/OutreachView.vue') },
    { path: '/sponsors', component: () => import('../views/SponsorsView.vue') },
    { path: '/contact', component: () => import('../views/ContactView.vue') },
  ],
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router
