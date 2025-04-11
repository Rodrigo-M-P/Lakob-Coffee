"use client"

import { useState, useEffect, useCallback } from "react"
import { motion } from "framer-motion"

export default function OptimizedCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isClicking, setIsClicking] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  // Función de limitación para reducir la frecuencia de actualización de la posición del ratón
  const throttle = (callback: Function, delay: number) => {
    let lastCall = 0
    return (...args: any[]) => {
      const now = new Date().getTime()
      if (now - lastCall < delay) {
        return
      }
      lastCall = now
      return callback(...args)
    }
  }

  // Manejador de movimiento del ratón con limitación
  const handleMouseMove = useCallback(
    throttle((e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }, 10), // Actualizar como máximo cada 10ms
    [],
  )

  const handleMouseEnter = useCallback((e: MouseEvent) => {
    const target = e.target as HTMLElement
    if (
      target.tagName === "A" ||
      target.tagName === "BUTTON" ||
      target.closest("a") ||
      target.closest("button") ||
      target.classList.contains("cursor-hover")
    ) {
      setIsHovering(true)
    } else {
      setIsHovering(false)
    }
  }, [])

  const handleMouseDown = useCallback(() => setIsClicking(true), [])
  const handleMouseUp = useCallback(() => setIsClicking(false), [])

  useEffect(() => {
    // Comprobar si está en dispositivo móvil/táctil
    const checkMobile = () => {
      setIsMobile(window.matchMedia("(max-width: 768px)").matches || "ontouchstart" in window)
    }
    checkMobile()
    window.addEventListener("resize", checkMobile)

    // Solo añadir event listeners si no está en móvil
    if (!isMobile) {
      window.addEventListener("mousemove", handleMouseMove)
      document.addEventListener("mouseover", handleMouseEnter)
      window.addEventListener("mousedown", handleMouseDown)
      window.addEventListener("mouseup", handleMouseUp)
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseover", handleMouseEnter)
      window.removeEventListener("mousedown", handleMouseDown)
      window.removeEventListener("mouseup", handleMouseUp)
      window.removeEventListener("resize", checkMobile)
    }
  }, [handleMouseMove, handleMouseEnter, handleMouseDown, handleMouseUp, isMobile])

  // No renderizar nada en móvil
  if (isMobile) return null

  return (
    <motion.div
      className="fixed top-0 left-0 z-[100] pointer-events-none mix-blend-difference"
      style={{
        x: mousePosition.x - 8, // Reducido de 12 a 8
        y: mousePosition.y - 8, // Reducido de 12 a 8
      }}
      transition={{
        type: "spring",
        damping: 25,
        stiffness: 250,
        mass: 0.2,
      }}
    >
      {/* Flecha apuntando hacia arriba con estilo de la marca - versión más sencilla */}
      <motion.svg
        width="16" // Reducido de 24 a 16
        height="16" // Reducido de 24 a 16
        viewBox="0 0 16 16" // Ajustado el viewBox
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        animate={{
          scale: isHovering ? 1.5 : 1,
          opacity: isClicking ? 0.5 : 1,
          rotate: isHovering ? 45 : 0,
        }}
        transition={{
          type: "spring",
          damping: 25,
          stiffness: 250,
          mass: 0.2,
        }}
      >
        {/* Triángulo de la flecha más sencillo */}
        <path
          d="M8 2L3 10H13L8 2Z"
          fill="#f9c81d"
          stroke="#f9c81d"
          strokeWidth="0.75" // Reducido el grosor del trazo
          strokeLinejoin="round"
        />
        {/* Línea de la flecha más delgada */}
        <rect x="7" y="8" width="2" height="6" fill="#f9c81d" rx="1" />
      </motion.svg>
    </motion.div>
  )
}
