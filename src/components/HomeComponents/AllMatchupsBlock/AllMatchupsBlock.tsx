"use client";

import styles from "./AllMatchupsBlock.module.scss";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { IFormatedChampion, TMatchup } from "@/lib/types/types";
import SearchInput from "@/components/ui/SearchInput";
import Button from "@/components/ui/Button";
import PreviewBlockMatchup from "@/components/PreviewBlockMatchup";
import { BlurCards } from "@/components/BlurComponents/BlurCards/BlurCards";
import Modal from "@/components/ui/Modal";
import CreateMatchup from "@/components/CreateMatchup";

type TProps = {
  champions: IFormatedChampion[];
  isAuth: boolean;
  userNotes: TMatchup[];
};

const AllMatchupsBlock = ({ champions, isAuth, userNotes }: TProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [search, setSearch] = useState("");

  const router = useRouter();

  const handleOpen = () => {
    if (isAuth) {
      setIsOpen(true);
      requestAnimationFrame(() => {
        setIsVisible(true);
      });
    } else {
      router.push("/login");
    }
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
        {isAuth ? (
          <PreviewBlockMatchup data={userNotes} />
        ) : (
          <div>
            {/*<PreviewBlockMatchup data={matchupsData} />*/}
            <BlurCards>
              Войдите или зарегестрируйтесь, чтоб просматривать эту информацию
            </BlurCards>
          </div>
        )}
      </article>
      {isOpen && (
        <Modal onClose={handleClose} isVisible={isVisible}>
          <CreateMatchup champions={champions} />
        </Modal>
      )}
    </>
  );
};

export default AllMatchupsBlock;
