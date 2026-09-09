import styles from "./AchievementsBlock.module.scss";
import { clsx } from "clsx";

import ArrowUpRightIcon from "../../../assets/icons/arrow-up-right.svg";
import React from "react";
import LinkButton from "@/components/ui/LinkButton";
import { BlurCards } from "@/components/BlurComponents/BlurCards/BlurCards";

type TProps = {
  isAuth: boolean;
};

const AchievementsBlock = ({ isAuth }: TProps) => {
  return (
    <article className={styles.container}>
      <div className={styles.header}>
        <div>
          <h2 className={styles.title}>Достижения</h2>
          <p className={styles.description}>
            Здесь вы можете найти ваши награды
          </p>
        </div>

        <LinkButton href="/" variant="icon" className={styles.button}>
          <ArrowUpRightIcon />
        </LinkButton>
      </div>

      {isAuth ? (
        <div className={styles.temporarilyBlock}>
          <BlurCards>Этот раздел пока недоступен.</BlurCards>
        </div>
      ) : (
        <div className={clsx(styles.achievementWrapper, styles.scrollbar)}>
          <BlurCards>
            Войдите или зарегестрируйтесь, чтоб просматривать эту информацию
          </BlurCards>
        </div>
      )}
    </article>
  );
};

export default AchievementsBlock;
