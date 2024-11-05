import { useCallback, useMemo, useState } from "react";
import SearchInput from "../../../../shared/components/search-input";
import { EButtonSizes } from "../../../../shared/ui/button";
import Button from "../../../../shared/ui/button/button";
import Table from "../../../../shared/ui/table/table";
import styles from "./parametres-content.module.scss";
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
import { parametrsColumns } from "../../../../shared/utils/tabs-data";
import ParametresModal from "../parametres-modal/parametres-modal";
import Paginate from "../../../../shared/ui/paginate/paginate";
import PlusIcon from "../../../../assets/social/plus-icon";

const ParametresContent = () => {
  const workers = useUnit(workersStore);
  const [selectWorker, setSelectWorker] = useState<WorkerResponse>(
    {} as WorkerResponse
  );
  const isLoading = useUnit(isLoadingWorkers);
  const [isVisible, setIsVisible] = useState(false);

  const handleIsVisible = (id: number) => {
    setIsVisible((prevState) => !prevState);
    const selectWorker = workers.findIndex((worker) => worker.id === id);
    if (selectWorker !== -1) {
      setSelectWorker(workers[selectWorker]);
    }
  };

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
      ...parametrsColumns,
      {
        id: 7,
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

  const tableRows = useMemo(() => {
    return workers.reduce(
      (acc: Array<Record<string, string | number | boolean>>, item) => {
        acc.push({
          id: item.profile?.employee_id ?? "",
          noms: item.profile.first_name ?? "",
          prenoms: item?.profile.last_name ?? "",
          phone: item?.profile.mobile_phone ?? "",
          email: item?.profile.personal_email ?? "",
          date: item.profile.date_of_employment ?? "",
          profil: ".",
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
        <Table data={tableRows} cols={tableColumns} isLoading={isLoading} />
        <div className={styles.footerContainer}>
          <span>Rhoncus montes arcu.</span>
          <Paginate count={5} setActivePage={(page) => console.log(page)} />
        </div>
      </div>
      <Modal isOpen={isVisible} onClose={onCloseModal} isFullWidth>
        <ParametresModal selectWorker={selectWorker} />
      </Modal>
    </section>
  );
};

export default ParametresContent;
