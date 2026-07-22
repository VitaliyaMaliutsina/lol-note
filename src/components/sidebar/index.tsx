import React from "react";
import styles from "./styles.module.scss";
import { routes } from "@/src/lib/constants/routes";
import Link from "next/link";
import Image from "next/image";
import SummonerImg from "../../../public/images/profileAva.jpg";
const Sidebar = () => {
  return (
    <aside className={styles.aside}>
      <div className={styles.profile}>
        <Link href={"/profile"} className={styles.wrapper}>
          <Image
            src={SummonerImg}
            alt="картинка профиля"
            width={200}
            height={200}
          />

          <p>
            Summoner <span>#EUW</span>
          </p>
        </Link>
      </div>
      <nav>
        <ul className={styles.list}>
          {routes.map((route) => {
            return (
              <li key={route.id} className={styles.listItem}>
                <Image src={route.img} alt="" />
                <Link href={route.href}>{route.title}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
