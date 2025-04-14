"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin } from "lucide-react"

export default function ContactPage() {
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
            Estamos aquí para responder tus preguntas sobre nuestro café y nuestro compromiso con la herencia maya.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
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
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 bg-gold-500/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Phone className="h-5 w-5 text-gold-500" />
                  </div>
                  <div>
                    <h3 className="text-gold-300 font-medium mb-1">Teléfono</h3>
                    <p className="text-gold-100">+39 344 612 8400</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 bg-gold-500/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <MapPin className="h-5 w-5 text-gold-500" />
                  </div>
                  <div>
                    <h3 className="text-gold-300 font-medium mb-1">Ubicación </h3>
                    <p className="text-gold-100">
                      Lakobá Coffee
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
    </main>
  )
}
