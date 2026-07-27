"use client";

import React from "react";
import styles from "./Sidebar.module.scss";
import { routes } from "@/lib/constants/routes";
import LinkButton from "@/components/ui/LinkButton";
import { usePathname } from "next/navigation";
import { clsx } from "clsx";

const Sidebar = () => {
  const pathName = usePathname();

  const renderRoutes = (items: typeof routes) => {
    return items.map((route) => {
      const Icon = route.icon;
      const isActive = pathName === route.href;

      return (
        <li key={route.id} className={styles.listItem}>
          <LinkButton
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
      <nav className={styles.nav}>
        <ul className={styles.list}>{renderRoutes(topElements)}</ul>

        <ul className={clsx(styles.list)}>{renderRoutes(bottomElements)}</ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
