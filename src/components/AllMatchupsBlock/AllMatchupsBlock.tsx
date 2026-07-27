"use client";

import styles from "./AllMatchupsBlock.module.scss";
import PreviewBlockMatchup from "@/components/PreviewBlockMatchup";
import { matchupsData } from "@/lib/data/matchupsData";
import React, { useState } from "react";
import Modal from "@/components/ui/Modal";

const AllMatchupsBlock = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const handleOpen = () => {
    setIsOpen(true);
    requestAnimationFrame(() => {
      setIsVisible(true);
    });
  };

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      setIsOpen(false);
    }, 300);
  };

  return (
    <>
      <article className={styles.container}>
        <div className={styles.header}>
          <div>
            <h2 className={styles.title}>Недавние матчапы</h2>
            <p>Ваши недавние матчапы</p>
          </div>

          <button className={styles.button} onClick={handleOpen}>
            Создать матчап
          </button>
        </div>
        <PreviewBlockMatchup data={matchupsData} />
      </article>
      {isOpen && <Modal onClose={handleClose} isVisible={isVisible} />}
    </>
  );
};

export default AllMatchupsBlock;
