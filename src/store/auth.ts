import { defineStore } from 'pinia'
import supabase from '@/database'
import type { User, Session } from '@supabase/supabase-js'

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
    user: supabase.auth.session()?.user ?? supabase.auth.user(),
    session: supabase.auth.session(),
    userdata: {
      username: 'User',
      icon: 'ci:user-circle'
    },
    isAuthenticated: false
  }),
  getters: {},
  actions: {
    setUser(user: User | null) { this.user = user },
    setSession(session: Session | null) { this.session = session },
    setAuth(flag: boolean) { this.isAuthenticated = flag },
    async signIn(email: string, password: string): Promise<Error | null> {
      const { error } = await supabase.auth.signIn({ email, password })
      return error ?? null
    },
    async signOut(): Promise<Error| null> {
      const { error } = await supabase.auth.signOut()
      return error ?? null
    }
  },
})
