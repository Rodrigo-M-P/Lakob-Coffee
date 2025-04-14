import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import LoadingScreen from "@/components/loading-screen"
import HeroSection from "@/components/hero-section"
import MarqueeSection from "@/components/marquee-section"
import FeaturedProducts from "@/components/featured-products"
import CoffeeCategoriesCarousel from "@/components/coffee-categories-carousel"
import StorySection from "@/components/story-section"
import GlobalPresence from "@/components/global-presence"
import MayaCoSection from "@/components/mayaco-section"
import Link from "next/link"

export default function Home() {
  return (
    <main className="relative">
      <LoadingScreen />

      <HeroSection />

      <MarqueeSection />

      {/* Sección optimizada con menos texto */}
      <section className="container pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
          <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-6 text-gold-300">
            Experiencia Excepcional de Café
          </h2>
          <p className="text-gold-100 max-w-[600px] mb-8">
            Café meticulosamente cultivado en las tierras altas de Chiapas, donde tradiciones ancestrales se combinan
            con prácticas sostenibles modernas.
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
            <Link href="/coffee#calidad-medio-ambiente">
              <Button
                variant="outline"
                size="lg"
                className="group bg-transparent border-gold-500 text-gold-300 hover:bg-gold-900/30 cursor-hover"
              >
                Nuestro Compromiso
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>

        <FeaturedProducts />
      </section>

      <CoffeeCategoriesCarousel />

      <StorySection />

      <GlobalPresence />

      <MayaCoSection />

      {/* Se eliminó el componente Newsletter aquí */}
    </main>
  )
}
