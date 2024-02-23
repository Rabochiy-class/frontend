import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Root',
    redirect: { name: 'AuthPage' },
    children: [
      {
        path: 'auth',
        name: 'AuthPage',
        component: () => import( '@/views/AuthPage/AuthPage.vue' ),
        children: [
          {
            path: '',
            name: 'LoginPage',
            component: () => import( '@/views/AuthPage/parts/LoginPage.vue' ),
          },
          {
            path: 'registration',
            name: 'RegisterPage',
            component: () => import( '@/views/AuthPage/parts/RegisterPage.vue' ),
          },
        ]
      },
      {
        path: 'main',
        name: 'MainPage',
        component: () => import( '@/views/MainPage/MainPage.vue' ),
      },
    ],
  },
  {
    path: '/unathorized',
    name: 'UnauthorizedPage',
    component: () => import( '@/views/UnauthorizedPage.vue' ),
  },
]

const router = createRouter( {
  history: createWebHistory(),
  routes,
} )

export default router
