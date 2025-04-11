"use client"

import { useRef, useEffect, useState } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight } from "lucide-react"
import MagneticButton from "./magnetic-button"
import RevealText from "./reveal-text"

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return

      const { clientX, clientY } = e
      const { left, top, width, height } = containerRef.current.getBoundingClientRect()

      const x = (clientX - left) / width
      const y = (clientY - top) / height

      setMousePosition({ x, y })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1])
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 100])

  return (
    <motion.section
      ref={containerRef}
      className="relative h-screen flex items-center overflow-hidden bg-black"
      style={{ opacity }}
    >
      <motion.div className="absolute inset-0 z-0" style={{ scale }}>
        <div className="absolute inset-0 bg-black" />
      </motion.div>

      <motion.div
        className="absolute inset-0 z-5 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, rgba(220, 189, 42, 0.1) 0%, rgba(0,0,0,0) 70%)`,
          opacity: 0.6,
        }}
      />

      <div className="container relative z-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.5 }}
          className="max-w-[800px] mx-auto"
          style={{ y }}
        >
          <motion.div
            className="mb-8 flex justify-center mt-24 md:mt-28" // Ajustado para bajar un poco el logo
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 2.3 }}
          >
            <Image
              src="/images/lakoba-full-logo.png"
              alt="Lakobá Café Maya"
              width={300}
              height={300}
              className="gold-glow"
            />
          </motion.div>

          <RevealText className="mb-6" delay={2.7}>
            <h2 className="text-2xl md:text-3xl font-light text-gold-300 italic">
              "Cada taza, un tributo a la tierra y su cultura."
            </h2>
          </RevealText>

          <RevealText className="mb-8" delay={2.9}>
            <p className="text-lg md:text-xl text-gold-100 max-w-[600px] mx-auto">
              Café excepcional de origen único de las tierras altas de Chiapas, México. Cultivado a 1400 metros sobre el
              nivel del mar para un desarrollo perfecto del sabor.
            </p>
          </RevealText>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 3.1 }}
          >
            <MagneticButton  href="/coffee" className="bg-gold-500 hover:bg-gold-600 text-black px-6 py-3 rounded-md font-medium flex items-center justify-center cursor-hover">
              Ordenar Ahora
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </MagneticButton>

            <MagneticButton href="/about" className="bg-transparent text-gold-100 border border-gold-500 hover:bg-gold-900/30 px-6 py-3 rounded-md font-medium cursor-hover">
              Conoce Nuestra Historia
            </MagneticButton>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 3.3,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            repeatDelay: 0.5,
          }}
          className="flex flex-col items-center text-gold-300/70"
        >
          <span className="text-sm mb-2">Desplázate para explorar</span>
          <div className="w-[1px] h-8 bg-gold-500/50" />
        </motion.div>
      </div>
    </motion.section>
  )
}
