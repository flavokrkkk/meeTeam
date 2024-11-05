import { useEffect, useMemo } from "react";
import { Outlet, useLocation } from "react-router-dom";
import {
  getDismissWorkerFx,
  getWorkerFx,
} from "../../../../entities/workers/effects";
import styles from "./dashboard-layout.module.scss";

const DashboardLayout = () => {
  const { pathname } = useLocation();

  const title = useMemo(() => {
    if (pathname.split("/")[2]) {
      return `${pathname
        .split("/")[2]
        .slice(0, 1)
        .toLocaleUpperCase()}${pathname.split("/")[2].slice(1)}`;
    }
  }, [pathname]);

  useEffect(() => {
    getWorkerFx();
    getDismissWorkerFx();
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{title}</h1>
      <Outlet />
    </div>
  );
};

export default DashboardLayout;
