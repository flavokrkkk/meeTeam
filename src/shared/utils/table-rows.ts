// import { WorkerResponse } from "../../entities/workers/worker";

export interface ITableCols {
  id: number;
  title: string;
  key: string;
  render?: (id: number) => JSX.Element;
}

export interface ITableColumn {
  id: number;
  name: string;
  lastName: string;
  email: string;
  phone: string;
  status: string;
}

export const tableColumns: ITableCols[] = [
  {
    id: 1,
    title: "Noms",
    key: "noms",
  },
  {
    id: 2,
    title: "Prénoms",
    key: "prénoms",
  },
  {
    id: 3,
    title: "E-mails",
    key: "email",
  },
  {
    id: 4,
    title: "Téléphone",
    key: "phone",
  },
  {
    id: 5,
    title: "Statut",
    key: "statut",
  },
  {
    id: 6,
    title: "Actions",
    key: "actions",
  },
];
