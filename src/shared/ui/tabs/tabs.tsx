import { FC, useState } from "react";

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
    <div style={{ display: "flex", gap: "15px", flexDirection: "column" }}>
      <div style={{ display: "flex", gap: "15px" }}>
        {tabs.map((tab) => (
          <div
            style={{
              borderBottom: tab.isActive ? "2px solid #4763E4" : "",
              paddingBottom: "2px",
              cursor: "pointer",
            }}
            onClick={() => handleActiveTabs(tab.id)}
          >
            {tab.title}
          </div>
        ))}
      </div>

      <div>{tabs.map((tab) => tab.isActive && tab.children)}</div>
    </div>
  );
};

export default Tabs;
