"use client";
import styles from "./ProfileBlock.module.scss";
import SummonerImg from "../../../public/images/profileAva.jpg";
import Image from "next/image";
import React from "react";
import Stats from "@/components/Stats";
import Button from "@/components/ui/Button";

const ProfileBlock = () => {
  const editProfile = () => {
    console.log("edit");
  };

  return (
    <article className={styles.container}>
      <button
        className={styles.editButton}
        onClick={editProfile}
        aria-label={"Редактировать профиль"}
      >
        <svg
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.5 15.625C14.2259 15.625 15.625 14.2259 15.625 12.5C15.625 10.7741 14.2259 9.375 12.5 9.375C10.7741 9.375 9.375 10.7741 9.375 12.5C9.375 14.2259 10.7741 15.625 12.5 15.625Z"
            stroke="#9BA2AA"
            stroke-width="1.97917"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M20.2083 15.6248C20.0545 15.9477 20.002 16.3096 20.0577 16.6629C20.1135 17.0161 20.275 17.3443 20.5208 17.604L20.625 17.7082L17.7083 20.6248L17.6042 20.5207C17.3444 20.2748 17.0163 20.1134 16.663 20.0576C16.3098 20.0018 15.9479 20.0543 15.625 20.2082C15.3062 20.352 15.0371 20.5871 14.8517 20.8837C14.6663 21.1803 14.5729 21.5252 14.5833 21.8748V22.0832H10.4167V21.8748C10.4271 21.5252 10.3337 21.1803 10.1483 20.8837C9.9629 20.5871 9.69382 20.352 9.375 20.2082C9.05214 20.0543 8.69025 20.0018 8.33697 20.0576C7.98369 20.1134 7.65558 20.2748 7.39583 20.5207L7.29167 20.6248L4.375 17.7082L4.47917 17.604C4.72503 17.3443 4.88648 17.0161 4.94226 16.6629C4.99804 16.3096 4.94554 15.9477 4.79167 15.6248C4.64779 15.306 4.41273 15.0369 4.11611 14.8516C3.8195 14.6662 3.47463 14.5728 3.125 14.5832H2.91667V10.4165H3.125C3.47463 10.4269 3.8195 10.3335 4.11611 10.1481C4.41273 9.96273 4.64779 9.69366 4.79167 9.37484C4.94554 9.05197 4.99804 8.69008 4.94226 8.33681C4.88648 7.98353 4.72503 7.65542 4.47917 7.39567L4.375 7.2915L7.29167 4.37484L7.39583 4.479C7.65558 4.72487 7.98369 4.88631 8.33697 4.94209C8.69025 4.99787 9.05214 4.94537 9.375 4.7915C9.69382 4.64763 9.9629 4.41256 10.1483 4.11595C10.3337 3.81933 10.4271 3.47446 10.4167 3.12484V2.9165H14.5833V3.12484C14.5729 3.47446 14.6663 3.81933 14.8517 4.11595C15.0371 4.41256 15.3062 4.64763 15.625 4.7915C15.9479 4.94537 16.3098 4.99787 16.663 4.94209C17.0163 4.88631 17.3444 4.72487 17.6042 4.479L17.7083 4.37484L20.625 7.2915L20.5208 7.39567C20.275 7.65542 20.1135 7.98353 20.0577 8.33681C20.002 8.69008 20.0545 9.05197 20.2083 9.37484C20.3522 9.69366 20.5873 9.96273 20.8839 10.1481C21.1805 10.3335 21.5254 10.4269 21.875 10.4165H22.0833V14.5832H21.875C21.5254 14.5728 21.1805 14.6662 20.8839 14.8516C20.5873 15.0369 20.3522 15.306 20.2083 15.6248Z"
            stroke="#9BA2AA"
            strokeWidth="1.97917"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
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
        <p className={styles.description}>
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
