import styles from "./MyMatchupsPage.module.scss";
import { IFormatedChampion, TMatchup } from "@/lib/types/types";
import ChampionImg from "@/components/ui/ChampionImg/ChampionImg";
import React from "react";
import Link from "next/link";

type TProps = {
  userNotes?: TMatchup[];
};

const getPlayer = (data: IFormatedChampion[]) => {
  return data.map((el) => {
    return (
      <div key={el.id}>
        <ChampionImg src={el.image.full} alt={el.name} />
        {el.name}
      </div>
    );
  });
};

const MyMatchupsPage = ({ userNotes }: TProps) => {
  return (
    <div className={styles.container}>
      Мои матчапы
      {userNotes?.map((matchup) => {
        return (
          <Link
            href={`/my-matchups/${matchup.id}`}
            key={matchup.id}
            className={styles.matchup}
          >
            {getPlayer(matchup.playerChampion)}
            VS
            {getPlayer(matchup.enemyChampion)}
          </Link>
        );
      })}
    </div>
  );
};

export default MyMatchupsPage;
