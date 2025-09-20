"use client"

import { motion } from "framer-motion"
import ProyectsZoomer from "@/components/proyects_zoomer"

// ==== DATOS: ahora con images: string[] y detalles adicionales ====
const projects = [
  {
    id: 1,
    title: "Balanceador de equipos",
    description:
      "Plataforma enfocada en equilibrar equipos de futbol en encuentros particulares entre amigos con elementos de votación y gestión de partidos.",
    images: [
      "/teambalancer/1.png?height=400&width=600",
      "/teambalancer/2.png?height=400&width=600",
      "/teambalancer/3.png?height=400&width=600",
      "/teambalancer/4.png?height=400&width=600",
    ],
    tags: ["Next.js", "Tailwind CSS", "JavaScript", "MongoDB"],
    demoUrl: "https://teambalanc.netlify.app/",
    repoUrl: "https://github.com/NicoGomezM/TeamBalancer",
    details: {
      objetivos: [
        "Crear equipos equilibrados basados en habilidades",
        "Sistema de votación para seleccionar jugadores",
        "Gestión completa de partidos y estadísticas"
      ],
      retos: [
        "Algoritmo de balanceado justo",
        "Interfaz intuitiva para usuarios no técnicos",
        "Persistencia de datos con MongoDB"
      ],
      resultados: [
        "Mayor satisfacción en la distribución de jugadores",
        "Sistema adoptado en varias ocasiones entre amigos",
      ]
    }
  },
  {
    id: 2,
    title: "Sorteos personalizados y portables",
    description:
      "Sistema enfocado en la realización de sorteos personalizados y portables mediante tecnologías de automatización de hosting local a través de Python.",
    images: [
      "/sorteosPortable/1.png?height=400&width=600",
    ],
    tags: ["Next.js", "Tailwind CSS", "Python"],
    repoUrl: "https://github.com/NicoGomezM/SorteosPortable",
    details: {
      objetivos: [
        "Crear sorteos personalizables y justos",
        "Sistema portable sin dependencias externas",
        "Interfaz web moderna y responsive"
      ],
      retos: [
        "Hosting local automático con Python",
        "Generación de números verdaderamente aleatorios",
        "Compatibilidad multiplataforma"
      ],
      resultados: [
        "Sistema 100% portable y autónomo",
        "Interfaz intuitiva para cualquier tipo de sorteo",
        "Implementación exitosa en eventos locales"
      ]
    }
  },
  {
    id: 3,
    title: "Plataforma de gestión empresarial",
    description:
      "Sistema enfocado en la gestión empresarial orientado a optimizar procesos y recursos dentro de la organización.",
    images: [
      "/erp/1.png?height=400&width=600",
      "/erp/2.png?height=400&width=600",
      "/erp/3.png?height=400&width=600",
      "/erp/4.png?height=400&width=600",
      "/erp/5.png?height=400&width=600",
    ],
    tags: ["Next.js", "Tailwind CSS", "Vite", "React", "JavaScript", "PostgreSQL", "MySQL", "PHP"],
    details: {
      objetivos: [
        "Centralizar procesos empresariales",
        "Automatizar tareas repetitivas",
        "Generar reportes y análisis en tiempo real",
        "Permitir almacenamiento seguro de datos y archivos empresariales"
      ],
      retos: [
        "Integración con sistemas de hosting",
        "Escalabilidad para múltiples usuarios",
        "Seguridad de datos empresariales",
        "Utilizar tecnologías predefinidas por la empresa y el sistema de hosting para no generar costos adicionales"
      ],
      resultados: [
        "Mejora del en eficiencia operativa",
        "Reducción de errores manuales en un 85%",
        "Sistema modular adaptable a diferentes empresas",
        "Almacenamiento seguro y accesible de datos empresariales",
        "Disminución de errores dentro del equipo de trabajo"
      ]
    }
  },
  {
    id: 4,
    title: "Sistema de Inscripción inteligente ASIGUBB",
    description:
      "Sistema inteligente de inscripción académica que optimiza la asignación de horarios y materias para estudiantes universitarios.",
    images: [
      "/asigubb/1.png?height=400&width=600",
      "/asigubb/2.png?height=400&width=600",
      "/asigubb/3.png?height=400&width=600",
      "/asigubb/4.png?height=400&width=600",
      "/asigubb/5.png?height=400&width=600"
    ],
    tags: ["Tailwind CSS", "TypeScript", "PostgreSQL", "Node.js", "Vite" , "React" , "Express" , "MongoDB"],
    details: {
      objetivos: [
        "Automatizar el proceso de inscripción universitaria",
        "Optimizar asignación de horarios sin conflictos",
        "Mejorar la experiencia del estudiante"
      ],
      retos: [
        "Algoritmo de optimización de horarios",
        "Manejo de alta concurrencia durante inscripciones",
        "Integración con sistema académico existente"
      ],
      resultados: [
        "Eliminación completa de conflictos de horario",
        "Satisfacción de parte de los usuarios con el sistema",
      ]
    }
  },
]

export default function ProyectosPage() {
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

        <ProyectsZoomer projects={projects} />
      </div>
    </div>
  )
}
