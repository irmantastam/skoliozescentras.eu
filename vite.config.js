import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const BASE_URL = '/'

export default defineConfig({
  plugins: [vue()],
  base: BASE_URL,
  ssgOptions: {
    // Generate static html for 404 page.
    includedRoutes(paths) {
      return paths.filter((path) => !path.includes(':')).concat('/404')
    },
  },
})
