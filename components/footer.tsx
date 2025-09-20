import Link from "next/link"
import { Github, Linkedin, Mail, Twitter, MessageCircleMore, MoveHorizontal} from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container px-4 md:px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link href="/" className="font-bold text-xl">
              <div className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500">
                Descripción
              </div>
            </Link>
            <p className="mt-2 text-muted-foreground">
              Esta pagina esta diseñada para mostrar mis habilidades y proyectos a nivel general. Ademas de funcionar como un lugar de contacto.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Enlaces</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/proyectos" className="text-muted-foreground hover:text-foreground transition-colors">
                  Proyectos
                </Link>
              </li>
              <li>
                <Link href="/habilidades" className="text-muted-foreground hover:text-foreground transition-colors">
                  Habilidades
                </Link>
              </li>
              <li>
                <Link href="/sobre-mi" className="text-muted-foreground hover:text-foreground transition-colors">
                  Sobre Mí
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Contacto</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>nicogomezmorgado86@gmail.com</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <span> [ Concepción | Los Ángeles ], Chile</span>
              </li>
            </ul>
            <div className="flex gap-4 mt-4">
              <Link href="https://github.com/NicoGomezM" className="text-muted-foreground hover:text-foreground transition-colors">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link href="https://www.linkedin.com/in/nicol%C3%A1s-g%C3%B3mez-morgado-3697691a5/" className="text-muted-foreground hover:text-foreground transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="https://wa.me/qr/PCI4NQ4QHOYYK1" className="text-muted-foreground hover:text-foreground transition-colors">
                <MessageCircleMore className="h-5 w-5" />
                <span className="sr-only">Twit  ter</span>
              </Link>
            </div>
          </div>
        </div>
        {/* <div className="border-t mt-8 pt-6 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Mi Portfolio. Todos los derechos reservados.</p>
        </div> */}
      </div>
    </footer>
  )
}
