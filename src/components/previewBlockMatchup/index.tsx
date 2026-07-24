"use client";
import React from "react";
import Image from "next/image";
import MockImg from "../../../public/images/profileAva.jpg";
import MockImg2 from "../../../public/images/mock2.webp";

import styles from "./styles.module.scss";
type TData = {
  id: string;
  playerChampion: string;
  enemyChampion: string;
  role: string;
  complexity: string;
};

type TProps = {
  data: TData[];
};

const PreviewBlockMatchup = ({ data }: TProps) => {
  return (
    <div className={styles.container}>
      {data.map((match) => {
        return (
          <div key={match.id} className={styles.card}>
            <div className={styles.imgWrapper}>
              <Image
                src={MockImg}
                alt={""}
                width={60}
                height={60}
                className={styles.img}
              />
              vs
              <Image
                src={MockImg2}
                alt={""}
                width={60}
                height={60}
                className={styles.img}
              />
            </div>
            <div>
              <span>{match.playerChampion} </span>
              vs
              <span> {match.enemyChampion}</span>
            </div>

            <p>{`${match.role} ${match.complexity}`}</p>
          </div>
        );
      })}
    </div>
  );
};

export default PreviewBlockMatchup;
