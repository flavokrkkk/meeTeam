import { FC } from "react";
import styles from "./sidebar.module.scss";
import { ESidebarColor, ESideBarSizes } from ".";

export const sidebarSizesClasses: Record<ESideBarSizes, string> = {
  [ESideBarSizes.LG]: styles.lgSize,
  [ESideBarSizes.MD]: styles.mdSize,
  [ESideBarSizes.SM]: styles.smSize,
};

export const sidebarBackgroundClasses: Record<ESidebarColor, string> = {
  [ESidebarColor.DEFAULT]: styles.default,
  [ESidebarColor.OUTLINED]: "",
  [ESidebarColor.SECONDARY]: styles.default,
};

interface ISidebar {
  children: React.ReactNode;
  size?: ESideBarSizes;
  background?: ESidebarColor;
}

const Sidebar: FC<ISidebar> = ({
  children,
  size = ESideBarSizes.SM,
  background = ESidebarColor.DEFAULT,
}) => {
  return (
    <div
      className={`${styles.container} ${sidebarSizesClasses[size]} ${sidebarBackgroundClasses[background]}`}
    >
      {children}
    </div>
  );
};

export default Sidebar;
