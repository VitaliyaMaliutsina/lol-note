import styles from "./styles.module.scss";
import ProfileBlock from "@/components/pages/homePage/components/profileBlock";
import AchievementsBlock from "@/components/pages/homePage/components/achievementsBlock";
import FavoriteBlock from "@/components/pages/homePage/components/favoritesBlock";
import RecentBlock from "./components/recentBlock";
import AllMatchupsBlock from "@/components/pages/homePage/components/allMatchupsBlock";
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
