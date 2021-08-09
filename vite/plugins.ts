import { resolve } from 'path'
import Vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts'
import ViteSvgIcons from 'vite-plugin-svg-icons'
import ViteComponents, { ElementPlusResolver } from 'vite-plugin-components'

export default () => {
  return [
    Vue(),
    Pages({
      pagesDir: 'src/views',
      extendRoute(route) {
        // Allow for unauthorized
        if (route.path === '/login') return route

        // Augment the route with meta that indicates that the route requires authentication.
        return { ...route, meta: { requiresAuth: true } }
      },
    }),
    Layouts(),
    ViteComponents({
      // generate `components.d.ts` for ts support with Volar
      globalComponentsDeclaration: true,

      customComponentResolvers: [ElementPlusResolver({ importStyle: true })],
    }),
    ViteSvgIcons({
      iconDirs: [resolve(process.cwd(), 'src/assets/svg')],
      svgoOptions: false,
      symbolId: 'icon-[dir]-[name]',
    }),
  ]
}
