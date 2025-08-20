import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Database types for TypeScript
export interface EarlySignup {
  id?: string
  first_name: string
  last_name: string
  email: string
  phone: string
  company?: string
  role?: string
  industry?: string
  user_type?: string
  created_at?: string
  updated_at?: string
}

// Table name
export const TABLES = {
  EARLY_SIGNUP: 'early_signup'
} as const
