"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Coffee, Users, Award, Heart } from "lucide-react"
import MobileHeader from "@/components/mobile-header"

export default function AboutPage() {
  return (
    <main className="bg-black min-h-screen">
      {/* Header con imagen estática */}
      <MobileHeader
        title="Nuestra Historia"
        subtitle="Descubre la pasión, herencia y compromiso detrás de Lakobá Café Maya."
        imageSrc="/images/coffee-cup-beans.jpeg"
        imageAlt="Taza de café sobre granos de café"
      />

      {/* Sección "Nuestros Inicios" reducida */}
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
                Lakobá nació de un sueño: descubrir y compartir con el mundo los sabores extraordinarios que emergen de
                las tierras altas chiapanecas, donde la naturaleza, la tradición y la pasión se entrelazan para crear un
                café verdaderamente excepcional.
              </p>
              <p className="text-gold-100">
                Fundada en 2025 por un equipo de visionarios apasionados por el café, nuestra misión trasciende lo
                comercial. Buscamos elevar cada taza a una experiencia que honre el legado de estas tierras ancestrales,
                conectando a los amantes del café con los paisajes, aromas y sabores únicos que solo las montañas de
                Chiapas pueden ofrecer.
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

      {/* Sección "Nuestros Valores" optimizada */}
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
            <p className="text-gold-100 max-w-3xl mx-auto">En Lakobá, estos principios guían todo lo que hacemos.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Coffee className="h-8 w-8 text-gold-500" />,
                title: "Calidad",
                description: "Seleccionamos cuidadosamente solo los mejores granos de nuestras tierras.",
              },
              {
                icon: <Users className="h-8 w-8 text-gold-500" />,
                title: "Comunidad",
                description:
                  "Construimos relaciones duraderas con nuestros agricultores, asegurando una compensación justa.",
              },
              {
                icon: <Heart className="h-8 w-8 text-gold-500" />,
                title: "Patrimonio",
                description:
                  "Honramos y preservamos las tradiciones culturales mayas a través de nuestras iniciativas.",
              },
              {
                icon: <Award className="h-8 w-8 text-gold-500" />,
                title: "Sostenibilidad",
                description:
                  "Empleamos prácticas ambientalmente responsables para proteger los ecosistemas de la región.",
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

      {/* Sección combinada "Nuestro Compromiso" y "Proceso de Producción" */}
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
              <h2 className="text-3xl font-light text-gold-300 mb-6">Nuestro Compromiso y Proceso</h2>
              <p className="text-gold-100 mb-4">
                Dedicamos parte de nuestras ganancias a preservar el patrimonio cultural maya, apoyando programas de
                preservación lingüística, conservación arqueológica y talleres de artes tradicionales.
              </p>
              <p className="text-gold-100 mb-6">
                Nuestro proceso de producción mantiene los más altos estándares, desde la cosecha selectiva hasta el
                empaquetado final. Tostamos en pequeños lotes para garantizar la frescura y el control de calidad,
                preservando los sabores únicos de nuestro café.
              </p>
              <Link
                href="/heritage"
                className="inline-flex items-center text-gold-400 hover:text-gold-500 transition-colors"
              >
                Conoce más sobre nuestros esfuerzos de preservación
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
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
              Cada taza de café Lakobá es una conexión con el rico patrimonio y los impresionantes paisajes de las
              tierras altas mayas.
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
