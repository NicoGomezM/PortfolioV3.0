"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Code, Briefcase, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import HeroAnimation from "@/components/hero-animation"

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const updateMousePosition = (ev: MouseEvent) => {
      if (!containerRef.current) return
      const { clientX, clientY } = ev
      containerRef.current.style.setProperty("--x", `${clientX}px`)
      containerRef.current.style.setProperty("--y", `${clientY}px`)
    }

    window.addEventListener("mousemove", updateMousePosition)
    return () => {
      window.removeEventListener("mousemove", updateMousePosition)
    }
  }, [])

  return (
    <div ref={containerRef} className="relative">
      <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <HeroAnimation />
        </div>
        <div className="container px-4 md:px-6 z-10">
          <div className="flex flex-col items-center space-y-4 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500">
                Bienvenido a Mi Portfolio
              </h1>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="max-w-[700px]"
            >
              <p className="text-muted-foreground md:text-xl">
                <span className="description-text" data-key="description">Desarrollador, programador y apasionado por la tecnología 💻.</span>
                <span data-key="flowers"> Estudiante de la ilustre</span>
                <span className="text-blue-400 opacity-70" data-key="university"> Universidad del Bío-Bío</span>
                <span data-key="location"> en Concepción, Chile.</span>
                <span data-key="experience"> Con experiencia en múltiples áreas de la informática.</span>
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 mt-8"
            >
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600"
              >
                <Link href="/habilidades">
                  Ver Habilidades <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contacto">Contactar</Link>
              </Button>
            </motion.div>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="flex flex-col items-center">
            <p className="text-sm text-muted-foreground mb-2">Descubre más</p>
            <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
                className="w-1.5 h-1.5 bg-muted-foreground rounded-full mt-2"
              />
            </div>
          </div>
        </motion.div>
      </section>

      <section id="servicios" className="py-20 bg-muted/30">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Mis Servicios</h2>
            <p className="mt-4 text-muted-foreground md:text-xl">Soluciones digitales para tus necesidades</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center p-6 bg-background rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="p-4 bg-primary/10 rounded-full mb-4">
                <Code className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Desarrollo Web</h3>
              <p className="text-muted-foreground">
                Creación de sitios web modernos, rápidos y responsivos utilizando las últimas tecnologías.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center p-6 bg-background rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="p-4 bg-primary/10 rounded-full mb-4">
                <Briefcase className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Aplicaciones Web</h3>
              <p className="text-muted-foreground">
                Desarrollo de aplicaciones web interactivas y dinámicas con experiencias de usuario.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center p-6 bg-background rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="p-4 bg-primary/10 rounded-full mb-4">
                <User className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Consultoría</h3>
              <p className="text-muted-foreground">
                Asesoramiento técnico y estratégico para optimizar tu presencia digital y mejorar tus proyectos.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
