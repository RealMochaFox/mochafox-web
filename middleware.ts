import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  const hostname = request.headers.get('host') || ''
  
  // Handle projects subdomain
  if (hostname.startsWith('projects.')) {
    return NextResponse.rewrite(new URL('/projects', request.url))
  }

  // Handle scan subdomain
  if (hostname.startsWith('scan.')) {
    return NextResponse.rewrite(new URL('/scan', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\.png$|.*\\.jpg$|.*\\.gif$).*)',
  ],
}
