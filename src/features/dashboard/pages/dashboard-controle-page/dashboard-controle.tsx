import Tabs from "../../../../shared/ui/tabs/tabs";
import { tabsData } from "../../../../shared/utils/tabs-data";

const DashboardControle = () => {
  return (
    <div>
      <div style={{ marginTop: "20px" }}>
        <Tabs tabsData={tabsData} />
      </div>
    </div>
  );
};

export default DashboardControle;
