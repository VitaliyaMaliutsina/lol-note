"use client";

import React from "react";

import styles from "./PreviewBlockMatchup.module.scss";
import { clsx } from "clsx";
import { TMatchup } from "@/lib/types/types";
import { getPlayer } from "@/lib/utils/getPlayer";

type TProps = {
  data: TMatchup[];
};

const PreviewBlockMatchup = ({ data }: TProps) => {
  return (
    <div className={clsx(styles.container, styles.scrollbar)}>
      {data.map((match) => {
        return (
          <div key={match.id} className={styles.card}>
            <div className={styles.imgWrapper}>
              {getPlayer(match.playerChampion)}
              vs
              {getPlayer(match.enemyChampion)}
            </div>
            <p>{`${match.role}`}</p>
          </div>
        );
      })}
    </div>
  );
};

export default PreviewBlockMatchup;
