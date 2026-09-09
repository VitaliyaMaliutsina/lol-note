import styles from "./CreatedMatchupPage.module.scss";
import React from "react";
import { TMatchup } from "@/lib/types/types";
import { getPlayer } from "@/lib/utils/getPlayer";
import Link from "next/link";

type TProps = {
  userNote?: TMatchup;
};

const CreatedMatchupPage = ({ userNote }: TProps) => {
  return (
    <section className={styles.section}>
      <Link href={"/my-matchups"}> {"<-"}Все матчапы</Link>
      {userNote && (
        <>
          <div className={styles.userChampion}>
            {getPlayer(userNote.playerChampion)}
            VS
            {getPlayer(userNote.enemyChampion)}
          </div>
          <h2>Заметка:</h2>
          <p>{userNote.note}</p>
        </>
      )}
    </section>
  );
};

export default CreatedMatchupPage;
