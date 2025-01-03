import { useCallback, useMemo, useState } from "react";
import SearchInput from "../../../../shared/components/search-input";
import { EButtonSizes, EButtonVariant } from "../../../../shared/ui/button";
import Button from "../../../../shared/ui/button/button";
import Table from "../../../../shared/ui/table/table";
import styles from "./dashboard-base.module.scss";
import { ITableCols } from "../../../../shared/utils/table-rows";
import { useUnit } from "effector-react";
import {
  isLoadingWorkers,
  WorkerResponse,
  workersStore,
} from "../../../../entities/workers/worker";
import ControlButton from "../../components/control-button/control-button";
import Modal from "../../../../shared/ui/modal/Modal";
import { updateDissmisWorkerFx } from "../../../../entities/workers/effects";
import BaseContent from "../../components/base-content/base-content";
import { baseColumns } from "../../../../shared/utils/tabs-data";
import Paginate from "../../../../shared/ui/paginate/paginate";

const DashboardBasePage = () => {
  const workers = useUnit(workersStore);
  const [selectWorker, setSelectWorker] = useState<WorkerResponse>(
    {} as WorkerResponse
  );
  const isLoading = useUnit(isLoadingWorkers);
  const [isVisible, setIsVisible] = useState(false);

  const handleIsVisible = useCallback(
    (id: number) => {
      setIsVisible((prevState) => !prevState);
      const selectWorker = workers.findIndex((worker) => worker.id === id);
      if (selectWorker !== -1) {
        setSelectWorker(workers[selectWorker]);
      }
    },
    [workers]
  );

  const onCloseModal = () => {
    setIsVisible(false);
  };

  const handleDissmisWorker = useCallback(
    (requestData: { employee_id: number; dismiss: boolean }) => {
      updateDissmisWorkerFx({ ...requestData, portal_id: 1 });
    },
    [workers]
  );

  const tableColumns: ITableCols[] = useMemo(
    (): ITableCols[] => [
      ...baseColumns,
      {
        id: 4,
        key: "actions",
        title: "Actions",
        render: (id) => (
          <ControlButton
            id={id}
            title={{
              firstButton: "Modifier",
              secondButton: "Supprimer",
            }}
            setDetailUser={() => handleIsVisible(id)}
            setDissmisWorker={handleDissmisWorker}
          />
        ),
      },
    ],
    [workers]
  );

  const tableColumnsMin: ITableCols[] = useMemo(
    (): ITableCols[] => [
      {
        id: 1,
        key: "libele",
        title: "Libellé",
      },
      {
        id: 2,
        key: "description",
        title: "Description",
      },
      {
        id: 3,
        key: "actions",
        title: "Actions",
        render: (id) => (
          <ControlButton
            id={id}
            title={{
              firstButton: "Modifier",
              secondButton: "Supprimer",
            }}
            setDetailUser={handleIsVisible}
            setDissmisWorker={handleDissmisWorker}
          />
        ),
      },
    ],
    [workers]
  );

  const tableRows = useMemo(() => {
    return workers.reduce(
      (acc: Array<Record<string, string | number | boolean>>, item) => {
        acc.push({
          id: item.profile?.employee_id ?? "",
          libele: item?.department?.name ?? "",
          codeIso: item?.profile.first_name ?? "",
          description: item?.profile.personal_email ?? "",
        });
        return acc;
      },
      []
    );
  }, [workers]);

  return (
    <div className={styles.dashboardContainer}>
      <section className={styles.section}>
        <div className={styles.containerHeader}>
          <span>
            <h3>Liste des sociétés</h3>
          </span>
          <div>
            <Button sizes={EButtonSizes.LG}>Ajouter</Button>
          </div>
        </div>
        <div className={styles.sectionSearch}>
          <SearchInput />
        </div>
        <div className={styles.tableContainer} style={{ height: "290px" }}>
          <Table data={tableRows} cols={tableColumns} />
          <div className={styles.footerContainer}>
            <span>100 utilisateurs</span>
            <Paginate count={5} setActivePage={(page) => console.log(page)} />
          </div>
        </div>
      </section>
      <section className={styles.flexSection}>
        <div className={styles.flexItem}>
          <div className={styles.header}>
            <h4 className={styles.title}>Liste des pays</h4>
            <div>
              <Button sizes={EButtonSizes.LG}>Ajouter</Button>
            </div>
          </div>
          <div>
            <SearchInput />
          </div>
          <div className={styles.tableContainer}>
            <Table
              cols={tableColumnsMin}
              data={tableRows}
              isLoading={isLoading}
            />
          </div>
          <div className={styles.footerPaginate}>
            <span>02 pays</span>
            <div className={styles.footerPaginateWrapper}>
              <Button variant={EButtonVariant.OUTLINED} sizes={EButtonSizes.MD}>
                Précedent
              </Button>
              <Button variant={EButtonVariant.OUTLINED} sizes={EButtonSizes.MD}>
                Suivant
              </Button>
            </div>
          </div>
        </div>
        <div className={styles.flexItem}>
          <div className={styles.header}>
            <h4 className={styles.title}>Liste des pays</h4>
            <div>
              <Button sizes={EButtonSizes.LG}>Ajouter</Button>
            </div>
          </div>
          <div>
            <SearchInput />
          </div>
          <div className={styles.tableContainer}>
            <Table
              cols={tableColumnsMin}
              data={tableRows}
              isLoading={isLoading}
            />
          </div>
          <div className={styles.footerPaginate}>
            <span>02 pays</span>
            <div className={styles.footerPaginateWrapper}>
              <Button variant={EButtonVariant.OUTLINED} sizes={EButtonSizes.MD}>
                Précedent
              </Button>
              <Button variant={EButtonVariant.OUTLINED} sizes={EButtonSizes.MD}>
                Suivant
              </Button>
            </div>
          </div>
        </div>
      </section>
      <Modal isOpen={isVisible} onClose={onCloseModal} isFullWidth>
        <BaseContent selectWorker={selectWorker} />
      </Modal>
    </div>
  );
};

export default DashboardBasePage;
