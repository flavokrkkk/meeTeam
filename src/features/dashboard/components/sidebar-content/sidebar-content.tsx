import LogoIcon from "../../../../assets/social/logo-icon";
import LogoIconTitle from "../../../../assets/social/logo-title-icon";
import styles from "./sidebar-content.module.scss";
import { useCallback, useState } from "react";
import SideBarContentItem from "../sidebar-content-item/sidebar-content-item";
import { navigateData } from "../../../../shared/utils/navigate-data";
import { useUnit } from "effector-react";
import { meStore } from "../../../../entities/user/user";

const SidebarContent = () => {
  const meInfo = useUnit(meStore);
  const [navigates, setNavigates] = useState(navigateData);

  const handleIsActive = useCallback(
    (id: number) => {
      setNavigates((prevState) =>
        prevState.map((el) =>
          el.id === id ? { ...el, isActive: !el.isActive } : el
        )
      );
    },
    [navigateData.length]
  );

  return (
    <div className={styles.container}>
      <section>
        <div className={styles.sidebarHeader}>
          <span>
            <LogoIcon size={{ height: 34, width: 32 }} />
          </span>
          <span>
            <LogoIconTitle color="white" sizes={{ width: 98, height: 17 }} />
          </span>
        </div>
        <div className={styles.wrapper}>
          <ul className={styles.listContainer}>
            {navigates.map((navigate) => (
              <SideBarContentItem
                key={navigate.id}
                navigate={navigate}
                handleIsActive={handleIsActive}
              />
            ))}
          </ul>
        </div>
      </section>
      <div className={styles.sidebarFooter}>
        <img src="/public/avatars/avatars.png" />
        <div className={styles.sidebarFooterInfo}>
          <h5>{meInfo?.main_user.name ?? ""}</h5>
          <span>{meInfo?.main_user.email}</span>
        </div>
      </div>
    </div>
  );
};

export default SidebarContent;
