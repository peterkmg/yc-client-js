import { defineStore } from 'pinia'
import type { User } from '@supabase/supabase-js'
import api from '@/api'

export interface UserState {
  username: string
  email: string
}

export default defineStore({
  id: 'user',
  state: (): UserState => ({
    username: '',
    email: '',
  }),
  actions: {
    async fetchUserData(user: User): Promise<string | undefined> {
      const result = await api.service.user.getSingle(user.id)
      if (result.data && result.data.length !== 0 && result.data[0].username) {
        this.username = result.data[0].username
        if (user.email) this.email = user.email
      }
      return result.error
    },
  },
})
