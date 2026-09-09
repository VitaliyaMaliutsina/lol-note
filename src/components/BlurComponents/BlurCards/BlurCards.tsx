import styles from "./BlurCards.module.scss";
import { ReactNode } from "react";

type TProps = {
  children: ReactNode;
};
export const BlurCards = ({ children }: TProps) => {
  return <div className={styles.blur}>{children}</div>;
};
