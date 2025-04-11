"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

// Imágenes para el carrusel
const carouselImages = [
  {
    src: "/placeholder.svg?height=600&width=500&text=Café+Lakobá+1",
    alt: "Café Lakobá - Vista 1",
  },
  {
    src: "/placeholder.svg?height=600&width=500&text=Café+Lakobá+2",
    alt: "Café Lakobá - Vista 2",
  },
  {
    src: "/placeholder.svg?height=600&width=500&text=Café+Lakobá+3",
    alt: "Café Lakobá - Vista 3",
  },
  {
    src: "/placeholder.svg?height=600&width=500&text=Café+Lakobá+4",
    alt: "Café Lakobá - Vista 4",
  },
]

export default function CoffeeCarousel() {
  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  // Función para ir a la siguiente imagen
  const nextSlide = () => {
    setCurrent(current === carouselImages.length - 1 ? 0 : current + 1)
  }

  // Función para ir a la imagen anterior
  const prevSlide = () => {
    setCurrent(current === 0 ? carouselImages.length - 1 : current - 1)
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
    <div className="relative h-[500px] rounded-lg overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          <Image
            src={carouselImages[current].src || "/placeholder.svg"}
            alt={carouselImages[current].alt}
            fill
            className="object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* Controles del carrusel */}
      <button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors z-10"
        onClick={() => {
          prevSlide()
          handleInteraction()
        }}
        aria-label="Imagen anterior"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors z-10"
        onClick={() => {
          nextSlide()
          handleInteraction()
        }}
        aria-label="Siguiente imagen"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Indicadores */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {carouselImages.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrent(index)
              handleInteraction()
            }}
            className={`w-3 h-3 rounded-full ${index === current ? "bg-gold-500" : "bg-white/50"} transition-colors`}
            aria-label={`Ir a imagen ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
