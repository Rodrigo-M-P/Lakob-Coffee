"use client"

import { useRef, useState } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight } from "lucide-react"
import MagneticButton from "./magnetic-button"
import RevealText from "./reveal-text"
import Link from "next/link"

export default function StorySection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isHovering, setIsHovering] = useState(false)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -200])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.6], [0, 1, 1])
  const scale = useTransform(scrollYProgress, [0, 0.3], [0.95, 1])

  return (
    <section ref={containerRef} className="py-24 md:py-32 overflow-hidden bg-black">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
          <motion.div className="relative" style={{ opacity, scale }}>
            <motion.div
              className="relative z-10 h-[400px] md:h-[500px] overflow-hidden"
              style={{ y: y1 }}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              <motion.div
                animate={{
                  scale: isHovering ? 1.05 : 1,
                }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="w-full h-full"
              >
                <Image
                  src="/images/coffee-harvest-basket.jpeg"
                  alt="Cosecha tradicional de café en Chiapas"
                  fill
                  className="object-cover"
                />
                <motion.div
                  className="absolute inset-0 bg-gold-500/20"
                  animate={{
                    opacity: isHovering ? 0 : 0.2,
                  }}
                  transition={{ duration: 0.6 }}
                />
              </motion.div>
            </motion.div>

            <motion.div
              className="absolute top-[20%] -right-[10%] w-[200px] h-[300px] z-0 hidden md:block"
              style={{ y: y2 }}
            >
              <Image
                src="/images/coffee-cherries-plant.jpeg"
                alt="Cerezas de café en la planta"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gold-500/10" />
            </motion.div>
          </motion.div>

          <motion.div style={{ opacity }}>
            <RevealText className="mb-4">
              <span className="text-sm text-gold-400 block">Herencia Maya</span>
            </RevealText>

            <RevealText className="mb-6" delay={0.1}>
              <h2 className="text-3xl md:text-4xl font-light tracking-tight text-champagne-300">
                Un Legado de Excelencia
              </h2>
            </RevealText>

            <RevealText className="mb-6" delay={0.2}>
              <p className="text-champagne-100">
                Nuestro café se cultiva en las tierras altas de Chiapas, México, donde una vez floreció la antigua
                civilización maya. El rico suelo volcánico, la gran altitud y el clima perfecto crean condiciones
                ideales para un café excepcional.
              </p>
            </RevealText>

            <RevealText className="mb-8" delay={0.3}>
              <p className="text-champagne-100">
                Trabajamos directamente con agricultores locales que utilizan métodos tradicionales transmitidos a
                través de generaciones, combinados con prácticas sostenibles para proteger el medio ambiente y
                garantizar granos de la más alta calidad. Cada cosecha es cuidadosamente seleccionada, procesada y
                tostada para resaltar el carácter único de esta región especial.
              </p>
            </RevealText>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Link href="/about">
                <MagneticButton className="border border-gold-500 bg-transparent hover:bg-gold-900/30 text-champagne-200 px-6 py-3 rounded-md font-medium flex items-center group cursor-hover">
                  Explora Nuestra Herencia
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </MagneticButton>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
