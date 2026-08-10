"use client";

import React, { useState } from "react";
import styles from "./CreateMatchup.module.scss";
import StepOne from "@/components/CreateMatchup/Steps/StepOne";
import StepTwo from "@/components/CreateMatchup/Steps/StepTwo";
import StepThree from "@/components/CreateMatchup/Steps/StepThree";
import Button from "@/components/ui/Button";
import { IFormatedChampion, TMatchup } from "@/lib/types/types";
import LinkButton from "@/components/ui/LinkButton";
import { useRouter } from "next/navigation";

type TProps = {
  champions: IFormatedChampion[];
};

type TSteps = "1" | "2" | "3";

const CreateMatchup = ({ champions }: TProps) => {
  const router = useRouter();
  const [step, setStep] = useState<TSteps>("1");
  const [form, setForm] = useState<TMatchup>({
    role: "",
    playerChampion: [],
    enemyChampion: [],
    note: "",
  });

  console.log(form);

  const currentStepType =
    step === "1" ? (
      <StepOne setForm={setForm} />
    ) : step === "2" ? (
      <StepTwo setForm={setForm} form={form} champions={champions} />
    ) : step === "3" ? (
      <StepThree setForm={setForm} />
    ) : null;

  const handleClickCurrentStep = () => {
    if (step === "1") {
      setStep("2");
    } else if (step === "2") {
      setStep("3");
    }
  };

  const handleClickBack = () => {
    if (step === "2") {
      setStep("1");
    } else if (step === "3") {
      setStep("2");
    }
  };

  const createMatchup = () => {
    const matchUrl = `${form.playerChampion.map((champion) => champion.name).join("-")}vs${form.enemyChampion.map((champion) => champion.name).join("-")}`;

    const match = {
      url: matchUrl,
      ...form,
    };

    router.push(`/my-matchups/${matchUrl}`);
  };

  const handleButtonClick = () => {
    handleClickCurrentStep();
    createMatchup();
  };

  return (
    <div>
      {currentStepType}
      <div className={styles.buttonWrapper}>
        <Button onClick={handleClickBack}>Назад</Button>
        {step === "3" ? (
          <Button onClick={handleButtonClick}>Создать</Button>
        ) : (
          <Button onClick={handleClickCurrentStep}>Далее</Button>
        )}
      </div>
    </div>
  );
};

export default CreateMatchup;
