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
    component: () => import('@/layout/Layout.vue'),
    meta: {
      title: 'Layout'
    },
    children: [
      {
        path: '/dashboard',
        name: 'DashBoard',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/DashBoard.vue'),
        meta: { icon: 'mdi-home' }
      },
      {
        path: '/console',
        name: 'Console',
        component: () => import('@/views/Console.vue'),
        meta: { title: 'Login Page', icon: 'mdi-console' }
      },
      {
        path: '/version/upload',
        name: 'Version Upload',
        component: () => import('../views/VersionUpload.vue'),
        meta: { icon: 'mdi-cloud-upload-outline' }
      },
      {
        path: '/app/create',
        name: 'App Create',
        component: () => import('../views/AppCreate.vue'),
        meta: { icon: 'mdi-cloud-create' }
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
