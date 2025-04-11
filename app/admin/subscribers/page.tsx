"use client"

import { useState, useEffect } from "react"
import { supabase } from "@/lib/supabase"
import { motion } from "framer-motion"
import { Download, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

type Subscriber = {
  id: number
  email: string
  subscribed_at?: string
  status?: string
}

export default function SubscribersPage() {
  const [subscribers, setSubscribers] = useState<Subscriber[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchSubscribers()
  }, [])

  async function fetchSubscribers() {
    try {
      setLoading(true)

      // Get the Supabase client
      const supabaseClient = supabase

      // Check if Supabase client is available
      if (!supabaseClient) {
        throw new Error("Supabase client not available")
      }

      const { data, error } = await supabaseClient.from("subscribers").select("*").order("id", { ascending: false })

      if (error) {
        throw error
      }

      setSubscribers(data || [])
    } catch (error) {
      console.error("Error fetching subscribers:", error)
      setError("Failed to load subscribers. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  async function deleteSubscriber(id: number) {
    if (!confirm("Are you sure you want to delete this subscriber?")) {
      return
    }

    try {
      // Check if Supabase client is available
      if (!supabase) {
        throw new Error("Supabase client not available")
      }

      const { error } = await supabase.from("subscribers").delete().eq("id", id)

      if (error) {
        throw error
      }

      setSubscribers(subscribers.filter((sub) => sub.id !== id))
    } catch (error) {
      console.error("Error deleting subscriber:", error)
      setError("Failed to delete subscriber. Please try again.")
    }
  }

  function exportToCSV() {
    try {
      const headers = ["Email", "Subscribed At"]
      const csvData = subscribers.map((sub) => [
        sub.email,
        sub.subscribed_at ? new Date(sub.subscribed_at).toLocaleString() : "N/A",
      ])

      const csvContent = [headers.join(","), ...csvData.map((row) => row.join(","))].join("\n")

      const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" })
      const url = URL.createObjectURL(blob)
      const link = document.createElement("a")
      link.setAttribute("href", url)
      link.setAttribute("download", `lakoba-subscribers-${new Date().toISOString().split("T")[0]}.csv`)
      link.style.visibility = "hidden"
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    } catch (error) {
      console.error("Error exporting to CSV:", error)
      setError("Failed to export subscribers. Please try again.")
    }
  }

  const filteredSubscribers = subscribers.filter((sub) => sub.email.toLowerCase().includes(searchTerm.toLowerCase()))

  return (
    <main className="pt-32 pb-24 bg-black min-h-screen">
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-light text-gold-300">Newsletter Subscribers</h1>
            <Button onClick={exportToCSV} className="bg-gold-500 hover:bg-gold-600 text-black">
              <Download className="mr-2 h-4 w-4" />
              Export CSV
            </Button>
          </div>

          <div className="mb-6">
            <Input
              type="text"
              placeholder="Search by email..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="max-w-md bg-gold-900/30 border-gold-800/50 text-gold-100 focus-visible:ring-gold-500"
            />
          </div>

          {error && <div className="bg-red-900/30 border border-red-800 text-red-300 p-4 rounded-md mb-6">{error}</div>}

          {loading ? (
            <div className="text-gold-300 text-center py-12">Loading subscribers...</div>
          ) : filteredSubscribers.length === 0 ? (
            <div className="text-gold-300 text-center py-12">
              {searchTerm ? "No subscribers match your search." : "No subscribers yet."}
            </div>
          ) : (
            <div className="bg-gold-950/30 border border-gold-900/30 rounded-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gold-900/50">
                      <th className="px-6 py-3 text-left text-xs font-medium text-gold-300 uppercase tracking-wider">
                        Email
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gold-300 uppercase tracking-wider">
                        Subscribed At
                      </th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-gold-300 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gold-900/30">
                    {filteredSubscribers.map((subscriber) => (
                      <tr key={subscriber.id} className="hover:bg-gold-900/20">
                        <td className="px-6 py-4 whitespace-nowrap text-gold-100">{subscriber.email}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-gold-100">
                          {subscriber.subscribed_at ? new Date(subscriber.subscribed_at).toLocaleString() : "N/A"}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => deleteSubscriber(subscriber.id)}
                            className="text-red-400 hover:text-red-500 hover:bg-red-900/20"
                          >
                            <Trash2 className="h-4 w-4" />
                            <span className="sr-only">Delete</span>
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          <div className="mt-4 text-sm text-gold-400">Total subscribers: {subscribers.length}</div>
        </motion.div>
      </div>
    </main>
  )
}
