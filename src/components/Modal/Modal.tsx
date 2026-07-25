"use client";

import styles from "./Modal.module.scss";
import { createPortal } from "react-dom";
import { useEffect } from "react";
import { clsx } from "clsx";

type TProps = {
  isVisible: boolean;
  onClose: () => void;
};

const Modal = (props: TProps) => {
  const { onClose, isVisible } = props;

  useEffect(() => {
    const handleEsc = (e: { key: string }) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleEsc);

    return () => document.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  const container = document.getElementById("modal");
  if (!container) return null;

  const dinamicTitle = "Создание матчапа";

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.currentTarget === e.target) onClose();
  };

  return createPortal(
    <div
      onClick={(evt) => handleOverlayClick(evt)}
      className={clsx(styles.modal, {
        [styles.open]: isVisible,
      })}
    >
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <h3>{dinamicTitle}</h3>
          <button
            onClick={onClose}
            aria-label={"Закрыть"}
            className={styles.closeButton}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M0.949951 0.949951L12.95 12.95M12.95 0.949951L0.949951 12.95"
                stroke="#F1F2F4"
                strokeWidth="1.9"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto
          eius maxime, mollitia nam nihil perspiciatis recusandae rerum. Facere,
          ipsa optio.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto
          blanditiis debitis eveniet impedit in ipsa praesentium. A deserunt
          enim error incidunt laboriosam sapiente veniam vitae!
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto
          blanditiis debitis eveniet impedit in ipsa praesentium. A deserunt
          enim error incidunt laboriosam sapiente veniam vitae!
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto
          blanditiis debitis eveniet impedit in ipsa praesentium. A deserunt
          enim error incidunt laboriosam sapiente veniam vitae!
        </p>
      </div>
    </div>,
    container,
  );
};

export default Modal;
