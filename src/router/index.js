import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../pages/Home.vue'),
    meta: { title: 'INNOVAMED klinika' },
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
    path: '/gydymas',
    name: 'treatment',
    component: () => import('../pages/Treatment.vue'),
    meta: { title: 'Gydymas' },
  },
  {
    path: '/isst-schroth-metodas-ir-organizacija',
    name: 'schroth',
    component: () => import('../pages/Schroth.vue'),
    meta: { title: 'ISST Schroth metodas ir organizacija' },
  },
  {
    path: '/mokymai-kineziterapeutams',
    name: 'training',
    component: () => import('../pages/Training.vue'),
    meta: { title: 'Mokymai kineziterapeutams' },
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
    path: '/klientu-istorijos',
    name: 'client-stories',
    component: () => import('../pages/ClientStories.vue'),
    meta: { title: 'Klientų istorijos' },
  },
  {
    path: '/edukacija',
    name: 'education',
    component: () => import('../pages/Education.vue'),
    meta: { title: 'Edukacija' },
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
