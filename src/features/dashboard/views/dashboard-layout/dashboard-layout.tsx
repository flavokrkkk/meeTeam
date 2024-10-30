import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { getWorkerFx } from "../../../../entities/workers/effects";
import styles from "./dashboard-layout.module.scss";

const DashboardLayout = () => {
  useEffect(() => {
    getWorkerFx();
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Configuration</h1>
      <Outlet />
    </div>
  );
};

export default DashboardLayout;
