import React from "react";
import styles from "./RecentBlock.module.scss";
import PreviewBlockMatchup from "@/components/PreviewBlockMatchup";
import { matchupsData } from "@/lib/data/matchupsData";
import LinkButton from "@/components/ui/LinkButton";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import { IFormatedChampion } from "@/lib/types/types";

type TProps = {
  isAuth: boolean;
};

const RecentBlock = ({ isAuth }: TProps) => {
  return (
    <article className={styles.container}>
      <div className={styles.header}>
        <div>
          <h2 className={styles.title}>Недавние матчапы</h2>
          <p className={styles.description}>Ваши недавние матчапы</p>
        </div>

        <LinkButton href="/" variant="icon" className={styles.button}>
          <ArrowUpRightIcon />
        </LinkButton>
      </div>
      {isAuth ? (
        <PreviewBlockMatchup data={matchupsData} />
      ) : (
        "Зайдите или зарегистрируйтесь"
      )}
    </article>
  );
};

export default RecentBlock;
