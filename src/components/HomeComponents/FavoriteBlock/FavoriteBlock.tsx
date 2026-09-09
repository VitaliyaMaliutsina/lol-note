import styles from "./FavoriteBlock.module.scss";
import ArrowUpRightIcon from "../../../assets/icons/arrow-up-right.svg";
import React from "react";
import LinkButton from "@/components/ui/LinkButton";
import { BlurCards } from "@/components/BlurComponents/BlurCards/BlurCards";

type TProps = {
  isAuth: boolean;
};

const FavoriteBlock = ({ isAuth }: TProps) => {
  return (
    <article className={styles.container}>
      <div className={styles.header}>
        <div>
          <h2 className={styles.title}>Избранное</h2>
          <p className={styles.description}>Ваши любимые матчапы</p>
        </div>

        <LinkButton href="/favorites" variant="icon" className={styles.button}>
          <ArrowUpRightIcon />
        </LinkButton>
      </div>
      {isAuth ? (
        <BlurCards>Этот раздел пока недоступен.</BlurCards>
      ) : (
        <div className={styles.blurContainer}>
          <BlurCards>
            Войдите или зарегестрируйтесь, чтоб просматривать эту информацию
          </BlurCards>
        </div>
      )}
    </article>
  );
};

export default FavoriteBlock;
