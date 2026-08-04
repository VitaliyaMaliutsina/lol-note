import styles from "./Button.module.scss";
import { ButtonHTMLAttributes } from "react";
import { clsx } from "clsx";
import { TButtonVariant } from "@/lib/types/types";

type TButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: TButtonVariant;
};

const getButtonClassName = (variant: TButtonVariant, className?: string) => {
  return clsx(styles.button, styles[variant], className);
};

const Button = (props: TButtonProps) => {
  const {
    type = "button",
    variant = "primary",
    className,
    children,
    ...buttonProps
  } = props;

  return (
    <button
      type={type}
      className={getButtonClassName(variant, className)}
      {...buttonProps}
    >
      {children}
    </button>
  );
};

export default Button;
