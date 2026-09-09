import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

export async function updateSession(request: NextRequest) {
  let response = NextResponse.next({
    request: { headers: request.headers },
  });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          // Здесь магия: обновляем куки и в реквесте, и в респонсе
          cookiesToSet.forEach(({ name, value, options }) =>
            request.cookies.set(name, value),
          );
          response = NextResponse.next({ request });
          cookiesToSet.forEach(({ name, value, options }) =>
            response.cookies.set(name, value, options),
          );
        },
      },
    },
  );

  // ВАЖНО: getUser валидирует токен на сервере Supabase.
  // getSession просто парсит куку (это небезопасно для защиты роутов).
  const {
    data: { user },
  } = await supabase.auth.getUser();

  // Простой пример защиты админки
  if (request.nextUrl.pathname.startsWith("/my-matchups") && !user) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (request.nextUrl.pathname.startsWith("/drafts") && !user) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (request.nextUrl.pathname.startsWith("/favorites") && !user) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return response;
}
