import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../pages/Home.vue'),
    meta: { title: 'INNOVAMED klinika' },
  },
  {
    path: '/komanda',
    name: 'team',
    component: () => import('../pages/Team.vue'),
    meta: { title: 'Komanda' },
  },
  {
    path: '/nemokamas-skoliozes-testavimas',
    name: 'testing',
    component: () => import('../pages/Testing.vue'),
    meta: { title: 'Nemokamas skoliozės testavimas' },
  },
  {
    path: '/diagnostika',
    name: 'diagnostics',
    component: () => import('../pages/Diagnostics.vue'),
    meta: { title: 'Diagnostika' },
  },
  {
    path: '/gydymas-schroth-metodu',
    name: 'treatment',
    component: () => import('../pages/Treatment.vue'),
    meta: { title: 'Gydymas Schroth metodu' },
  },
  {
    path: '/isst-schroth-metodas-ir-organizacija',
    name: 'schroth',
    component: () => import('../pages/Schroth.vue'),
    meta: { title: 'ISST Schroth metodas ir organizacija' },
  },
  {
    path: '/skoliozes-gydymo-kursai-lietuvoje',
    name: 'training',
    component: () => import('../pages/Training.vue'),
    meta: { title: 'Skoliozės gydymo kursai Lietuvoje' },
  },
  {
    path: '/scoliteam',
    name: 'scoliteam',
    component: () => import('../pages/Scoliteam.vue'),
    meta: { title: 'Scoliteam' },
  },
  {
    path: '/sekmes-istorijos',
    name: 'success-stories',
    component: () => import('../pages/SuccessStories.vue'),
    meta: { title: 'Sėkmės istorijos' },
  },
  {
    path: '/klinikes-praktikos-supervizija',
    name: 'supervision',
    component: () => import('../pages/Supervision.vue'),
    meta: { title: 'Klinikės praktikos supervizija' },
  },
  {
    path: '/edukacija-mokykloms-tevams',
    name: 'education',
    component: () => import('../pages/Education.vue'),
    meta: { title: 'Edukacija mokykloms, tėvams' },
  },
  {
    path: '/schroth-skoliozes-stovykla',
    name: 'camp',
    component: () => import('../pages/Camp.vue'),
    meta: { title: 'Schroth skoliozės stovykla' },
  },
  {
    path: '/kontaktai',
    name: 'contact',
    component: () => import('../pages/Contact.vue'),
    meta: { title: 'Kontaktai' },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
    ? `${to.meta.title} - Skoliozės Centras`
    : 'Skoliozės Centras'
  next()
})

export default router
