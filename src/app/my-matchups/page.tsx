import { Metadata } from "next";
import MyMatchupsPage from "@/components/pages/MyMatchupsPage";
import { createClient } from "@/lib/supabase/server";
import { formatUserNotes } from "@/lib/helpers/formatUserNotes";

export const metadata: Metadata = {
  title: "Мои матчапы",
  description: "Просмотр моих матчапов",
};

export default async function MyMatchups() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data: notes, error: userNotesError } = await supabase
    .from("users_note")
    .select("*")
    .eq("user_id", user?.id)
    .order("created_at", { ascending: false });

  return <MyMatchupsPage userNotes={formatUserNotes(notes)} />;
}
