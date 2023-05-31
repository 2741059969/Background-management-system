export const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/screen',
    component: () => import('@/views/screen/WIndex.vue')
  },
  {
    path: '/home',
    component: () => import('@/layout/WIndex.vue'),
    children: [
      {
        path: '/home/auth',
        component: () => import('@/views/auth/WIndex.vue')
      },
      {
        path: '/home/product',
        component: () => import('@/views/product/WIndex.vue')
      },
      {
        path: '/home/shouye',
        component: () => import('@/views/shouye/WIndex.vue')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/login/WIndex.vue')
  },
  {
    path: '/404',
    component: () => import('@/views/page404/WIndex.vue')
  }
]
