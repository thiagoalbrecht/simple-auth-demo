import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Check if the request is for the protected page
  if (request.nextUrl.pathname.startsWith('/protected')) {
    const authCookie = request.cookies.get('auth')
    
    // Check if auth cookie matches password
    if (authCookie?.value !== process.env.PASSWORD) {
      // Redirect to login if not authenticated
      return NextResponse.redirect(new URL('/login', request.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: '/protected/:path*'
}