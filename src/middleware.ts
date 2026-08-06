import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

/**
 * PRODUCTION WARNING:
 * The Admin Dashboard functionality (`/admin`) is intended for LOCAL DEVELOPMENT ONLY.
 * It modifies files directly on the filesystem, which will NOT persist in 
 * serverless production environments like Vercel.
 */
export function middleware(request: NextRequest) {
  // Restrict /admin to development environment
  if (request.nextUrl.pathname.startsWith('/admin')) {
    if (process.env.NODE_ENV === 'production') {
      return new NextResponse('Admin panel is not available in production.', { status: 403 });
    }
    
    // Existing auth logic for local dev
    const authHeader = request.headers.get('authorization');
    const password = process.env.ADMIN_PASSWORD;
    if (!password || authHeader !== `Basic ${Buffer.from(`admin:${password}`).toString('base64')}`) {
      return new NextResponse('Authentication required', {
        status: 401,
        headers: { 'WWW-Authenticate': 'Basic' },
      });
    }
  }
  return NextResponse.next();
}
