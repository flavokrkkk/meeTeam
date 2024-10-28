import { FC } from "react";
import { INavigateData } from "../../../utils/navigate-data";
import ArrowIcon from "../../../../assets/social/arrow-icon";
import styles from "./sidebar-content-item.module.scss";
import SidebarContentList from "../sidebar-content-list/sidebar-content-list";

interface ISideBarContentItem {
  navigate: INavigateData;
  handleIsActive: (id: number) => void;
}

const SideBarContentItem: FC<ISideBarContentItem> = ({
  handleIsActive,
  navigate,
}) => {
  const handleActiveItem = () => {
    handleIsActive(navigate.id);
  };

  const isActiveStyle = navigate.isActive
    ? styles.isActiveItem
    : styles.noActiveItem;

  return (
    <li key={navigate.id}>
      <section className={styles.listWrapper} onClick={handleActiveItem}>
        <div className={styles.itemWrapper}>
          <span className={isActiveStyle}>{navigate.icon}</span>
          <span className={isActiveStyle}>{navigate.title}</span>
        </div>
        <span className={isActiveStyle}>
          <ArrowIcon
            rotate={{ rotate: navigate.isActive ? "0deg" : "180deg" }}
          />
        </span>
      </section>
      <div className={styles.subroutesContainer}>
        {navigate.isActive && (
          <div className={styles.subroutesItem}>
            {navigate.subroutes?.map((nav) => (
              <SidebarContentList key={nav.id} nav={nav} />
            ))}
          </div>
        )}
      </div>
    </li>
  );
};

export default SideBarContentItem;
