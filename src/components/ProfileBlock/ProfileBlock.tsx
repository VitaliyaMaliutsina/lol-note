"use client";
import styles from "./ProfileBlock.module.scss";
import SummonerImg from "../../../public/images/profileAva.jpg";
import Image from "next/image";
import React from "react";
import Stats from "@/components/Stats";

const ProfileBlock = () => {
  const editProfile = () => {
    console.log("edit");
  };

  return (
    <article className={styles.container}>
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
        <h2 className={styles.titleName}>Катюха Гашишева</h2>

        <p>
          Люблю анализировать матчапы и побеждать. Создаю заметки по всем линиям
          и делюсь опытом.
        </p>
      </div>

      <div className={styles.statsWrapper}>
        <button className={styles.editButton} onClick={editProfile}>
          редактировать профиль
        </button>
        <Stats />
      </div>
    </article>
  );
};

export default ProfileBlock;
