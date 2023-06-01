import { createRouter, createWebHashHistory } from 'vue-router'
import routes from './routes'
const router = createRouter({
  history: createWebHashHistory(),
  routes
})
//全局路由前置守卫，
router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('TOKEN')
  //已登录不能去登录页面
  if (token && to.path === '/login') {
    next(false)
    //没登录不允许去首页
  } else if (!token && to.path === '/home') {
    next('/login')
    //其他情况放行
  } else {
    next()
  }
})
export default router
