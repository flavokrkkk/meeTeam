import { FC } from "react";
import { ITableCols } from "../../utils/table-rows";
import styles from "./table.module.scss";
import Loader from "../../../shared/ui/loader/loader";

interface ITableRows {
  [key: string]: any;
}

interface ITable {
  cols: ITableCols[];
  data: ITableRows[];
  isLoading?: boolean;
}

const Table: FC<ITable> = ({ cols, data, isLoading }) => {
  if (isLoading) {
    return <Loader />;
  }

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          {cols.map((row, index) => (
            <th key={index}>{row.title}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((el, index) => (
          <tr key={index}>
            {cols.map((row) => (
              <td>{row.render ? row.render(el.id) : el[row.key]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
