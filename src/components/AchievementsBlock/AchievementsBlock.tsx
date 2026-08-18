import styles from "./AchievementsBlock.module.scss";
import Image from "next/image";
import achievementPlaceholder from "../../../public/images/locked.png";
import { achievements } from "./data";
import { clsx } from "clsx";

import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import LinkButton from "@/components/ui/LinkButton";
import { IFormatedChampion } from "@/lib/types/types";

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

      <div className={clsx(styles.achievementWrapper, styles.scrollbar)}>
        {isAuth
          ? achievements.map((achiev) => {
              return (
                <div key={achiev.id} className={styles.achievement}>
                  <Image
                    className={styles.img}
                    src={achievementPlaceholder}
                    alt={""}
                    width={400}
                    height={400}
                  />
                  <p className={styles.title}>{achiev.title}</p>
                  <p className={styles.description}>{achiev.description}</p>
                </div>
              );
            })
          : "Зайдите или зарегистрируйтесь"}
      </div>
    </article>
  );
};

export default AchievementsBlock;
