import Tabs from "../../../../shared/ui/tabs/tabs";
import styles from "./dashboard-controle.module.scss";
import { tabsData } from "../../../../shared/utils/tabs-data";

export const DashboardControle = () => {
  return (
    <div>
      <div className={styles.tabsWrapper}>
        <Tabs tabsData={tabsData} />
      </div>
    </div>
  );
};
