export const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('./pages/Home.vue'),
    meta: {
      excludeFromMenu: true,
    },
  },
  {
    path: '/apie-mus',
    name: 'about',
    component: () => import('./pages/AboutUs.vue'),
    meta: {
      title: 'Apie mus - Skoliozės centras',
      menuTitle: 'Apie mus',
      description:
        'Innovamed Skoliozės centras - oficialūs Schroth metodo atstovai Lietuvoje. Mūsų sertifikuoti specialistai siūlo pažangiausią skoliozės gydymą Vilniuje ir Kaune.',
    },
  },
  {
    path: '/komanda',
    name: 'team',
    component: () => import('./pages/Team.vue'),
    meta: {
      title: 'Mūsų komanda - Skoliozės centras',
      menuTitle: 'Komanda',
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
      menuTitle: 'Diagnostika',
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
      menuTitle: 'Nemokamas skoliozės testavimas',
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
      menuTitle: 'Gydymas Schroth metodu',
      description:
        'Schroth metodas tai nechirurginis, veiksmingas skoliozės gydymo būdas kai atliekami specialūs asimetriniai pratimai, derinami su kartu kvėpavimu. ',
    },
  },
  {
    path: '/sekmes-istorijos',
    name: 'success-stories',
    component: () => import('./pages/SuccessStories.vue'),
    meta: {
      title: 'Skoliozės gydymo sėkmės istorijos - Skoliozės Centras',
      menuTitle: 'Sėkmės istorijos',
      description:
        'Innovamed Skoliozės Centre džiaugiamės matydami teigiamus skoliozės gydymo rezultatus. Susipažinkite su mūsų pacientų sėkmės istorijomis.',
    },
  },
  {
    path: '/isst-schroth-metodas-ir-organizacija',
    name: 'schroth',
    component: () => import('./pages/Schroth.vue'),
    meta: {
      title: 'ISST Schroth metodas ir organizacija - Skoliozės Centras',
      menuTitle: 'ISST Schroth metodas ir organizacija',
      description:
        'ISST Schroth organizacija yra tarptautinė ne pelno siekianti institucija, vienijanti specialistus, taikančius Schroth metodą skoliozei gydyti.',
    },
  },
  {
    path: '/skoliozes-gydymo-kursai-lietuvoje',
    name: 'training',
    component: () => import('./pages/Training.vue'),
    meta: {
      title: 'Skoliozės gydymo kursai Lietuvoje - Skoliozės Centras',
      menuTitle: 'Skoliozės gydymo kursai Lietuvoje',
      description:
        'Schroth skoliozės gydymo kursai Lietuvoje. Įgykite pagrindines žinias apie idiopatinės skoliozės ir kifozės konservatyvų gydymą.',
    },
  },
  {
    path: '/klinikes-praktikos-supervizija',
    name: 'supervision',
    component: () => import('./pages/Supervision.vue'),
    meta: {
      title: 'Schroth klinikinė supervizija - Skoliozės Centras',
      menuTitle: 'Klinikės praktikos supervizija',
      description:
        'Jei esate mokymus baigęs Schroth terapeutas ir norite pasitikrinti savo žinias ar siekiate patobulinti klinikinius įgūdžius, kviečiame susisiekti.',
    },
  },
  {
    path: '/scoliteam',
    name: 'scoliteam',
    component: () => import('./pages/Scoliteam.vue'),
    meta: {
      title: 'ScoliTeam - skoliozės gydymo specialistai - Skoliozės Centras',
      menuTitle: 'ScoliTeam',
      description:
        'ScoliTeam komandą sudaro įvairių sričių specialistai siekiantys užtikrinti aukščiausios kokybės skoliozės gydymą Lietuvoje.',
    },
  },
  {
    path: '/edukacija-mokykloms-tevams',
    name: 'education',
    component: () => import('./pages/Education.vue'),
    meta: {
      title: 'Skoliozės edukacija mokykloms, tėvams - Skoliozės Centras',
      menuTitle: 'Edukacija mokykloms, tėvams',
      description:
        'Innovamed Skoliozės Centras edukuoja vaikus, jų tėvus ir kitus kineziterapeutus apie laikyseną, fizinį aktyvumą ir skoliozės prevenciją.',
    },
  },
  {
    path: '/schroth-skoliozes-stovykla',
    name: 'camp',
    component: () => import('./pages/Camp.vue'),
    meta: {
      title: 'Schroth skoliozės stovykla - Skoliozės Centras',
      menuTitle: 'Schroth skoliozės stovykla',
      description:
        'Skoliozės stovykla - tai intensyvus grupinis skoliozės gydymas, taikant Katharinos Schroth metodikos principus. Stovyklos vyks Vilniuje ir Kaune.',
    },
  },
  {
    path: '/kontaktai',
    name: 'contact',
    component: () => import('./pages/Contact.vue'),
    meta: {
      title: 'Kontaktai - Skoliozės Centras',
      menuTitle: 'Kontaktai',
      description:
        'Susisiekite su mumis! Mūsų komanda pasiruošusi atsakyti į visus jūsų klausimus ir padėti rasti geriausią sprendimą jūsų stuburo sveikatai.',
    },
  },
  {
    path: '/straipsniai/skolioze',
    name: 'straipsniai-skolioze',
    component: () => import('./pages/blog/Scoliosis.vue'),
    meta: {
      title: 'Skoliozė - simptomai ir gydymas - Skoliozės centras',
      menuTitle: 'Skoliozė',
      description:
        'Skoliozė - stuburo išlinkimas į šoną, dažnai primenantis S arba C formą. Sužinokite, kaip ją atpažinti ir kokie yra skoliozės gydymo metodai.',
    },
  },
  {
    path: '/straipsniai/kaklo-skolioze',
    name: 'straipsniai-kaklo-skolioze',
    component: () => import('./pages/blog/NeckScoliosis.vue'),
    meta: {
      title: 'Kaklo skoliozė: kaip atpažinti ir gydyti - Skoliozės centras',
      menuTitle: 'Kaklo skoliozė',
      description:
        'Kaklo skoliozė yra stuburo kaklinės dalies iškrypimas į šoną. Jos metu stuburas nebūna tiesus, o įgauna S arba C formą. Sužinokite, kaip gydoma kaklo skoliozė.',
    },
  },
  {
    path: '/tadas-mikelionis',
    name: 'tadas-mikelionis',
    component: () => import('./pages/TadasMikelionis.vue'),
    meta: {
      title: 'Tadas Mikelionis - Skoliozės centras',
      menuTitle: 'Tadas Mikelionis',
      excludeFromMenu: true,
      description:
        'KineziterapeutasTadas Mikelionis Nuo 2014 privati kineziterapeuto praktika2020 INNOVAMED kineziterapijos klinikų įkūrėjas ir direktoriusNuo 2023 ISST atstovas Lietuvoje Sertifikuotas Schroth metodikos skoliozės gydymui specialistas.ISST suteiktas Schroth klinikinės praktikos vadovo laipsnis. Nuolat tobulinu žinias pasaulinio lygio lektorių seminaruose, tokių kaip: Michael Shacklock - klinikinė neurodinamika Annina Schmid - kompresinės periferinės neuropatijos Alison Grimaldi - klubo sąnario gydymas Mark Jones - klinikinis mąstymas',
    },
  },
  {
    path: '/giedre-mikelioniene',
    name: 'giedre-mikelioniene',
    component: () => import('./pages/GiedreMikelioniene.vue'),
    meta: {
      title: 'Giedrė Mikelionienė - Skoliozės centras',
      menuTitle: 'Giedrė Mikelionienė',
      excludeFromMenu: true,
      description:
        'Giedrė Mikelionienė - sertifikuota ISST Schroth specialistė, Tarptautinės Schroth 3D skoliozės terapijos atstovė ir klinikinės praktikos vadovė Lietuvoje.',
    },
  },
  {
    path: '/:catchAll(.*)',
    name: '404',
    component: () => import('./pages/404.vue'),
    meta: {
      title: 'Puslapis nerastas - Skoliozės Centras',
      excludeFromMenu: true,
    },
  },
]
