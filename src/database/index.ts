import { createClient } from '@supabase/supabase-js'
import dict from './tables/dict'
import docs from './tables/docs'
import service from './tables/service'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string

const db = createClient(supabaseUrl, supabaseAnonKey)

export const tables = {
  dict,
  docs,
  service,
}

export default db
