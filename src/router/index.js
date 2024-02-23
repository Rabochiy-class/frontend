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
        component: () => import( '@/views/MainPage.vue' ),
        children: [
          {
            path: '',
            name: 'NewsPage',
            component: () => import( '@/views/NewsPage/NewsPage.vue' ),
          },
          {
            path: 'donations',
            name: 'DonationsPage',
            component: () => import( '@/views/DonationsPage/DonationsPage.vue' ),
            children: [
              {
                path: '',
                name: 'DonationItems',
                component: () => import( '@/views/DonationsPage/parts/DonationItems.vue' ),
              },
              {
                path: 'centers',
                name: 'CentersPage',
                component: () => import( '@/views/DonationsPage/parts/CentersPage.vue' ),
              },
              {
                path: 'order',
                name: 'OrderForm',
                component: () => import( '@/views/DonationsPage/parts/OrderForm.vue' ),
              },
            ],
          },
          {
            path: 'account',
            name: 'AccountPage',
            component: () => import( '@/views/AccountPage/AccountPage.vue' ),
          },
        ],
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
