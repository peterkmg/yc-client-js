import type { Component } from 'vue'
import { RouteRecordRaw } from 'vue-router'

export interface MenuItem {
  path: string
  title: string
  icon?: Component
  children: MenuItem[] | undefined
}

export function parseRoute(route: RouteRecordRaw, basePath?: string): MenuItem {
  return {
    path: basePath ? `${basePath}/${route.path}` : route.path,
    title:
      (route.meta?.title as string)
      ?? (route.children?.at(0)?.meta?.title as string),
    children:
      !route.children
      || (route.children.length === 1 && route.children?.at(0)?.path === '')
        ? undefined
        : route.children?.map((child) =>
          parseRoute(
            child,
            basePath ? `${basePath}/${route.path}` : route.path,
          ),
        ),
  }
}
