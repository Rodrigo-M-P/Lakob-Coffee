import LoadingScreen from "@/components/loading-screen"
import HeroSection from "@/components/hero-section"
import MarqueeSection from "@/components/marquee-section"
import FeaturedProducts from "@/components/featured-products"
import StorySection from "@/components/story-section"
import GlobalPresence from "@/components/global-presence"
import MayaCoSection from "@/components/mayaco-section"

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
          {/* Se eliminaron los botones de redirección aquí */}
        </div>

        {/* Producto para comprar directamente */}
        <FeaturedProducts />
      </section>

      {/* Se eliminó la sección CoffeeCategoriesCarousel (Nuestra Selección de Café) */}

      <StorySection />

      <GlobalPresence />

      <MayaCoSection />
    </main>
  )
}
