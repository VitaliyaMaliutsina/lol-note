import React from "react";
import styles from "./RecentBlock.module.scss";
import PreviewBlockMatchup from "@/components/PreviewBlockMatchup";
import { matchupsData } from "@/lib/data/matchupsData";
const RecentBlock = () => {
  return (
    <article className={styles.container}>
      <div className={styles.header}>
        <div>
          <h2 className={styles.title}>Недавние матчапы</h2>
          <p>Ваши недавние матчапы</p>
        </div>

        <button className={styles.button}>Посмотреть все</button>
      </div>
      <PreviewBlockMatchup data={matchupsData} />
    </article>
  );
};

export default RecentBlock;
