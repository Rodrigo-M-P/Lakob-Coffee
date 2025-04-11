"use client"

import { useRef, type ReactNode } from "react"
import { motion, useInView } from "framer-motion"

interface RevealTextProps {
  children: ReactNode
  className?: string
  delay?: number
}

export default function RevealText({ children, className = "", delay = 0 }: RevealTextProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div
        initial={{ y: "100%" }}
        animate={isInView ? { y: 0 } : { y: "100%" }}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
          delay,
        }}
      >
        {children}
      </motion.div>
    </div>
  )
}
