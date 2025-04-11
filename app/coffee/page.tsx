"use client"

import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { Leaf, Coffee, Heart } from "lucide-react"

import RevealText from "@/components/reveal-text"
import ImpactSection from "@/components/impact-section"
import CoffeeCategoriesCarousel from "@/components/coffee-categories-carousel"
import { Button } from "@/components/ui/button"

export default function CoffeePage() {
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
  const y = useTransform(scrollYProgress, [0, 0.2], [0, 100])

  return (
    <main className="bg-black min-h-screen">
      <section ref={containerRef} className="relative h-[70vh] flex items-center overflow-hidden bg-black">
        <motion.div className="absolute inset-0 z-0" style={{ opacity }}>
          <Image
            src="/images/coffee-branch-sunlight.jpeg"
            alt="Ramas de café bajo el sol"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/30" />
        </motion.div>

        <div className="container relative z-10">
          <motion.div className="max-w-3xl" style={{ y }}>
            <RevealText>
              <h1 className="text-4xl md:text-6xl font-light text-gold-300 mb-6">Nuestro Café</h1>
            </RevealText>
            <RevealText delay={0.1}>
              <p className="text-xl text-gold-100">
                Café excepcional de origen único de las tierras altas de la región maya. Cultivado a 1400 metros sobre
                el nivel del mar para un desarrollo perfecto del sabor.
              </p>
            </RevealText>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="container">
          {/* Primero: Sección del producto "Nuestro Café" */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="py-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="relative h-[500px] rounded-lg overflow-hidden">
                    <Image
                      src="/images/lakoba-package.png"
                      alt="Café Lakobá"
                      fill
                      className="object-contain bg-gray-900/30"
                    />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center mb-2">
                    <span className="text-sm text-gold-500">Tueste Medio Oscuro</span>
                  </div>

                  <h2 className="text-3xl md:text-4xl font-light text-gold-300 mb-4">Café Lakobá</h2>
                  <p className="text-2xl text-gold-500 font-medium mb-6">$14.99</p>

                  <p className="text-gold-100 mb-8">
                    Nuestro café insignia con notas de chocolate y nuez. Una experiencia sensorial única que refleja la
                    rica tradición cafetalera de las tierras altas de la región maya.
                  </p>

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
                          <span className="text-gold-100">Catimor, Sarchimor</span>
                        </div>
                        <div className="flex justify-between border-b border-gold-800/30 pb-1">
                          <span className="text-gold-300 font-medium">Selección:</span>
                          <span className="text-gold-100">Europea</span>
                        </div>
                        <div className="flex justify-between border-b border-gold-800/30 pb-1">
                          <span className="text-gold-300 font-medium">Proceso:</span>
                          <span className="text-gold-100">Lavado</span>
                        </div>
                        <div className="flex justify-between border-b border-gold-800/30 pb-1">
                          <span className="text-gold-300 font-medium">Criba:</span>
                          <span className="text-gold-100">14</span>
                        </div>
                        <div className="flex justify-between border-b border-gold-800/30 pb-1">
                          <span className="text-gold-300 font-medium">Altura:</span>
                          <span className="text-gold-100">1200-1400 msnm</span>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <div className="flex justify-between border-b border-gold-800/30 pb-1">
                          <span className="text-gold-300 font-medium">Densidad:</span>
                          <span className="text-gold-100">706 g/lt</span>
                        </div>
                        <div className="flex justify-between border-b border-gold-800/30 pb-1">
                          <span className="text-gold-300 font-medium">Rendimiento:</span>
                          <span className="text-gold-100">56.05 qq/kg</span>
                        </div>
                        <div className="flex justify-between border-b border-gold-800/30 pb-1">
                          <span className="text-gold-300 font-medium">Humedad:</span>
                          <span className="text-gold-100">11.5%</span>
                        </div>
                        <div className="flex justify-between border-b border-gold-800/30 pb-1">
                          <span className="text-gold-300 font-medium">Cuerpo:</span>
                          <span className="text-gold-100">Medio</span>
                        </div>
                        <div className="flex justify-between border-b border-gold-800/30 pb-1">
                          <span className="text-gold-300 font-medium">Acidez:</span>
                          <span className="text-gold-100">Media</span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 space-y-3">
                      <div className="flex justify-between border-b border-gold-800/30 pb-1">
                        <span className="text-gold-300 font-medium">Olfato:</span>
                        <span className="text-gold-100">Notas de chocolate y nuez</span>
                      </div>
                      <div className="flex justify-between items-start border-b border-gold-800/30 pb-1">
                        <span className="text-gold-300 font-medium">Gusto:</span>
                        <span className="text-gold-100 text-right max-w-[70%]">
                          Sabor a nueces, avellana y chocolate con una acidez media, cuerpo cremoso y un resabio a cacao
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Segundo: Sección "La Diferencia Lakobá" */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-light text-gold-300 mb-6">La Diferencia Lakobá</h2>
            <p className="text-gold-100 max-w-3xl mx-auto mb-8">
              Lo que hace especial a nuestro café no es solo dónde se cultiva, sino cómo se cultiva, cosecha y procesa.
              Cada paso en nuestra producción está guiado por un compromiso con la calidad, la sostenibilidad y el
              respeto por las tradiciones indigenas.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
            {[
              {
                title: "Excelencia de Origen Único",
                description:
                  "Nuestro café proviene exclusivamente de las tierras altas de la región maya, asegurando una calidad consistente y perfiles de sabor que reflejan este terroir único.",
              },
              {
                title: "Procesamiento Tradicional",
                description:
                  "Utilizamos métodos de procesamiento tradicionales que se han perfeccionado a lo largo de generaciones, combinando técnicas ancestrales con estándares modernos de calidad.",
              },
              {
                title: "Tostado en Pequeños Lotes",
                description:
                  "Nuestro café se tuesta en pequeños lotes para garantizar un desarrollo óptimo del sabor y frescura, con cada lote cuidadosamente monitoreado por nuestros maestros tostadores.",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gold-950 p-8 rounded-lg border border-gold-900/30"
              >
                <h3 className="text-xl font-light text-gold-300 mb-4">{feature.title}</h3>
                <p className="text-gold-100">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CoffeeCategoriesCarousel />

      {/* Sección de Ficha Técnica integrada */}
      <section className="py-24 bg-gold-950/90 mayan-pattern">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-light text-gold-300 mb-6">Ficha Técnica</h2>
            <p className="text-gold-100 max-w-3xl mx-auto">
              Conoce en detalle las características de nuestro café, nuestro compromiso con la calidad, el medio
              ambiente y las comunidades indígenas.
            </p>
          </motion.div>

          {/* Sección 1: Compromiso con la Calidad y el Medio Ambiente */}
          <motion.div
            id="calidad-medio-ambiente"
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
                  <h3 className="text-2xl font-light text-gold-300">Compromiso con la Calidad y el Medio Ambiente</h3>
                </div>

                <div className="space-y-4 text-gold-100">
                  <p>
                    El café que distribuimos proviene de fincas comprometidas con la siembra, cosecha y procesamiento de
                    granos de la más alta calidad, así como con la producción de otros cultivos 100% orgánicos. Estas
                    fincas se ubican en las montañas de la región maya, en altitudes entre 1000 y 1400 msnm, asegurando
                    un café de altura con un perfil sensorial excepcional.
                  </p>
                  <p>
                    Los cafetales crecen a la sombra de especies como Tzelel, Chalum y distintas variedades de Ingas y
                    plátanos. Esta técnica permite conservar la biodiversidad, proporcionando hábitat a diversas
                    especies de aves y otros animales de la región.
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
                  src="/images/coffee-beans-scoop.jpeg"
                  alt="Granos de café de alta calidad"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Sección 2: Experiencia Sensorial del Café */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-24 bg-black/40 p-12 rounded-lg border border-gold-900/30"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-8">
              <div>
                <div className="flex items-center mb-8">
                  <div className="w-12 h-12 bg-gold-900/50 rounded-full flex items-center justify-center mr-4">
                    <Coffee className="h-6 w-6 text-gold-500" />
                  </div>
                  <h3 className="text-2xl font-light text-gold-300">Experiencia Sensorial del Café</h3>
                </div>

                <p className="text-gold-100 mb-8">
                  El café que ofrecemos es una combinación de las mejores variedades, seleccionadas cuidadosamente para
                  brindar una experiencia inigualable.
                </p>
              </div>

              <div className="relative h-[300px] rounded-lg overflow-hidden">
                <Image
                  src="/images/coffee-cherry-selection.jpeg"
                  alt="Selección cuidadosa de cerezas de café"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

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
              <div className="flex justify-between items-start border-b border-gold-800/30 pb-2">
                <span className="text-gold-300 font-medium">Gusto:</span>
                <span className="text-gold-100 text-right max-w-[70%]">
                  Sabor a nueces, avellana y chocolate con una acidez media, cuerpo cremoso y un resabio a cacao.
                </span>
              </div>
            </div>
          </motion.div>

          {/* Sección 3: Apoyo a las Lenguas Indígenas */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 relative h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="/images/coffee-cup-beans.jpeg"
                  alt="Taza de café sobre granos de café"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="order-1 md:order-2">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gold-900/30 rounded-full flex items-center justify-center mr-4">
                    <Heart className="h-6 w-6 text-gold-500" />
                  </div>
                  <h3 className="text-2xl font-light text-gold-300">Nuestro Enfoque Sostenible</h3>
                </div>

                <div className="space-y-4 text-gold-100">
                  <p>
                    Creemos firmemente en la importancia de preservar la riqueza cultural de México. Por ello,
                    destinamos el 10% de nuestras ventas al apoyo de Baktùn, dedicada a la conservación de las lenguas
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
          </motion.div>
        </div>
      </section>

      <ImpactSection />
    </main>
  )
}
