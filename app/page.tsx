import LoadingScreen from "@/components/loading-screen"
import HeroSection from "@/components/hero-section"
import FeaturedProducts from "@/components/featured-products"
import StorySection from "@/components/story-section"
import GlobalPresence from "@/components/global-presence"
import MayaCoSection from "@/components/mayaco-section"

export default function Home() {
  return (
    <main className="relative">
      <LoadingScreen />

      <HeroSection />

      {/* Sección optimizada con menos texto y más espacio para el producto */}
      <section className="container pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="flex flex-col items-center text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-6 text-gold-300">
            Experiencia Excepcional de Café
          </h2>
          <p className="text-gold-100 max-w-[600px] mb-8">
            Café meticulosamente cultivado en las tierras altas de Chiapas, donde tradiciones ancestrales se combinan
            con prácticas sostenibles modernas.
          </p>
        </div>

        {/* Producto para comprar directamente - ahora con más espacio */}
        <div className="max-w-[1400px] mx-auto">
          <FeaturedProducts />
        </div>
      </section>

      <StorySection />

      <GlobalPresence />

      <MayaCoSection />
    </main>
  )
}
