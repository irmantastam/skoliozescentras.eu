import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// If deploying to https://username.github.io/your-repo-name/
// const BASE_URL = '/your-repo-name/'; // Replace with your repository name
// If deploying to https://your-domain.com/ (e.g., custom domain with gh-pages or Vercel)
const BASE_URL = '/'

export default defineConfig({
  plugins: [vue()],
  base: BASE_URL,
})
