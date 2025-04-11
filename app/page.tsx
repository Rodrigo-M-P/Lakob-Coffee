import Image from "next/image"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import LoadingScreen from "@/components/loading-screen"
import HeroSection from "@/components/hero-section"
import MarqueeSection from "@/components/marquee-section"
import FeaturedProducts from "@/components/featured-products"
import CoffeeCategoriesCarousel from "@/components/coffee-categories-carousel"
import StorySection from "@/components/story-section"
import Newsletter from "@/components/newsletter"
import GlobalPresence from "@/components/global-presence"
import MayaCoSection from "@/components/mayaco-section"
import Link from "next/link"

export default function Home() {
  return (
    <main className="relative">
      <LoadingScreen />

      <HeroSection />

      {/* Regresamos el marquee a su posición original */}
      <MarqueeSection />

      {/* Aumentamos el padding superior de esta sección para que los botones sean visibles */}
      <section className="container pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
          <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-6 text-gold-300">
            Experiencia Excepcional de Café
          </h2>
          <p className="text-gold-100 max-w-[600px] mb-8">
            Nuestro café es meticulosamente cultivado, cosechado y tostado para brindarte los auténticos sabores de las
            tierras altas de la región maya, donde las antiguas tradiciones mayas se encuentran con las prácticas
            sostenibles modernas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/coffee">
              <Button
                variant="outline"
                size="lg"
                className="group bg-gold-500 text-black border-gold-600 hover:bg-gold-600 cursor-hover"
              >
                Ordenar Ahora
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link href="/coffee">
              <Button
                variant="outline"
                size="lg"
                className="group bg-transparent border-gold-500 text-gold-300 hover:bg-gold-900/30 cursor-hover"
              >
                Ver Ficha Técnica
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>

        <FeaturedProducts />
      </section>

      {/* Reemplazar CategoryShowcase por CoffeeCategoriesCarousel */}
      <CoffeeCategoriesCarousel />

      <StorySection />

      <GlobalPresence />

      {/* Agregar una sección destacando el compromiso con Baktùn */}
      <section className="py-24 bg-gold-950/90 mayan-pattern">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-light text-gold-300 mb-6">Nuestro Compromiso con Baktùn</h2>
            <p className="text-xl text-gold-100 mb-8">
              Parte de nuestras ventas se destina directamente a la fundación Baktùn para apoyar la preservación del
              patrimonio cultural maya y el desarrollo de las comunidades locales.
            </p>
            <div className="bg-black/30 p-8 rounded-lg border-2 border-gold-500 shadow-[0_0_15px_rgba(249,200,29,0.3)] mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <p className="text-gold-100 mb-4">
                    A través de nuestra colaboración con Baktùn, hemos contribuido a:
                  </p>
                  <div className="text-left space-y-4">
                    <div className="p-4 bg-black/20 rounded-lg">
                      <h3 className="text-gold-300 text-lg mb-2">Preservación Lingüística</h3>
                      <p className="text-gold-100/80">
                        Programas de documentación y enseñanza de idiomas mayas en riesgo de extinción.
                      </p>
                    </div>
                    <div className="p-4 bg-black/20 rounded-lg">
                      <h3 className="text-gold-300 text-lg mb-2">Desarrollo Comunitario</h3>
                      <p className="text-gold-100/80">
                        Construcción de centros comunitarios y apoyo a iniciativas locales.
                      </p>
                    </div>
                    <div className="p-4 bg-black/20 rounded-lg">
                      <h3 className="text-gold-300 text-lg mb-2">Protección de Ecosistemas</h3>
                      <p className="text-gold-100/80">
                        Conservación de cenotes y áreas naturales importantes para la cultura maya.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="relative h-[400px] rounded-lg overflow-hidden">
                  <Image src="/images/baktun-cenote.png" alt="Cenote maya" fill className="object-cover" />
                  <div className="absolute inset-0 bg-black/20"></div>
                </div>
              </div>
            </div>
            <a
              href="https://baktun.org.mx/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gold-500 hover:bg-gold-600 text-black px-6 py-3 rounded-md font-medium transition-colors"
            >
              Conoce Más Sobre Baktùn
              <ArrowRight className="ml-2 h-4 w-4 inline-block" />
            </a>
          </div>
        </div>
      </section>

      <MayaCoSection />

      <section className="bg-black py-24 md:py-32 mayan-pattern">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-6 text-gold-300">Cultivo Sostenible</h2>
              <p className="text-gold-100 mb-8">
                Estamos comprometidos con prácticas agrícolas ambientalmente responsables que protegen el delicado
                ecosistema de las tierras altas de la región maya. Nuestro café se cultiva bajo sombra bajo un dosel de
                árboles nativos, preservando la biodiversidad y asegurando granos de la más alta calidad.
              </p>
              <Link href="/coffee#calidad-medio-ambiente">
                <Button className="group bg-gold-500 text-black hover:bg-gold-600 cursor-hover">
                  Nuestro Compromiso con la Calidad y el Medio Ambiente
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
            <div className="relative h-[400px] md:h-[500px]">
              <Image
                src="/images/coffee-plantation.jpeg"
                alt="Cultivo sostenible de café"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <Newsletter />
    </main>
  )
}
