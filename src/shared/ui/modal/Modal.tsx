import { FC } from "react";
import ReactDOM from "react-dom";
import styles from "./modal.module.scss";

interface IModal {
  children: React.ReactNode;
  isFullWidth?: boolean;
  isOpen: boolean;
  onClose: () => void;
}

const Modal: FC<IModal> = ({ children, isOpen, onClose, isFullWidth }) => {
  const changeModalContent = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    event.stopPropagation();
  };

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div
      onClick={onClose}
      className={`${styles.modal} ${!isOpen ? styles.hidden : ""}`}
    >
      <div
        className={`${styles["modal-content"]} ${
          isFullWidth && styles["modal-width"]
        }`}
        onClick={changeModalContent}
      >
        <div>{children}</div>
      </div>
    </div>,
    document.body
  );
};

export default Modal;
