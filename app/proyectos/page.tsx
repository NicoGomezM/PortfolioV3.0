"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../../components/ui/card"
import { Badge } from "../../components/ui/badge"
import { Button } from "../../components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const projects = [
  {
    id: 1,
    title: "Balanceador de equipos",
    description: "Plataforma enfocada en equilibrar equipos de futbol en encuentros particulares entre amigos con elementos de votación y gestión de partidos.",
    image: "/teambalancer.png?height=400&width=600",
    tags: ["Next.js", "Tailwind CSS", "JavaScript", "MongoDB"],
    demoUrl: "https://teambalanc.netlify.app/",
    repoUrl: "https://github.com/NicoGomezM/TeamBalancer",
  },
  {
    id: 2,
    title: "Sorteos personalizados y portables",
    description: "Sistema enfocado en la realizacion de sorteos personalizados y portables mediante tecnologías de automatización de hosting local a traves de Python.",
    image: "/sorteosPortable.png?height=400&width=600",
    tags: ["Next.js", "Tailwind CSS", "Python"],
    // demoUrl: "#",
    repoUrl: "https://github.com/NicoGomezM/SorteosPortable",
  },
  // {
  //   id: 3,
  //   title: "App de Gestión de Tareas",
  //   description: "Aplicación para organizar y gestionar tareas personales y de equipo.",
  //   image: "/placeholder.svg?height=400&width=600",
  //   tags: ["Vue.js", "Vuex", "Node.js"],
  //   demoUrl: "#",
  //   repoUrl: "#",
  // },
  // {
  //   id: 4,
  //   title: "Blog Personal",
  //   description: "Blog con sistema de gestión de contenidos y comentarios.",
  //   image: "/placeholder.svg?height=400&width=600",
  //   tags: ["Gatsby", "GraphQL", "Markdown"],
  //   demoUrl: "#",
  //   repoUrl: "#",
  // },
]

export default function ProyectosPage() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <div className="py-20">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Mis Proyectos</h1>
          <p className="mt-4 text-muted-foreground md:text-xl">Una selección de mis trabajos más recientes</p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={item}>
              <Card className="overflow-hidden h-full transition-all hover:shadow-lg">
                <div className="relative h-48 md:h-64 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform hover:scale-105 duration-500"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  {project.demoUrl && (
                    <Button asChild variant="outline" size="sm">
                      <Link href={project.demoUrl}>
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Demo
                      </Link>
                    </Button>
                  )}
                  <Button asChild variant="outline" size="sm">
                    <Link href={project.repoUrl}>
                      <Github className="mr-2 h-4 w-4" />
                      Código
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
