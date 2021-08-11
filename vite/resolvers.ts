import type { ComponentResolver } from 'vite-plugin-components'

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
