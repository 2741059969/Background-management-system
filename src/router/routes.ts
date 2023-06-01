//第一级路由，指向最大的页面切换
export const routesprio1 = [
  {
    path: '/',
    redirect: '/home',
    meta: {
      title: '主页',
      icon: 'House',
      isshow: false
    }
  },
  {
    path: '/login',
    component: () => import('@/views/login/WIndex.vue'),
    meta: {
      title: '首页',
      icon: 'House',
      isshow: false
    }
  },
  {
    path: '/404',
    component: () => import('@/views/page404/WIndex.vue'),
    meta: {
      title: '404',
      icon: 'House',
      isshow: false
    }
  }
]
// 主页中的菜单跳转路由，有可能希望它切换到一级路由展示区
export const routesinlayout = [
  //没有children一级路由
  {
    path: '/screen',
    component: () => import('@/views/screen/WIndex.vue'),
    meta: {
      title: '数据大屏',
      icon: 'Platform'
    }
  },
  // 有children但只有一个，意味着点击跳转到二级路由展示区，且对应的菜单栏师单项不能展开的
  {
    path: '/home',
    component: () => import('@/layout/WIndex.vue'),
    redirect: '/home/shouye',
    children: [
      {
        path: '/home/shouye',
        component: () => import('@/views/shouye/WIndex.vue'),
        meta: {
          title: '首页',
          icon: 'House'
        }
      }
    ]
  },
  //有children且有多个孩子，意味着第一层是整个页面，向下一层是右下方内容展示区，第一级对应的菜单栏可以展开
  {
    path: '/acl',
    component: () => import('@/layout/WIndex.vue'),
    name: 'Acl',
    meta: {
      title: '权限管理',
      icon: 'Lock'
    },
    redirect: '/acl/user',
    children: [
      {
        path: '/acl/user',
        component: () => import('@/views/acl/user/index.vue'),
        name: 'User',
        meta: {
          title: '用户管理',
          icon: 'User'
        }
      },
      {
        path: '/acl/role',
        component: () => import('@/views/acl/role/index.vue'),
        name: 'Role',
        meta: {
          title: '角色管理',
          icon: 'UserFilled'
        }
      },
      {
        path: '/acl/permission',
        component: () => import('@/views/acl/permission/index.vue'),
        name: 'Permission',
        meta: {
          title: '菜单管理',
          icon: 'Monitor'
        }
      }
    ]
  },
  {
    path: '/product',
    component: () => import('@/layout/WIndex.vue'),
    name: 'Product',
    meta: {
      title: '商品管理',
      icon: 'Goods'
    },
    redirect: '/product/trademark',
    children: [
      {
        path: '/product/trademark',
        component: () => import('@/views/product/trademark/index.vue'),
        name: 'Trademark',
        meta: {
          title: '品牌管理',
          icon: 'ShoppingCartFull'
        }
      },
      {
        path: '/product/attr',
        component: () => import('@/views/product/attr/index.vue'),
        name: 'Attr',
        meta: {
          title: '属性管理',
          icon: 'ChromeFilled'
        }
      },
      {
        path: '/product/spu',
        component: () => import('@/views/product/spu/index.vue'),
        name: 'Spu',
        meta: {
          title: 'SPU管理',
          icon: 'Calendar'
        }
      },
      {
        path: '/product/sku',
        component: () => import('@/views/product/sku/index.vue'),
        name: 'Sku',
        meta: {
          title: 'SKU管理',
          icon: 'Orange'
        }
      }
    ]
  }
]
export default [...routesprio1, ...routesinlayout]
