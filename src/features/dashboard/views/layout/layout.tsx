import { Outlet, useLocation } from "react-router-dom";
import styles from "./layout.module.scss";
import Sidebar from "../../../../shared/ui/sidebar/sidebar";
import SidebarContent from "../../components/sidebar-content/sidebar-content";
import Header from "../../../../shared/ui/header/header";
import { EPathnameKeys } from "../../utils/nav-title";
import HeaderContent from "../../components/header-content/header-content";

const Layout = () => {
  const { pathname } = useLocation();

  const pathnamePage = pathname.split("/")[2] as EPathnameKeys;

  return (
    <div className={styles.container}>
      <Sidebar>
        <SidebarContent />
      </Sidebar>
      <div className={styles.wrapper}>
        <Header>
          <HeaderContent pathnamePage={pathnamePage} />
        </Header>
        <div className={styles.outletWrapper}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
