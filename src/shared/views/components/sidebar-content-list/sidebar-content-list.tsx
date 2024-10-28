import { NavLink, useLocation } from "react-router-dom";
import { INavigateData } from "../../../utils/navigate-data";
import { FC, useMemo } from "react";
import {
  EBorderRadius,
  EButtonSizes,
  EButtonVariant,
} from "../../../ui/button";
import Button from "../../../ui/button/button";
import styles from "./sidebar-content-list.module.scss";

interface ISidebarContentList {
  nav: INavigateData;
}

const SidebarContentList: FC<ISidebarContentList> = ({ nav }) => {
  const { pathname } = useLocation();

  const isActivePath = useMemo(() => pathname === nav.pathname, [pathname]);

  return (
    <NavLink className={styles.navlink} key={nav.id} to={nav.pathname ?? ""}>
      <Button
        text="start"
        sizes={EButtonSizes.LG}
        rounded={EBorderRadius.SM}
        variant={
          isActivePath ? EButtonVariant.DEFAULT : EButtonVariant.OUTLINED
        }
      >
        {nav.title}
      </Button>
    </NavLink>
  );
};

export default SidebarContentList;
