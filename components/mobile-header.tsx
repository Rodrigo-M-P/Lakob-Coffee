"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

interface MobileHeaderProps {
  title: string
  subtitle: string
  imageSrc: string
  imageAlt: string
}

export default function MobileHeader({ title, subtitle, imageSrc, imageAlt }: MobileHeaderProps) {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => {
      window.removeEventListener("resize", checkMobile)
    }
  }, [])

  if (isMobile) {
    return (
      <div className="mobile-header">
        <div className="mobile-header-image">
          <img src={imageSrc || "/placeholder.svg"} alt={imageAlt} />
        </div>
        <div className="mobile-header-content">
          <h1 className="text-3xl font-light text-gold-300 mb-2">{title}</h1>
          <p className="text-gold-100">{subtitle}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="header-image-container">
      <Image src={imageSrc || "/placeholder.svg"} alt={imageAlt} fill className="header-image" priority />
      <div className="header-overlay"></div>
      <div className="header-content">
        <div className="container">
          <div className="max-w-3xl">
            <div>
              <h1 className="text-4xl md:text-6xl font-light text-gold-300 mb-6">{title}</h1>
            </div>
            <div>
              <p className="text-xl text-gold-100">{subtitle}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
