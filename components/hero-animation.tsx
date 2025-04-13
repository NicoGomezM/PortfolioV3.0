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

    // Particle class con tipado seguro
    class Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      color: string
      private canvas: HTMLCanvasElement
      private ctx: CanvasRenderingContext2D

      constructor(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
        this.canvas = canvas
        this.ctx = ctx
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 5 + 1
        this.speedX = (Math.random() * 3 - 1.5) * 0.2
        this.speedY = (Math.random() * 3 - 1.5) * 0.2
        this.color = `hsl(${Math.random() * 60 + 240}, 70%, 50%)`
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY

        if (this.x > this.canvas.width) this.x = 0
        else if (this.x < 0) this.x = this.canvas.width
        if (this.y > this.canvas.height) this.y = 0
        else if (this.y < 0) this.y = this.canvas.height
      }

      draw() {
        this.ctx.fillStyle = this.color
        this.ctx.beginPath()
        this.ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        this.ctx.fill()
      }
    }

    // Crear partículas con referencias seguras
    const particlesArray: Particle[] = []
    const numberOfParticles = Math.min(100, Math.floor((canvas.width * canvas.height) / 10000))

    for (let i = 0; i < numberOfParticles; i++) {
      particlesArray.push(new Particle(canvas, ctx))
    }

    // Animation loop con control de null
    let animationFrameId: number
    let lastTime = 0
    const frameInterval = 30

    const animate = (timestamp: number) => {
      const deltaTime = timestamp - lastTime

      if (deltaTime > frameInterval) {
        ctx.clearRect(0, 0, canvas.width, canvas.height)

        // Dibujar conexiones
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

        // Actualizar partículas
        particlesArray.forEach(particle => {
          particle.update()
          particle.draw()
        })

        lastTime = timestamp
      }

      animationFrameId = requestAnimationFrame(animate)
    }

    animate(0)

    // Cleanup seguro
    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 bg-gradient-to-b from-background to-background/80" />
}