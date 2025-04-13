"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Download, Github, Linkedin, Twitter } from "lucide-react"
import Link from "next/link"

export default function SobreMiPage() {
  return (
    <div className="py-20">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden">
              <Image src="/placeholder.svg?height=500&width=400" alt="Foto de perfil" fill className="object-cover" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary/10 rounded-full z-[-1]" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/10 rounded-full z-[-1]" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">Sobre Mí</h1>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Soy un desarrollador web apasionado por crear experiencias digitales atractivas y funcionales. Con más
                de 5 años de experiencia en el sector, me especializo en el desarrollo frontend y backend utilizando
                tecnologías modernas.
              </p>
              <p>
                Mi enfoque se centra en la creación de soluciones web que no solo sean visualmente atractivas, sino
                también altamente funcionales, accesibles y optimizadas para el rendimiento.
              </p>
              <p>
                Disfruto trabajando en proyectos desafiantes que me permitan aprender y crecer profesionalmente. Siempre
                estoy explorando nuevas tecnologías y metodologías para mejorar mis habilidades y ofrecer soluciones
                innovadoras.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 mt-8">
              <Button asChild>
                <Link href="/contacto">Contactar</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="#">
                  <Download className="mr-2 h-4 w-4" />
                  Descargar CV
                </Link>
              </Button>
            </div>

            <div className="flex gap-4 mt-8">
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Github className="h-6 w-6" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Twitter className="h-6 w-6" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h2 className="text-2xl font-bold mb-8 text-center">Mi Trayectoria</h2>
          <div className="space-y-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold">Desarrollador Senior</h3>
                    <p className="text-primary">Empresa Innovadora S.L.</p>
                  </div>
                  <p className="text-muted-foreground">2020 - Presente</p>
                </div>
                <p>
                  Desarrollo de aplicaciones web complejas utilizando React, Next.js y Node.js. Liderazgo de equipos de
                  desarrollo y gestión de proyectos para clientes internacionales.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold">Desarrollador Frontend</h3>
                    <p className="text-primary">Agencia Digital</p>
                  </div>
                  <p className="text-muted-foreground">2018 - 2020</p>
                </div>
                <p>
                  Creación de interfaces de usuario atractivas y responsivas utilizando HTML, CSS, JavaScript y
                  frameworks modernos como React y Vue.js.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold">Desarrollador Web Junior</h3>
                    <p className="text-primary">Startup Tecnológica</p>
                  </div>
                  <p className="text-muted-foreground">2016 - 2018</p>
                </div>
                <p>
                  Desarrollo de sitios web y aplicaciones sencillas. Colaboración en proyectos de e-commerce y
                  plataformas educativas.
                </p>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
