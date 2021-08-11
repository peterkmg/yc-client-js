import { resolve } from 'path'
import { defineConfig } from 'vite'
import getTheme from './vite/theme'
import getPluginsConfig from './vite/plugins'

export default defineConfig({
  resolve: {
    alias: [
      {
        find: '@',
        replacement: resolve(__dirname, './src'),
      },
    ],
  },
  server: {
    fs: {
      strict: true,
    },
  },
  optimizeDeps: {
    include: ['vue', 'vue-router', 'pinia', '@iconify/vue'],
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: getTheme(),
      },
    },
  },
  plugins: getPluginsConfig(),
})
