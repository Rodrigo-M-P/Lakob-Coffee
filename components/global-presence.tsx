"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

const locations = [
  {
    id: "mexico",
    name: "México",
    description:
      "Nuestro origen y corazón. Trabajamos directamente con comunidades indigenas en la región para cultivar nuestro excepcional café de origen único.",
    image: "/images/mexico.jpeg",
  },
  {
    id: "italy",
    name: "Italia",
    description:
      "En la tierra del espresso, nuestro café de las regiones Mayas único ha encontrado un hogar entre los conocedores más exigentes.",
    image: "/images/italy.jpeg",
  },
  {
    id: "portugal",
    name: "Portugal",
    description:
      "Nuestra puerta de entrada a Europa, donde introducimos los auténticos sabores del café de las regiones Mayas a un público internacional apasionado.",
    image: "/images/portugal.jpeg",
  },
]

export default function GlobalPresence() {
  const [activeLocation, setActiveLocation] = useState(locations[0])

  return (
    <section className="bg-black py-24 md:py-32">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-6 text-gold-300">Presencia Global</h2>
          <p className="text-gold-100 max-w-[600px] mx-auto">
            Desde las tierras altas de la región maya hasta las cafeterías de Europa, estamos llevando el auténtico café
            de las regiones Mayas y su rica herencia cultural al mundo.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] md:h-[500px] bg-gray-900/50 rounded-lg overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeLocation.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <Image
                  src={activeLocation.image || "/placeholder.svg"}
                  alt={activeLocation.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/30"></div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="bg-black/50 p-8 rounded-lg border border-gold-900/30">
            <h3 className="text-2xl md:text-3xl font-light mb-6 text-gold-300">Nuestras Ubicaciones</h3>

            <div className="space-y-4">
              {locations.map((location) => (
                <motion.button
                  key={location.id}
                  onClick={() => setActiveLocation(location)}
                  className={`w-full text-left p-4 rounded-lg transition-colors ${
                    activeLocation.id === location.id
                      ? "bg-gold-900/50 border border-gold-800"
                      : "bg-black/30 border border-gold-900/20 hover:bg-gold-900/30"
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <h4
                    className={`text-xl font-light mb-2 ${
                      activeLocation.id === location.id ? "text-gold-300" : "text-gold-400"
                    }`}
                  >
                    {location.name}
                  </h4>
                  {activeLocation.id === location.id && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      className="text-gold-100"
                    >
                      {location.description}
                    </motion.p>
                  )}
                </motion.button>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-gold-900/30">
              <p className="text-gold-100">
                <span className="text-gold-300 font-medium">Nuestro Compromiso:</span> Parte de nuestras utilidades se
                destina directamente a la fundación Baktùn para apoyar la preservación del patrimonio cultural maya y el
                desarrollo de las comunidades locales.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
