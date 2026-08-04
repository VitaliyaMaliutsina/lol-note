import React from "react";
import styles from "./Stats.module.scss";
import { allStats } from "./data";

const Stats = () => {
  return (
    <div className={styles.stats}>
      {allStats.map((stat) => {
        return (
          <div className={styles.statsItem} key={stat.id}>
            <p className={styles.title}>{stat.title}</p>
            <p className={styles.value}>{stat.value}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Stats;
