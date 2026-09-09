import { IFormatedChampion } from "@/lib/types/types";
import ChampionImg from "@/components/ui/ChampionImg/ChampionImg";
import React from "react";

export const getPlayer = (data: IFormatedChampion[]) => {
  return data.map((el) => {
    return (
      <article key={el.id}>
        <ChampionImg src={el.image.full} alt={el.name} />
        {el.name}
      </article>
    );
  });
};
