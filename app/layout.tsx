import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
// Eliminamos la importación del cursor personalizado
// import OptimizedCursor from "@/components/optimized-cursor"

const inter = Inter({ subsets: ["latin"] })

// Update the favicon to use the correct path to the face logo
export const metadata: Metadata = {
  title: "Lakobá | Café Maya",
  description:
    "Café excepcional de origen único de las tierras altas de Chiapas, México. Cada taza, un tributo a la tierra y su cultura.",
  icons: {
    icon: "/images/lakoba-face-logo.png",
  },
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" suppressHydrationWarning className="bg-black">
      <body className={`${inter.className} bg-black`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          {/* Eliminamos el componente OptimizedCursor */}
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
