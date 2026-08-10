"use client";

import React, { Dispatch, SetStateAction } from "react";
import { TMatchup } from "@/lib/types/types";
import Image from "next/image";
import styles from "./StepOne.module.scss";

const lines = [
  { line: "top", icon: "/icons/top.svg" },
  { line: "jingle", icon: "/icons/jngl.svg" },
  { line: "mid", icon: "/icons/mid.svg" },
  { line: "adc", icon: "/icons/adc.svg" },
  { line: "supp", icon: "/icons/supp.svg" },
] as const;

type TProps = {
  setForm: Dispatch<SetStateAction<TMatchup>>;
};

const StepOne = ({ setForm }: TProps) => {
  return (
    <div>
      <div className={styles.titleContainer}>
        <h3 className={styles.title}>Выберите роль</h3>
        <p className={styles.subTitle}>На какой позиции вы играете?</p>
      </div>
      <div className={styles.buttonWrapper}>
        {lines.map((element) => {
          return (
            <button
              key={element.line}
              className={styles.button}
              onClick={() =>
                setForm((prev) => ({ ...prev, role: element.line }))
              }
            >
              <Image
                src={element.icon}
                alt={element.line}
                height={40}
                width={40}
              />
              {element.line}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default StepOne;
