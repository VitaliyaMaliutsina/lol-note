import styles from "./HomePage.module.scss";
import ProfileBlock from "@/components/ProfileBlock";
import AchievementsBlock from "@/components/AchievementsBlock";
import FavoriteBlock from "@/components/FavoriteBlock";
import RecentBlock from "@/components/RecentBlock";
import AllMatchupsBlock from "@/components/AllMatchupsBlock";
import { IFormatedChampion, IFormatedProfile } from "@/lib/types/types";

type TProps = {
  champions: IFormatedChampion[];
  profile: IFormatedProfile;
  isAuth: boolean;
};

const HomePage = ({ champions, profile, isAuth }: TProps) => {
  return (
    <section className={styles.container}>
      <div className={styles.firstGroup}>
        <ProfileBlock profile={profile} isAuth={isAuth} />
        <AchievementsBlock isAuth={isAuth} />
      </div>

      <div className={styles.secondGroup}>
        <RecentBlock isAuth={isAuth} />
        <FavoriteBlock isAuth={isAuth} />
      </div>

      <AllMatchupsBlock champions={champions} isAuth={isAuth} />
    </section>
  );
};

export default HomePage;
