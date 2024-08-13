// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default.vue'),
    children: [
      {
        path: '',
        name: 'Login',
        component: () => import(/* webpackChunkName: "home" */ '@/pages/index.vue'),
      },
      {
        path: '/SignUp',
        name: 'SignUp',
        component: () => import(/* webpackChunkName: "home" */ '@/pages/Login-Reg/signup-page.vue'),
      },
      {
        path: '/ForgotPassword',
        name: 'ForgotPassword',
        component: () => import(/* webpackChunkName: "home" */ '@/pages/Login-Reg/forgotpassword-page.vue'),
      },
      {
        path: '/Verify',
        name: 'Verify',
        component: () => import(/* webpackChunkName: "home" */ '@/pages/Login-Reg/VerifyOTP-page.vue'),
      },
      {
        path: '/ChangePassword',
        name: 'ChangePassword',
        component: () => import(/* webpackChunkName: "home" */ '@/pages/Login-Reg/changepassword-page.vue'),
      },
      {
        path: '/Home',
        name: 'Home',
        component: () => import(/* webpackChunkName: "home" */ '@/pages/Login-Reg/home-page.vue'),
      }
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 }
  },
})

export default router
