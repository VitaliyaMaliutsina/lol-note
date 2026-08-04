import styles from "./LinkButton.module.scss";
import { clsx } from "clsx";
import Link, { LinkProps } from "next/link";
import { ReactNode } from "react";
import { TButtonVariant } from "@/lib/types/types";

type TLinkButtonProps = LinkProps & {
  variant?: TButtonVariant;
  className?: string;
  children?: ReactNode;
};

const getLinkButtonClassName = (
  variant: TButtonVariant,
  className?: string,
) => {
  return clsx(styles.linkButton, styles[variant], className);
};

const LinkButton = (props: TLinkButtonProps) => {
  const {
    href,
    variant = "primary",
    children,
    className,
    ...linkProps
  } = props;

  return (
    <Link
      href={href}
      className={getLinkButtonClassName(variant, className)}
      {...linkProps}
    >
      {children}
    </Link>
  );
};

export default LinkButton;
