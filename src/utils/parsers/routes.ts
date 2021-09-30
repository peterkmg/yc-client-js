import { resolve } from 'path'
import type { Component } from 'vue'
import { RouteRecordRaw } from 'vue-router'
import { menuRoutes } from '@/router/routes'

interface MenuItem {
  path: string
  title: string
  icon?: Component
  children?: MenuItem[]
}

export function buildMenuMap(): MenuItem[] {
  const array = Array<MenuItem>()
  menuRoutes.forEach((i) => parseMenuItems(i, array))
  return array
}

function parseMenuItems(
  source: RouteRecordRaw,
  target: MenuItem[],
  basePath?: string,
) {
  const item: MenuItem = { path: '', title: '' }
  if (
    /* no children */
    (!source.children || source.children.length === 0)
    && source.meta?.title
  ) {
    item.path = basePath ? resolve(basePath, source.path) : source.path
    item.title = source.meta.title as string
  }
  else if (
    /* one child === index */
    source.children
    && source.children.length === 1
    && source.children[0].path === ''
    && !source.children[0].children
    && source.children[0].meta?.title
  ) {
    item.path = basePath ? resolve(basePath, source.path) : source.path
    item.title = source.children[0].meta.title as string
  }
  else if (
    source.children
    && (source.children[0].children || source.children.length > 1)
    && source.meta?.title
  ) {
    /* either multiple children or one child with children */
    item.path = source.path
    item.title = source.meta.title as string
    const children = Array<MenuItem>()
    source.children.forEach((c) =>
      parseMenuItems(
        c,
        children,
        basePath ? resolve(basePath, source.path) : source.path,
      ),
    )
    item.children = children
  }
  target.push(item)
}
