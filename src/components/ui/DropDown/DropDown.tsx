import React from "react";
import styles from "./DropDown.module.scss";
const DropDown = () => {
  return (
    <select name={"name"} className={styles.select}>
      <option value={"value"}>{"Все роли"}</option>
      <option value={"value"}>{"support"}</option>
      <option value={"value"}>{"adc"}</option>
      <option value={"value"}>{"jungle"}</option>
      <option value={"value"}>{"mid"}</option>
      <option value={"value"}>{"top"}</option>
    </select>
  );
};

export default DropDown;
