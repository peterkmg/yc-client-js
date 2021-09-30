import type { App } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { basicRoutes, menuRoutes, otherRoutes } from './routes'
import setupGuards from './guards'

const routes = [...basicRoutes, ...menuRoutes, ...otherRoutes]

const router = createRouter({
  history: createWebHistory(),
  routes,
  strict: true,
})

export default (app: App) => {
  setupGuards(router)
  app.use(router)
}
