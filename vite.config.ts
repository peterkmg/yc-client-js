import { resolve } from 'path'
import { defineConfig } from 'vite'
import { generateCSSVariables } from './src/config/theme'
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
        additionalData: generateCSSVariables(),
      },
    },
  },
  plugins: getPluginsConfig(),
})
