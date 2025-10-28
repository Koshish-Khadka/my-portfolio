"use server";
import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

export async function updateSession(request: NextRequest) {
  const response = NextResponse.next();

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll: () => request.cookies.getAll(),
        setAll: (cookiesToSet) => {
          cookiesToSet.forEach(({ name, value, options }) => {
            response.cookies.set(name, value, options);
          });
        },
      },
    }
  );

  const {
    data: { session },
  } = await supabase.auth.getSession();
  const user = session?.user ?? null;
  console.log("User status", user);

  const pathname = request.nextUrl.pathname;

  // Public routes
  const isPublicRoute = pathname === "/" || pathname === "/auth/login";

  // Redirect anonymous users trying to access protected routes
  if (!user && !isPublicRoute) {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }

  // Redirect logged-in users trying to access login page
  if (user && pathname === "/auth/login") {
    return NextResponse.redirect(new URL("/admin", request.url));
  }
  return response;
}
