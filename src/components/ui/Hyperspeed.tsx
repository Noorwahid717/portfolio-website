'use client'

import { useEffect, useRef } from 'react'

interface HyperspeedProps {
  className?: string
  particleCount?: number
  speed?: number
}

export default function Hyperspeed({ 
  className = '', 
  particleCount = 150, 
  speed = 2 
}: HyperspeedProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    const particles: Array<{
      x: number
      y: number
      z: number
      prevX: number
      prevY: number
    }> = []

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        z: Math.random() * 1000,
        prevX: 0,
        prevY: 0,
      })
    }

    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      const centerX = canvas.width / 2
      const centerY = canvas.height / 2

      particles.forEach((particle) => {
        particle.prevX = particle.x
        particle.prevY = particle.y

        particle.z -= speed

        if (particle.z <= 0) {
          particle.x = Math.random() * canvas.width
          particle.y = Math.random() * canvas.height
          particle.z = 1000
          particle.prevX = particle.x
          particle.prevY = particle.y
        }

        const x = (particle.x - centerX) * (1000 / particle.z) + centerX
        const y = (particle.y - centerY) * (1000 / particle.z) + centerY
        const prevX = (particle.prevX - centerX) * (1000 / (particle.z + speed)) + centerX
        const prevY = (particle.prevY - centerY) * (1000 / (particle.z + speed)) + centerY

        // Create gradient based on speed
        const opacity = Math.max(0, 1 - particle.z / 1000)
        const gradient = ctx.createLinearGradient(prevX, prevY, x, y)
        gradient.addColorStop(0, `rgba(99, 102, 241, ${opacity * 0.1})`)
        gradient.addColorStop(0.5, `rgba(139, 92, 246, ${opacity * 0.5})`)
        gradient.addColorStop(1, `rgba(236, 72, 153, ${opacity})`)

        ctx.strokeStyle = gradient
        ctx.lineWidth = Math.max(0.1, (1000 - particle.z) / 1000 * 3)
        ctx.beginPath()
        ctx.moveTo(prevX, prevY)
        ctx.lineTo(x, y)
        ctx.stroke()
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [particleCount, speed])

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 pointer-events-none z-0 ${className}`}
    />
  )
}
