"use client"

import Link from "next/link"
import Image from "next/image"
import { Instagram } from "lucide-react"

// Actualizar los enlaces del footer eliminando los elementos mencionados
const footerLinks = [
  {
    title: "Tienda",
    links: [
      { name: "Nuestro Café", href: "/coffee" },
      { name: "Tienda Online", href: "https://store.lakobacoffee.com/", external: true },
    ],
  },
  {
    title: "Empresa",
    links: [
      { name: "Sobre Nosotros", href: "/about" },
      { name: "Herencia Maya", href: "/heritage" },
    ],
  },
  {
    title: "Soporte",
    links: [{ name: "Contáctanos", href: "/contact" }],
  },
]

export default function Footer() {
  // Desplazarse hacia arriba al hacer clic en los enlaces del pie de página
  const handleLinkClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-black py-16 md:py-24 border-t border-gold-900/50">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="flex items-center space-x-3 mb-6 inline-block cursor-hover"
              onClick={handleLinkClick}
            >
              <Image
                src="/images/lakoba-face-logo.png"
                alt="Logo de Lakobá"
                width={50}
                height={50}
                className="gold-glow"
              />
              <span className="text-2xl font-light tracking-widest text-gold-400">LAKOBÁ</span>
            </Link>
            <p className="text-gold-100 max-w-[400px] mb-8">
              Café excepcional de origen único de las tierras altas de Chiapas, México. Cada taza, un tributo a la
              tierra y su cultura.
            </p>
            <div className="flex flex-col space-y-4">
              <p className="text-gold-300 text-sm">
                <span className="text-gold-500 font-medium">Nuestro Compromiso:</span> Parte de todas las ganancias se
                dedica a preservar la herencia maya y apoyar a las comunidades indígenas en la región de Chiapas.
              </p>
              <div className="flex space-x-4">
                <Link
                  href="https://www.instagram.com/lakobamayancoffee/"
                  className="text-gold-500 hover:text-gold-300 transition-colors cursor-hover"
                >
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </Link>
              </div>
            </div>
          </div>

          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="font-medium text-lg mb-4 text-gold-300">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    {link.external ? (
                      <a
                        href={link.href}
                        className="text-gold-100 hover:text-gold-400 transition-colors cursor-hover"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {link.name}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-gold-100 hover:text-gold-400 transition-colors cursor-hover"
                        onClick={handleLinkClick}
                      >
                        {link.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gold-900/50 mt-16 pt-8 text-center text-gold-500/70 text-sm">
          <p>&copy; {new Date().getFullYear()} Lakobá Café Maya. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
