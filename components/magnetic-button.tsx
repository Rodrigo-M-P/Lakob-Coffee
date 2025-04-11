"use client"

import type React from "react"

import { useState, useRef, type ReactNode } from "react"
import { motion } from "framer-motion"
import Link from "next/link"

interface MagneticButtonProps {
  children: ReactNode
  className?: string
  onClick?: () => void
  strength?: number
  href?: string
}

export default function MagneticButton({
  children,
  className = "",
  onClick,
  strength = 40,
  href,
}: MagneticButtonProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const ref = useRef<HTMLButtonElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!ref.current) return

    const { clientX, clientY } = e
    const { left, top, width, height } = ref.current.getBoundingClientRect()

    const x = (clientX - (left + width / 2)) / strength
    const y = (clientY - (top + height / 2)) / strength

    setPosition({ x, y })
  }

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 })
  }

  const buttonContent = (
    <motion.button
      ref={ref}
      className={`cursor-hover ${className}`}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      whileHover={{
        scale: 1.03,
        transition: { duration: 0.2 },
      }}
    >
      {children}
    </motion.button>
  )

  // Si se proporciona un href, envolver el botón con un componente Link
  if (href) {
    return <Link href={href}>{buttonContent}</Link>
  }

  // Si no hay href, devolver solo el botón
  return buttonContent
}
