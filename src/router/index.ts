import type { App } from 'vue'
import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'
import { setupLayouts } from 'virtual:generated-layouts'
import generatedRoutes from 'virtual:generated-pages'
import setupGuards from './guards'

const routes: RouteRecordRaw[] = setupLayouts(generatedRoutes)

const router = createRouter({
  history: createWebHistory(),
  routes,
})

setupGuards(router, routes)

export default (app: App) => {
  setupGuards(router, routes)
  app.use(router)
  return router
}
