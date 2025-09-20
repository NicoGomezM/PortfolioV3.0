"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

// shadcn/ui dialog
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from "@/components/ui/dialog"

type Project = {
    id: number
    title: string
    description: string
    images: string[]
    tags: string[]
    demoUrl?: string
    repoUrl?: string
    // Puedes agregar campos extra si quieres mostrarlos en el widget
    details?: {
        objetivos?: string[]
        rol?: string
        stack?: string[]
        retos?: string[]
        resultados?: string[]
    }
}

type Props = {
    projects: Project[]
    className?: string
}

/** Carrusel simple con swipe, flechas y bullets (para el modal) */
function ImageCarousel({ title, images }: { title: string; images: string[] }) {
    const [idx, setIdx] = useState(0)
    const startX = useRef<number | null>(null)

    const next = () => setIdx((i) => (i + 1) % images.length)
    const prev = () => setIdx((i) => (i - 1 + images.length) % images.length)
    const goTo = (i: number) => setIdx(i)

    const onTouchStart = (e: React.TouchEvent) => {
        startX.current = e.touches[0].clientX
    }
    const onTouchEnd = (e: React.TouchEvent) => {
        if (startX.current === null) return
        const dx = e.changedTouches[0].clientX - startX.current
        if (Math.abs(dx) > 40) (dx < 0 ? next : prev)()
        startX.current = null
    }

    return (
        <div
            className="relative overflow-hidden rounded-xl bg-neutral-100 aspect-video max-h-full"
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
            aria-label={`${title} - visor de imágenes`}
        >
            <div
                className="flex h-full w-full transition-transform duration-500"
                style={{ transform: `translateX(-${idx * 100}%)` }}
            >
                {images.map((src, i) => (
                    <div key={i} className="relative min-w-full h-full">
                        <Image
                            src={src}
                            alt={`${title} - imagen ${i + 1}`}
                            fill
                            className="object-cover"
                            priority={i === 0}
                        />
                    </div>
                ))}
            </div>

            {images.length > 1 && (
                <>
                    <button
                        onClick={prev}
                        className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/60 text-white px-3 py-2 text-lg hover:bg-black/80 transition-colors"
                        aria-label="Imagen anterior"
                    >
                        ‹
                    </button>
                    <button
                        onClick={next}
                        className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/60 text-white px-3 py-2 text-lg hover:bg-black/80 transition-colors"
                        aria-label="Imagen siguiente"
                    >
                        ›
                    </button>

                    <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2">
                        {images.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => goTo(i)}
                                aria-label={`Ir a imagen ${i + 1}`}
                                className={`h-3 w-3 rounded-full transition-all ${i === idx ? "bg-white ring-2 ring-black/30 scale-110" : "bg-white/60 hover:bg-white/80"}`}
                            />
                        ))}
                    </div>
                </>
            )}
        </div>
    )
}

/** Widget modal con detalles del proyecto */
function ProjectWidget({
    open,
    onOpenChange,
    project,
}: {
    open: boolean
    onOpenChange: (v: boolean) => void
    project: Project | null
}) {
    // Atajos de teclado para navegar imágenes
    const [imageKey, setImageKey] = useState(0) // para forzar rerender del carrusel si cambia de proyecto

    useEffect(() => {
        setImageKey((k) => k + 1)
    }, [project?.id])

    // Teclas: ESC cierra; ←/→ podrías propagar a carrusel si lo deseas; aquí solo cerramos con ESC
    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") onOpenChange(false)
        }
        window.addEventListener("keydown", onKey)
        return () => window.removeEventListener("keydown", onKey)
    }, [onOpenChange])

    if (!project) return null

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                <DialogHeader className="top-0 bg-background z-10 pb-4">
                    <DialogTitle className="text-xl ">{project.title}</DialogTitle>
                    <DialogDescription className="text-sm text-muted-foreground">
                        Detalles del proyecto y galería
                    </DialogDescription>
                </DialogHeader>

                <div className="space-y-5 pb-4">
                    <div key={imageKey}>
                        <ImageCarousel title={project.title} images={project.images} />
                    </div>

                    <div className="space-y-4">
                        <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>

                        <div className="flex flex-wrap gap-2 pt-1">
                            {project.tags.map((t) => (
                                <Badge key={t} variant="secondary">
                                    {t}
                                </Badge>
                            ))}
                        </div>

                        {/* Campos opcionales de detalle */}
                        {project.details?.objetivos?.length ? (
                            <div className="pt-3">
                                <h4 className="font-semibold text-base mb-2 text-foreground">🎯 Objetivos</h4>
                                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                                    {project.details.objetivos.map((o, i) => (
                                        <li key={i} className="leading-relaxed">{o}</li>
                                    ))}
                                </ul>
                            </div>
                        ) : null}

                        {project.details?.retos?.length ? (
                            <div className="pt-3">
                                <h4 className="font-semibold text-base mb-2 text-foreground">⚡ Retos</h4>
                                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                                    {project.details.retos.map((r, i) => (
                                        <li key={i} className="leading-relaxed">{r}</li>
                                    ))}
                                </ul>
                            </div>
                        ) : null}

                        {project.details?.resultados?.length ? (
                            <div className="pt-3">
                                <h4 className="font-semibold text-base mb-2 text-foreground">🚀 Resultados</h4>
                                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                                    {project.details.resultados.map((r, i) => (
                                        <li key={i} className="leading-relaxed">{r}</li>
                                    ))}
                                </ul>
                            </div>
                        ) : null}
                    </div>

                    <div className="flex gap-2 pt-4 sticky bottom-0">
                        {project.demoUrl && (
                            <Button asChild size="sm" variant="outline">
                                <Link href={project.demoUrl} target="_blank" rel="noreferrer">
                                    <ExternalLink className="mr-2 h-4 w-4" />
                                    Demo
                                </Link>
                            </Button>
                        )}
                        {project.repoUrl && (
                            <Button asChild size="sm" variant="outline">
                                <Link href={project.repoUrl} target="_blank" rel="noreferrer">
                                    <Github className="mr-2 h-4 w-4" />
                                    Código
                                </Link>
                            </Button>
                        )}
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}

/** Grid + apertura del widget al click */
export default function ProyectsZoomer({ projects, className }: Props) {
    const [open, setOpen] = useState(false)
    const [selected, setSelected] = useState<Project | null>(null)

    const container = {
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { staggerChildren: 0.12 } },
    }
    const item = {
        hidden: { opacity: 0, y: 18 },
        show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
    }

    const openProject = (p: Project) => {
        setSelected(p)
        setOpen(true)
    }

    return (
        <>
            <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className={className ?? "grid grid-cols-1 md:grid-cols-2 gap-8"}
            >
                {projects.map((project) => (
                    <motion.div key={project.id} variants={item}>
                        <Card className="overflow-hidden h-full transition-all hover:shadow-lg">
                            <div
                                role="button"
                                onClick={() => openProject(project)}
                                className="relative h-48 md:h-64 overflow-hidden cursor-pointer group"
                                title="Ver más detalles"
                            >
                                <Image
                                    src={(project.images?.[0] as string) || "/placeholder.svg"}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="pointer-events-none absolute inset-0 bg-black/0 group-hover:bg-black/10 transition" />
                            </div>

                            <CardHeader>
                                <CardTitle className="flex items-center justify-between">
                                    <span>{project.title}</span>
                                    <Button
                                        size="sm"
                                        variant="secondary"
                                        onClick={() => openProject(project)}
                                    >
                                        Ver más
                                    </Button>
                                </CardTitle>
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

                            <CardFooter className="flex gap-2">
                                {project.demoUrl && (
                                    <Button asChild variant="outline" size="sm">
                                        <Link href={project.demoUrl} target="_blank" rel="noreferrer">
                                            <ExternalLink className="mr-2 h-4 w-4" />
                                            Demo
                                        </Link>
                                    </Button>
                                )}
                                {project.repoUrl && (
                                    <Button asChild variant="outline" size="sm">
                                        <Link href={project.repoUrl} target="_blank" rel="noreferrer">
                                            <Github className="mr-2 h-4 w-4" />
                                            Código
                                        </Link>
                                    </Button>
                                )}
                            </CardFooter>
                        </Card>
                    </motion.div>
                ))}
            </motion.div>

            <ProjectWidget open={open} onOpenChange={setOpen} project={selected} />
        </>
    )
}
