import { resolve } from 'path'
import type { UserConfig, UserConfigExport, ConfigEnv } from 'vite'
import getPluginsConfig from './vite/plugins'

export default ({ command, mode }: ConfigEnv): UserConfigExport => {
  return {
    resolve: {
      alias: [
        {
          find: '@',
          replacement: resolve(__dirname, './src'),
        },
      ],
    },
    server: {
      host: false,
      fs: {
        strict: true,
      },
    },
    optimizeDeps: {
      include: ['@iconify/vue'],
      exclude: ['vue-demi'],
    },
    css: {
      preprocessorOptions: {
        less: {
          javascriptEnabled: true,
        },
      },
    },
    plugins: getPluginsConfig(),
  } as UserConfig
}
