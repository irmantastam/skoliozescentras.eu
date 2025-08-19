import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Sitemap from 'vite-plugin-sitemap'

const BASE_URL = '/'

const dynamicRoutes = [
  '/apie-mus',
  '/komanda',
  '/diagnostika',
  '/nemokamas-skoliozes-testavimas',
  '/gydymas-schroth-metodu',
  '/sekmes-istorijos',
  '/isst-schroth-metodas-ir-organizacija',
  '/skoliozes-gydymo-kursai-lietuvoje',
  '/klinikes-praktikos-supervizija',
  '/scoliteam',
  '/edukacija-mokykloms-tevams',
  '/schroth-skoliozes-stovykla',
  '/kontaktai',
]

export default defineConfig({
  plugins: [
    vue(),
    Sitemap({ hostname: 'https://www.skoliozescentras.eu', dynamicRoutes }),
  ],
  base: BASE_URL,
  ssgOptions: {
    // Generate static html for 404 page.
    includedRoutes(paths) {
      return paths.filter((path) => !path.includes(':')).concat('/404')
    },
  },
})
