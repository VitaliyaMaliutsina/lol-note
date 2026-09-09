"use client";

import React, { useEffect, useState } from "react";
import styles from "./Sidebar.module.scss";
import { routes } from "@/lib/constants/routes";
import LinkButton from "@/components/ui/LinkButton";
import { usePathname } from "next/navigation";
import { clsx } from "clsx";
import UserControl from "@/components/UserControl";

type TProps = {
  isAuth: boolean;
};

const Sidebar = ({ isAuth }: TProps) => {
  const pathName = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
    setIsVisible(false);
  };

  const openMenu = () => {
    setIsOpen(true);
    requestAnimationFrame(() => {
      setIsVisible(true);
    });
  };

  useEffect(() => {
    const handleEsc = (e: { key: string }) => {
      if (e.key === "Escape") closeMenu();
    };

    document.addEventListener("keydown", handleEsc);

    return () => document.removeEventListener("keydown", handleEsc);
  }, []);

  const handleOverlayClick = (evt: React.MouseEvent<HTMLDivElement>) => {
    if (evt.target === evt.currentTarget) closeMenu();
  };

  const handleClickMenu = () => {
    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  };

  const renderRoutes = (items: typeof routes) => {
    return items.map((route) => {
      const Icon = route.icon;
      const isActive = pathName === route.href;

      return (
        <li key={route.id} className={styles.listItem}>
          <LinkButton
            onClick={() => closeMenu()}
            variant={isActive ? "primary" : "ghost"}
            className={styles.linkWrapper}
            href={route.href}
          >
            {<Icon />}
            {route.title}
          </LinkButton>
        </li>
      );
    });
  };
  const topElements = routes.slice(0, 3);
  const bottomElements = routes.slice(3);

  return (
    <aside className={styles.aside}>
      <button
        className={clsx(styles.burger, { [styles.open]: isOpen })}
        onClick={handleClickMenu}
      >
        <div></div>
        <div></div>
        <div></div>
      </button>

      <div className={styles.holder}>
        <nav className={styles.desktop}>
          <ul className={styles.list}>
            <UserControl isAuth={isAuth} />
            {renderRoutes(topElements)}
          </ul>

          <ul className={clsx(styles.list)}>{renderRoutes(bottomElements)}</ul>
        </nav>
      </div>

      <div
        className={clsx(styles.overlay, { [styles.show]: isVisible })}
        onClick={handleOverlayClick}
      >
        <nav className={clsx(styles.mobile, { [styles.open]: isOpen })}>
          <ul className={styles.list}>{renderRoutes(topElements)}</ul>

          <ul className={clsx(styles.list)}>{renderRoutes(bottomElements)}</ul>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
