import { useUnit } from "effector-react";
import PlusIcon from "../../../../assets/social/plus-icon";
import SearchInput from "../../../../shared/components/search-input";
import Button from "../../../../shared/ui/button/button";
import Table from "../../../../shared/ui/table/table";
import { tableRows } from "../../../../shared/utils/table-rows";
import styles from "./dashboard-utilisateurs.module.scss";
import { workerStore } from "../../../../entities/workers/worker";

const DashboardUtilisateursPage = () => {
  const workers = useUnit(workerStore);

  return (
    <div className={styles.container}>
      <SearchInput />
      <div className={styles.buttonWrapper}>
        <Button>
          Ajouter un utilisateur
          <span className={styles.iconContainer}>
            <PlusIcon />
          </span>
        </Button>
      </div>
      <div className={styles.tableContainer}>
        <Table cols={workers} rows={tableRows} />
        <div className={styles.footerContainer}>
          <span>100 utilisateurs</span>
        </div>
      </div>
    </div>
  );
};

export default DashboardUtilisateursPage;
