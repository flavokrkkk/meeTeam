import { useUnit } from "effector-react";
import PlusIcon from "../../../../assets/social/plus-icon";
import SearchInput from "../../../../shared/components/search-input";
import Button from "../../../../shared/ui/button/button";
import Table from "../../../../shared/ui/table/table";
import { ITableCols } from "../../../../shared/utils/table-rows";
import styles from "./dashboard-utilisateurs.module.scss";
import {
  isLoadingWorkers,
  workersStore,
} from "../../../../entities/workers/worker";
import { useNavigate } from "react-router-dom";
import { ERoutesNames } from "../../../../shared/utils/routes-name";
import { updateDissmisWorkerFx } from "../../../../entities/workers/effects";
import { useCallback, useMemo, useState } from "react";
import Modal from "../../../../shared/ui/modal/Modal";
import InviteWorkerContent from "../../components/invite-worker-content/invite-worker-content";
import ControlButton from "../../components/control-button/control-button";

const DashboardUtilisateursPage = () => {
  const workers = useUnit(workersStore);
  const isLoading = useUnit(isLoadingWorkers);
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  const handleToggleModal = () => {
    setIsVisible((prevState) => !prevState);
  };

  const handleToDetailUser = useCallback(
    (id: number) => {
      navigate(`${ERoutesNames.DASHBOARD_UTILISATEURS}/edition/${id}`);
    },
    [workers]
  );

  const handleDissmisWorker = useCallback(
    (requestData: { employee_id: number; dismiss: boolean }) => {
      updateDissmisWorkerFx({ ...requestData, portal_id: 1 });
    },
    [workers]
  );

  const tableColumns: ITableCols[] = useMemo(
    () => [
      {
        id: 1,
        title: "Noms",
        key: "noms",
      },
      {
        id: 2,
        title: "Prénoms",
        key: "prénoms",
      },
      {
        id: 3,
        title: "E-mails",
        key: "email",
      },
      {
        id: 4,
        title: "Téléphone",
        key: "phone",
      },
      {
        id: 5,
        title: "Statut",
        key: "statut",
      },
      {
        id: 6,
        title: "Actions",
        key: "actions",
        render: (id: number) => (
          <ControlButton
            id={id}
            setDetailUser={handleToDetailUser}
            setDissmisWorker={handleDissmisWorker}
          />
        ),
      },
    ],
    [workers]
  );

  const dataRowTable = useMemo(() => {
    return workers.reduce(
      (acc: Array<Record<string, string | number | boolean>>, item) => {
        acc.push({
          id: item.profile.employee_id,
          noms: item.profile.first_name,
          prénoms: item.profile.last_name,
          email: item.profile.personal_email ?? "",
          phone: item.profile.mobile_phone,
          statut: item.status.dismiss,
        });
        return acc;
      },
      []
    );
  }, [workers]);

  return (
    <>
      <div className={styles.container}>
        <SearchInput />
        <div className={styles.buttonWrapper}>
          <Button onClick={handleToggleModal}>
            Ajouter un utilisateur
            <span className={styles.iconContainer}>
              <PlusIcon />
            </span>
          </Button>
        </div>
        <div className={styles.tableContainer}>
          <Table
            cols={tableColumns}
            data={dataRowTable}
            isLoading={isLoading}
          />
          <div className={styles.footerContainer}>
            <span>100 utilisateurs</span>
          </div>
        </div>
      </div>
      <Modal isOpen={isVisible} onClose={handleToggleModal}>
        <InviteWorkerContent toggleModal={handleToggleModal} />
      </Modal>
    </>
  );
};

export default DashboardUtilisateursPage;
