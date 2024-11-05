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
import styles from "./socient-content.module.scss";
import SocietePanel from "../societe-panel/societe-panel";
import { socientColumns } from "../../../../shared/utils/tabs-data";
import { updateDissmisWorkerFx } from "../../../../entities/workers/effects";
import Modal from "../../../../shared/ui/modal/Modal";
import SocienteModal from "../sociente-modal/sociente-modal";
import Paginate from "../../../../shared/ui/paginate/paginate";
import PlusIcon from "../../../../assets/social/plus-icon";

const SocientContent = () => {
  const workers = useUnit(workersStore);
  const [isVisible, setIsVisible] = useState(false);
  const [selectWorker, setSelectedWorker] = useState({} as WorkerResponse);

  const handleDissmisWorker = useCallback(
    (requestData: { employee_id: number; dismiss: boolean }) => {
      updateDissmisWorkerFx({ ...requestData, portal_id: 1 });
    },
    [workers]
  );

  const handleIsVisibleModal = (id: number) => {
    const findWorker = workers.findIndex((worker) => worker.id === id);
    if (findWorker !== -1) {
      setSelectedWorker(workers[findWorker]);
      setIsVisible(true);
    }
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  const tableColumns: ITableCols[] = useMemo(
    () => [
      ...socientColumns,
      {
        id: 6,
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
      <div className={styles.tableContainer} style={{ height: "670px" }}>
        <Table data={dataRowTable} cols={tableColumns} />
        <div className={styles.footerContainer}>
          <span>100 utilisateurs</span>
          <Paginate count={5} setActivePage={(page) => console.log(page)} />
        </div>
      </div>

      <Modal isOpen={isVisible} onClose={handleClose}>
        <SocienteModal selectWorker={selectWorker} />
      </Modal>
    </section>
  );
};

export default SocientContent;
