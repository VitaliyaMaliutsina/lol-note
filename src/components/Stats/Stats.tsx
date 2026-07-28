import React from "react";
import styles from "./Stats.module.scss";
import { allStats } from "./data";

const Stats = () => {
  return (
    <div className={styles.container}>
      <div className={styles.stats}>
        {allStats.map((stat) => {
          return (
            <React.Fragment key={stat.id}>
              <div>
                <p className={styles.title}>{stat.title}</p>
                <p className={styles.value}>{stat.value}</p>
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default Stats;
