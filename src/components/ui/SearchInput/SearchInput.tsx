import styles from "./SearchInput.module.scss";
import { InputHTMLAttributes, useId } from "react";

import SearchIcon from "@/assets/icons/search.svg";

type TSearchInputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
};

const SearchInput = (props: TSearchInputProps) => {
  const { label, ...inputProps } = props;
  const id = useId();

  return (
    <div className={styles.wrapper}>
      {label && (
        <label className={styles.label} htmlFor={id}>
          {label}
        </label>
      )}
      <div className={styles.inputWrapper}>
        <input id={id} className={styles.input} {...inputProps} />
        <SearchIcon className={styles.icon} />
      </div>
    </div>
  );
};

export default SearchInput;
