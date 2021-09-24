import Vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { IconifyVueResolver } from './resolvers'

export default () => {
  return [
    Vue(),
    Pages({
      pagesDir: 'src/views',
      extendRoute(route) {
        return route.path === '/login'
          ? route
          : { ...route, meta: { requiresAuth: true } }
      },
    }),
    Layouts(),
    AutoImport({
      // targets to transform
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue\??/, // .vue
      ],

      // global imports to register
      imports: [
        // presets
        'vue',
        'vue-router',
      ],
    }),
    Components({
      dts: true,
      resolvers: [
        ElementPlusResolver({ importStyle: true }),
        IconifyVueResolver(),
      ],
    }),
  ]
}
