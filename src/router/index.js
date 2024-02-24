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
            path: '/main/home',
            name: 'NewsPage',
            component: () => import( '@/views/NewsPage/NewsPage.vue' ),
            children: [
              {
                path: '',
                name: 'ProjectsPage',
                component: () => import( '@/views/NewsPage/parts/ProjectsPage.vue' ),
              },
              {
                path: 'events',
                name: 'EventsPage',
                component: () => import( '@/views/NewsPage/parts/EventsPage.vue' ),
              },
              {
                path: 'articles',
                name: 'ArticlesPage',
                component: () => import( '@/views/NewsPage/parts/ArticlesPage.vue' ),
              },             
            ],  
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
                props: true,
                component: () => import( '@/views/DonationsPage/parts/OrderForm.vue' ),
              },
              {
                path: 'order/:body',
                name: 'OrderFormWithId',
                props: true,
                component: () => import( '@/views/DonationsPage/parts/OrderForm.vue' ),
              },              
            ],
          },
          {
            path: 'profile',
            name: 'ProfilePage',
            component: () => import( '@/views/ProfilePage/ProfilePage.vue' ),
            children: [
              {
                path: '',
                name: 'ProfileInfo',
                component: () => import( '@/views/ProfilePage/parts/ProfileInfo.vue' ),
              },
              {
                path: 'bonuses',
                name: 'BonusesPage',
                component: () => import( '@/views/ProfilePage/parts/BonusesPage.vue' ),
              },
              {
                path: 'settings',
                name: 'SettingsPage',
                component: () => import( '@/views/ProfilePage/parts/SettingsPage.vue' ),
              },             
            ],            
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
