import { createClient } from "@supabase/supabase-js"

// Create a singleton pattern for the Supabase client
let supabaseInstance: ReturnType<typeof createClient> | null = null

export function getSupabaseClient() {
  // These environment variables need to be set in your Vercel project
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  // Only create a client if both URL and key are available
  if (!supabaseUrl || !supabaseAnonKey) {
    console.warn("Supabase URL or Anon Key not available. Supabase client not initialized.")
    return null
  }

  // Create the client if it doesn't exist yet
  if (!supabaseInstance) {
    supabaseInstance = createClient(supabaseUrl, supabaseAnonKey)
  }

  return supabaseInstance
}

// For backward compatibility
export const supabase = getSupabaseClient()
