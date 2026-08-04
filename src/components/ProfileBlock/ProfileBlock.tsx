"use client";
import styles from "./ProfileBlock.module.scss";
import SummonerImg from "../../../public/images/profileAva.jpg";
import Image from "next/image";
import React from "react";
import Stats from "@/components/Stats";
import Button from "@/components/ui/Button";
import { clsx } from "clsx";
import EditProfileIcon from "@/assets/icons/edit-profile.svg";

const ProfileBlock = () => {
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
        <h1 className={styles.titleName}>Катюха Гашишева</h1>
        <p className={clsx(styles.description, styles.scrollbar)}>
          Люблю анализировать матчапы и побеждать. Создаю заметки по всем линиям
          и делюсь опытом. Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. Alias aliquid animi aperiam aspernatur cumque deleniti dolorem
          eius enim explicabo facilis fuga harum iure maiores nesciunt nulla
          numquam officiis repellendus, vero vitae voluptas? Aspernatur
          assumenda consequuntur corporis, deleniti, doloribus eius ipsum modi
          molestias nemo non officia recusandae rem suscipit, vitae voluptatem.
        </p>
      </div>

      <div className={styles.statsWrapper}>
        <Stats />
      </div>
    </article>
  );
};

export default ProfileBlock;
