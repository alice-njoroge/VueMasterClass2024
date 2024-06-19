import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: () => import('@/views/HomeView.vue') },
    { path: '/projects', name: 'projects', component: () => import('@/views/ProjectView.vue') },
    { path: '/projects/:id(\\d+)', name: 'project', component: () => import('@/views/singleProject.vue') }, //dynamic route matching with params
    { path: '/projects:pathMatch(.*)*', name: 'notFound', component: () => import('@/views/NotFound.vue') }
  ]
})

export default router
