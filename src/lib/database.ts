import { supabase, TABLES, type EarlySignup } from './supabase'

export class DatabaseService {
  /**
   * Insert a new early signup record
   */
  static async createEarlySignup(data: Omit<EarlySignup, 'id' | 'created_at' | 'updated_at'>) {
    try {
      const { data: result, error } = await supabase
        .from(TABLES.EARLY_SIGNUP)
        .insert([data])
        .select()
        .single()

      if (error) {
        console.error('Error creating early signup:', error)
        throw new Error(error.message)
      }

      return result
    } catch (error) {
      console.error('Database error:', error)
      throw error
    }
  }

  /**
   * Check if email already exists
   */
  static async checkEmailExists(email: string): Promise<boolean> {
    try {
      const { data, error } = await supabase
        .from(TABLES.EARLY_SIGNUP)
        .select('email')
        .eq('email', email)
        .single()

      if (error && error.code !== 'PGRST116') {
        console.error('Error checking email:', error)
        throw new Error(error.message)
      }

      return !!data
    } catch (error) {
      console.error('Database error:', error)
      throw error
    }
  }

  /**
   * Get all early signups (for admin purposes)
   */
  static async getAllEarlySignups() {
    try {
      const { data, error } = await supabase
        .from(TABLES.EARLY_SIGNUP)
        .select('*')
        .order('created_at', { ascending: false })

      if (error) {
        console.error('Error fetching early signups:', error)
        throw new Error(error.message)
      }

      return data
    } catch (error) {
      console.error('Database error:', error)
      throw error
    }
  }

  /**
   * Get early signup count
   */
  static async getEarlySignupCount(): Promise<number> {
    try {
      const { count, error } = await supabase
        .from(TABLES.EARLY_SIGNUP)
        .select('*', { count: 'exact', head: true })

      if (error) {
        console.error('Error counting early signups:', error)
        throw new Error(error.message)
      }

      return count || 0
    } catch (error) {
      console.error('Database error:', error)
      throw error
    }
  }
}
