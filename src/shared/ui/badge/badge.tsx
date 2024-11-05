import { FC, memo } from "react";
import styles from "./badge.module.scss";
import { useAutoDismiss } from "../../hooks/useAutoDismiss";

interface IBadge {
  handleClose: () => void;
  isOpen: boolean;
  text?: string;
}

export const Badge: FC<IBadge> = memo(({ isOpen, handleClose, text }) => {
  useAutoDismiss(isOpen, handleClose);

  return (
    isOpen && (
      <div className={styles.badgeContainer}>
        <span className={styles.badgeText}>{text}</span>
      </div>
    )
  );
});
