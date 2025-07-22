import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    // Sin basePath, simplemente permitir que todas las rutas pasen
    return NextResponse.next()
}

export const config = {
    matcher: '/',
}
