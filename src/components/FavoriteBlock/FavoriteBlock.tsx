import styles from "./FavoriteBlock.module.scss";
import PreviewBlockMatchup from "@/components/PreviewBlockMatchup";
import { matchupsData } from "@/lib/data/matchupsData";

const FavoriteBlock = () => {
  return (
    <article className={styles.container}>
      <div className={styles.header}>
        <div>
          <h2 className={styles.title}>Избранное</h2>
          <p className={styles.description}>Ваши любимые матчапы</p>
        </div>

        <button className={styles.button}>
          <svg width="9" height="10" viewBox="0 0 9 10" fill="none">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.14257 7.56746C8.00842 7.56736 7.87978 7.50748 7.78491 7.40097C7.69005 7.29446 7.63672 7.15002 7.63664 6.99939L7.63664 1.94036L0.863776 9.54498C0.768836 9.65158 0.640069 9.71147 0.505802 9.71147C0.371537 9.71146 0.24277 9.65158 0.14783 9.54498C0.052889 9.43838 -0.000447991 9.2938 -0.000448626 9.14304C-0.000448308 8.99229 0.0528887 8.84771 0.147829 8.74111L6.92069 1.13649L2.415 1.13649C2.34705 1.13919 2.27932 1.12648 2.21585 1.09915C2.15237 1.07181 2.09445 1.0304 2.04553 0.977387C1.99662 0.924371 1.95772 0.860837 1.93115 0.790573C1.90458 0.72031 1.89089 0.644758 1.89089 0.568423C1.89089 0.492089 1.90458 0.416537 1.93115 0.346274C1.95772 0.27601 1.99662 0.212476 2.04553 0.159461C2.09445 0.106445 2.15237 0.0650332 2.21585 0.0376976C2.27932 0.0103624 2.34705 -0.00233815 2.415 0.000354571L8.14257 0.000354582C8.27673 0.000448235 8.40537 0.0603283 8.50023 0.166841C8.5951 0.273355 8.64843 0.41779 8.64851 0.568423L8.64851 6.99939C8.64843 7.15002 8.5951 7.29446 8.50023 7.40097C8.40537 7.50748 8.27673 7.56736 8.14257 7.56746Z"
              fill="white"
            />
          </svg>
        </button>
      </div>
      <PreviewBlockMatchup data={matchupsData} />
    </article>
  );
};

export default FavoriteBlock;
