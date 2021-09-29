import { defineStore } from 'pinia'
import type { User, Session } from '@supabase/supabase-js'
import db from '@/database'

export interface AuthState {
  user: User | null | undefined
  session: Session | null
}

export default defineStore({
  id: 'auth',
  state: (): AuthState => ({
    user: db.auth.session()?.user ?? db.auth.user(),
    session: db.auth.session(),
  }),
  getters: {
    isAuthenticated: (state) => state.session !== null,
  },
  actions: {
    setUser(user: User | null | undefined) {
      this.user = user
    },
    setSession(session: Session | null) {
      this.session = session
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
