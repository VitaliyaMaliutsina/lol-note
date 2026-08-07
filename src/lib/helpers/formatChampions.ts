import { IChampionsResponse, IFormatedChampion } from "@/lib/types/types";

export const formatResChampions = (
  champion: IChampionsResponse,
): IFormatedChampion[] => {
  return Object.values(champion.data).map((champion) => {
    return {
      id: champion.id,
      name: champion.name,
      image: {
        full: champion.image.full,
      },
    };
  });
};
