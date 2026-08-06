"use client";

import styles from "./AllMatchupsBlock.module.scss";
import React, { ChangeEvent, useState } from "react";
import { matchupsData } from "@/lib/data/matchupsData";
import PreviewBlockMatchup from "@/components/PreviewBlockMatchup";
import Modal from "@/components/ui/Modal";
import Button from "@/components/ui/Button";
import SearchInput from "@/components/ui/SearchInput";

const AllMatchupsBlock = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [search, setSearch] = useState("");
  const handleOpen = () => {
    setIsOpen(true);
    requestAnimationFrame(() => {
      setIsVisible(true);
    });
  };

  console.log(search);

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

          <div className={styles.actionsWrapper}>
            <SearchInput
              placeholder="Найти матчап"
              onChange={(e) => setSearch(e.target.value)}
            />
            <Button className={styles.button} onClick={handleOpen}>
              Создать матчап
            </Button>
          </div>
        </div>
        <PreviewBlockMatchup data={matchupsData} />
      </article>
      {isOpen && <Modal onClose={handleClose} isVisible={isVisible} />}
    </>
  );
};

export default AllMatchupsBlock;
