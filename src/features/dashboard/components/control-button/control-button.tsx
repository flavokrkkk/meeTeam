import { FC } from "react";
import {
  EBorderRadius,
  EButtonSizes,
  EButtonVariant,
} from "../../../../shared/ui/button";
import Button from "../../../../shared/ui/button/button";
import styles from "./control-button.module.scss";

interface IControlButton {
  id: number;
  title?: {
    firstButton: string;
    secondButton: string;
  };
  type?: "dismiss" | "worker";
  setDetailUser: (id: number) => void;
  setDissmisWorker: (body: { employee_id: number; dismiss: boolean }) => void;
}

const ControlButton: FC<IControlButton> = ({
  id,
  title = {
    firstButton: "Suspendre",
    secondButton: "Supprimer",
  },
  type,
  setDissmisWorker,
  setDetailUser,
}) => {
  const handleToDetailUser = () => {
    setDetailUser(id);
  };

  const handleDissmisWorker = () => {
    setDissmisWorker({ dismiss: type !== "dismiss", employee_id: id });
  };

  return (
    <div className={styles.controlContainer}>
      <Button
        sizes={EButtonSizes.LG}
        variant={EButtonVariant.OUTLINED}
        rounded={EBorderRadius.SM}
        onClick={handleToDetailUser}
      >
        {title.firstButton}
      </Button>
      <Button
        variant={
          type === "dismiss" ? EButtonVariant.SECONDARY : EButtonVariant.ERROR
        }
        sizes={EButtonSizes.LG}
        rounded={EBorderRadius.SM}
        onClick={handleDissmisWorker}
      >
        {title.secondButton}
      </Button>
    </div>
  );
};

export default ControlButton;
