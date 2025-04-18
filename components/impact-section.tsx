"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Heart, BookOpen, Users } from "lucide-react"
import RevealText from "./reveal-text"

export default function ImpactSection() {
  return (
    <section className="py-12 md:py-24 bg-black">
      <div className="container">
        <div className="text-center mb-8 md:mb-16">
          <RevealText>
            <h2 className="text-2xl md:text-5xl font-light tracking-tight text-gold-300 mb-3 md:mb-6">
              Generando Impacto
            </h2>
          </RevealText>
          <RevealText delay={0.1}>
            <p className="text-champagne-100 max-w-3xl mx-auto text-sm md:text-base">
              Con cada taza, contribuyes a la preservación del patrimonio cultural maya y al apoyo de las comunidades
              locales.
            </p>
          </RevealText>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mb-8 md:mb-12">
          {[
            {
              icon: <Heart className="h-6 w-6 md:h-8 md:w-8 text-gold-400" />,
              title: "Preservación Cultural",
              description: "Apoyamos iniciativas que preservan y promueven los idiomas, artes y tradiciones mayas.",
            },
            {
              icon: <Users className="h-6 w-6 md:h-8 md:w-8 text-gold-400" />,
              title: "Apoyo Comunitario",
              description:
                "Invertimos en educación, salud y proyectos de infraestructura que mejoran la calidad de vida.",
            },
            {
              icon: <BookOpen className="h-6 w-6 md:h-8 md:w-8 text-gold-400" />,
              title: "Iniciativas Educativas",
              description:
                "Patrocinamos programas que enseñan sobre la rica historia y las contribuciones de la civilización maya.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-black p-4 md:p-8 rounded-lg border border-gold-800/30"
            >
              <div className="w-12 h-12 md:w-16 md:h-16 bg-black rounded-full flex items-center justify-center mb-3 md:mb-6 border border-gold-500/30">
                {item.icon}
              </div>
              <h3 className="text-lg md:text-xl font-light text-champagne-200 mb-2 md:mb-4">{item.title}</h3>
              <p className="text-champagne-100 text-sm md:text-base">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <Link
            href="/heritage"
            className="inline-flex items-center bg-gold-500 hover:bg-gold-400 text-black px-4 md:px-6 py-2 md:py-3 rounded-md font-medium transition-colors cursor-hover text-sm md:text-base"
          >
            Conoce Más Sobre Nuestro Impacto
            <ArrowRight className="ml-1 md:ml-2 h-3 w-3 md:h-4 md:w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
