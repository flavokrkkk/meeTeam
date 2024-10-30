import { FC } from "react";
import ArrowIcon from "../../../../assets/social/arrow-icon";
import ClocheIcon from "../../../../assets/social/cloche-icon";
import { EPathnameKeys, navTitle } from "../../utils/nav-title";
import styles from "./header-content.module.scss";

interface IHeaderContent {
  pathnamePage: EPathnameKeys;
}

const HeaderContent: FC<IHeaderContent> = ({ pathnamePage }) => {
  return (
    <div className={styles.headerContainer}>
      <section className={styles.navigateContainer}>
        <span className={styles.navigation}>
          {navTitle?.[pathnamePage]?.active}
        </span>
        {navTitle?.[pathnamePage]?.helper && (
          <>
            <span className={styles.iconWrapper}>
              <ArrowIcon
                size={{ height: 5, width: 10 }}
                rotate={{ rotate: "270deg" }}
              />
            </span>
            <span className={styles.navigationHelper}>
              {navTitle[pathnamePage].helper}
            </span>
          </>
        )}
      </section>
      <section>
        <span className={styles.iconWrapper}>
          <ClocheIcon />
        </span>
      </section>
    </div>
  );
};

export default HeaderContent;
