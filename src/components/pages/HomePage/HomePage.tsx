import styles from "./HomePage.module.scss";
import ProfileBlock from "@/components/ProfileBlock";
import AchievementsBlock from "@/components/AchievementsBlock";
import FavoriteBlock from "@/components/FavoriteBlock";
import RecentBlock from "@/components/RecentBlock";
import AllMatchupsBlock from "@/components/AllMatchupsBlock";
import { IFormatedChampion, IUserProfiles } from "@/lib/types/types";

type TProps = {
  champions: IFormatedChampion[];
  profiles: IUserProfiles;
};

const HomePage = ({ champions, profiles }: TProps) => {
  return (
    <section className={styles.container}>
      <div className={styles.firstGroup}>
        <ProfileBlock profiles={profiles} />
        <AchievementsBlock />
      </div>

      <div className={styles.secondGroup}>
        <RecentBlock />
        <FavoriteBlock />
      </div>

      <AllMatchupsBlock champions={champions} />
    </section>
  );
};

export default HomePage;
