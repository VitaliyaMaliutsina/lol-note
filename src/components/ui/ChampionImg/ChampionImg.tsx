"use client";

import { CHAMPION_IMAGE_BASE_URL } from "@/lib/constants/constants";

import React from "react";
import Image from "next/image";

type TProps = {
  src: string;
  alt: string;
};

const ChampionImg = ({ src, alt = "изображение" }: TProps) => {
  const cleanedSrc = src.replace("Jade_", "");

  return (
    <Image
      src={`${CHAMPION_IMAGE_BASE_URL}${cleanedSrc}`}
      height={40}
      width={40}
      alt={alt}
      unoptimized
    />
  );
};

export default ChampionImg;
