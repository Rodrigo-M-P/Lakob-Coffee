"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Coffee } from "lucide-react"
import { Button } from "@/components/ui/button"

// Quitar "Premium" del nombre del café
const coffeeProduct = {
  id: 1,
  name: "Café Lakobá",
  price: "$14.99",
  image: "/images/coffee-bag-open.jpeg",
  category: "Tueste Medio Oscuro",
  description:
    "Nuestro café insignia con notas de chocolate y nuez. Una experiencia sensorial única que refleja la rica tradición cafetalera de las tierras altas de Chiapas.",
  rating: 5,
  details: {
    variedades: "Catimor, Sarchimor",
    seleccion: "Europea",
    proceso: "Lavado",
    criba: "14",
    altura: "1200-1400 msnm",
    densidad: "706 g/lt",
    rendimiento: "56.05 qq/kg",
    humedad: "11.5%",
    cuerpo: "Medio",
    acidez: "Media",
    olfato: "Notas de chocolate y nuez",
    gusto: "Sabor a nueces, avellana y chocolate con una acidez media, cuerpo cremoso y un resabio a cacao",
  },
}

export default function SingleCoffeeProduct() {
  return (
    <div className="py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative h-[500px] rounded-lg overflow-hidden"
        >
          <Image
            src={coffeeProduct.image || "/placeholder.svg"}
            alt={coffeeProduct.name}
            fill
            className="object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center mb-2">
            <span className="text-sm text-gold-500">{coffeeProduct.category}</span>
            <div className="flex ml-4"></div>
          </div>

          <h2 className="text-3xl md:text-4xl font-light text-gold-300 mb-4">{coffeeProduct.name}</h2>
          <p className="text-2xl text-gold-500 font-medium mb-6">{coffeeProduct.price}</p>

          <p className="text-gold-100 mb-8">{coffeeProduct.description}</p>

          <div className="mb-8">
            <Button className="bg-gold-500 hover:bg-gold-600 text-black px-6 py-3 rounded-md font-medium cursor-hover">
              Comprar Ahora
            </Button>
          </div>

          <div className="bg-gold-950/30 p-6 rounded-lg border border-gold-900/30 mb-8">
            <div className="flex items-center mb-4">
              <Coffee className="h-5 w-5 text-gold-500 mr-2" />
              <h3 className="text-xl font-light text-gold-300">Características</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="flex justify-between border-b border-gold-800/30 pb-1">
                  <span className="text-gold-300 font-medium">Variedades:</span>
                  <span className="text-gold-100">{coffeeProduct.details.variedades}</span>
                </div>
                <div className="flex justify-between border-b border-gold-800/30 pb-1">
                  <span className="text-gold-300 font-medium">Selección:</span>
                  <span className="text-gold-100">{coffeeProduct.details.seleccion}</span>
                </div>
                <div className="flex justify-between border-b border-gold-800/30 pb-1">
                  <span className="text-gold-300 font-medium">Proceso:</span>
                  <span className="text-gold-100">{coffeeProduct.details.proceso}</span>
                </div>
                <div className="flex justify-between border-b border-gold-800/30 pb-1">
                  <span className="text-gold-300 font-medium">Criba:</span>
                  <span className="text-gold-100">{coffeeProduct.details.criba}</span>
                </div>
                <div className="flex justify-between border-b border-gold-800/30 pb-1">
                  <span className="text-gold-300 font-medium">Altura:</span>
                  <span className="text-gold-100">{coffeeProduct.details.altura}</span>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between border-b border-gold-800/30 pb-1">
                  <span className="text-gold-300 font-medium">Densidad:</span>
                  <span className="text-gold-100">{coffeeProduct.details.densidad}</span>
                </div>
                <div className="flex justify-between border-b border-gold-800/30 pb-1">
                  <span className="text-gold-300 font-medium">Rendimiento:</span>
                  <span className="text-gold-100">{coffeeProduct.details.rendimiento}</span>
                </div>
                <div className="flex justify-between border-b border-gold-800/30 pb-1">
                  <span className="text-gold-300 font-medium">Humedad:</span>
                  <span className="text-gold-100">{coffeeProduct.details.humedad}</span>
                </div>
                <div className="flex justify-between border-b border-gold-800/30 pb-1">
                  <span className="text-gold-300 font-medium">Cuerpo:</span>
                  <span className="text-gold-100">{coffeeProduct.details.cuerpo}</span>
                </div>
                <div className="flex justify-between border-b border-gold-800/30 pb-1">
                  <span className="text-gold-300 font-medium">Acidez:</span>
                  <span className="text-gold-100">{coffeeProduct.details.acidez}</span>
                </div>
              </div>
            </div>

            <div className="mt-4 space-y-3">
              <div className="flex justify-between border-b border-gold-800/30 pb-1">
                <span className="text-gold-300 font-medium">Olfato:</span>
                <span className="text-gold-100">{coffeeProduct.details.olfato}</span>
              </div>
              <div className="flex justify-between items-start border-b border-gold-800/30 pb-1">
                <span className="text-gold-300 font-medium">Gusto:</span>
                <span className="text-gold-100 text-right max-w-[70%]">{coffeeProduct.details.gusto}</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
