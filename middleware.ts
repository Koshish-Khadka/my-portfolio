"use server";

import type { NextRequest } from "next/server";
import { updateSession } from "./src/utils/supabase/middleware";

export async function middleware(request: NextRequest) {
  console.log(">>> Middleware running for:", request.nextUrl.pathname);
  return updateSession(request);
}

export const config = {
  // matcher: ["/((?!_next|favicon.ico|.*\\..*).*)"],
  // matcher: ["/((?!_next|favicon.ico|.*\\..*).*)"],
  matcher: ["/admin/:path*"],
};
