"use client"

import { motion } from "framer-motion"

export default function MarqueeSection() {
  const words = [
    "Origen Único",
    "•",
    "Café de Altura",
    "•",
    "Sostenible",
    "•",
    "Experiencia Excepcional",
    "•",
    "Preservación Cultural",
    "•",
  ]

  return (
    <section className="py-8 bg-gold-950/90 overflow-hidden border-y border-gold-800/40">
      <div className="flex whitespace-nowrap">
        <motion.div
          className="flex items-center space-x-8 text-champagne-300 text-xl md:text-2xl font-light py-2"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
            duration: 25,
            ease: "linear",
          }}
        >
          {words.map((word, i) => (
            <span key={i} className={word === "•" ? "text-gold-500" : ""}>
              {word}
            </span>
          ))}
          {words.map((word, i) => (
            <span key={i + words.length} className={word === "•" ? "text-gold-500" : ""}>
              {word}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
