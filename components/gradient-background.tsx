"use client"

import { useEffect, useRef } from "react"

export default function GradientBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Draw the gradient
    const drawGradient = () => {
      // Create gradient
      const gradient = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        0,
        canvas.width / 2,
        canvas.height / 2,
        canvas.width / 1.5,
      )

      // Add colors
      gradient.addColorStop(0, "rgba(120, 80, 255, 0.05)")
      gradient.addColorStop(0.5, "rgba(80, 100, 200, 0.03)")
      gradient.addColorStop(1, "rgba(30, 40, 100, 0.01)")

      // Fill with gradient
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Add some subtle circles
      for (let i = 0; i < 5; i++) {
        const x = Math.random() * canvas.width
        const y = Math.random() * canvas.height
        const radius = Math.random() * 200 + 50

        const circleGradient = ctx.createRadialGradient(x, y, 0, x, y, radius)
        circleGradient.addColorStop(0, "rgba(150, 100, 255, 0.03)")
        circleGradient.addColorStop(1, "rgba(150, 100, 255, 0)")

        ctx.fillStyle = circleGradient
        ctx.beginPath()
        ctx.arc(x, y, radius, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    // Animation variables
    let animationId: number
    let lastTime = 0
    const interval = 2000 // Update every 2 seconds

    // Animation loop - very slow, just subtle movement
    const animate = (timestamp: number) => {
      const deltaTime = timestamp - lastTime

      if (deltaTime > interval) {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        drawGradient()
        lastTime = timestamp
      }

      animationId = requestAnimationFrame(animate)
    }

    animate(0)

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 bg-gradient-to-b from-background to-background/90" />
}
