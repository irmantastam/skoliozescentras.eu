export const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('./pages/Home.vue'),
  },
  {
    path: '/komanda',
    name: 'team',
    component: () => import('./pages/Team.vue'),
    meta: {
      title: 'Mūsų komanda - Skoliozės centras',
      description:
        'Mūsų Schroth specialistai padeda diagnozuoti ir gydyti skoliozę Vilniuje ir Kaune, naudojant pažangiausius metodus.',
    },
  },
  {
    path: '/diagnostika',
    name: 'diagnostics',
    component: () => import('./pages/Diagnostics.vue'),
    meta: {
      title: 'Skoliozės diagnostika - Skoliozės Centras',
      description:
        'Mūsų klinikoje taikomi pažangūs skoliozės diagnostikos metodai tokie kaip SPINE 3D, Adams Testas ir DIERS Formetric 4D.',
    },
  },
  {
    path: '/nemokamas-skoliozes-testavimas',
    name: 'testing',
    component: () => import('./pages/Testing.vue'),
    meta: {
      title: 'Nemokamas skoliozės testavimas - Skoliozės Centras',
      description:
        'Užsiregistruokite nemokamam skoliozės testui. Testavimas atliekamas INNOVAMED Kineziterapijos Klinikose Vilniuje ir Kaune',
    },
  },
  {
    path: '/gydymas-schroth-metodu',
    name: 'treatment',
    component: () => import('./pages/Treatment.vue'),
    meta: {
      title: 'Skoliozės gydymas Schroth metodu - Skoliozės Centras',
      description:
        'Schroth metodas tai nechirurginis, veiksmingas skoliozės gydymo būdas kai atliekami specialūs asimetriniai pratimai, derinami su kartu kvėpavimu. ',
    },
  },
  {
    path: '/isst-schroth-metodas-ir-organizacija',
    name: 'schroth',
    component: () => import('./pages/Schroth.vue'),
    meta: { title: 'ISST Schroth metodas ir organizacija' },
  },
  {
    path: '/skoliozes-gydymo-kursai-lietuvoje',
    name: 'training',
    component: () => import('./pages/Training.vue'),
    meta: { title: 'Skoliozės gydymo kursai Lietuvoje' },
  },
  {
    path: '/scoliteam',
    name: 'scoliteam',
    component: () => import('./pages/Scoliteam.vue'),
    meta: { title: 'ScoliTeam' },
  },
  {
    path: '/sekmes-istorijos',
    name: 'success-stories',
    component: () => import('./pages/SuccessStories.vue'),
    meta: { title: 'Sėkmės istorijos' },
  },
  {
    path: '/klinikes-praktikos-supervizija',
    name: 'supervision',
    component: () => import('./pages/Supervision.vue'),
    meta: { title: 'Klinikės praktikos supervizija' },
  },
  {
    path: '/edukacija-mokykloms-tevams',
    name: 'education',
    component: () => import('./pages/Education.vue'),
    meta: { title: 'Edukacija mokykloms, tėvams' },
  },
  {
    path: '/schroth-skoliozes-stovykla',
    name: 'camp',
    component: () => import('./pages/Camp.vue'),
    meta: { title: 'Schroth skoliozės stovykla' },
  },
  {
    path: '/kontaktai',
    name: 'contact',
    component: () => import('./pages/Contact.vue'),
    meta: { title: 'Kontaktai' },
  },
  {
    path: '/:catchAll(.*)',
    name: '404',
    component: () => import('./pages/404.vue'),
    meta: { title: 'Puslapis nerastas' },
  },
]
