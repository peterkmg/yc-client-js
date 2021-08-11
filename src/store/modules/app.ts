import { defineStore } from 'pinia'

export interface AppState {
  sidebar: boolean
  size: 'small' | 'medium' | 'large'
}

export default defineStore({
  id: 'app',
  state: (): AppState => ({
    sidebar: true,
    size: 'medium',
  }),
  getters: {
    isSidebarOpen: (state): boolean => { return state.sidebar },
    getSize: (state): string => { return state.size },
  },
  actions: {
    toggleSidebar() { this.sidebar = !this.sidebar },
    setSize(size: 'small' | 'medium' | 'large') { this.size = size },
  },
})
