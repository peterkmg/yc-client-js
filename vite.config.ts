import { resolve } from 'path'
import type { UserConfig, UserConfigExport, ConfigEnv } from 'vite'
import getPluginsConfig from './vite/plugins'
import theme from './src/styles/theme'

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
          modifyVars: theme,
          javascriptEnabled: true,
        },
      },
    },
    plugins: getPluginsConfig(),
  } as UserConfig
}
