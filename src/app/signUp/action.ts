"use server";

import { createClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function signup(formData: FormData) {
  const supabase = await createClient();

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const name = formData.get("name") as string;
  const description = formData.get("description") as string;

  const { data: authData, error: authError } = await supabase.auth.signUp({
    email,
    password,
  });

  const { error: profileError } = await supabase.from("profiles").insert([
    {
      user_id: authData.user?.id,
      user_name: name,
      user_description: description,
    },
  ]);

  if (profileError) {
    console.log("ОШИБКА РЕГИСТРАЦИИ:", profileError.message);
  } else {
    console.log("ПОЛЬЗОВАТЕЛЬ УСПЕШНО СОЗДАН:");
  }

  revalidatePath("/", "layout");
  redirect("/");
}
