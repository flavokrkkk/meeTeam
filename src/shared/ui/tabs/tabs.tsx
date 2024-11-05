import { FC, useState } from "react";
import styles from "./tabs.module.scss";

export interface ITabsData {
  id: number;
  title: string;
  isActive: boolean;
  children: React.ReactNode;
}

interface ITabs {
  tabsData: ITabsData[];
}

const Tabs: FC<ITabs> = ({ tabsData }) => {
  const [tabs, setTabs] = useState(tabsData);

  const handleActiveTabs = (id: number) => {
    setTabs((prevState) =>
      prevState.map((tab) =>
        tab.id === id ? { ...tab, isActive: true } : { ...tab, isActive: false }
      )
    );
  };

  return (
    <div className={styles.tabsContainer}>
      <div className={styles.tabsHeader}>
        {tabs.map((tab) => (
          <div
            className={`${styles.tabItem} ${tab.isActive ? styles.active : ""}`}
            onClick={() => handleActiveTabs(tab.id)}
            key={tab.id}
          >
            {tab.title}
          </div>
        ))}
      </div>
      <div className={styles.tabContent}>
        {tabs.map((tab) => tab.isActive && tab.children)}
      </div>
    </div>
  );
};

export default Tabs;
