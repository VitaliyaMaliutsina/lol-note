"use server";

import { TMatchup } from "@/lib/types/types";
import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export const createMatchupAction = async (formData: TMatchup) => {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const matchup = {
    user_id: user?.id,
    note: formData.note,
    player_champions: formData.playerChampion,
    enemy_champions: formData.enemyChampion,
    role: formData.role,
  };

  const { data: newRow, error } = await supabase
    .from("users_note")
    .insert(matchup)
    .select("id")
    .single();

  if (error) {
    console.error("чето пошло не так:", error.message);
    return;
  }

  if (newRow && newRow.id) {
    redirect(`/my-matchups/${newRow?.id}`);
  }
};
