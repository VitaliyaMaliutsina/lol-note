import React from "react";
import { IFormatedChampion, TMatchup } from "@/lib/types/types";
import ChampionImg from "@/components/ui/ChampionImg/ChampionImg";

type TProps = {
  userNote?: TMatchup;
};

const getPlayer = (data: IFormatedChampion[]) => {
  console.log(data);
  return data.map((el) => {
    return (
      <div key={el.id}>
        <ChampionImg src={el.image.full} alt={el.name} />
        {el.name}
      </div>
    );
  });
};

const CreatedMatchupPage = ({ userNote }: TProps) => {
  return (
    <div>
      созданый матчап
      {userNote && (
        <div>
          {userNote.note}
          {getPlayer(userNote.playerChampion)}
          VS
          {getPlayer(userNote.enemyChampion)}
        </div>
      )}
    </div>
  );
};

export default CreatedMatchupPage;
