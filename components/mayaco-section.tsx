"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, Heart, BookOpen, Users } from "lucide-react"
import RevealText from "./reveal-text"
import { Button } from "@/components/ui/button"

export default function MayaCoSection() {
  return (
    <section className="py-24 bg-black/95 overflow-hidden">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <RevealText>
              <h2 className="text-3xl md:text-4xl font-light text-gold-300 mb-6">Nuestra Colaboración con Baktùn</h2>
            </RevealText>

            <RevealText delay={0.1}>
              <p className="text-champagne-100 mb-6">
                En Lakobá, estamos orgullosos de colaborar con Baktùn, una organización sin fines de lucro dedicada a
                preservar el patrimonio cultural maya y apoyar a las comunidades indígenas en México y América Central.
              </p>
            </RevealText>

            <RevealText delay={0.2}>
              <p className="text-champagne-100 mb-6">
                Fundada en 2020, Baktùn trabaja directamente con comunidades mayas para implementar programas centrados
                en la preservación del idioma, artes y artesanías tradicionales, agricultura sostenible e iniciativas
                educativas. Su enfoque holístico asegura que la cultura maya continúe prosperando para las generaciones
                futuras.
              </p>
            </RevealText>

            <RevealText delay={0.3}>
              <p className="text-champagne-100 mb-8">
                Parte de cada compra de café Lakobá va directamente a apoyar el trabajo vital de Baktùn. A través de
                esta colaboración, hemos ayudado a financiar programas de preservación del idioma, centros comunitarios
                e iniciativas de agricultura sostenible que benefician a más de 5,000 personas en comunidades mayas.
              </p>
            </RevealText>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Button className="bg-gold-500 hover:bg-gold-400 text-black cursor-hover">
                <a
                  href="https://baktun.org.mx/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  Visitar el Sitio Web de Baktùn
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <div className="relative">
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="/images/baktun-education.png"
                  alt="Organización Baktùn - Educación"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="absolute -bottom-10 -left-10 w-[200px] h-[200px] rounded-lg overflow-hidden border-4 border-black">
                <Image src="/images/baktun-ritual.png" alt="Ritual tradicional maya" fill className="object-cover" />
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-32">
          <RevealText className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-light text-gold-300">Áreas de Impacto de Baktùn</h3>
          </RevealText>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <BookOpen className="h-8 w-8 text-gold-400" />,
                title: "Preservación del Idioma",
                description:
                  "Apoyando programas que documentan, enseñan y preservan los idiomas mayas, muchos de los cuales están en riesgo de extinción.",
                image: "/images/baktun-education.png",
              },
              {
                icon: <Users className="h-8 w-8 text-gold-500" />,
                title: "Desarrollo Comunitario",
                description:
                  "Construyendo centros comunitarios y apoyando iniciativas locales que fortalecen los lazos sociales y preservan las prácticas culturales.",
                image: "/images/baktun-children.png",
              },
              {
                icon: <Heart className="h-8 w-8 text-gold-500" />,
                title: "Artes Tradicionales",
                description:
                  "Proporcionando recursos y mercados para artesanos mayas tradicionales, asegurando que estas antiguas artesanías continúen prosperando.",
                image: "/images/baktun-ritual.png",
              },
              {
                icon: <ArrowRight className="h-8 w-8 text-gold-500" />,
                title: "Biodiversidad y Naturaleza",
                description:
                  "Protegiendo los ecosistemas únicos de la región maya, incluyendo cenotes, selvas y la rica biodiversidad que albergan.",
                image: "/images/baktun-toucan.png",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                viewport={{ once: true }}
                className="bg-champagne-950/30 p-8 rounded-lg border border-gold-900/30"
              >
                <div className="relative w-full h-40 mb-6 rounded-lg overflow-hidden">
                  <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-black/20"></div>
                </div>
                <div className="w-16 h-16 bg-gold-900/30 rounded-full flex items-center justify-center mb-6">
                  {item.icon}
                </div>
                <h4 className="text-xl font-light text-champagne-200 mb-4">{item.title}</h4>
                <p className="text-champagne-100">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
