"use client"

import Image from "next/image"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { Leaf, Coffee } from "lucide-react"
import RevealText from "@/components/reveal-text"

export default function HeritagePage() {
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
            src="/images/chichen-itza.jpeg"
            alt="Pirámide maya de Chichén Itzá"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </motion.div>

        <div className="container relative z-10">
          <motion.div className="max-w-3xl" style={{ y }}>
            <RevealText>
              <h1 className="text-4xl md:text-6xl font-light text-gold-300 mb-6">Herencia Maya</h1>
            </RevealText>
            <RevealText delay={0.1}>
              <p className="text-xl text-gold-100">
                Honrando el rico legado cultural de la civilización maya a través de nuestro café y compromiso con la
                preservación.
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
              <h2 className="text-3xl font-light text-gold-300 mb-6">La Civilización Maya</h2>
              <p className="text-gold-100 mb-4">
                Los mayas fueron una de las civilizaciones más avanzadas del mundo antiguo, floreciendo en toda
                Centroamérica desde aproximadamente 2000 a.C. hasta 1500 d.C. Sus notables logros en matemáticas,
                astronomía, arquitectura y agricultura continúan inspirando asombro y admiración hoy en día.
              </p>
              <p className="text-gold-100 mb-4">
                En las tierras altas de Chiapas, México, donde se cultiva nuestro café, la influencia maya sigue siendo
                fuerte. Las comunidades indígenas preservan muchos aspectos de su cultura ancestral, incluido el idioma,
                las prácticas agrícolas tradicionales y las creencias espirituales.
              </p>
              <p className="text-gold-100">
                En Lakobá, nos inspiramos en este rico patrimonio cultural, honrando la profunda conexión entre el
                pueblo maya, su tierra y el excepcional café que allí crece.
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
              El café se ha convertido en una parte integral de la vida en las regiones mayas de México, mezclándose con
              tradiciones antiguas para crear un patrimonio cultural único.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="text-gold-100 mb-4">
                Aunque el café no es nativo de las Américas y fue introducido después del apogeo de la civilización
                maya, hoy en día se ha integrado profundamente en la vida de las comunidades mayas contemporáneas.
              </p>
              <p className="text-gold-100 mb-4">
                Los agricultores mayas han adaptado sus métodos de cultivo tradicionales para producir café de la más
                alta calidad, combinando sabiduría ancestral con prácticas sostenibles modernas.
              </p>
              <p className="text-gold-100">
                Esta fusión de tradición e innovación ha resultado en un café excepcional que honra tanto el pasado como
                el presente de la cultura maya.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative h-[400px] rounded-lg overflow-hidden"
            >
              <Image
                src="/images/coffee-cherries-plant.jpeg"
                alt="Cerezas de café en la planta"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: "Cultivo Tradicional",
                description:
                  "Los agricultores mayas han desarrollado métodos de cultivo únicos que trabajan en armonía con el entorno natural, a menudo cultivando café bajo un dosel diverso de árboles nativos de sombra.",
              },
              {
                title: "Significado Ceremonial",
                description:
                  "Aunque originalmente no formaba parte de los rituales mayas antiguos, el café se ha incorporado a las prácticas ceremoniales modernas, simbolizando la comunidad y la conexión con la tierra.",
              },
              {
                title: "Importancia Económica",
                description:
                  "El cultivo del café se ha convertido en una actividad económica vital para muchas comunidades mayas, proporcionando medios de vida mientras les permite mantener su conexión con las tierras ancestrales.",
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

      {/* Sección de Sostenibilidad integrada */}
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
                En Lakobá, la sostenibilidad no es solo una palabra de moda, es un principio fundamental que guía cada
                aspecto de nuestro negocio. Creemos que el café excepcional debe producirse de manera que respete el
                medio ambiente, apoye a las comunidades agrícolas y preserve el rico patrimonio cultural de la región.
              </p>
              <p className="text-gold-100 mb-4">
                Nuestro compromiso con la sostenibilidad abarca la administración ambiental, la responsabilidad social y
                la equidad económica. Trabajamos estrechamente con nuestros socios agrícolas para implementar prácticas
                que protejan los delicados ecosistemas de las tierras altas de Chiapas, al tiempo que garantizamos una
                compensación justa y mejores medios de vida para las personas que cultivan nuestro café.
              </p>
              <p className="text-gold-100">
                Al elegir Lakobá, estás apoyando a una marca de café que prioriza la salud a largo plazo de nuestro
                planeta y el bienestar de las comunidades productoras de café.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

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
              Nuestras iniciativas ambientales se centran en proteger los ecosistemas únicos de las tierras altas de
              Chiapas mientras minimizamos nuestra huella de carbono en toda nuestra cadena de suministro.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
              <p className="text-gold-100">
                Nuestro café se cultiva bajo un dosel diverso de árboles nativos, preservando los hábitats forestales,
                protegiendo la biodiversidad y proporcionando un control natural de plagas.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-black/30 p-8 rounded-lg border border-gold-800/30"
            >
              <div className="w-16 h-16 bg-gold-900/50 rounded-full flex items-center justify-center mb-6">
                <Coffee className="h-8 w-8 text-gold-500" />
              </div>
              <h3 className="text-xl font-light text-gold-300 mb-4">Embalaje Ecológico</h3>
              <p className="text-gold-100">
                Nuestro embalaje está diseñado para minimizar el impacto ambiental, utilizando materiales reciclables y
                compostables siempre que sea posible.
              </p>
            </motion.div>
          </div>
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
              <h2 className="text-3xl font-light text-gold-300 mb-6">Nuestras Iniciativas de Preservación</h2>
              <p className="text-gold-100 mb-4">
                Una piedra angular de nuestra misión en Lakobá es nuestra dedicación a preservar el patrimonio maya.
                Creemos que las ricas tradiciones culturales del pueblo maya son tan valiosas como el excepcional café
                que nos ayudan a producir.
              </p>
              <p className="text-gold-100 mb-4">
                Es por eso que dedicamos una parte significativa de nuestras ganancias a diversas iniciativas destinadas
                a preservar el patrimonio cultural maya en la región de Chiapas. Estas incluyen el apoyo a programas
                locales de preservación del idioma, la financiación de esfuerzos de conservación arqueológica y el
                patrocinio de talleres de artes y oficios tradicionales.
              </p>
              <p className="text-gold-100 mb-6">
                Al elegir Lakobá, no solo estás disfrutando de un café excepcional, sino que estás contribuyendo a la
                preservación de una de las culturas antiguas más fascinantes del mundo.
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
                src="/images/mayan-elder.jpeg"
                alt="Mujer maya en atuendo tradicional"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-black">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-light text-gold-300 mb-6">Símbolos Mayas en Nuestra Marca</h2>
            <p className="text-gold-100 max-w-3xl mx-auto">
              Nuestra identidad de marca incorpora símbolos y elementos de diseño mayas auténticos, cada uno con un
              profundo significado cultural.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center"
            >
              <div className="w-32 h-32 mb-6 relative">
                <Image
                  src="/images/lakoba-face-logo.png"
                  alt="Logo de Lakobá"
                  fill
                  className="object-contain gold-glow"
                />
              </div>
              <h3 className="text-xl font-light text-gold-300 mb-4">Nuestro Logo</h3>
              <p className="text-gold-100">
                Nuestro logo está inspirado en las máscaras tradicionales mayas, que se utilizaban en ceremonias
                importantes y a menudo representaban deidades o antepasados. La cara estilizada simboliza la conexión
                entre los mundos físico y espiritual.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center"
            >
              <div className="w-32 h-32 mb-6 flex items-center justify-center">
                <svg width="80" height="80" viewBox="0 0 100 100" className="text-gold-500">
                  <path d="M10,10 L90,10 L90,90 L10,90 Z" fill="none" stroke="currentColor" strokeWidth="2" />
                  <path d="M30,30 L70,30 L70,70 L30,70 Z" fill="none" stroke="currentColor" strokeWidth="2" />
                  <path
                    d="M10,10 L30,30 M90,10 L70,30 M10,90 L30,70 M90,90 L70,70"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-light text-gold-300 mb-4">Diseños Geométricos</h3>
              <p className="text-gold-100">
                Los patrones geométricos a lo largo de nuestra marca están inspirados en la arquitectura y los textiles
                mayas. Estos diseños intrincados a menudo tenían significados específicos y se usaban para contar
                historias o transmitir conceptos culturales importantes.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}
