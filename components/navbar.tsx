"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Instagram, Facebook, Twitter } from "lucide-react"
import { cn } from "@/lib/utils"
import MagneticButton from "./magnetic-button"

// Reducido el número de enlaces según lo solicitado
const navLinks = [
  { name: "Inicio", href: "/" },
  { name: "Nosotros", href: "/about" },
  { name: "Nuestro Café", href: "/coffee" }, // Ahora incluirá la ficha técnica
  { name: "Herencia Maya", href: "/heritage" }, // Incluirá aspectos de sostenibilidad
  { name: "Contacto", href: "/contact" },
  { name: "Tienda", href: "https://store.lakobacoffee.com/", external: true },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Desplazarse hacia arriba al hacer clic en los enlaces de navegación
  const handleNavClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
    if (isOpen) setIsOpen(false)
  }

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
          scrolled ? "bg-black/90 backdrop-blur-md py-4 shadow-sm" : "bg-transparent py-6",
        )}
      >
        <div className="container flex items-center justify-between">
          <div className="flex items-center">
            <MagneticButton
              className="md:hidden mr-2 bg-transparent hover:bg-transparent"
              onClick={() => setIsOpen(true)}
              strength={25}
            >
              <Menu className="h-6 w-6 text-gold-400" />
              <span className="sr-only">Abrir menú</span>
            </MagneticButton>

            <Link href="/" className="flex items-center space-x-2" onClick={handleNavClick}>
              <Image
                src="/images/lakoba-face-logo.png"
                alt="Logo de Lakobá"
                width={40}
                height={40}
                className="gold-glow"
              />
              <span className="text-xl font-light tracking-widest text-gold-400">LAKOBÁ</span>
            </Link>
          </div>

          <nav className="hidden md:flex items-center">
            <ul className="flex space-x-12">
              {navLinks.map((link) => (
                <li key={link.name}>
                  {link.external ? (
                    <a
                      href={link.href}
                      className="text-sm tracking-wide text-gold-100 hover:text-gold-400 transition-colors relative"
                      target="_blank"
                      rel="noopener noreferrer"
                      onMouseEnter={() => setHoveredItem(link.name)}
                      onMouseLeave={() => setHoveredItem(null)}
                    >
                      {link.name}
                      {hoveredItem === link.name && (
                        <motion.div
                          className="absolute -bottom-1 left-0 w-full h-[1px] bg-gold-500"
                          layoutId="navIndicator"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.2 }}
                        />
                      )}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-sm tracking-wide text-gold-100 hover:text-gold-400 transition-colors relative"
                      onMouseEnter={() => setHoveredItem(link.name)}
                      onMouseLeave={() => setHoveredItem(null)}
                      onClick={handleNavClick}
                    >
                      {link.name}
                      {hoveredItem === link.name && (
                        <motion.div
                          className="absolute -bottom-1 left-0 w-full h-[1px] bg-gold-500"
                          layoutId="navIndicator"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.2 }}
                        />
                      )}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Espacio vacío para mantener el equilibrio en el diseño */}
          <div className="w-10"></div>
        </div>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black z-50 flex flex-col"
            initial={{ opacity: 0, x: "-100%" }}
            animate={{
              opacity: 1,
              x: 0,
              transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
            }}
            exit={{
              opacity: 0,
              x: "-100%",
              transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
            }}
          >
            <div className="container flex justify-between items-center py-6">
              <Link href="/" className="flex items-center space-x-2" onClick={handleNavClick}>
                <Image
                  src="/images/lakoba-face-logo.png"
                  alt="Logo de Lakobá"
                  width={40}
                  height={40}
                  className="gold-glow"
                />
                <span className="text-xl font-light tracking-widest text-gold-400">LAKOBÁ</span>
              </Link>
              <MagneticButton
                className="text-gold-400 bg-transparent hover:bg-transparent"
                onClick={() => setIsOpen(false)}
                strength={25}
              >
                <X className="h-6 w-6" />
                <span className="sr-only">Cerrar menú</span>
              </MagneticButton>
            </div>

            <div className="flex flex-col justify-center flex-1 container">
              <nav className="flex flex-col space-y-8">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.3, delay: 0.1 + i * 0.1 },
                    }}
                  >
                    {link.external ? (
                      <a
                        href={link.href}
                        className="text-gold-300 text-2xl font-light tracking-wide hover:text-gold-500 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {link.name}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-gold-300 text-2xl font-light tracking-wide hover:text-gold-500 transition-colors"
                        onClick={handleNavClick}
                      >
                        {link.name}
                      </Link>
                    )}
                  </motion.div>
                ))}
              </nav>

              <motion.div
                className="mt-12 flex space-x-6"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { delay: 0.6 },
                }}
              >
                <Link href="https://instagram.com" className="text-gold-500 hover:text-gold-300 transition-colors">
                  <Instagram className="h-6 w-6" />
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link href="https://facebook.com" className="text-gold-500 hover:text-gold-300 transition-colors">
                  <Facebook className="h-6 w-6" />
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link href="https://twitter.com" className="text-gold-500 hover:text-gold-300 transition-colors">
                  <Twitter className="h-6 w-6" />
                  <span className="sr-only">Twitter</span>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
