import { type NextRequest } from "next/server";

import { updateSession } from "@/lib/supabase/middleware";

export async function middleware(request: NextRequest) {
  // Выносим логику в отдельный файл, чтобы middleware.ts оставался чистым
  return await updateSession(request);
}

export const config = {
  // Исключаем статику, картинки и фавиконки, чтобы не жечь ресурсы
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
