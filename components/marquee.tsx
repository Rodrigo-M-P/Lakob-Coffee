"use client"

import type { ReactNode } from "react"

interface MarqueeProps {
  children: ReactNode
  className?: string
  speed?: "slow" | "normal" | "fast"
  reverse?: boolean
}

export default function Marquee({ children, className = "", speed = "normal", reverse = false }: MarqueeProps) {
  const speedMap = {
    slow: "animate-marquee-slow",
    normal: "animate-marquee",
    fast: "animate-marquee-fast",
  }

  const directionClass = reverse ? "flex-row-reverse" : "flex-row"

  return (
    <div className={`overflow-hidden whitespace-nowrap ${className}`}>
      <div className={`flex ${directionClass} w-fit`}>
        <div className={speedMap[speed]}>{children}</div>
        <div className={speedMap[speed]}>{children}</div>
      </div>
    </div>
  )
}
