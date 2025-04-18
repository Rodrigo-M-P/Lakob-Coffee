"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import MobileImage from "./mobile-image"

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
  const [isMobile, setIsMobile] = useState(false)

  // Detectar si es dispositivo móvil
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => {
      window.removeEventListener("resize", checkMobile)
    }
  }, [])

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

        {isMobile ? (
          // Versión móvil simplificada
          <div className="space-y-8">
            {locations.map((location) => (
              <div key={location.id} className="bg-black border border-gold-900/30 rounded-lg overflow-hidden">
                <MobileImage src={location.image} alt={location.name} />
                <div className="p-4">
                  <h3 className="text-xl font-light text-gold-300 mb-2">{location.name}</h3>
                  <p className="text-gold-100 text-sm">{location.description}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          // Versión desktop interactiva
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 items-center">
            <div className="relative h-[500px] bg-black rounded-lg overflow-hidden border border-gold-900/30">
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

            <div className="bg-black p-8 rounded-lg border border-gold-900/30">
              <h3 className="text-3xl font-light mb-6 text-gold-300">Nuestras Ubicaciones</h3>

              <div className="space-y-4">
                {locations.map((location) => (
                  <button
                    key={location.id}
                    onClick={() => setActiveLocation(location)}
                    className={`w-full text-left p-4 rounded-lg transition-colors ${
                      activeLocation.id === location.id
                        ? "bg-black border border-gold-500"
                        : "bg-black border border-gold-900/20 hover:bg-gold-900/30"
                    }`}
                  >
                    <h4
                      className={`text-xl font-light mb-2 ${
                        activeLocation.id === location.id ? "text-gold-300" : "text-gold-400"
                      }`}
                    >
                      {location.name}
                    </h4>
                    {activeLocation.id === location.id && <p className="text-gold-100">{location.description}</p>}
                  </button>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-gold-900/30">
                <p className="text-gold-100">
                  <span className="text-gold-300 font-medium">Nuestro Compromiso:</span> Parte de nuestras utilidades se
                  destina a apoyar la preservación del patrimonio cultural maya y el desarrollo de las comunidades
                  locales en la región.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
