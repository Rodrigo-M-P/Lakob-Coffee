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
      <div className="relative overflow-hidden px-4 sm:px-0">
        <motion.div className="flex flex-col md:flex-row bg-gold-950/20 rounded-xl overflow-hidden border border-gold-900/30 shadow-xl">
          <div className="relative w-full md:w-1/2 h-[350px] md:h-[500px] overflow-hidden bg-gradient-to-br from-black to-gold-950/50 p-6 md:p-8 flex items-center justify-center">
            <div className="relative h-full w-full max-w-[250px] md:max-w-[300px] mx-auto">
              <Image
                src="/images/lakoba-package.png"
                alt="Café Lakobá"
                fill
                className="object-contain drop-shadow-2xl transform transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>

          <motion.div
            className="w-full md:w-1/2 p-6 md:p-12 flex flex-col justify-center bg-black/90 relative"
            style={{ y }}
          >
            <div className="flex items-center mb-2">
              <span className="text-sm text-gold-500 font-medium px-3 py-1 rounded-full bg-gold-900/30 inline-block">
                {product.category}
              </span>
            </div>

            <h3 className="text-2xl md:text-4xl font-light mb-4 text-gold-300">{product.name}</h3>

            <div className="flex items-center mb-4">
              <p className="text-xl md:text-2xl text-gold-400 font-medium">{product.price}</p>
            </div>

            <p className="text-gold-100 mb-6 text-sm md:text-base">{product.description}</p>

            <div className="grid grid-cols-2 gap-3 md:gap-4 mb-6">
              <div className="flex items-center">
                <Coffee className="h-4 w-4 md:h-5 md:w-5 text-gold-500 mr-2" />
                <span className="text-gold-200 text-xs md:text-sm">100% Orgánico</span>
              </div>
              <div className="flex items-center">
                <Award className="h-4 w-4 md:h-5 md:w-5 text-gold-500 mr-2" />
                <span className="text-gold-200 text-xs md:text-sm">Origen Único</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <a
                href="https://store.lakobacoffee.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-gold-500 hover:bg-gold-600 text-black px-4 md:px-6 py-3 md:py-4 rounded-md font-medium flex items-center justify-center transition-colors cursor-hover group text-sm md:text-base"
              >
                <ShoppingCart className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                Comprar Ahora
              </a>
              <Link
                href="/coffee"
                className="flex-1 bg-transparent border border-gold-500 text-gold-300 hover:bg-gold-900/30 px-4 md:px-6 py-3 md:py-4 rounded-md font-medium flex items-center justify-center transition-colors cursor-hover text-sm md:text-base"
              >
                Ver Detalles
              </Link>
            </div>

            <div className="mt-5 md:mt-6 text-xs md:text-sm text-gold-300/70 flex items-center">
              <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              Envío gratis en pedidos superiores a $30
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  )
}
