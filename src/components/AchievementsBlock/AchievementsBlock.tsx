import styles from "./AchievementsBlock.module.scss";
import Image from "next/image";
import achievementPlaceholder from "../../../public/images/locked.png";
import { achievements } from "./data";

import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import LinkButton from "@/components/ui/LinkButton";

const AchievementsBlock = () => {
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

      <div className={styles.achievementWrapper}>
        {achievements.map((achiev) => {
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
        })}
      </div>
    </article>
  );
};

export default AchievementsBlock;
