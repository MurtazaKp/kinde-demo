// middleware.ts
import { withAuth } from "@kinde-oss/kinde-auth-nextjs/middleware";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { NextRequest, NextResponse } from "next/server";

export default async function middleware(req: NextRequest) {
  const { isAuthenticated } = getKindeServerSession();

  // Check if the requested URL's path is "/download"
  if (req.nextUrl.pathname === "/download") {
    if (!(await isAuthenticated())) {
      return NextResponse.redirect(new URL("/auth", req.url));
    }
  }

  if (req.nextUrl.pathname === "/pdf/saas.pdf") {
    if (!(await isAuthenticated())) {
      return NextResponse.redirect(new URL("/auth", req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/pdf/saas.pdf", "/dashboard", "/download"],
};
