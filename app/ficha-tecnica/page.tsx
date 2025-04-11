"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Leaf, Coffee, Heart } from "lucide-react"

export default function FichaTecnicaPage() {
  return (
    <main className="pt-32 pb-24 bg-black min-h-screen">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link
            href="/"
            className="inline-flex items-center text-gold-400 hover:text-gold-500 transition-colors cursor-hover"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver al Inicio
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-light text-gold-300 mb-6">Ficha Técnica</h1>
          <p className="text-gold-100 max-w-3xl mx-auto">
            Conoce en detalle las características de nuestro café, nuestro compromiso con la calidad, el medio ambiente
            y las comunidades indígenas.
          </p>
        </motion.div>

        {/* Sección 1: Compromiso con la Calidad y el Medio Ambiente */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gold-900/30 rounded-full flex items-center justify-center mr-4">
                  <Leaf className="h-6 w-6 text-gold-500" />
                </div>
                <h2 className="text-3xl font-light text-gold-300">Compromiso con la Calidad y el Medio Ambiente</h2>
              </div>

              <div className="space-y-4 text-gold-100">
                <p>
                  El café que distribuimos proviene de fincas comprometidas con la siembra, cosecha y procesamiento de
                  granos de la más alta calidad, así como con la producción de otros cultivos 100% orgánicos. Estas
                  fincas se ubican en las montañas de Chiapas, en altitudes entre 1000 y 1400 msnm, asegurando un café
                  de altura con un perfil sensorial excepcional.
                </p>
                <p>
                  Los cafetales crecen a la sombra de especies como Tzelel, Chalum y distintas variedades de Ingas y
                  plátanos. Esta técnica permite conservar la biodiversidad, proporcionando hábitat a diversas especies
                  de aves y otros animales de la región.
                </p>
                <p>
                  Para garantizar un producto 100% orgánico, no se utilizan fertilizantes químicos. En su lugar, se
                  elaboran compostas con la pulpa del café y se produce humus de lombriz, empleado como fertilizante
                  natural, promoviendo así una agricultura sostenible y respetuosa con el medio ambiente.
                </p>
              </div>
            </div>

            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=600&text=Cultivo+Orgánico"
                alt="Cultivo orgánico de café"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </motion.section>

        {/* Sección 2: Experiencia Sensorial del Café */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-24 bg-gold-950/30 p-12 rounded-lg border border-gold-900/30"
        >
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 bg-gold-900/50 rounded-full flex items-center justify-center mr-4">
              <Coffee className="h-6 w-6 text-gold-500" />
            </div>
            <h2 className="text-3xl font-light text-gold-300">Experiencia Sensorial del Café</h2>
          </div>

          <p className="text-gold-100 mb-8">
            El café que ofrecemos es una combinación de las mejores variedades, seleccionadas cuidadosamente para
            brindar una experiencia inigualable.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex justify-between border-b border-gold-800/30 pb-2">
                <span className="text-gold-300 font-medium">Variedades:</span>
                <span className="text-gold-100">Catimor, Sarchimor</span>
              </div>
              <div className="flex justify-between border-b border-gold-800/30 pb-2">
                <span className="text-gold-300 font-medium">Selección:</span>
                <span className="text-gold-100">Europea</span>
              </div>
              <div className="flex justify-between border-b border-gold-800/30 pb-2">
                <span className="text-gold-300 font-medium">Proceso:</span>
                <span className="text-gold-100">Lavado</span>
              </div>
              <div className="flex justify-between border-b border-gold-800/30 pb-2">
                <span className="text-gold-300 font-medium">Criba:</span>
                <span className="text-gold-100">14</span>
              </div>
              <div className="flex justify-between border-b border-gold-800/30 pb-2">
                <span className="text-gold-300 font-medium">Altura:</span>
                <span className="text-gold-100">1200-1400 msnm</span>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between border-b border-gold-800/30 pb-2">
                <span className="text-gold-300 font-medium">Densidad:</span>
                <span className="text-gold-100">706 g/lt</span>
              </div>
              <div className="flex justify-between border-b border-gold-800/30 pb-2">
                <span className="text-gold-300 font-medium">Rendimiento:</span>
                <span className="text-gold-100">56.05 qq/kg</span>
              </div>
              <div className="flex justify-between border-b border-gold-800/30 pb-2">
                <span className="text-gold-300 font-medium">Humedad:</span>
                <span className="text-gold-100">11.5%</span>
              </div>
              <div className="flex justify-between border-b border-gold-800/30 pb-2">
                <span className="text-gold-300 font-medium">Cuerpo:</span>
                <span className="text-gold-100">Medio</span>
              </div>
              <div className="flex justify-between border-b border-gold-800/30 pb-2">
                <span className="text-gold-300 font-medium">Acidez:</span>
                <span className="text-gold-100">Media</span>
              </div>
            </div>
          </div>

          <div className="mt-8 space-y-4">
            <div className="flex justify-between border-b border-gold-800/30 pb-2">
              <span className="text-gold-300 font-medium">Olfato:</span>
              <span className="text-gold-100">Notas de chocolate y nuez</span>
            </div>
            <div className="flex justify-between border-b border-gold-800/30 pb-2">
              <span className="text-gold-300 font-medium">Gusto:</span>
              <span className="text-gold-100">
                Sabor a nueces, avellana y chocolate con una acidez media, cuerpo cremoso y un resabio a cacao.
              </span>
            </div>
          </div>
        </motion.section>

        {/* Sección 3: Apoyo a las Lenguas Indígenas */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=600&text=Lenguas+Indígenas"
                alt="Preservación de lenguas indígenas"
                fill
                className="object-cover"
              />
            </div>

            <div className="order-1 md:order-2">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gold-900/30 rounded-full flex items-center justify-center mr-4">
                  <Heart className="h-6 w-6 text-gold-500" />
                </div>
                <h2 className="text-3xl font-light text-gold-300">Apoyo a las Lenguas Indígenas</h2>
              </div>

              <div className="space-y-4 text-gold-100">
                <p>
                  Creemos firmemente en la importancia de preservar la riqueza cultural de México. Por ello, destinamos
                  parte de nuestros recursos al apoyo de fundaciones dedicadas a la conservación de las lenguas
                  indígenas del país.
                </p>
                <p>
                  A través de estas contribuciones, impulsamos proyectos que refuercen la identidad lingüística y el
                  patrimonio cultural de los pueblos originarios, fomentando así el respeto y la diversidad.
                </p>
                <p>
                  Nuestro compromiso va más allá de ofrecer un café excepcional; buscamos contribuir activamente a la
                  preservación de la riqueza cultural que hace único a nuestro país.
                </p>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </main>
  )
}
