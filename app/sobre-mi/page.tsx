"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "../../components/ui/button"
import { Card, CardContent } from "../../components/ui/card"
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
              <Image src="/logoNGMFormal-sinF.png" alt="Foto de perfil" fill className="object-cover" />
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
                Soy un estudiante de informática interesado en ampliar mis conocimientos y llevar a la práctica mis habilidades, tanto en el desarrollo web como en la creación de algoritmos que permitan automatizar tareas y mejorar la eficiencia de los procesos.
                Tengo experiencia trabajando con lenguajes de programación como Java, Python y C++, así como en el desarrollo de aplicaciones web utilizando HTML, CSS, JavaScript y frameworks como React y Next.js.
                Disfruto trabajar en equipo y colaborar con diseñadores y otros desarrolladores para crear productos de alta calidad que superen las expectativas de los clientes.
              </p>
              <p>
                Mi enfoque se centra en la creación de soluciones web que no solo sean visualmente atractivas, sino también altamente funcionales, accesibles y optimizadas para el rendimiento.
                Adopto un enfoque variado y centrado en el usuario, lo que me permite comprender las necesidades de los clientes y traducirlas en soluciones efectivas.
                Además, me interesan la <span className="font-bold">inteligencia artificial</span> y la <span className="font-bold">ciberseguridad</span>, áreas en las que he aplicado conocimientos en proyectos personales y académicos.
                Me gusta mantenerme actualizado con las últimas tendencias y tecnologías.
              </p>
              <p>
                Disfruto trabajar en proyectos desafiantes que me permitan aprender y crecer profesionalmente.
                Siempre estoy explorando nuevas tecnologías y metodologías para mejorar mis habilidades y ofrecer soluciones innovadoras.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 mt-8">
              <Button asChild>
                <Link href="/contacto">Contactar</Link>
              </Button>
              {/* <Button variant="outline" asChild>
                <Link href="#">
                  <Download className="mr-2 h-4 w-4" />
                  Descargar CV
                </Link>
              </Button> */}
            </div>

            {/* <div className="flex gap-4 mt-8">
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
            </div> */}
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
                    <h3 className="text-xl font-bold">Desarrollador WEB</h3>
                    <p className="text-primary">Reingenieria Minerals</p>
                  </div>
                  <p className="text-muted-foreground">Marzo 2025 - Presente</p>
                </div>
                <p>
                  Desarrollo de una aplicación web orientada a la optimización del tiempo y la organización del personal, con funcionalidades para la gestión de licitaciones, generación de documentos y seguimiento de órdenes de compra y cotizaciones. 
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold">Desarrollador Proyecto Particular</h3>
                    <p className="text-primary">Laboratorio CIMUBB</p>
                  </div>
                  <p className="text-muted-foreground">Diciembre 2023 - Agosto 2024</p>
                </div>
                <p>
                Desarrollo de un prototipo funcional para el muestreo de datos, incluyendo la programación del dispositivo para realizar tareas de captura y almacenamiento en una tarjeta SD y en Google DataSheet. Se implementó una interfaz gráfica para la visualización y análisis de los datos recolectados, junto con la elaboración de documentación técnica en formato de tutorial y el registro detallado de todos los procesos involucrados en el proyecto.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold">Técnico en hardware</h3>
                    {/* <p className="text-primary">Técnico en hardware</p> */}
                  </div>
                  <p className="text-muted-foreground">Diciembre 2020 - Actualidad</p>
                </div>
                <p>
                Encargado de la actualización de software y hardware en equipos informáticos para mejorar su rendimiento, así como de la reparación de computadoras y dispositivos electrónicos. También realicé instalaciones de sistemas operativos y programas, y participé en la construcción y ensamblaje de computadoras de escritorio.
                </p>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
