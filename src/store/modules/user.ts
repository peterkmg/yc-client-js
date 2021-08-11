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
    getUsername: (state) => state.name,
    getUserIcon: (state) => state.icon,
    isAuthenticated: (state) => state.token !== '',
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
