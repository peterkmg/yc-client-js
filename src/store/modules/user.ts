import { defineStore } from 'pinia'

export interface UserState {
  name: string
  role: string
  token: string
}

export default defineStore({
  id: 'user',
  state: () => ({
    name: '',
    role: '',
    token: '',
    icon: 'ci:user-circle',
  }),
  getters: {
    getUsername: (state): string => state.name,
    getUserIcon: (state): string => state.icon,
    isAuthenticated: (state): boolean => state.token !== '',
  },
  actions: {
    login() {
      this.name = 'SomeName'
      this.role = 'SomeRole'
      this.token = 'SomeToken'
    },
    changeUserIcon(icon: string) {
      this.icon = icon
    },
  },
})
