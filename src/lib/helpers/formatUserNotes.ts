import { IUserNoteResponse, TMatchup } from "@/lib/types/types";

const checkArray = <T>(data: T | T[]): T[] => {
  return Array.isArray(data) ? data : [data];
};

export const formatUserNotes = (
  data: IUserNoteResponse[] | null,
): TMatchup[] => {
  if (data === null) return [];

  return data.map((note) => {
    return {
      id: note.id,
      playerChampion: checkArray(note.player_champions),
      enemyChampion: checkArray(note.enemy_champions),
      role: note.role,
      note: note.note,
    };
  });
};

export const formatUserNote = (data: IUserNoteResponse) => {
  return {
    id: data.id,
    playerChampion: checkArray(data.player_champions),
    enemyChampion: checkArray(data.enemy_champions),
    role: data.role,
    note: data.note,
  };
};
