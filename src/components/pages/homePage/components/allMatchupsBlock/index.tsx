import styles from "./styles.module.scss";
import PreviewBlockMatchup from "@/components/previewBlockMatchup";
import { matchupsData } from "@/lib/data/matchupsData";
import React from "react";
const AllMatchupsBlock = () => {
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

export default AllMatchupsBlock;
