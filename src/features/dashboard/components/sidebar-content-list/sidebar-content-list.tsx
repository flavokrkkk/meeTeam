import { NavLink, useLocation } from "react-router-dom";
import { FC, useMemo } from "react";

import styles from "./sidebar-content-list.module.scss";
import { INavigateData } from "../../../../shared/utils/navigate-data";
import Button from "../../../../shared/ui/button/button";
import {
  EBorderRadius,
  EButtonSizes,
  EButtonVariant,
} from "../../../../shared/ui/button";

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
        variant={isActivePath ? EButtonVariant.DEFAULT : "none"}
      >
        {nav.title}
      </Button>
    </NavLink>
  );
};

export default SidebarContentList;
