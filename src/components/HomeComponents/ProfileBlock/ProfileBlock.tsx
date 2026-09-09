"use client";
import styles from "./ProfileBlock.module.scss";
import SummonerImg from "../../../../public/images/profileAva.jpg";
import Image from "next/image";
import React from "react";
import { clsx } from "clsx";
import EditProfileIcon from "../../../assets/icons/edit-profile.svg";
import Button from "@/components/ui/Button";
import { IFormatedProfile } from "@/lib/types/types";
import Stats from "@/components/Stats";

type TProps = {
  profile: IFormatedProfile;
  isAuth: boolean;
};

const ProfileBlock = ({ profile, isAuth }: TProps) => {
  const editProfile = () => {
    console.log("edit");
  };

  return (
    <article className={styles.container}>
      {isAuth && (
        <Button
          variant="icon"
          className={styles.editButton}
          onClick={editProfile}
        >
          <EditProfileIcon />
        </Button>
      )}

      <div className={styles.imgWrapper}>
        <Image
          src={SummonerImg}
          alt="картинка профиля"
          width={200}
          height={200}
          className={styles.img}
        />
      </div>

      <div className={styles.infoWrapper}>
        <h1 className={styles.titleName}>{profile.userName}</h1>
        <p className={clsx(styles.description, styles.scrollbar)}>
          {profile.userDescription}
        </p>
      </div>

      <div className={styles.statsWrapper}>
        <Stats />
      </div>
    </article>
  );
};

export default ProfileBlock;
