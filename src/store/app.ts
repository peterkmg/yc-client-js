import { defineStore } from 'pinia'
import type { MenuMapItem } from '@/config/menuMap'
import menuItems from '@/config/menuMap'
import { APP_NAME } from '@/config/constants'

export interface AppState {
  path: string
  title: string
  sidebar: boolean
  allowEdit: boolean
  menuItems: MenuMapItem[]
}

export default defineStore({
  id: 'app',
  state: () => ({
    path: '',
    title: APP_NAME,
    sidebar: true,
    allowEdit: false,
    menuItems,
  }),
  actions: {
    toggleSidebar() {
      this.sidebar = !this.sidebar
    },
    toggleEditMode() {
      this.allowEdit = !this.allowEdit
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
