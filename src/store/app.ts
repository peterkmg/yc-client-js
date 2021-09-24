import { defineStore } from 'pinia'
import en from 'element-plus/packages/locale/es/lang/en'
import ru from '@/config/element-locale'
import type { MenuMapItem } from '@/config/menuMap'
import menuItems from '@/config/menuMap'
import { APP_NAME } from '@/config/constants'

export interface AppState {
  path: string
  title: string
  sidebar: boolean
  locale: typeof en
  locales: typeof en[]
  allowEdit: boolean
  menuItems: MenuMapItem[]
}

export default defineStore({
  id: 'app',
  state: (): AppState => ({
    path: '',
    title: APP_NAME,
    locale: ru,
    locales: [en, ru],
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
