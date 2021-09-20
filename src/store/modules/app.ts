import { defineStore } from 'pinia'
import type { MenuMapItem } from '@/config/menuMap'
import menuItems from '@/config/menuMap'

export interface AppState {
  sidebar: boolean
  sidebarWidth: string
  menuItems: MenuMapItem[]
}

export default defineStore({
  id: 'app',
  state: (): AppState => ({
    sidebar: true,
    sidebarWidth: '210px',
    menuItems,
  }),
  getters: {
    isSidebarOpen: (state): boolean => {
      return state.sidebar
    },
    getSidebarWidth: (state): string => {
      return state.sidebarWidth
    },
    getMenuItems: (state): MenuMapItem[] => {
      return state.menuItems
    },
  },
  actions: {
    toggleSidebar() {
      if (this.sidebar)
        this.closeSidebar()
      else
        this.openSidebar()
    },
    openSidebar() {
      if (!this.sidebar) {
        this.sidebar = !this.sidebar
        this.sidebarWidth = "210px"
      }
    },
    closeSidebar() {
      if (this.sidebar) {
        this.sidebar = !this.sidebar
        this.sidebarWidth = "64px"
      }
    }
  },
})
