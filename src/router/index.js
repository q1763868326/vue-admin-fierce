import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'

const originalPush = VueRouter.prototype.push

VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Layout',
    component: () => import('@/views/layout/Layout.vue'),
    meta: {
      title: 'Layout'
    },
    children: [
      {
        path: '/dashboard',
        name: '仪表盘',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/DashBoard.vue'),
        meta: { titile: '仪表盘', icon: 'mdi-home' }
      },
      {
        path: '/appInfoList',
        name: '我的应用',
        component: () => import('@/views/AppInfoList.vue'),
        meta: { title: '我的应用', icon: 'mdi-console' }
      },
      {
        path: '/versionInfoList/:appId',
        name: '我的版本',
        component: () => import('@/views/VersionInfoList.vue'),
        meta: { title: '我的版本', icon: 'mdi-console', display: false },
        props: true
      },
      {
        path: '/version/upload',
        name: 'Version Upload',
        component: () => import('../views/VersionUpload.vue'),
        meta: { title: '版本上传', icon: 'mdi-cloud-upload-outline', display: false }
      },
      {
        path: '/app/create',
        name: 'App Create',
        component: () => import('../views/AppCreate.vue'),
        meta: { title: '创建应用', icon: 'mdi-console', display: false }
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: { title: 'Login Page' }
  }
]

const router = new VueRouter({
  routes
})

export default router
