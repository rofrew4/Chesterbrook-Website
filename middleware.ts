import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const host = request.headers.get("host");

  if (host?.startsWith("www.")) {
    const url = request.nextUrl.clone();
    url.host = host.replace(/^www\./, "");
    return NextResponse.redirect(url, 301);
  }

  if (request.nextUrl.pathname === "/sitemap") {
    return NextResponse.redirect(new URL("/sitemap.xml", request.url), 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|icon|opengraph-image).*)"],
};
