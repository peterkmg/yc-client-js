import type { App } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { routesLayout as routes } from './routes'
import setupGuards from './guards'

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default (app: App) => {
  setupGuards(router)
  app.use(router)
}
