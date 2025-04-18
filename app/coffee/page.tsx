"use client"

import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef, useState } from "react"
import { Leaf, Coffee } from "lucide-react"

import RevealText from "@/components/reveal-text"
import ImpactSection from "@/components/impact-section"
import CoffeeCategoriesCarousel from "@/components/coffee-categories-carousel"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function CoffeePage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeTab, setActiveTab] = useState("caracteristicas")

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
                Café excepcional de origen único de las tierras altas de Chiapas, cultivado a 1400 metros sobre el nivel
                del mar.
              </p>
            </RevealText>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="container">
          {/* Producto principal simplificado */}
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
                    Nuestro café insignia con notas de chocolate y nuez. Una experiencia sensorial única de las tierras
                    altas de Chiapas.
                  </p>

                  <div className="mb-8">
                    <a
                      href="https://sk03nf-yp.myshopify.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-gold-500 hover:bg-gold-600 text-black px-6 py-3 rounded-md font-medium cursor-hover transition-colors"
                    >
                      Comprar Ahora
                    </a>
                  </div>

                  {/* Características en pestañas para mejor organización */}
                  <Tabs defaultValue="caracteristicas" className="w-full" onValueChange={setActiveTab}>
                    <TabsList className="bg-gold-900/30 border-gold-800/50">
                      <TabsTrigger
                        value="caracteristicas"
                        className="data-[state=active]:bg-gold-800 data-[state=active]:text-gold-100"
                      >
                        Características
                      </TabsTrigger>
                      <TabsTrigger
                        value="perfil"
                        className="data-[state=active]:bg-gold-800 data-[state=active]:text-gold-100"
                      >
                        Perfil Sensorial
                      </TabsTrigger>
                      <TabsTrigger
                        value="cultivo"
                        className="data-[state=active]:bg-gold-800 data-[state=active]:text-gold-100"
                      >
                        Cultivo
                      </TabsTrigger>
                    </TabsList>

                    <TabsContent
                      value="caracteristicas"
                      className="bg-gold-950/30 p-6 rounded-lg border border-gold-900/30 mt-4"
                    >
                      <div className="grid grid-cols-2 gap-4">
                        <div className="flex justify-between border-b border-gold-800/30 pb-1">
                          <span className="text-gold-300 font-medium">Variedades:</span>
                          <span className="text-gold-100">Catimor, Sarchimor</span>
                        </div>
                        <div className="flex justify-between border-b border-gold-800/30 pb-1">
                          <span className="text-gold-300 font-medium">Proceso:</span>
                          <span className="text-gold-100">Lavado</span>
                        </div>
                        <div className="flex justify-between border-b border-gold-800/30 pb-1">
                          <span className="text-gold-300 font-medium">Altura:</span>
                          <span className="text-gold-100">1200-1400 msnm</span>
                        </div>
                        <div className="flex justify-between border-b border-gold-800/30 pb-1">
                          <span className="text-gold-300 font-medium">Humedad:</span>
                          <span className="text-gold-100">11.5%</span>
                        </div>
                      </div>
                    </TabsContent>

                    <TabsContent
                      value="perfil"
                      className="bg-gold-950/30 p-6 rounded-lg border border-gold-900/30 mt-4"
                    >
                      <div className="space-y-3">
                        <div className="flex justify-between border-b border-gold-800/30 pb-1">
                          <span className="text-gold-300 font-medium">Cuerpo:</span>
                          <span className="text-gold-100">Medio</span>
                        </div>
                        <div className="flex justify-between border-b border-gold-800/30 pb-1">
                          <span className="text-gold-300 font-medium">Acidez:</span>
                          <span className="text-gold-100">Media</span>
                        </div>
                        <div className="flex justify-between border-b border-gold-800/30 pb-1">
                          <span className="text-gold-300 font-medium">Olfato:</span>
                          <span className="text-gold-100">Notas de chocolate y nuez</span>
                        </div>
                        <div className="flex justify-between items-start border-b border-gold-800/30 pb-1">
                          <span className="text-gold-300 font-medium">Gusto:</span>
                          <span className="text-gold-100">Nueces, avellana y chocolate con resabio a cacao</span>
                        </div>
                      </div>
                    </TabsContent>

                    <TabsContent
                      value="cultivo"
                      className="bg-gold-950/30 p-6 rounded-lg border border-gold-900/30 mt-4"
                    >
                      <div className="space-y-3">
                        <p className="text-gold-100">
                          Cultivado bajo sombra de árboles nativos como Tzelel, Chalum e Ingas.
                        </p>
                        <p className="text-gold-100">
                          100% orgánico, sin fertilizantes químicos. Utilizamos compostaje natural y humus de lombriz.
                        </p>
                        <p className="text-gold-100">Cosechado a mano, seleccionando solo los granos más maduros.</p>
                      </div>
                    </TabsContent>
                  </Tabs>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Sección "La Diferencia Lakobá" simplificada */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-light text-gold-300 mb-6">La Diferencia Lakobá</h2>
            <p className="text-gold-100 max-w-3xl mx-auto mb-8">
              Lo que hace especial a nuestro café es cómo se cultiva, cosecha y procesa, guiado por un compromiso con la
              calidad y sostenibilidad.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
            {[
              {
                title: "Origen Único",
                description:
                  "Exclusivamente de las tierras altas de Chiapas, asegurando perfiles de sabor que reflejan este terroir único.",
              },
              {
                title: "Procesamiento Tradicional",
                description:
                  "Métodos perfeccionados a lo largo de generaciones, combinando técnicas locales con estándares modernos.",
              },
              {
                title: "Tostado en Pequeños Lotes",
                description:
                  "Garantizamos desarrollo óptimo del sabor y frescura, con cada lote monitoreado por maestros tostadores.",
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

      {/* Sección de Ficha Técnica condensada */}
      <section id="calidad-medio-ambiente" className="py-24 bg-gold-950/90 mayan-pattern">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-light text-gold-300 mb-6">Compromiso con la Calidad</h2>
            <p className="text-gold-100 max-w-3xl mx-auto">
              Nuestro café refleja nuestro compromiso con la excelencia, el medio ambiente y las comunidades locales.
            </p>
          </motion.div>

          {/* Sección condensada */}
          <motion.div
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
                  <h3 className="text-2xl font-light text-gold-300">Calidad y Medio Ambiente</h3>
                </div>

                <div className="space-y-4 text-gold-100">
                  <p>
                    Nuestro café proviene de fincas comprometidas con la producción orgánica en las montañas de Chiapas,
                    a altitudes entre 1000 y 1400 msnm.
                  </p>
                  <p>
                    Los cafetales crecen bajo sombra, conservando la biodiversidad y proporcionando hábitat a diversas
                    especies locales.
                  </p>
                  <p>
                    Utilizamos solo fertilizantes naturales como compost de pulpa de café y humus de lombriz,
                    promoviendo una agricultura sostenible.
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

          {/* Sección de Experiencia Sensorial simplificada */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-24 bg-black/40 p-12 rounded-lg border border-gold-900/30"
          >
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-gold-900/50 rounded-full flex items-center justify-center mr-4">
                <Coffee className="h-6 w-6 text-gold-500" />
              </div>
              <h3 className="text-2xl font-light text-gold-300">Experiencia Sensorial</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <p className="text-gold-100">
                Nuestro café ofrece un perfil sensorial único con notas de chocolate y nuez, cuerpo medio y acidez
                equilibrada. El proceso de lavado resalta la limpieza de su sabor, mientras que el tostado medio oscuro
                desarrolla sus aromas complejos.
              </p>

              <div className="relative h-[300px] rounded-lg overflow-hidden">
                <Image
                  src="/images/coffee-cherry-selection.jpeg"
                  alt="Selección cuidadosa de cerezas de café"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <ImpactSection />
    </main>
  )
}
