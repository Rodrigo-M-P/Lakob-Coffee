"use client"

import { useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import RevealText from "./reveal-text"

// Actualizado para mostrar solo un tipo de tueste: medio oscuro
const categories = [
  {
    name: "Tueste Medio Oscuro",
    description: "Sabor equilibrado con notas de chocolate y caramelo",
    image: "/placeholder.svg?height=800&width=600",
    link: "/coffee",
  },
  {
    name: "Café Orgánico",
    description: "Cultivado sin pesticidas ni fertilizantes químicos",
    image: "/placeholder.svg?height=800&width=600",
    link: "/coffee",
  },
  {
    name: "Café de Altura",
    description: "Cultivado a 1400 metros sobre el nivel del mar",
    image: "/placeholder.svg?height=800&width=600",
    link: "/coffee",
  },
  {
    name: "Café de Origen Único",
    description: "Exclusivamente de las tierras altas de Chiapas",
    image: "/placeholder.svg?height=800&width=600",
    link: "/coffee",
  },
]

export default function CategoryShowcase() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const x = useTransform(scrollYProgress, [0, 1], [0, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.3], [0, 1, 1])
  const scale = useTransform(scrollYProgress, [0, 0.2], [0.95, 1])

  return (
    <section ref={containerRef} className="py-24 md:py-32 overflow-hidden bg-black/95 text-white mayan-pattern">
      <motion.div className="container mb-16" style={{ opacity, scale }}>
        <RevealText>
          <h2 className="text-3xl md:text-5xl font-light tracking-tight text-gold-400">Nuestra Selección de Café</h2>
        </RevealText>
      </motion.div>

      <motion.div className="flex space-x-6 md:space-x-12 px-8 md:px-16" style={{ x, opacity }}>
        {categories.map((category, index) => (
          <Link
            key={category.name}
            href={category.link}
            className="group cursor-hover relative flex-shrink-0 w-[280px] md:w-[400px] h-[400px] md:h-[600px] overflow-hidden"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <motion.div
              animate={{
                scale: hoveredIndex === index ? 1.05 : 1,
              }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="w-full h-full"
            >
              <Image src={category.image || "/placeholder.svg"} alt={category.name} fill className="object-cover" />
            </motion.div>

            <motion.div
              className="absolute inset-0 bg-black/50"
              animate={{
                opacity: hoveredIndex === index ? 0.6 : 0.5,
              }}
              transition={{ duration: 0.6 }}
            />

            <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
              <motion.h3
                className="text-2xl md:text-3xl font-light mb-2 text-champagne-200"
                animate={{
                  y: hoveredIndex === index ? -10 : 0,
                }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                {category.name}
              </motion.h3>

              <motion.p
                className="text-sm md:text-base opacity-80"
                animate={{
                  opacity: hoveredIndex === index ? 1 : 0.8,
                  y: hoveredIndex === index ? -10 : 0,
                }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                {category.description}
              </motion.p>

              <motion.div
                className="w-8 h-[1px] bg-gold-500 mt-4"
                animate={{
                  width: hoveredIndex === index ? 50 : 32,
                }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>
          </Link>
        ))}
      </motion.div>
    </section>
  )
}
