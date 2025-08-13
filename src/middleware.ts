import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  console.log(request.nextUrl)
  console.log(request.url)
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
  matcher: '/',
}
