import styles from "./styles.module.scss";
import PreviewBlockMatchup from "@/components/previewBlockMatchup";
import { matchupsData } from "@/lib/data/matchupsData";

const FavoriteBlock = () => {
  return (
    <article className={styles.container}>
      <div className={styles.header}>
        <div>
          <h2 className={styles.title}>Избранное</h2>
          <p>Ваши любимые матчапы</p>
        </div>

        <button className={styles.button}>Посмотреть все</button>
      </div>
      <PreviewBlockMatchup data={matchupsData} />
    </article>
  );
};

export default FavoriteBlock;
