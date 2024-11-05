import { useCallback, useMemo, useState } from "react";
import Table from "../../../../shared/ui/table/table";
import { ITableCols } from "../../../../shared/utils/table-rows";
import { useUnit } from "effector-react";
import {
  WorkerResponse,
  workersStore,
} from "../../../../entities/workers/worker";
import Button from "../../../../shared/ui/button/button";
import { EButtonSizes } from "../../../../shared/ui/button";
import SearchInput from "../../../../shared/components/search-input";
import styles from "./members-content.module.scss";
import ControlButton from "../control-button/control-button";
import { membersColumns } from "../../../../shared/utils/tabs-data";
import Modal from "../../../../shared/ui/modal/Modal";
import { updateDissmisWorkerFx } from "../../../../entities/workers/effects";
import MembersModal from "../members-modal/members-modal";
import Paginate from "../../../../shared/ui/paginate/paginate";
import PlusIcon from "../../../../assets/social/plus-icon";

const MembersContent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectWorker, setSelectWorker] = useState<WorkerResponse>(
    {} as WorkerResponse
  );
  const workers = useUnit(workersStore);

  const handleIsVisible = (id: number) => {
    setIsVisible((prevState) => !prevState);
    const selectWorker = workers.findIndex((worker) => worker.id === id);
    if (selectWorker !== -1) {
      setSelectWorker(workers[selectWorker]);
    }
  };

  const handleDissmisWorker = useCallback(
    (requestData: { employee_id: number; dismiss: boolean }) => {
      updateDissmisWorkerFx({ ...requestData, portal_id: 1 });
    },
    [workers]
  );

  const onCloseModal = () => {
    setIsVisible(false);
  };

  const tableColumns: ITableCols[] = useMemo(
    () => [
      ...membersColumns,
      {
        id: 6,
        title: "Actions",
        key: "actions",
        render: (id: number) => (
          <ControlButton
            id={id}
            setDetailUser={handleIsVisible}
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
          pays: item.profile.country ?? "",
          branches: item.profile.personal_email ?? "",
          email: item.profile.personal_email ?? "",
          telephone: item.profile.mobile_phone,
          siteWeb: item.profile.last_name,
          commissaireRespo: item.profile.last_name,
          nombreDeControle: item.department?.name,
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
            <Button sizes={EButtonSizes.LG} className={styles.buttonIcon}>
              Ajouter
              <span>
                <PlusIcon />
              </span>
            </Button>
          </div>
        </div>
        <div className={styles.sectionSearch}>
          <SearchInput />
        </div>
        <div className={styles.tableContainer} style={{ height: "350px" }}>
          <Table data={dataRowTable} cols={tableColumns} />
          <div className={styles.footerContainer}>
            <span>Orci in.</span>
            <Paginate count={5} setActivePage={(page) => console.log(page)} />
          </div>
        </div>
      </section>
      <section className={styles.flexSection}>
        <div className={styles.flexItem}>
          <div className={styles.header}>
            <h4 className={styles.title}>Liste des pays</h4>
            <div>
              <Button sizes={EButtonSizes.LG} className={styles.buttonIcon}>
                Ajouter
                <span>
                  <PlusIcon />
                </span>
              </Button>
            </div>
          </div>
          <div>
            <SearchInput />
          </div>
          <div className={styles.tableContainer} style={{ height: "670px" }}>
            <Table cols={tableColumns} data={dataRowTable} />
          </div>
        </div>
        <div className={styles.flexItem}>
          <div className={styles.header}>
            <h4 className={styles.title}>Liste des pays</h4>
            <div>
              <Button sizes={EButtonSizes.LG} className={styles.buttonIcon}>
                Ajouter
                <span>
                  <PlusIcon />
                </span>
              </Button>
            </div>
          </div>
          <div>
            <SearchInput />
          </div>
          <div className={styles.tableContainer}>
            <Table cols={tableColumns} data={dataRowTable} />
          </div>
        </div>
      </section>
      <Modal isOpen={isVisible} onClose={onCloseModal} isFullWidth>
        <MembersModal selectWorker={selectWorker} />
      </Modal>
    </div>
  );
};

export default MembersContent;
