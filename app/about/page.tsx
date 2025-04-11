"use client"

import Image from "next/image"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { ArrowRight, Coffee, Users, Award, Heart } from "lucide-react"
import RevealText from "@/components/reveal-text"

// Traducir la sección "Nosotros" al español
export default function AboutPage() {
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
            src="/images/coffee-cup-beans.jpeg"
            alt="Taza de café sobre granos de café"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </motion.div>

        <div className="container relative z-10">
          <motion.div className="max-w-3xl" style={{ y }}>
            <RevealText>
              <h1 className="text-4xl md:text-6xl font-light text-gold-300 mb-6">Nuestra Historia</h1>
            </RevealText>
            <RevealText delay={0.1}>
              <p className="text-xl text-gold-100">
                Descubre la pasión, herencia y compromiso detrás de Lakobá Café Maya.
              </p>
            </RevealText>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-light text-gold-300 mb-6">Nuestros Inicios</h2>
              <p className="text-gold-100 mb-4">
                Lakobá nació de una profunda apreciación por la rica herencia cafetera de las tierras altas mayas y el
                deseo de compartir este excepcional café con el mundo mientras honramos sus raíces mayas.
              </p>
              <p className="text-gold-100 mb-4">
                Fundada en 2025 por un equipo de entusiastas del café con fuertes conexiones con las comunidades
                indígenas de la región, nuestra misión fue clara desde el principio: crear una marca de café que celebre
                la calidad excepcional del café de la región mientras preserva y promueve el patrimonio cultural maya.
              </p>
              <p className="text-gold-100">
                El nombre "Lakobá" en sí rinde homenaje a un antiguo asentamiento maya, simbolizando nuestro profundo
                respeto por la historia y las tradiciones de la región donde se cultiva nuestro café.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative h-[500px] rounded-lg overflow-hidden"
            >
              <Image
                src="/images/coffee-beans-composition.jpeg"
                alt="Composición artística con café"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gold-950 mayan-pattern">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-light text-gold-300 mb-6">Nuestros Valores</h2>
            <p className="text-gold-100 max-w-3xl mx-auto">
              En Lakobá, nuestros valores guían todo lo que hacemos, desde cómo obtenemos nuestro café hasta cómo
              interactuamos con las comunidades y clientes.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Coffee className="h-8 w-8 text-gold-500" />,
                title: "Calidad",
                description:
                  "No comprometemos nuestra búsqueda de café excepcional, seleccionando cuidadosamente solo los mejores granos de las tierras altas mayas.",
              },
              {
                icon: <Users className="h-8 w-8 text-gold-500" />,
                title: "Comunidad",
                description:
                  "Construimos relaciones duraderas con nuestros agricultores, asegurando una compensación justa y apoyando el bienestar de las comunidades productoras de café.",
              },
              {
                icon: <Heart className="h-8 w-8 text-gold-500" />,
                title: "Patrimonio",
                description:
                  "Honramos y preservamos las tradiciones culturales mayas, dedicando una parte de nuestras ganancias a iniciativas de preservación cultural.",
              },
              {
                icon: <Award className="h-8 w-8 text-gold-500" />,
                title: "Sostenibilidad",
                description:
                  "Empleamos prácticas ambientalmente responsables en toda nuestra cadena de suministro para proteger los delicados ecosistemas de la región maya.",
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-black/30 p-8 rounded-lg border border-gold-800/30"
              >
                <div className="w-16 h-16 bg-gold-900/50 rounded-full flex items-center justify-center mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-light text-gold-300 mb-4">{value.title}</h3>
                <p className="text-gold-100">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative h-[500px] rounded-lg overflow-hidden order-2 md:order-1"
            >
              <Image
                src="/images/coffee-roasting-machine.jpeg"
                alt="Proceso de tostado de café"
                fill
                className="object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="order-1 md:order-2"
            >
              <h2 className="text-3xl font-light text-gold-300 mb-6">Nuestro Compromiso con la Preservación</h2>
              <p className="text-gold-100 mb-4">
                Una piedra angular de nuestra misión en Lakobá es nuestra dedicación a preservar el patrimonio maya.
                Creemos que las ricas tradiciones culturales del pueblo maya son tan valiosas como el excepcional café
                que nos ayudan a producir.
              </p>
              <p className="text-gold-100 mb-4">
                Por eso dedicamos una parte significativa de nuestras ganancias a diversas iniciativas destinadas a
                preservar el patrimonio cultural maya en la región. Estas incluyen el apoyo a programas locales de
                preservación del idioma, la financiación de esfuerzos de conservación arqueológica y el patrocinio de
                talleres de artes y oficios tradicionales.
              </p>
              <p className="text-gold-100 mb-6">
                Al elegir Lakobá, no solo estás disfrutando de un café excepcional, sino que estás contribuyendo a la
                preservación de una de las culturas antiguas más fascinantes del mundo.
              </p>
              <Link
                href="/heritage"
                className="inline-flex items-center text-gold-400 hover:text-gold-500 transition-colors"
              >
                Conoce más sobre nuestros esfuerzos de preservación del patrimonio
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-black">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-light text-gold-300 mb-6">Nuestro Proceso de Producción</h2>
              <p className="text-gold-100 mb-4">
                Cada paso en nuestro proceso de producción está diseñado para preservar y realzar las cualidades
                excepcionales de nuestro café. Desde la cosecha selectiva hasta el empaquetado final, mantenemos los más
                altos estándares de calidad.
              </p>
              <p className="text-gold-100 mb-4">
                Nuestros maestros tostadores, con años de experiencia, supervisan cuidadosamente cada lote para asegurar
                el perfil de sabor perfecto que caracteriza a Lakobá. Tostamos en pequeños lotes para garantizar la
                frescura y el control de calidad.
              </p>
              <p className="text-gold-100">
                Finalmente, empaquetamos nuestro café en bolsas especialmente diseñadas que preservan el aroma y sabor,
                asegurando que cada taza ofrezca la experiencia Lakobá completa.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative h-[500px] rounded-lg overflow-hidden"
            >
              <Image
                src="/images/coffee-packaging.jpeg"
                alt="Proceso de empaquetado de café"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-black">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-light text-gold-300 mb-6">Únete a Nuestro Viaje</h2>
            <p className="text-gold-100 max-w-3xl mx-auto mb-8">
              Cada taza de café Lakobá es más que solo una bebida: es una conexión con el rico patrimonio, la
              excepcional artesanía y los impresionantes paisajes de las tierras altas mayas.
            </p>
            <Link
              href="/coffee"
              className="inline-block bg-gold-500 hover:bg-gold-600 text-black px-6 py-3 rounded-md font-medium transition-colors"
            >
              Explora Nuestro Café
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
