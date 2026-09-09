import HomePage from "@/components/pages/HomePage";
import { Metadata } from "next";
import { getChampionsApi } from "@/lib/api/champion";
import { formatResChampions } from "@/lib/helpers/formatChampions";
import { createClient } from "@/lib/supabase/server";
import { formatUserProfile } from "@/lib/helpers/formatUserProfile";
import { formatUserNotes } from "@/lib/helpers/formatUserNotes";

export const metadata: Metadata = {
  title: "Домашняя страница",
  description: "Просмотр всей информации о заметках",
};

export const revalidate = 86400;

export default async function Home() {
  const res = await getChampionsApi();
  const supabase = await createClient();

  const champions = formatResChampions(res);
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data: profile, error: profileError } = await supabase
    .from("profiles")
    .select("*")
    .eq("user_id", user?.id)
    .single();

  const { data: notes, error: userNotesError } = await supabase
    .from("users_note")
    .select("*")
    .eq("user_id", user?.id)
    .order("created_at", { ascending: false });

  const isAuth = user ? true : false;
  console.log(notes);
  return (
    <HomePage
      champions={champions}
      profile={formatUserProfile(profile)}
      userNotes={formatUserNotes(notes)}
      isAuth={isAuth}
    />
  );
}
