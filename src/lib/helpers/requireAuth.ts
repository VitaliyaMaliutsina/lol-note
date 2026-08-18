import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export const requireAuth = async () => {
  const supabase = await createClient();

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error || !user) {
    redirect("/login");
  }
  console.log(user);

  return user;
};
