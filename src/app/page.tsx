import HomePage from "@/components/pages/HomePage";
import { Metadata } from "next";
import { getChampionsApi } from "@/lib/api/champion";
import { formatResChampions } from "@/lib/helpers/formatChampions";
import { createClient } from "@/lib/supabase/server";
import { requireAuth } from "@/lib/helpers/requireAuth";
import { formatUserProfile } from "@/lib/helpers/formatUserProfile";

export const metadata: Metadata = {
  title: "Домашняя страница",
  description: "Просмотр всей информации о заметках",
};

export const revalidate = 86400;

export default async function Home() {
  const res = await getChampionsApi();
  const champions = formatResChampions(res);
  // const userAuth = await requireAuth();
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data: profile, error: profileError } = await supabase
    .from("profiles")
    .select("*")
    .eq("user_id", user?.id)
    .single();

  console.log("user", user);

  return (
    <HomePage
      champions={champions}
      profile={formatUserProfile(profile)}
      isAuth={user ? true : false}
    />
  );
}
