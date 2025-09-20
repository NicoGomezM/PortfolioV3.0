"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Code, Briefcase, Network, BarChart3, FileText, ArrowRight } from "lucide-react"
import { Button } from "../components/ui/button"
import HeroAnimation from "../components/hero-animation"

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
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Servicios
            </h2>
            <p className="mt-4 text-muted-foreground md:text-xl">
              Soluciones de software, datos y seguridad orientadas a resultados
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Desarrollo de Software */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center p-6 bg-background rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="p-4 bg-primary/10 rounded-full mb-4">
                <Code className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Desarrollo de Software</h3>
              <p className="text-muted-foreground">
                Diseño y construcción de soluciones a medida: desde scripts y
                automatizaciones hasta sistemas completos, usando tecnologías
                modernas e IA cuando aporta valor real.
              </p>
            </motion.div>

            {/* Aplicaciones Web & APIs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center p-6 bg-background rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="p-4 bg-primary/10 rounded-full mb-4">
                <Briefcase className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Aplicaciones Web & APIs</h3>
              <p className="text-muted-foreground">
                Desarrollo de frontends y backends con UX cuidada, integración
                con servicios externos y APIs robustas, listas para producción.
              </p>
            </motion.div>

            {/* Analítica de Datos & ML */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center p-6 bg-background rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="p-4 bg-primary/10 rounded-full mb-4">
                <BarChart3 className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Analítica de Datos & ML</h3>
              <p className="text-muted-foreground">
                Limpieza y transformación de datos, dashboards, features para
                modelos de Machine Learning y evaluación de modelos para casos
                de uso reales.
              </p>
            </motion.div>

            {/* Infraestructura & Redes Seguras */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center p-6 bg-background rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="p-4 bg-primary/10 rounded-full mb-4">
                <Network className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Infraestructura & Redes Seguras</h3>
              <p className="text-muted-foreground">
                Configuración de redes, hardening y buenas prácticas de seguridad
                para proteger tu infraestructura y cumplir normativa vigente.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              viewport={{ once: true }}
              className="lg:col-start-2 flex flex-col items-center text-center p-6 bg-background rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="p-4 bg-primary/10 rounded-full mb-4">
                <FileText className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Informes Técnicos & Storytelling</h3>
              <p className="text-muted-foreground">
                Redacción de informes claros y accionables: metodologías,
                resultados de análisis/ML y recomendaciones priorizadas para
                decisión ejecutiva.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
