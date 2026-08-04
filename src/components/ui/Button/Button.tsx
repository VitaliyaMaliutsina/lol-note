import styles from "./Button.module.scss";
import { ButtonHTMLAttributes } from "react";
import { clsx } from "clsx";

type TButtonVariants = "primary" | "secondary" | "outline" | "ghost";

type TButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: TButtonVariants;
};

const getButtonClassName = (variant: TButtonVariants, className?: string) => {
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
