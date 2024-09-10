// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
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
        path: '/Login',
        name: 'Login',
        component: () => import(/* webpackChunkName: "home" */ '@/pages/Login-Reg/login-page.vue'),
      },
      {
        path: '/Client',
        name: 'Client',
        component: () => import(/* webpackChunkName: "home" */ '@/pages/Crm/Client.vue'),
      },
      {
        path: '/Detail-Client/:id',
        name: 'Detail-Client',
        component: () => import(/* webpackChunkName: "home" */ '@/pages/Crm/Detail-Client-page.vue'),
      },
      {
        path: '/Task',
        name: 'Task',
        component: () => import(/* webpackChunkName: "home" */ '@/pages/Crm/Task-page.vue'),
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
