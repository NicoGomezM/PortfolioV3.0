"use client"

import { motion } from "framer-motion"
import { Progress } from "@/components/ui/progress"

const skills = [
  { name: "HTML & CSS", level: 95 },
  { name: "JavaScript", level: 90 },
  { name: "React", level: 85 },
  { name: "Next.js", level: 80 },
  { name: "Node.js", level: 75 },
  { name: "TypeScript", level: 85 },
  { name: "UI/UX Design", level: 70 },
  { name: "Tailwind CSS", level: 90 },
]

const technologies = [
  "React",
  "Next.js",
  "Vue.js",
  "Angular",
  "Node.js",
  "Express",
  "MongoDB",
  "PostgreSQL",
  "Firebase",
  "AWS",
  "Docker",
  "Git",
  "GitHub",
  "Figma",
  "Adobe XD",
  "Tailwind CSS",
  "SASS",
  "Redux",
  "GraphQL",
  "REST API",
  "Jest",
  "Cypress",
  "Webpack",
  "Vite",
]

export default function HabilidadesPage() {
  return (
    <div className="py-20">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Mis Habilidades</h1>
          <p className="mt-4 text-muted-foreground md:text-xl">Competencias técnicas y tecnologías que domino</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-2xl font-bold mb-6"
            >
              Competencias Principales
            </motion.h2>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                >
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-muted-foreground">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-2xl font-bold mb-6"
            >
              Tecnologías
            </motion.h2>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-2"
            >
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.05 * index }}
                  className="bg-muted px-4 py-2 rounded-full text-sm"
                >
                  {tech}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h2 className="text-2xl font-bold mb-6 text-center">Educación y Certificaciones</h2>
          <div className="space-y-8">
            <div className="bg-muted/30 p-6 rounded-lg">
              <h3 className="text-xl font-bold">Ingeniería en Sistemas Computacionales</h3>
              <p className="text-muted-foreground">Universidad Tecnológica, 2016-2020</p>
              <p className="mt-2">Especialización en desarrollo de software y sistemas web.</p>
            </div>
            <div className="bg-muted/30 p-6 rounded-lg">
              <h3 className="text-xl font-bold">Certificación en Desarrollo Web Full Stack</h3>
              <p className="text-muted-foreground">Bootcamp Intensivo, 2021</p>
              <p className="mt-2">Formación intensiva en tecnologías web modernas y metodologías ágiles.</p>
            </div>
            <div className="bg-muted/30 p-6 rounded-lg">
              <h3 className="text-xl font-bold">Certificación AWS Developer Associate</h3>
              <p className="text-muted-foreground">Amazon Web Services, 2022</p>
              <p className="mt-2">Especialización en servicios cloud y arquitecturas serverless.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
