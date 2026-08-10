"use client";

import React, { Dispatch, SetStateAction } from "react";
import { TMatchup } from "@/lib/types/types";

type TProps = {
  setForm: Dispatch<SetStateAction<TMatchup>>;
};

const StepThree = ({ setForm }: TProps) => {
  return (
    <div>
      <textarea
        placeholder={"Введите вашу заметку"}
        onChange={(event) =>
          setForm((prev) => ({ ...prev, note: event.target.value }))
        }
      ></textarea>
    </div>
  );
};

export default StepThree;
