import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  // 디버그 정보를 헤더에 추가
  response.headers.set('x-middleware-executed', 'true');
  response.headers.set('x-middleware-path', request.nextUrl.pathname);
  response.headers.set('x-middleware-timestamp', new Date().toISOString());

  return response;
}
