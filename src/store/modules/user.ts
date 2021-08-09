import { defineStore } from 'pinia'

export default defineStore({
  id: 'user',
  state: () => ({
    name: '',
    role: '',
    token: '',
  }),
  getters: {
    isAuthenticated: (state) => state.token !== '',
  },
  actions: {
    login() {
      this.name = 'SomeName'
      this.role = 'SomeRole'
      this.token = 'SomeToken'
    },
  },
})
