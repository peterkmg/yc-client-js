import { defineStore } from 'pinia'
import type { User, Session } from '@supabase/supabase-js'
import db from '@/database'

export interface AuthState {
  user: User | null
  session: Session | null
  userdata: {
    username?: string
    icon?: string
  }
  isAuthenticated: boolean
}

export default defineStore({
  id: 'auth',
  state: (): AuthState => ({
    user: db.auth.session()?.user ?? db.auth.user(),
    session: db.auth.session(),
    userdata: {
      username: 'User',
      icon: 'ci:user-circle',
    },
    isAuthenticated: false,
  }),
  getters: {},
  actions: {
    setUser(user: User | null) {
      this.user = user
    },
    setSession(session: Session | null) {
      this.session = session
    },
    setAuth(flag: boolean) {
      this.isAuthenticated = flag
    },
    async signIn(email: string, password: string): Promise<string | undefined> {
      const { error } = await db.auth.signIn({ email, password })
      return error?.message
    },
    async signOut(): Promise<string | undefined> {
      const { error } = await db.auth.signOut()
      return error?.message
    },
  },
})
