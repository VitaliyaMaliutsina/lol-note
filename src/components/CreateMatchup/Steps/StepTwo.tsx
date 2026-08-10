"use client";

import React, { Dispatch, SetStateAction, useState } from "react";
import { IFormatedChampion, TMatchup } from "@/lib/types/types";
import ChampionImg from "@/components/ui/ChampionImg/ChampionImg";
import styles from "./StepTwo.module.scss";
type TProps = {
  champions: IFormatedChampion[];
  setForm: Dispatch<SetStateAction<TMatchup>>;
  form: TMatchup;
};

type TSelectedTarget = "player" | "enemy";

const StepTwo = ({ champions, setForm, form }: TProps) => {
  const [target, setTarget] = useState<TSelectedTarget | null>(null);

  const handleChampionSelect = (champion: IFormatedChampion) => {
    if (target === "player") {
      setForm((prev) => ({ ...prev, playerChampion: [champion] }));
    }

    if (target === "enemy") {
      setForm((prev) => ({ ...prev, enemyChampion: [champion] }));
    }
  };

  const getChampionUrl = (data: TMatchup, flag: "player" | "enemy"): string => {
    if (flag === "player") {
      return data.playerChampion
        .map((champion) => champion.image.full)
        .join("");
    }

    if (flag === "enemy") {
      return data.enemyChampion.map((champion) => champion.image.full).join("");
    }
    return "";
  };

  return (
    <div>
      <div className={styles.playersWrapper}>
        <div onClick={() => setTarget("player")}>
          <ChampionImg src={getChampionUrl(form, "player")} alt={""} />
          <p>player</p>
        </div>
        vs
        <div onClick={() => setTarget("enemy")}>
          <ChampionImg src={getChampionUrl(form, "enemy")} alt={""} />
          <p>enemy</p>
        </div>
      </div>
      <div className={styles.championContainer}>
        {champions.map((champion) => {
          return (
            <div
              key={champion.id}
              onClick={() => handleChampionSelect(champion)}
            >
              <ChampionImg src={champion.image.full} alt={champion.name} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default StepTwo;
