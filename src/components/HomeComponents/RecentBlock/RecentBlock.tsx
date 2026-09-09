import React from "react";
import styles from "./RecentBlock.module.scss";
import ArrowUpRightIcon from "../../../assets/icons/arrow-up-right.svg";

import LinkButton from "@/components/ui/LinkButton";
import { BlurCards } from "@/components/BlurComponents/BlurCards/BlurCards";

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

        <LinkButton
          href="/my-matchups"
          variant="icon"
          className={styles.button}
        >
          <ArrowUpRightIcon />
        </LinkButton>
      </div>
      {isAuth ? (
        <div className={styles.temporarilyBlock}>
          <BlurCards>Этот раздел пока недоступен.</BlurCards>
        </div>
      ) : (
        <div className={styles.blurContainer}>
          {/*<PreviewBlockMatchup data={matchupsData} />*/}
          <BlurCards>
            Войдите или зарегестрируйтесь, чтоб просматривать эту информацию
          </BlurCards>
        </div>
      )}
    </article>
  );
};

export default RecentBlock;
