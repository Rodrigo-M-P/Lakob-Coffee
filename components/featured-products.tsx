"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import MagneticButton from "./magnetic-button"
import Link from "next/link"

// Quitar "Premium" del nombre del café
const product = {
  id: 1,
  name: "Café Lakobá",
  price: "$15.99",
  image: "/images/lakoba-package.png",
  category: "Tueste Medio Oscuro",
  description:
    "Nuestro café insignia con notas de chocolate y nuez. Una experiencia sensorial única que refleja la rica tradición cafetalera de las tierras altas de la región maya.",
}

export default function FeaturedProducts() {
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.3], [0, 1, 1])
  const scale = useTransform(scrollYProgress, [0, 0.2], [0.95, 1])

  return (
    <motion.div ref={containerRef} className="relative" style={{ opacity, scale }}>
      <div className="relative h-[500px] md:h-[600px] overflow-hidden">
        <motion.div className="absolute inset-0 flex flex-col md:flex-row">
          <div className="relative w-full md:w-2/3 h-[300px] md:h-full overflow-hidden">
            <Image
              src="/images/dark-roasted-beans.webp"
              alt="Granos de café tostados"
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          </div>

          <motion.div
            className="w-full md:w-1/3 p-8 md:p-12 flex flex-col justify-center bg-gold-950 border-l border-gold-800/30"
            style={{ y }}
          >
            <span className="text-sm text-gold-500 mb-2">{product.category}</span>
            <h3 className="text-2xl md:text-3xl font-light mb-4 text-gold-300">{product.name}</h3>
            <p className="text-gold-100 mb-4">{product.description}</p>
            <p className="text-xl mb-6 text-gold-400">{product.price}</p>
            <Link href="/coffee">
              <MagneticButton className="w-fit bg-gold-500 text-black px-6 py-3 rounded-md hover:bg-gold-600 transition-colors cursor-hover">
                Ver Detalles
              </MagneticButton>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  )
}
