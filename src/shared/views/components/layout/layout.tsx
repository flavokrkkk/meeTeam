import { Outlet } from "react-router-dom";
import styles from "./layout.module.scss";
import Header from "../../../ui/header/header";
import Sidebar from "../../../ui/sidebar/sidebar";
import SidebarContent from "../sidebar-content/sidebar-content";

const Layout = () => {
  return (
    <div className={styles.container}>
      <Sidebar>
        <SidebarContent />
      </Sidebar>
      <div className={styles.wrapper}>
        <Header />
        <div className={styles.outletWrapper}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
