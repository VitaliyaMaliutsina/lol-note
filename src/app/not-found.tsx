import React from "react";
import LinkButton from "@/components/ui/LinkButton";
import Image from "next/image";
import styles from "./notFound.module.scss";
const NotFound = () => {
  return (
    <section className={styles.container}>
      <div className={styles.imgWrapper}>
        <Image src={"/images/404.png"} width={400} height={400} alt={""} />
      </div>
      <h1 className={styles.title}>Страница не найдена</h1>
      <p className={styles.subTitle}>Похоже, вы заблудились в Тумайне войны.</p>
      <p className={styles.subTitle}>
        Такой страницы не существует или она была перемещена
      </p>

      <div className={styles.buttonWrapper}>
        <LinkButton href={"/"}>На главную</LinkButton>
        <LinkButton href={"/my-matchups"}>Все матчапы</LinkButton>
      </div>
    </section>
  );
};

export default NotFound;
