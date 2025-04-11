"use client"

import type React from "react"

import { useState } from "react"
import { useSearchParams } from "next/navigation"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Send, Check } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import MagneticButton from "@/components/magnetic-button"

export default function ContactPage() {
  const searchParams = useSearchParams()
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  // Reemplazar la función handleSubmit con una versión que explique el comportamiento actual
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Actualmente esto es una simulación. En una implementación real,
    // enviaríamos los datos a un endpoint de API o servicio de correo.
    console.log("Datos del formulario:", formState)
    setTimeout(() => {
      setIsSubmitted(true)
    }, 1000)
  }

  return (
    <main className="pt-32 pb-24 bg-black min-h-screen">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-light text-gold-300 mb-6">Contáctanos</h1>
          <p className="text-gold-100 max-w-2xl mx-auto">
            Nos encantaría saber de ti. Ya sea que tengas una pregunta sobre nuestro café, necesites ayuda con un pedido
            o quieras saber más sobre nuestro compromiso con la herencia maya, estamos aquí para ayudarte.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-2xl font-light text-gold-400 mb-6">Ponte en Contacto</h2>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-gold-900/30 p-8 rounded-lg border border-gold-800/50 flex flex-col items-center justify-center text-center h-[400px]"
                >
                  <div className="w-16 h-16 bg-gold-500/20 rounded-full flex items-center justify-center mb-6">
                    <Check className="h-8 w-8 text-gold-500" />
                  </div>
                  <h3 className="text-xl text-gold-300 mb-4">¡Mensaje Enviado!</h3>
                  <p className="text-gold-100 mb-6">Gracias por contactarnos. Te responderemos lo antes posible.</p>
                  <Button onClick={() => setIsSubmitted(false)} className="bg-gold-500 hover:bg-gold-600 text-black">
                    Enviar Otro Mensaje
                  </Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-gold-300">
                      Nombre
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className="bg-gold-900/30 border-gold-800/50 text-gold-100 focus-visible:ring-gold-500"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-gold-300">
                      Correo Electrónico
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className="bg-gold-900/30 border-gold-800/50 text-gold-100 focus-visible:ring-gold-500"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-gold-300">
                      Asunto
                    </Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formState.subject}
                      onChange={handleChange}
                      required
                      className="bg-gold-900/30 border-gold-800/50 text-gold-100 focus-visible:ring-gold-500"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-gold-300">
                      Mensaje
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="bg-gold-900/30 border-gold-800/50 text-gold-100 focus-visible:ring-gold-500"
                    />
                  </div>

                  <MagneticButton className="w-full bg-gold-500 hover:bg-gold-600 text-black py-3 rounded-md font-medium flex items-center justify-center">
                    Enviar Mensaje
                    <Send className="ml-2 h-4 w-4" />
                  </MagneticButton>
                </form>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h2 className="text-2xl font-light text-gold-400 mb-6">Información de Contacto</h2>

              <div className="bg-gold-900/30 p-8 rounded-lg border border-gold-800/50 mb-8">
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-gold-500/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <Mail className="h-5 w-5 text-gold-500" />
                    </div>
                    <div>
                      <h3 className="text-gold-300 font-medium mb-1">Correo Electrónico</h3>
                      <p className="text-gold-100">info@lakobacoffee.com</p>
                      <p className="text-gold-100">support@lakobacoffee.com</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-gold-500/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <Phone className="h-5 w-5 text-gold-500" />
                    </div>
                    <div>
                      <h3 className="text-gold-300 font-medium mb-1">Teléfono</h3>
                      <p className="text-gold-100">+1 (555) 123-4567</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-gold-500/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <MapPin className="h-5 w-5 text-gold-500" />
                    </div>
                    <div>
                      <h3 className="text-gold-300 font-medium mb-1">Dirección</h3>
                      <p className="text-gold-100">
                        Lakobá Coffee Headquarters
                        <br />
                        123 Coffee Avenue
                        <br />
                        San Cristóbal de las Casas
                        <br />
                        Chiapas, México
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  )
}
