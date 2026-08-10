"use client";

import React, { Dispatch, SetStateAction } from "react";
import styles from "@/components/CreateMatchup/CreateMatchup.module.scss";
import { TMatchup } from "@/lib/types/types";

const lines = ["top", "jingle", "mid", "adc", "supp"] as const;

type TProps = {
  setForm: Dispatch<SetStateAction<TMatchup>>;
};

const StepOne = ({ setForm }: TProps) => {
  return (
    <div>
      <h3>Выберите роль</h3>
      <p>На какой позиции вы играете?</p>
      <div className={styles.buttonWrapper}>
        {lines.map((line) => {
          return (
            <button
              key={line}
              className={styles.button}
              onClick={() => setForm((prev) => ({ ...prev, role: line }))}
            >
              {line}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default StepOne;
