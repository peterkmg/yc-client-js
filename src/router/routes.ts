import type { RouteRecordRaw } from 'vue-router'
import { setupLayouts } from 'virtual:generated-layouts'
import generatedRoutes from 'virtual:generated-pages'

export const routesDefault = generatedRoutes
export const routesLayout: RouteRecordRaw[] = setupLayouts(routesDefault)
