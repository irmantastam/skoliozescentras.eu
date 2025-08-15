import { ViteSSG } from 'vite-ssg'
import './style.pcss'
import App from './App.vue'
import { routes } from './routes'

export const createApp = ViteSSG(App, {
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
})
