"use client";
import styles from "./ProfileBlock.module.scss";
import SummonerImg from "../../../public/images/profileAva.jpg";
import Image from "next/image";
import React from "react";
import Stats from "@/components/Stats";
import Button from "@/components/ui/Button";
import { clsx } from "clsx";
import EditProfileIcon from "@/assets/icons/edit-profile.svg";
import { IFormatedChampion, IUserProfiles } from "@/lib/types/types";

type TProps = {
  profiles: IUserProfiles;
};

const ProfileBlock = ({ profiles }: TProps) => {
  const editProfile = () => {
    console.log("edit");
  };

  return (
    <article className={styles.container}>
      <Button
        variant="icon"
        className={styles.editButton}
        onClick={editProfile}
      >
        <EditProfileIcon />
      </Button>
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
        <h1 className={styles.titleName}>
          {profiles.user_name ?? "Катюха Гашишева"}
        </h1>
        <p className={clsx(styles.description, styles.scrollbar)}>
          {profiles.user_description}
        </p>
      </div>

      <div className={styles.statsWrapper}>
        <Stats />
      </div>
    </article>
  );
};

export default ProfileBlock;
