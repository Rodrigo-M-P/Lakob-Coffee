"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function PrivacyPolicyPage() {
  return (
    <main className="pt-32 pb-24 bg-black min-h-screen">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link href="/" className="inline-flex items-center text-gold-400 hover:text-gold-500 transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver al Inicio
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-light text-gold-300 mb-8">Política de Privacidad</h1>

            <div className="prose prose-lg prose-invert prose-gold mx-auto">
              <p>Última actualización: 29 de marzo de 2025</p>

              <h2>1. Introducción</h2>
              <p>
                En Lakobá ("nosotros", "nuestro" o "nos"), respetamos su privacidad y estamos comprometidos a proteger
                su información personal. Esta Política de Privacidad explica cómo recopilamos, utilizamos, divulgamos y
                protegemos su información cuando visita nuestro sitio web, utiliza nuestros servicios o realiza compras
                con nosotros.
              </p>
              <p>
                Por favor, lea esta Política de Privacidad cuidadosamente. Al acceder o utilizar nuestro sitio web o
                servicios, usted reconoce que ha leído, entendido y acepta estar sujeto a todos los términos descritos
                en esta Política de Privacidad.
              </p>

              <h2>2. Información que Recopilamos</h2>
              <p>Podemos recopilar los siguientes tipos de información:</p>
              <h3>2.1 Información Personal</h3>
              <ul>
                <li>
                  Información de contacto (como nombre, dirección de correo electrónico, dirección postal y número de
                  teléfono)
                </li>
                <li>
                  Información de facturación y pago (como detalles de tarjeta de crédito y dirección de facturación)
                </li>
                <li>Información de cuenta (como nombre de usuario y contraseña)</li>
                <li>Historial de pedidos y preferencias</li>
                <li>Preferencias de comunicación</li>
              </ul>

              <h3>2.2 Información No Personal</h3>
              <ul>
                <li>Tipo y versión del navegador</li>
                <li>Sistema operativo</li>
                <li>Dirección IP</li>
                <li>Información del dispositivo</li>
                <li>Datos de uso (como páginas visitadas, tiempo en las páginas y enlaces en los que se hizo clic)</li>
                <li>Cookies y tecnologías similares</li>
              </ul>

              <h2>3. Cómo Recopilamos Información</h2>
              <p>Recopilamos información a través de varios métodos, incluyendo:</p>
              <ul>
                <li>
                  Interacciones directas (cuando crea una cuenta, realiza un pedido, se suscribe a nuestro boletín o nos
                  contacta)
                </li>
                <li>Tecnologías automatizadas (como cookies, balizas web y tecnologías similares)</li>
                <li>Fuentes de terceros (como socios comerciales, proveedores de análisis y procesadores de pagos)</li>
              </ul>

              <h2>4. Cómo Utilizamos Su Información</h2>
              <p>Podemos utilizar su información para los siguientes propósitos:</p>
              <ul>
                <li>Para procesar y cumplir con sus pedidos</li>
                <li>Para crear y gestionar su cuenta</li>
                <li>Para proporcionar soporte al cliente</li>
                <li>
                  Para enviar correos electrónicos transaccionales (como confirmaciones de pedidos y actualizaciones de
                  envío)
                </li>
                <li>Para enviar comunicaciones de marketing (si ha optado por recibirlas)</li>
                <li>Para mejorar nuestro sitio web, productos y servicios</li>
                <li>Para personalizar su experiencia</li>
                <li>Para detectar y prevenir fraudes</li>
                <li>Para cumplir con obligaciones legales</li>
              </ul>

              <h2>5. Cómo Compartimos Su Información</h2>
              <p>Podemos compartir su información con las siguientes partes:</p>
              <ul>
                <li>
                  Proveedores de servicios (como procesadores de pago, empresas de envío y plataformas de marketing)
                </li>
                <li>Socios comerciales (como MayaCo y otras organizaciones con las que colaboramos)</li>
                <li>Autoridades legales (cuando lo exija la ley o para proteger nuestros derechos)</li>
              </ul>
              <p>No vendemos su información personal a terceros.</p>

              <h2>6. Sus Derechos y Opciones</h2>
              <p>
                Dependiendo de su ubicación, puede tener ciertos derechos con respecto a su información personal,
                incluyendo:
              </p>
              <ul>
                <li>El derecho a acceder a su información personal</li>
                <li>El derecho a corregir información inexacta</li>
                <li>El derecho a eliminar su información personal</li>
                <li>El derecho a restringir u objetar el procesamiento</li>
                <li>El derecho a la portabilidad de datos</li>
                <li>El derecho a retirar el consentimiento</li>
              </ul>
              <p>
                Para ejercer estos derechos, contáctenos utilizando la información proporcionada en la sección
                "Contáctenos" a continuación.
              </p>

              <h2>7. Seguridad</h2>
              <p>
                Implementamos medidas técnicas y organizativas apropiadas para proteger su información personal contra
                el acceso no autorizado, la divulgación, la alteración y la destrucción. Sin embargo, ningún método de
                transmisión por Internet o almacenamiento electrónico es 100% seguro, por lo que no podemos garantizar
                una seguridad absoluta.
              </p>

              <h2>8. Transferencias Internacionales</h2>
              <p>
                Su información puede ser transferida y procesada en países distintos al país en el que reside. Estos
                países pueden tener leyes de protección de datos diferentes a las de su país de residencia. Tomaremos
                las medidas adecuadas para garantizar que su información personal permanezca protegida de acuerdo con
                esta Política de Privacidad.
              </p>

              <h2>9. Privacidad de los Niños</h2>
              <p>
                Nuestro sitio web y servicios no están dirigidos a personas menores de 18 años. No recopilamos
                conscientemente información personal de niños. Si usted es un padre o tutor y cree que su hijo nos ha
                proporcionado información personal, contáctenos y tomaremos medidas para eliminar dicha información.
              </p>

              <h2>10. Cambios a Esta Política de Privacidad</h2>
              <p>
                Podemos actualizar esta Política de Privacidad de vez en cuando para reflejar cambios en nuestras
                prácticas o por otras razones operativas, legales o regulatorias. Le notificaremos de cualquier cambio
                material publicando la Política de Privacidad actualizada en nuestro sitio web y actualizando la fecha
                de "Última actualización" en la parte superior de esta política.
              </p>

              <h2>11. Contáctenos</h2>
              <p>
                Si tiene alguna pregunta, inquietud o solicitud con respecto a esta Política de Privacidad o nuestras
                prácticas de privacidad, contáctenos en:
              </p>
              <p>
                Correo electrónico: privacidad@lakobacoffee.com
                <br />
                Dirección: Lakobá Coffee Headquarters, 123 Coffee Avenue, San Cristóbal de las Casas, Chiapas, México
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  )
}
