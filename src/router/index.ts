import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/HomeView.vue'),
  },
  {
    path: '/user-management',
    name: 'User Management',
    component: () => import('../views/userManageView.vue'),
  },
  {
    path: '/activity-log',
    name: 'Activity Log',
    component: () => import('../views/ActivityLogView.vue'),
  },
  {
    path: '/approval',
    name: 'Approval',
    component: () => import('../views/ApproveView.vue'),
  },

  {
    path: '/:catchAll(.*)',
    name: '404 Not Found',
    component: () => import('@/views/NotFound.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
})

export default router
