import { IChampionsResponse } from "@/lib/types/types";

export const getChampionsApi = async (): Promise<IChampionsResponse> => {
  const data = await fetch(
    `https://ddragon.leagueoflegends.com/cdn/16.15.1/data/en_US/champion.json`,
  );
  return await data.json();
};
