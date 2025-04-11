"use client"

import type React from "react"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { ArrowRight, Check, AlertCircle } from "lucide-react"
import { Input } from "@/components/ui/input"
import MagneticButton from "./magnetic-button"
import RevealText from "./reveal-text"
import { subscribeToNewsletter } from "@/actions/newsletter"

export default function Newsletter() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [result, setResult] = useState<{
    success: boolean
    message: string
  } | null>(null)
  const formRef = useRef<HTMLFormElement>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!email) return

    setIsSubmitting(true)
    setResult(null) // Limpiar resultados anteriores

    try {
      const formData = new FormData()
      formData.append("email", email)

      console.log("Enviando email:", email)
      const response = await subscribeToNewsletter(formData)
      console.log("Respuesta de suscripción:", response)

      setResult(response)

      if (response.success) {
        setEmail("")
        if (formRef.current) {
          formRef.current.reset()
        }
      }
    } catch (error) {
      console.error("Error en el envío del formulario:", error)
      setResult({
        success: false,
        message: "Ocurrió un error inesperado. Por favor, inténtalo de nuevo más tarde.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="py-24 md:py-32 bg-champagne-950 text-white">
      <div className="container">
        <div className="max-w-[600px] mx-auto text-center">
          <RevealText className="mb-6">
            <h2 className="text-3xl md:text-4xl font-light tracking-tight text-gold-300">Únete a nuestro Boletín</h2>
          </RevealText>

          <RevealText className="mb-8" delay={0.1}>
            <p className="text-champagne-100">
              Suscríbete para recibir ofertas exclusivas, consejos de preparación y ser el primero en conocer nuestros
              lanzamientos de edición limitada y eventos especiales.
            </p>
          </RevealText>

          {result?.success ? (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center justify-center space-x-2 text-lg bg-gold-900/30 p-4 rounded-md"
            >
              <Check className="h-5 w-5 text-gold-400" />
              <span className="text-champagne-200">{result.message}</span>
            </motion.div>
          ) : (
            <motion.form
              ref={formRef}
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex-1">
                <Input
                  type="email"
                  placeholder="Tu dirección de correo electrónico"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-gold-900/20 border-gold-800/40 text-white placeholder:text-champagne-400/50 focus-visible:ring-gold-500"
                  disabled={isSubmitting}
                />
                {result && !result.success && (
                  <div className="mt-2 text-sm text-red-400 flex items-center">
                    <AlertCircle className="h-3 w-3 mr-1" />
                    {result.message}
                  </div>
                )}
              </div>
              <MagneticButton
                className="bg-gold-500 text-black px-6 py-3 rounded-md font-medium flex items-center justify-center group disabled:opacity-50 disabled:cursor-not-allowed cursor-hover"
                onClick={handleSubmit}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Suscribiendo..." : "Suscribirse"}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </MagneticButton>
            </motion.form>
          )}
        </div>
      </div>
    </section>
  )
}
