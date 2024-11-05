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
import styles from "./commissaries-content.module.scss";
import { commissariesColumns } from "../../../../shared/utils/tabs-data";
import Modal from "../../../../shared/ui/modal/Modal";
import SocietePanel from "../societe-panel/societe-panel";
import { updateDissmisWorkerFx } from "../../../../entities/workers/effects";
import CommissariesModal from "../commissaries-modal/commissaries-modal";
import Paginate from "../../../../shared/ui/paginate/paginate";
import PlusIcon from "../../../../assets/social/plus-icon";

const CommissariesContent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectWorker, setSelectedWorker] = useState<WorkerResponse>(
    {} as WorkerResponse
  );

  const workers = useUnit(workersStore);

  const handleIsVisibleModal = (id: number) => {
    const findWorker = workers.findIndex((worker) => worker.id === id);
    if (findWorker !== -1) {
      setSelectedWorker(workers[findWorker]);
      setIsVisible(true);
    }
  };

  const onClose = () => {
    setIsVisible(false);
  };

  const handleDissmisWorker = useCallback(
    (requestData: { employee_id: number; dismiss: boolean }) => {
      updateDissmisWorkerFx({ ...requestData, portal_id: 1 });
    },
    [workers]
  );

  const tableColumns: ITableCols[] = useMemo(
    () => [
      ...commissariesColumns,
      {
        id: 9,
        title: "Actions",
        key: "actions",
        render: (id: number) => (
          <SocietePanel
            id={id}
            setDissmisWorker={handleDissmisWorker}
            setDetailUser={handleIsVisibleModal}
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
          prenoms: item.profile.last_name ?? "",
          ids: item.profile.personal_email ?? "",
          date: item.profile.personal_email ?? "",
          delivrence: item.profile.mobile_phone,
          email: item.profile.personal_email ?? "",
          webDav: item.profile.last_name,
          phone: item.profile.mobile_phone,
        });
        return acc;
      },
      []
    );
  }, [workers]);
  return (
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
      <div className={styles.tableContainer} style={{ height: "590px" }}>
        <Table data={dataRowTable} cols={tableColumns} />
        <div className={styles.footerContainer}>
          <span>2 Commissaires contrôleurs</span>
          <Paginate count={5} setActivePage={(page) => console.log(page)} />
        </div>
      </div>
      <Modal isOpen={isVisible} onClose={onClose}>
        <CommissariesModal selectWorker={selectWorker} />
      </Modal>
    </section>
  );
};

export default CommissariesContent;
