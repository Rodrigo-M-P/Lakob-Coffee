"use client"

import Image from "next/image"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import { Leaf } from "lucide-react"
import RevealText from "@/components/reveal-text"

export default function HeritagePage() {
  const containerRef = useRef<HTMLDivElement>(null)
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

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
  const y = useTransform(scrollYProgress, [0, 0.2], [0, 100])

  return (
    <main className="bg-black min-h-screen">
      <section ref={containerRef} className="relative h-[70vh] flex items-center overflow-hidden bg-black">
        <motion.div className="absolute inset-0 z-0" style={isMobile ? { opacity: 1 } : { opacity }}>
          <Image
            src="/images/chichen-itza.jpeg"
            alt="Pirámide maya de Chichén Itzá"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </motion.div>

        <div className="container relative z-10">
          <motion.div className="max-w-3xl" style={isMobile ? {} : { y }}>
            <RevealText>
              <h1 className="text-4xl md:text-6xl font-light text-gold-300 mb-6">Herencia Maya</h1>
            </RevealText>
            <RevealText delay={0.1}>
              <p className="text-xl text-gold-100">
                Honrando el rico legado cultural de la civilización maya a través de nuestro café.
              </p>
            </RevealText>
          </motion.div>
        </div>
      </section>

      {/* Sección "La Civilización Maya" reducida */}
      <section className="py-24">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-light text-gold-300 mb-6">La Civilización Maya</h2>
              <p className="text-gold-100 mb-4">
                Los mayas desarrollaron una de las civilizaciones más avanzadas del mundo antiguo, con notables logros
                en matemáticas, astronomía, arquitectura y agricultura.
              </p>
              <p className="text-gold-100">
                En las tierras altas de Chiapas, donde se cultiva nuestro café, las comunidades indígenas preservan
                aspectos importantes de su cultura ancestral, incluyendo prácticas agrícolas tradicionales que influyen
                en la calidad excepcional de nuestro café.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative h-[500px] rounded-lg overflow-hidden"
            >
              <Image src="/images/tikal-temple.jpeg" alt="Templo maya de Tikal" fill className="object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sección "El Café en la Cultura Maya" simplificada */}
      <section className="py-24 bg-gold-950 mayan-pattern">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-light text-gold-300 mb-6">El Café en la Cultura Maya</h2>
            <p className="text-gold-100 max-w-3xl mx-auto">
              Aunque el café no es nativo de las Américas, hoy se ha integrado profundamente en la vida de las
              comunidades mayas.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: "Cultivo Tradicional",
                description:
                  "Métodos únicos que trabajan en armonía con el entorno natural, cultivando café bajo un dosel diverso de árboles nativos.",
              },
              {
                title: "Importancia Comunitaria",
                description:
                  "El café fomenta la unión comunitaria y representa la conexión con la tierra, valores fundamentales en la cultura maya.",
              },
              {
                title: "Sustento Económico",
                description:
                  "El cultivo del café proporciona medios de vida sostenibles mientras permite mantener la conexión con las tierras ancestrales.",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-black/30 p-8 rounded-lg border border-gold-800/30"
              >
                <h3 className="text-xl font-light text-gold-300 mb-4">{feature.title}</h3>
                <p className="text-gold-100">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Link
              href="/coffee"
              className="inline-block bg-gold-500 hover:bg-gold-600 text-black px-6 py-3 rounded-md font-medium transition-colors"
            >
              Explora Nuestro Café
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Sección "Prácticas Ambientales" condensada */}
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
                src="/images/coffee-harvest-basket.jpeg"
                alt="Cosecha de café sostenible"
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
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gold-900/30 rounded-full flex items-center justify-center mr-4">
                  <Leaf className="h-6 w-6 text-gold-500" />
                </div>
                <h2 className="text-3xl font-light text-gold-300">Nuestro Enfoque Sostenible</h2>
              </div>
              <p className="text-gold-100 mb-4">
                En Lakobá, la sostenibilidad guía cada aspecto de nuestro negocio. Nuestro café se produce respetando el
                medio ambiente, apoyando a las comunidades agrícolas y preservando el patrimonio cultural.
              </p>
              <p className="text-gold-100">
                Trabajamos con nuestros agricultores para implementar prácticas que protejan los ecosistemas de Chiapas,
                garantizando una compensación justa y mejores condiciones de vida para quienes cultivan nuestro café.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sección "Prácticas Ambientales" simplificada */}
      <section className="py-24 bg-black">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-light text-gold-300 mb-6">Prácticas Ambientales</h2>
            <p className="text-gold-100 max-w-3xl mx-auto">
              Protegemos los ecosistemas de Chiapas mientras cultivamos café de la más alta calidad.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-black/30 p-8 rounded-lg border border-gold-800/30"
            >
              <div className="w-16 h-16 bg-gold-900/50 rounded-full flex items-center justify-center mb-6">
                <Leaf className="h-8 w-8 text-gold-500" />
              </div>
              <h3 className="text-xl font-light text-gold-300 mb-4">Café Cultivado a la Sombra</h3>
              <p className="text-gold-100 mb-4">
                Nuestro café crece bajo un dosel diverso de árboles nativos, creando un microclima ideal que permite un
                desarrollo más lento y completo de los granos, resultando en sabores más complejos y ricos.
              </p>
              <p className="text-gold-100 mb-4">
                Entre las especies de árboles que proporcionan sombra a nuestros cafetales se encuentran:
              </p>
              <ul className="text-gold-100 list-disc pl-6 space-y-2 mb-4">
                <li>
                  <span className="text-gold-300 font-medium">Tzelel (Inga vera)</span> - Árbol leguminoso que fija
                  nitrógeno en el suelo, mejorando naturalmente su fertilidad.
                </li>
                <li>
                  <span className="text-gold-300 font-medium">Chalum (Inga paterno)</span> - Otra especie de Inga que
                  proporciona sombra moderada y hojas que al caer crean un mantillo nutritivo.
                </li>
                <li>
                  <span className="text-gold-300 font-medium">Ingas</span> - Diversas especies de este género que son
                  tradicionalmente utilizadas por comunidades mayas para el cultivo de café.
                </li>
                <li>
                  <span className="text-gold-300 font-medium">Plátano y Banano</span> - Proporcionan sombra rápida y
                  temporal mientras los árboles más grandes crecen, además de generar ingresos adicionales para los
                  agricultores.
                </li>
              </ul>
              <p className="text-gold-100">
                Este sistema de cultivo bajo sombra no solo mejora la calidad del café, sino que también preserva la
                biodiversidad local, proporciona hábitat para aves migratorias y otras especies, previene la erosión del
                suelo y contribuye a la captura de carbono, combatiendo el cambio climático.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}
