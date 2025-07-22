import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    const basePath = process.env.NEXT_PUBLIC_BASE_PATH

    // Si la URL es exactamente la raíz del dominio, redirigir al basePath
    if (request.nextUrl.pathname === '/') {
        if (basePath) {
            return NextResponse.redirect(new URL(basePath, request.url))
        } else {
            // Si basePath no está definido, continuar normalmente
            return NextResponse.next()
        }
    }

    return NextResponse.next()
}

export const config = {
    matcher: '/',
}
