"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Coffee, Leaf, Mountain, Globe } from "lucide-react"

// Categorías simplificadas
const categories = [
  {
    title: "Tueste Medio Oscuro",
    description: "Sabor equilibrado con notas de chocolate y caramelo",
    icon: <Coffee className="h-8 w-8 text-gold-500" />,
  },
  {
    title: "Café Orgánico",
    description: "Cultivado sin pesticidas ni fertilizantes químicos",
    icon: <Leaf className="h-8 w-8 text-gold-500" />,
  },
  {
    title: "Café de Altura",
    description: "Cultivado a 1400 metros sobre el nivel del mar",
    icon: <Mountain className="h-8 w-8 text-gold-500" />,
  },
  {
    title: "Café de Origen Único",
    description: "Exclusivamente de las tierras altas de Chiapas",
    icon: <Globe className="h-8 w-8 text-gold-500" />,
  },
]

export default function CoffeeCategoriesCarousel() {
  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  const nextSlide = () => {
    setCurrent(current === categories.length - 1 ? 0 : current + 1)
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? categories.length - 1 : current - 1)
  }

  useEffect(() => {
    let interval: NodeJS.Timeout

    if (autoplay) {
      interval = setInterval(() => {
        nextSlide()
      }, 5000)
    }

    return () => {
      if (interval) clearInterval(interval)
    }
  }, [current, autoplay])

  const handleInteraction = () => {
    setAutoplay(false)
    setTimeout(() => setAutoplay(true), 10000)
  }

  return (
    <div className="py-12 md:py-32 overflow-hidden bg-black text-white">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 items-center mb-8 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-5xl font-light tracking-tight text-gold-400 mb-3 md:mb-6">
              Nuestra Selección de Café
            </h2>
            <p className="text-gold-100 mb-4 md:mb-8 text-sm md:text-base">
              Descubre las características que hacen único a nuestro café, desde el cultivo hasta el tostado.
            </p>
            <div className="flex flex-wrap gap-2 md:gap-4">
              {categories.map((category, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrent(index)
                    handleInteraction()
                  }}
                  className={`px-2 md:px-4 py-1 md:py-2 rounded-full text-xs md:text-sm transition-colors ${
                    current === index
                      ? "bg-gold-500 text-black"
                      : "bg-black border border-gold-500/30 text-gold-300 hover:bg-gold-900/50"
                  }`}
                >
                  <span>{category.title}</span>
                </button>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative h-[200px] md:h-[400px] rounded-lg overflow-hidden"
          >
            <Image
              src="/images/coffee-bag-open.jpeg"
              alt="Bolsa de café abierta mostrando granos de café"
              fill
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          </motion.div>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-black p-4 md:p-12 rounded-lg border border-gold-800/30 text-center"
            >
              <div className="flex justify-center mb-3 md:mb-6">
                <div className="h-10 w-10 md:h-auto md:w-auto">{categories[current].icon}</div>
              </div>
              <h3 className="text-xl md:text-4xl font-light text-gold-300 mb-3 md:mb-6">{categories[current].title}</h3>
              <p className="text-gold-100 text-sm md:text-xl max-w-2xl mx-auto">{categories[current].description}</p>
            </motion.div>
          </AnimatePresence>

          <button
            className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 bg-black text-white p-1 md:p-2 rounded-full hover:bg-black/70 transition-colors z-10 border border-gold-500/30"
            onClick={() => {
              prevSlide()
              handleInteraction()
            }}
            aria-label="Categoría anterior"
          >
            <ChevronLeft className="h-4 w-4 md:h-6 md:w-6" />
          </button>

          <button
            className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 bg-black text-white p-1 md:p-2 rounded-full hover:bg-black/70 transition-colors z-10 border border-gold-500/30"
            onClick={() => {
              nextSlide()
              handleInteraction()
            }}
            aria-label="Siguiente categoría"
          >
            <ChevronRight className="h-4 w-4 md:h-6 md:w-6" />
          </button>
        </div>
      </div>
    </div>
  )
}
