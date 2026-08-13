import React from "react";
import CreatedMatchupPage from "@/components/pages/CreatedMatchupPage/CreatedMatchupPage";
import { createClient } from "@/lib/supabase/server";
import { formatUserNote } from "@/lib/helpers/formatUserNotes";

type TProps = {
  params: Promise<{ id: string }>;
};

const CreatedMatchup = async ({ params }: TProps) => {
  const supabase = await createClient();

  const { id } = await params;

  const { data: note, error: userNotesError } = await supabase
    .from("users_note")
    .select("*")
    .eq("id", id)
    .single();

  return <CreatedMatchupPage userNote={formatUserNote(note)} />;
};

export default CreatedMatchup;
