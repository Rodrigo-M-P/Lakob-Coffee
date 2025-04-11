"use client"

import { useState } from "react"
import { supabase } from "@/lib/supabase"
import { Button } from "@/components/ui/button"

export default function TestSupabasePage() {
  const [result, setResult] = useState<string>("")
  const [loading, setLoading] = useState(false)

  const testConnection = async () => {
    setLoading(true)
    setResult("Testing connection to Supabase...")

    try {
      // Check if Supabase client is available
      if (!supabase) {
        throw new Error("Supabase client not available. Please check your environment variables.")
      }

      // Test if we can connect to Supabase
      const { data, error } = await supabase.from("subscribers").select("count(*)").single()

      if (error) {
        throw error
      }

      setResult(`Connection successful! Found ${data.count} subscribers.`)
    } catch (error) {
      console.error("Error testing Supabase connection:", error)
      setResult(`Error connecting to Supabase: ${error instanceof Error ? error.message : String(error)}`)
    } finally {
      setLoading(false)
    }
  }

  const testInsert = async () => {
    setLoading(true)
    setResult("Testing insert to Supabase...")

    try {
      // Check if Supabase client is available
      if (!supabase) {
        throw new Error("Supabase client not available. Please check your environment variables.")
      }

      const testEmail = `test-${Date.now()}@example.com`

      // Test if we can insert a record - simplified to only include email
      const { data, error } = await supabase
        .from("subscribers")
        .insert([{ email: testEmail }])
        .select()

      if (error) {
        throw error
      }

      setResult(`Insert successful! Added test email: ${testEmail}`)
    } catch (error) {
      console.error("Error testing Supabase insert:", error)
      setResult(`Error inserting to Supabase: ${error instanceof Error ? error.message : String(error)}`)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="pt-32 pb-24 bg-black min-h-screen">
      <div className="container max-w-2xl mx-auto">
        <h1 className="text-3xl font-light text-gold-300 mb-8">Test Supabase Connection</h1>

        <div className="space-y-6">
          <div className="flex gap-4">
            <Button onClick={testConnection} disabled={loading} className="bg-gold-500 hover:bg-gold-600 text-black">
              Test Connection
            </Button>

            <Button onClick={testInsert} disabled={loading} className="bg-gold-500 hover:bg-gold-600 text-black">
              Test Insert
            </Button>
          </div>

          {result && (
            <div className="bg-gold-900/30 p-4 rounded-md border border-gold-800/50">
              <pre className="text-gold-100 whitespace-pre-wrap">{result}</pre>
            </div>
          )}

          <div className="bg-gold-900/30 p-4 rounded-md border border-gold-800/50">
            <h2 className="text-xl font-light text-gold-300 mb-4">Environment Variables</h2>
            <p className="text-gold-100">
              NEXT_PUBLIC_SUPABASE_URL: {process.env.NEXT_PUBLIC_SUPABASE_URL ? "Set" : "Not set"}
            </p>
            <p className="text-gold-100">
              NEXT_PUBLIC_SUPABASE_ANON_KEY: {process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ? "Set" : "Not set"}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
