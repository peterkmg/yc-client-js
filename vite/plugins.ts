import Vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts'
import Components, { ElementPlusResolver } from 'vite-plugin-components'
import { IconifyVueResolver } from './resolvers'

export default () => {
  return [
    Vue(),
    Pages({
      pagesDir: 'src/views',
    }),
    Layouts(),
    Components({
      // generate `components.d.ts` for ts support with Volar
      globalComponentsDeclaration: true,

      customComponentResolvers: [
        ElementPlusResolver({ importStyle: true }),
        IconifyVueResolver(),
      ],
    }),
  ]
}
