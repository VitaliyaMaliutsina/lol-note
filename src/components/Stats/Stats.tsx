import React from "react";
import styles from "./Stats.module.scss";
import { allStats } from "./data";

const Stats = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.statsTitle}>Статистика</h3>
      <dl className={styles.stats}>
        {allStats.map((stat) => {
          return (
            <React.Fragment key={stat.id}>
              <dt className={styles.title}>{stat.title}</dt>
              <dd className={styles.value}>{stat.value}</dd>
            </React.Fragment>
          );
        })}
      </dl>
    </div>
  );
};

export default Stats;
