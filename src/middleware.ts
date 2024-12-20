/*
Middleware is some code that runs before a request is processed. 
Useful to check if a user is logged in before accessing a protected route,
or to create redirects based on certain conditions.

https://nextjs.org/docs/app/building-your-application/routing/middleware

*/

import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const protectedPaths = [
  '/protected',
  '/another-protected'
]

export function middleware(request: NextRequest) {
  const isProtectedPath = protectedPaths.some(path => 
    request.nextUrl.pathname.startsWith(path)
  )

  if (isProtectedPath) {
    const authCookie = request.cookies.get('auth')
    
    if (authCookie?.value !== process.env.PASSWORD) {
      const loginUrl = new URL('/login', request.url)

      loginUrl.searchParams.set('redirect', request.nextUrl.pathname)
      
      return NextResponse.redirect(loginUrl)
    }
  }

  return NextResponse.next()
}

export const config = {
  /*
  This tells Next.js when to run the middleware, which prevents 
  the middleware from running (unnecessarily) on every request and
  slowing down the app.
  
  If a path does not match the matcher below, the middleware will not run at all.
  */
  matcher: ['/protected/:path*', '/another-protected/:path*']
}