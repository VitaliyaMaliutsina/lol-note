"use client";

import styles from "./AllMatchupsBlock.module.scss";
import PreviewBlockMatchup from "src/components/PreviewBlockMatchup";
import { matchupsData } from "src/lib/data/matchupsData";
import React, { useState } from "react";
import Modal from "src/components/ui/Modal";
import Button from "src/components/ui/Button";

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
            <h2 className={styles.title}>Все матчапы</h2>
            <p>История всех матчапов</p>
          </div>

          <Button className={styles.button} onClick={handleOpen}>
            Создать матчап
          </Button>
        </div>
        <PreviewBlockMatchup data={matchupsData} />
      </article>
      {isOpen && <Modal onClose={handleClose} isVisible={isVisible} />}
    </>
  );
};

export default AllMatchupsBlock;
