import { FC } from "react";
import { ITableRows } from "../../utils/table-rows";
import styles from "./table.module.scss";
import { WorkerResponse } from "../../../entities/workers/worker";
import Button from "../button/button";
import { EBorderRadius, EButtonSizes } from "../button";

interface ITable {
  cols: WorkerResponse[];
  rows: ITableRows[];
}

const Table: FC<ITable> = ({ cols, rows }) => {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          {rows.map((row, index) => (
            <th key={index}>{row.title}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {cols.map(({ profile, status }, index) => (
          <tr key={index}>
            <td>{profile?.last_name}</td>
            <td>{profile?.first_name}</td>
            <td>{profile?.personal_email}</td>
            <td>{profile?.mobile_phone}</td>
            <td>{status?.dismiss}</td>
            <td style={{ display: "flex", gap: "5px" }}>
              <Button sizes={EButtonSizes.LG} rounded={EBorderRadius.SM}>
                Suspendre
              </Button>
              <Button sizes={EButtonSizes.LG} rounded={EBorderRadius.SM}>
                Supprimer
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
