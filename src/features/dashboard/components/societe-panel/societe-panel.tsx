import { FC } from "react";
import EditIcon from "../../../../assets/social/edit-icon";
import TrashIcon from "../../../../assets/social/trash-icon";
import styles from "./societe-panel.module.scss";

interface ISocientContent {
  id: number;
  setDetailUser: (id: number) => void;
  setDissmisWorker: (body: { employee_id: number; dismiss: boolean }) => void;
}

const SocietePanel: FC<ISocientContent> = ({
  id,
  setDetailUser,
  setDissmisWorker,
}) => {
  const handleToDetailUser = () => {
    setDetailUser(id);
  };

  const handleDissmisWorker = () => {
    setDissmisWorker({ dismiss: true, employee_id: id });
  };

  return (
    <div className={styles.societePanel}>
      <span onClick={handleDissmisWorker}>
        <TrashIcon />
      </span>
      <span onClick={handleToDetailUser}>
        <EditIcon />
      </span>
    </div>
  );
};

export default SocietePanel;
