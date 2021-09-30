import Vue from '@vitejs/plugin-vue'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
import Icons from 'unplugin-icons/vite'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import WindiCSS from 'vite-plugin-windicss'
import IconsResolver from 'unplugin-icons/resolver'
import { IconifyVueResolver } from './resolvers'

export default () => {
  return [
    Vue(),

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
        IconsResolver(),
        AntDesignVueResolver({ importStyle: 'less', resolveIcons: true }),
        IconifyVueResolver(),
      ],
    }),

    Icons({
      scale: 1,
      defaultClass: 'iconify',
    }),

    WindiCSS(),
  ]
}
