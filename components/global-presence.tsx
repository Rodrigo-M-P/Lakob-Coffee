"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

const locations = [
  {
    id: "mexico",
    name: "México",
    description:
      "Nuestro origen y corazón. En las tierras altas de Chiapas cultivamos nuestro excepcional café de origen único, respetando las tradiciones y el entorno natural de la región.",
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
    <section className="bg-black py-12 md:py-32">
      <div className="container">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-2xl md:text-5xl font-light tracking-tight mb-3 md:mb-6 text-gold-300">
            Presencia Global
          </h2>
          <p className="text-gold-100 max-w-[600px] mx-auto text-sm md:text-base">
            Desde las tierras altas de la región maya hasta las cafeterías de Europa, estamos llevando el auténtico café
            de las regiones Mayas y su rica herencia cultural al mundo.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 items-center">
          {/* Contenedor de imagen simplificado para mejor compatibilidad móvil */}
          <div className="relative h-[200px] md:h-[500px] bg-black rounded-lg overflow-hidden border border-gold-900/30">
            {/* Renderizar todas las imágenes pero mostrar solo la activa */}
            {locations.map((location) => (
              <div
                key={location.id}
                className="absolute inset-0"
                style={{
                  opacity: activeLocation.id === location.id ? 1 : 0,
                  transition: "opacity 0.5s ease-in-out",
                }}
              >
                <Image
                  src={location.image || "/placeholder.svg"}
                  alt={location.name}
                  fill
                  className="object-cover"
                  priority={activeLocation.id === location.id}
                />
                <div className="absolute inset-0 bg-black/40"></div>
              </div>
            ))}
          </div>

          <div className="bg-black p-4 md:p-8 rounded-lg border border-gold-900/30">
            <h3 className="text-xl md:text-3xl font-light mb-3 md:mb-6 text-gold-300">Nuestras Ubicaciones</h3>

            <div className="space-y-2 md:space-y-4">
              {locations.map((location) => (
                <motion.button
                  key={location.id}
                  onClick={() => setActiveLocation(location)}
                  className={`w-full text-left p-2 md:p-4 rounded-lg transition-colors ${
                    activeLocation.id === location.id
                      ? "bg-black border border-gold-500"
                      : "bg-black border border-gold-900/20 hover:bg-gold-900/30"
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <h4
                    className={`text-base md:text-xl font-light mb-1 md:mb-2 ${
                      activeLocation.id === location.id ? "text-gold-300" : "text-gold-400"
                    }`}
                  >
                    {location.name}
                  </h4>
                  {activeLocation.id === location.id && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      className="text-gold-100 text-xs md:text-base"
                    >
                      {location.description}
                    </motion.p>
                  )}
                </motion.button>
              ))}
            </div>

            <div className="mt-4 md:mt-8 pt-3 md:pt-6 border-t border-gold-900/30">
              <p className="text-gold-100 text-xs md:text-base">
                <span className="text-gold-300 font-medium">Nuestro Compromiso:</span> Parte de nuestras utilidades se
                destina a apoyar la preservación del patrimonio cultural maya y el desarrollo de las comunidades locales
                en la región.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
