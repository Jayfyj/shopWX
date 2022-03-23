//首页
export default [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('./index'),
    meta: {
      // keepAlive: true,
      title: '首页菜单'
    }
  }
]
