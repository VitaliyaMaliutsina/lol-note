import styles from "./FavoriteBlock.module.scss";
import PreviewBlockMatchup from "@/components/PreviewBlockMatchup";
import { matchupsData } from "@/lib/data/matchupsData";
import LinkButton from "@/components/ui/LinkButton";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import React from "react";

const FavoriteBlock = () => {
  return (
    <article className={styles.container}>
      <div className={styles.header}>
        <div>
          <h2 className={styles.title}>Избранное</h2>
          <p className={styles.description}>Ваши любимые матчапы</p>
        </div>

        <LinkButton href="/" variant="icon" className={styles.button}>
          <ArrowUpRightIcon />
        </LinkButton>
      </div>
      <PreviewBlockMatchup data={matchupsData} />
    </article>
  );
};

export default FavoriteBlock;
