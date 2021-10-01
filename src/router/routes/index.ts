import type { RouteRecordRaw } from 'vue-router'
import routes from './definitions'

export const basicRoutes: RouteRecordRaw[] = [routes.index, routes.login]
export const menuRoutes: RouteRecordRaw[] = [routes.home, routes.dict]
export const otherRoutes: RouteRecordRaw[] = [routes.profile]
