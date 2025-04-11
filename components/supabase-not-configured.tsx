"use client"

import { AlertCircle } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function SupabaseNotConfigured() {
  return (
    <div className="bg-gold-900/30 p-6 rounded-lg border border-gold-800/50 flex flex-col items-center text-center">
      <AlertCircle className="h-12 w-12 text-gold-500 mb-4" />
      <h3 className="text-xl font-light text-gold-300 mb-2">Supabase Not Configured</h3>
      <p className="text-gold-100 mb-6">
        The Supabase integration is not properly configured. Please set up your environment variables.
      </p>
      <div className="space-y-4 w-full max-w-md">
        <div className="bg-black/30 p-4 rounded-md">
          <p className="text-sm text-gold-300 font-mono mb-2">NEXT_PUBLIC_SUPABASE_URL</p>
          <p className="text-sm text-gold-300 font-mono">NEXT_PUBLIC_SUPABASE_ANON_KEY</p>
        </div>
        <Link href="/test-supabase">
          <Button className="w-full bg-gold-500 hover:bg-gold-600 text-black">Test Supabase Connection</Button>
        </Link>
      </div>
    </div>
  )
}
