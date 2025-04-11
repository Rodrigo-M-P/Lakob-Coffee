"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Heart, BookOpen, Users } from "lucide-react"
import RevealText from "./reveal-text"

export default function ImpactSection() {
  return (
    <section className="py-24 bg-champagne-950/90 mayan-pattern">
      <div className="container">
        <div className="text-center mb-16">
          <RevealText>
            <h2 className="text-3xl md:text-5xl font-light tracking-tight text-gold-300 mb-6">Generando Impacto</h2>
          </RevealText>
          <RevealText delay={0.1}>
            <p className="text-champagne-100 max-w-3xl mx-auto">
              Lo que realmente hace especial a nuestro café va más allá de su sabor excepcional. Con cada taza, estás
              contribuyendo a la preservación del patrimonio cultural maya y apoyando a las comunidades que hacen
              posible nuestro café.
            </p>
          </RevealText>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {[
            {
              icon: <Heart className="h-8 w-8 text-gold-400" />,
              title: "Preservación Cultural",
              description:
                "Una parte de cada compra va directamente a iniciativas que preservan y promueven los idiomas, artes y tradiciones mayas para las generaciones futuras.",
            },
            {
              icon: <Users className="h-8 w-8 text-gold-400" />,
              title: "Apoyo Comunitario",
              description:
                "Invertimos en las comunidades que cultivan nuestro café, financiando educación, salud y proyectos de infraestructura que mejoran la calidad de vida.",
            },
            {
              icon: <BookOpen className="h-8 w-8 text-gold-400" />,
              title: "Iniciativas Educativas",
              description:
                "Patrocinamos programas educativos que enseñan tanto a los jóvenes locales como al mundo en general sobre la rica historia y las contribuciones continuas de la civilización maya.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-black/40 p-8 rounded-lg border border-gold-800/30"
            >
              <div className="w-16 h-16 bg-gold-900/30 rounded-full flex items-center justify-center mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl font-light text-champagne-200 mb-4">{item.title}</h3>
              <p className="text-champagne-100">{item.description}</p>
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
            className="inline-flex items-center bg-gold-500 hover:bg-gold-400 text-black px-6 py-3 rounded-md font-medium transition-colors cursor-hover"
          >
            Conoce Más Sobre Nuestro Impacto
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
