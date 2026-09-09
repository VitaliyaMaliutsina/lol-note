import styles from "./HomePage.module.scss";
import ProfileBlock from "../../HomeComponents/ProfileBlock";
import AchievementsBlock from "../../HomeComponents/AchievementsBlock";
import FavoriteBlock from "../../HomeComponents/FavoriteBlock";
import RecentBlock from "../../HomeComponents/RecentBlock";
import AllMatchupsBlock from "../../HomeComponents/AllMatchupsBlock";
import {
  IFormatedChampion,
  IFormatedProfile,
  TMatchup,
} from "@/lib/types/types";

type TProps = {
  champions: IFormatedChampion[];
  profile: IFormatedProfile;
  isAuth: boolean;
  userNotes: TMatchup[];
};

const HomePage = ({ champions, profile, isAuth, userNotes }: TProps) => {
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

      <AllMatchupsBlock
        champions={champions}
        isAuth={isAuth}
        userNotes={userNotes}
      />
    </section>
  );
};

export default HomePage;
