import styles from "./HomePage.module.scss";
import ProfileBlock from "@/components/ProfileBlock";
import AchievementsBlock from "@/components/AchievementsBlock";
import FavoriteBlock from "@/components/FavoriteBlock";
import RecentBlock from "@/components/RecentBlock";
import AllMatchupsBlock from "@/components/AllMatchupsBlock";
const HomePage = () => {
  return (
    <section className={styles.container}>
      <div className={styles.firstGroup}>
        <ProfileBlock />
        <AchievementsBlock />
      </div>

      <div className={styles.secondGroup}>
        <RecentBlock />
        <FavoriteBlock />
      </div>

      <AllMatchupsBlock />
    </section>
  );
};

export default HomePage;
