import { FC, useState } from "react";
import ArrowIcon from "../../../assets/social/arrow-icon";
import styles from "./paginate.module.scss";

interface IPaginate {
  count: number;
  setActivePage: (page: number, prevPage: number) => void;
}

const Paginate: FC<IPaginate> = ({ count, setActivePage }) => {
  const [selectPage, setSelectPage] = useState<number>(1);

  const handleSelectPage = (page: number) => {
    setSelectPage(page);
    setActivePage(page, page - 1);
  };

  const paginate = Array.from({ length: count });
  return (
    <div className={styles.paginateContainer}>
      <div className={styles.arrowButton}>
        <ArrowIcon
          rotate={{ rotate: "90deg" }}
          size={{ height: 10, width: 10 }}
        />
      </div>
      {paginate.map((p, i) => (
        <div
          key={i}
          onClick={() => handleSelectPage(i + 1)}
          className={`${styles.pageButton} ${
            selectPage === i + 1 ? styles.pageButtonActive : ""
          }`}
        >
          {i + 1}
        </div>
      ))}
      <div className={styles.arrowButton}>
        <ArrowIcon
          rotate={{ rotate: "270deg" }}
          size={{ height: 10, width: 10 }}
        />
      </div>
    </div>
  );
};

export default Paginate;
