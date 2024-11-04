import { FC } from "react";
import {
  EBorderRadius,
  EButtonSizes,
  EButtonVariant,
} from "../../../../shared/ui/button";
import Button from "../../../../shared/ui/button/button";

interface IControlButton {
  id: number;
  title?: {
    firstButton: string;
    secondButton: string;
  };
  setDetailUser: (id: number) => void;
  setDissmisWorker: (body: { employee_id: number; dismiss: boolean }) => void;
}

const ControlButton: FC<IControlButton> = ({
  id,
  title = {
    firstButton: "Suspendre",
    secondButton: "Supprimer",
  },
  setDissmisWorker,
  setDetailUser,
}) => {
  const handleToDetailUser = () => {
    setDetailUser(id);
  };

  const handleDissmisWorker = () => {
    setDissmisWorker({ dismiss: true, employee_id: id });
  };

  return (
    <div style={{ display: "flex", gap: "5px" }}>
      <Button
        sizes={EButtonSizes.LG}
        variant={EButtonVariant.OUTLINED}
        rounded={EBorderRadius.SM}
        onClick={handleToDetailUser}
      >
        {title.firstButton}
      </Button>
      <Button
        variant={EButtonVariant.ERROR}
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
