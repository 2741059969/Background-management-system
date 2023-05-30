import { createRouter, createWebHashHistory } from 'vue-router'
const routes = [
  {
    path: '/home',
    component: () => import('@/views/home/WIndex.vue')
  },
  {
    path: '/login',
    component: () => import('@/views/login/WIndex.vue')
  }
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})
export default router
