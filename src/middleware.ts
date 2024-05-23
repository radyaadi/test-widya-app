import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export const middleware = (req: NextRequest) => {
  const cookiesAuth = req.cookies.get("TOKEN");

  // Redirect ke /sign-in jika tidak ada token dan bukan halaman sign-in
  if (
    !cookiesAuth &&
    req.nextUrl.pathname !== "/sign-in" &&
    req.nextUrl.pathname !== "/sign-up"
  ) {
    return NextResponse.redirect(new URL("/sign-in", req.url));
  }

  // Redirect ke / jika ada token dan halaman yang diakses adalah sign-in
  if (
    cookiesAuth &&
    (req.nextUrl.pathname === "/sign-in" || req.nextUrl.pathname === "/sign-up")
  ) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  // Biarkan request melanjutkan jika memenuhi syarat
  return NextResponse.next();
};

export const config = {
  matcher: ["/((?!_next/static|_next/image|pearlicons.ico|img|icons?svg).*)"],
};
