"use client"

import { useEffect, useRef } from "react"

export default function HeroAnimation() {
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

    // Particle class
    class Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      color: string

      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 5 + 1
        // Reducir significativamente la velocidad de las partículas
        this.speedX = (Math.random() * 3 - 1.5) * 0.2 // 20% de la velocidad original
        this.speedY = (Math.random() * 3 - 1.5) * 0.2 // 20% de la velocidad original
        this.color = `hsl(${Math.random() * 60 + 240}, 70%, 50%)`
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY

        if (this.x > canvas.width) this.x = 0
        else if (this.x < 0) this.x = canvas.width
        if (this.y > canvas.height) this.y = 0
        else if (this.y < 0) this.y = canvas.height
      }

      draw() {
        ctx.fillStyle = this.color
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    // Create particles
    const particlesArray: Particle[] = []
    const numberOfParticles = Math.min(100, Math.floor((canvas.width * canvas.height) / 10000))

    for (let i = 0; i < numberOfParticles; i++) {
      particlesArray.push(new Particle())
    }

    // Animation loop - reducir la frecuencia de actualización
    let lastTime = 0
    const frameInterval = 30 // Actualizar cada 30ms en lugar de cada frame (aprox. 16.7ms)

    const animate = (timestamp: number) => {
      const deltaTime = timestamp - lastTime

      if (deltaTime > frameInterval) {
        ctx.clearRect(0, 0, canvas.width, canvas.height)

        // Draw connections
        ctx.strokeStyle = "rgba(140, 140, 255, 0.1)"
        ctx.lineWidth = 1
        for (let i = 0; i < particlesArray.length; i++) {
          for (let j = i; j < particlesArray.length; j++) {
            const dx = particlesArray[i].x - particlesArray[j].x
            const dy = particlesArray[i].y - particlesArray[j].y
            const distance = Math.sqrt(dx * dx + dy * dy)

            if (distance < 150) {
              ctx.beginPath()
              ctx.moveTo(particlesArray[i].x, particlesArray[i].y)
              ctx.lineTo(particlesArray[j].x, particlesArray[j].y)
              ctx.stroke()
            }
          }
        }

        // Update and draw particles
        for (let i = 0; i < particlesArray.length; i++) {
          particlesArray[i].update()
          particlesArray[i].draw()
        }

        lastTime = timestamp
      }

      requestAnimationFrame(animate)
    }

    animate(0)

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 bg-gradient-to-b from-background to-background/80" />
}
