"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { ShoppingCart, Coffee, Award } from "lucide-react"
import Link from "next/link"

// Quitar "Premium" del nombre del café
const product = {
  id: 1,
  name: "Café Lakobá",
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
      <div className="relative overflow-hidden px-2 sm:px-0">
        <motion.div className="flex flex-col md:flex-row bg-black rounded-lg overflow-hidden border border-gold-900/30 shadow-lg">
          <div className="relative w-full md:w-1/2 h-[250px] md:h-[500px] overflow-hidden bg-black p-4 md:p-8 flex items-center justify-center">
            <div className="relative h-full w-full max-w-[200px] md:max-w-[300px] mx-auto">
              <Image
                src="/images/lakoba-package.png"
                alt="Café Lakobá"
                fill
                className="object-contain drop-shadow-2xl transform transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>

          <motion.div
            className="w-full md:w-1/2 p-4 md:p-12 flex flex-col justify-center bg-black relative"
            style={{ y }}
          >
            <div className="flex items-center mb-2">
              <span className="text-xs md:text-sm text-gold-500 font-medium px-2 py-1 rounded-full bg-black border border-gold-500/30 inline-block">
                {product.category}
              </span>
            </div>

            <h3 className="text-xl md:text-4xl font-light mb-2 md:mb-4 text-gold-300">{product.name}</h3>

            <p className="text-gold-100 mb-3 md:mb-6 text-sm md:text-base">{product.description}</p>

            <div className="grid grid-cols-2 gap-2 md:gap-4 mb-3 md:mb-6">
              <div className="flex items-center">
                <Coffee className="h-3 w-3 md:h-5 md:w-5 text-gold-500 mr-1 md:mr-2" />
                <span className="text-gold-200 text-xs md:text-sm">100% Orgánico</span>
              </div>
              <div className="flex items-center">
                <Award className="h-3 w-3 md:h-5 md:w-5 text-gold-500 mr-1 md:mr-2" />
                <span className="text-gold-200 text-xs md:text-sm">Origen Único</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-2 md:gap-4">
              <a
                href="https://store.lakobacoffee.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-gold-500 hover:bg-gold-600 text-black px-3 md:px-6 py-2 md:py-4 rounded-md font-medium flex items-center justify-center transition-colors cursor-hover group text-xs md:text-base"
              >
                <ShoppingCart className="mr-1 md:mr-2 h-3 w-3 md:h-5 md:w-5" />
                Comprar Ahora
              </a>
              <Link
                href="/coffee"
                className="flex-1 bg-transparent border border-gold-500 text-gold-300 hover:bg-gold-900/30 px-3 md:px-6 py-2 md:py-4 rounded-md font-medium flex items-center justify-center transition-colors cursor-hover text-xs md:text-base"
              >
                Ver Detalles
              </Link>
            </div>

            <div className="mt-3 md:mt-6 text-xs md:text-sm text-gold-300/70 flex items-center">
              <span className="inline-block w-1.5 h-1.5 bg-green-500 rounded-full mr-1 md:mr-2"></span>
              Envío gratis en pedidos superiores a $30
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  )
}
