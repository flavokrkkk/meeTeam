import { useUnit } from "effector-react";
import PlusIcon from "../../../../assets/social/plus-icon";
import SearchInput from "../../../../shared/components/search-input";
import Button from "../../../../shared/ui/button/button";
import Table from "../../../../shared/ui/table/table";
import { ITableCols } from "../../../../shared/utils/table-rows";
import styles from "./dashboard-utilisateurs.module.scss";
import {
  dismissWorker,
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
import { utilisateursColumns } from "../../../../shared/utils/tabs-data";
import Paginate from "../../../../shared/ui/paginate/paginate";
import { EButtonSizes, EButtonVariant } from "../../../../shared/ui/button";
import { Badge } from "../../../../shared/ui/badge/badge";

const DashboardUtilisateursPage = () => {
  const workers = useUnit(workersStore);
  const workerDismiss = useUnit(dismissWorker);
  const isLoading = useUnit(isLoadingWorkers);
  const navigate = useNavigate();
  const [isVisibleBadge, setIsVisibleBadge] = useState(false);
  const [isVisibleInviteModal, setIsVisibleInviteModal] = useState(false);
  const [isVisibleAddedModal, setIsVisibleAddedeModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [prevPage, setPrevPage] = useState(0);
  const [typeUtilisateur, setTypeUtilisateur] = useState<"dismiss" | "worker">(
    "worker"
  );

  const handlePagination = (page: number, prevPage: number) => {
    setCurrentPage(page);
    setPrevPage(prevPage);
  };

  const handleInviteToggleModal = () => {
    setIsVisibleInviteModal((prevState) => !prevState);
  };

  const handleAddedToggleModal = () => {
    setIsVisibleAddedeModal((prevState) => !prevState);
  };

  const handleIsVisibleBadge = () => {
    setIsVisibleBadge((prevState) => !prevState);
  };

  const handleSwitchType = () => {
    if (typeUtilisateur === "worker") {
      setTypeUtilisateur("dismiss");
    } else if (typeUtilisateur === "dismiss") {
      setTypeUtilisateur("worker");
    }
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
      if (updateDissmisWorkerFx.doneData) {
        handleIsVisibleBadge();
      }
    },
    [workers]
  );

  const tableColumns: ITableCols[] = useMemo(
    () => [
      ...utilisateursColumns,
      {
        id: 6,
        title: "Actions",
        key: "actions",
        render: (id: number) => (
          <ControlButton
            id={id}
            type={typeUtilisateur}
            setDetailUser={handleToDetailUser}
            setDissmisWorker={handleDissmisWorker}
          />
        ),
      },
    ],
    [workers, typeUtilisateur, workerDismiss]
  );
  console.log(currentPage, prevPage);
  const dataRowTable = useMemo(() => {
    const paginateLeft = prevPage ? +`${prevPage}0` : 0;
    const paginateRight = currentPage ? +`${currentPage}0` : 10;
    if (typeUtilisateur === "worker") {
      return workers
        .slice(paginateLeft, paginateRight)
        .reduce(
          (acc: Array<Record<string, string | number | boolean>>, item) => {
            acc.push({
              id: item.profile?.employee_id,
              noms: item.profile?.first_name,
              prénoms: item.profile?.last_name,
              email: item.profile?.personal_email ?? "",
              phone: item.profile?.mobile_phone,
              statut: item.status?.dismiss,
            });
            return acc;
          },
          []
        );
    } else if (typeUtilisateur === "dismiss") {
      return workerDismiss.reduce(
        (acc: Array<Record<string, string | number | boolean>>, item) => {
          acc.push({
            id: item.profile?.employee_id,
            noms: item.profile?.first_name,
            prénoms: item.profile?.last_name,
            email: item.profile?.personal_email ?? "",
            phone: item.profile?.mobile_phone,
            statut: item.status?.dismiss,
          });
          return acc;
        },
        []
      );
    }
    return [];
  }, [workers, workerDismiss, typeUtilisateur, currentPage, prevPage]);

  return (
    <>
      <Badge
        isOpen={isVisibleBadge}
        handleClose={handleIsVisibleBadge}
        text="Данные успешно обновлены!"
      />
      <div className={styles.container}>
        <SearchInput />
        <section className={styles.containerWrapper}>
          <div className={styles.buttonWrapper}>
            <Button onClick={handleAddedToggleModal}>
              Ajouter un utilisateur
              <span className={styles.iconContainer}>
                <PlusIcon />
              </span>
            </Button>
          </div>
          <div className={styles.buttonWrapper}>
            <Button
              onClick={handleInviteToggleModal}
              variant={EButtonVariant.OUTLINED}
            >
              Inviter un utilisateur
              <span className={styles.iconContainer}>
                <PlusIcon />
              </span>
            </Button>
          </div>
        </section>
        <div className={styles.switchTypeContainer}>
          <Button
            sizes={EButtonSizes.LG}
            variant={
              "worker" === typeUtilisateur
                ? EButtonVariant.DEFAULT
                : EButtonVariant.SECONDARY
            }
            onClick={handleSwitchType}
          >
            Рабочие
          </Button>
          <Button
            sizes={EButtonSizes.LG}
            onClick={handleSwitchType}
            variant={
              "dismiss" === typeUtilisateur
                ? EButtonVariant.DEFAULT
                : EButtonVariant.SECONDARY
            }
          >
            Уволенные
          </Button>
        </div>
        <div className={styles.tableContainer} style={{ height: "560px" }}>
          {typeUtilisateur === "worker" ? (
            <Table
              cols={tableColumns}
              data={dataRowTable}
              isLoading={isLoading}
            />
          ) : typeUtilisateur === "dismiss" ? (
            <Table
              cols={tableColumns}
              data={dataRowTable}
              isLoading={isLoading}
            />
          ) : null}

          <div className={styles.footerContainer}>
            <span>{workers.length} utilisateurs</span>
            <Paginate
              count={Math.ceil(workers.length / 10)}
              setActivePage={handlePagination}
            />
          </div>
        </div>
      </div>
      <Modal isOpen={isVisibleInviteModal} onClose={handleInviteToggleModal}>
        <InviteWorkerContent
          toggleModal={handleInviteToggleModal}
          mode="invite"
          setSuccess={handleIsVisibleBadge}
        />
      </Modal>
      <Modal isOpen={isVisibleAddedModal} onClose={handleAddedToggleModal}>
        <InviteWorkerContent
          toggleModal={handleAddedToggleModal}
          mode="added"
          setSuccess={handleIsVisibleBadge}
        />
      </Modal>
    </>
  );
};

export default DashboardUtilisateursPage;
