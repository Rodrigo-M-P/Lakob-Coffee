"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Coffee, Leaf, Mountain, Globe } from "lucide-react"

// Categorías para el carrusel con iconos
const categories = [
  {
    title: "Tueste Medio Oscuro",
    description: "Sabor equilibrado con notas de chocolate y caramelo",
    icon: <Coffee className="h-10 w-10 text-gold-500" />,
  },
  {
    title: "Café Orgánico",
    description: "Cultivado sin pesticidas ni fertilizantes químicos",
    icon: <Leaf className="h-10 w-10 text-gold-500" />,
  },
  {
    title: "Café de Altura",
    description: "Cultivado a 1400 metros sobre el nivel del mar",
    icon: <Mountain className="h-10 w-10 text-gold-500" />,
  },
  {
    title: "Café de Origen Único",
    description: "Exclusivamente de las tierras altas de la región maya",
    icon: <Globe className="h-10 w-10 text-gold-500" />,
  },
]

export default function CoffeeCategoriesCarousel() {
  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  // Función para ir a la siguiente categoría
  const nextSlide = () => {
    setCurrent(current === categories.length - 1 ? 0 : current + 1)
  }

  // Función para ir a la categoría anterior
  const prevSlide = () => {
    setCurrent(current === 0 ? categories.length - 1 : current - 1)
  }

  // Autoplay
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

  // Pausar autoplay al interactuar
  const handleInteraction = () => {
    setAutoplay(false)
    // Reanudar después de 10 segundos de inactividad
    setTimeout(() => setAutoplay(true), 10000)
  }

  return (
    <div className="py-24 md:py-32 overflow-hidden bg-black/95 text-white mayan-pattern">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-light tracking-tight text-gold-400 mb-6">
              Nuestra Selección de Café
            </h2>
            <p className="text-gold-100 mb-8">
              Descubre las características que hacen único a nuestro café, desde el método de cultivo hasta el proceso
              de tostado. Cada grano es seleccionado cuidadosamente para garantizar una experiencia sensorial
              excepcional que refleja la rica tradición cafetalera de las tierras altas de la región maya.
            </p>
            <div className="flex flex-wrap gap-4">
              {categories.map((category, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrent(index)
                    handleInteraction()
                  }}
                  className={`px-4 py-2 rounded-full text-sm transition-colors ${
                    current === index ? "bg-gold-500 text-black" : "bg-gold-900/30 text-gold-300 hover:bg-gold-900/50"
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
            className="relative h-[400px] rounded-lg overflow-hidden"
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
              className="bg-black/40 p-12 rounded-lg border border-gold-800/30 text-center"
            >
              <h3 className="text-3xl md:text-4xl font-light text-gold-300 mb-6">{categories[current].title}</h3>
              <p className="text-gold-100 text-xl max-w-2xl mx-auto">{categories[current].description}</p>
            </motion.div>
          </AnimatePresence>

          {/* Controles del carrusel */}
          <button
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors z-10"
            onClick={() => {
              prevSlide()
              handleInteraction()
            }}
            aria-label="Categoría anterior"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors z-10"
            onClick={() => {
              nextSlide()
              handleInteraction()
            }}
            aria-label="Siguiente categoría"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>
    </div>
  )
}
