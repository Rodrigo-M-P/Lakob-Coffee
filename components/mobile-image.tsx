"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

interface MobileImageProps {
  src: string
  alt: string
  className?: string
}

export default function MobileImage({ src, alt, className = "" }: MobileImageProps) {
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
      <div className={`country-image ${className}`}>
        <img src={src || "/placeholder.svg"} alt={alt} />
      </div>
    )
  }

  return (
    <div className={`relative h-full w-full ${className}`}>
      <Image src={src || "/placeholder.svg"} alt={alt} fill className="object-cover" />
    </div>
  )
}
