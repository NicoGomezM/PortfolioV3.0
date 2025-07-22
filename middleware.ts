import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '/portfolio-v3-0'
  
  // Si la URL es exactamente la raíz del dominio, redirigir al basePath
  if (request.nextUrl.pathname === '/') {
    return NextResponse.redirect(new URL(basePath, request.url))
  }
  
  return NextResponse.next()
}

export const config = {
  matcher: '/',
}
