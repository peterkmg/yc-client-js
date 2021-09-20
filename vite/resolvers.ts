import type { ComponentResolver } from 'unplugin-vue-components'

export function IconifyVueResolver(): ComponentResolver {
  return (name: string) => {
    if (name.startsWith('Icon')) {
      return {
        importName: name,
        path: '@iconify/vue',
      }
    }
  }
}
