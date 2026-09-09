import styles from "./MyMatchupsPage.module.scss";
import { TMatchup } from "@/lib/types/types";
import React from "react";
import Link from "next/link";
import { getPlayer } from "@/lib/utils/getPlayer";

type TProps = {
  userNotes?: TMatchup[];
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
