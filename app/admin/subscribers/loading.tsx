import { Loader2 } from "lucide-react"

export default function Loading() {
  return (
    <div className="pt-32 pb-24 bg-black min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-center">
        <Loader2 className="h-12 w-12 text-gold-500 animate-spin mb-4" />
        <p className="text-gold-300">Loading subscribers...</p>
      </div>
    </div>
  )
}
