import { ViteSSG } from 'vite-ssg'
import './style.pcss'
import App from './App.vue'
import { routes } from './routes'

// `export const createApp` is required instead of the original `createApp(App).mount('#app')`
export const createApp = ViteSSG(
  // the root component
  App,
  // vue-router options
  {
    routes,
    scrollBehavior(to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition
      } else {
        return { top: 0 }
      }
    },
  },
  // function to have custom setups
  ({ app, router, routes, isClient, initialState }) => {
    if (isClient) {
      router.beforeEach((to, from, next) => {
        document.title = to.meta.title
          ? `${to.meta.title} - Skoliozės Centras`
          : 'Skoliozės Centras'
        next()
      })
    }
  }
)
