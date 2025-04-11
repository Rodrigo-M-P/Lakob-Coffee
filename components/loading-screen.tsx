"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // Simular progreso de carga
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + 5
      })
    }, 100)

    // Simular tiempo de carga
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2500)

    return () => {
      clearTimeout(timer)
      clearInterval(interval)
    }
  }, [])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 bg-black z-50 flex flex-col items-center justify-center"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: 1,
              scale: 1,
              transition: { duration: 0.5, delay: 0.2 },
            }}
            exit={{
              opacity: 0,
              scale: 1.2,
              transition: { duration: 0.5 },
            }}
            className="relative w-24 h-24"
          >
            <Image
              src="/images/lakoba-face-logo.png"
              alt="Logo de Lakobá"
              width={96}
              height={96}
              className="gold-glow"
            />
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.5, delay: 0.4 },
            }}
            className="text-gold-500 mt-4 font-light tracking-widest"
          >
            LAKOBÁ
          </motion.p>

          <motion.div className="w-48 h-[1px] bg-gold-900/30 mt-8 relative overflow-hidden">
            <motion.div
              className="h-full bg-gold-500"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ ease: "easeInOut" }}
            />
          </motion.div>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-gold-500/70 mt-2 text-xs">
            {progress}%
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
