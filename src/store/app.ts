import { defineStore } from 'pinia'
import type { MenuMapItem } from '@/config/menuMap'
import menuItems from '@/config/menuMap'
import { APP_NAME } from '@/config/constants'

export interface AppState {
  path: string
  title: string
  sidebar: boolean
  menuItems: MenuMapItem[]
}

export default defineStore({
  id: 'app',
  state: (): AppState => ({
    path: '',
    title: APP_NAME,
    sidebar: true,
    menuItems,
  }),
  getters: {
    isSidebarOpen: (state): boolean => {
      return state.sidebar
    },
    getMenuItems: (state): MenuMapItem[] => {
      return state.menuItems
    },
  },
  actions: {
    toggleSidebar() {
      this.sidebar = !this.sidebar
    },
    changePage(path: string) {
      const page = this.menuItems.find((i) => i.index === path)
      if (page) {
        this.title = `${page.title} - ${APP_NAME}`
        this.path = path
      }
    },
  },
})
