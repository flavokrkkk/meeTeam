// import { WorkerResponse } from "../../entities/workers/worker";

export interface ITableRows {
  id: number;
  title: string;
}

export interface ITableColumn {
  id: number;
  name: string;
  lastName: string;
  email: string;
  phone: string;
  status: string;
}

export const tableRows: ITableRows[] = [
  {
    id: 1,
    title: "Noms",
  },
  {
    id: 2,
    title: "Prénoms",
  },
  {
    id: 3,
    title: "E-mails",
  },
  {
    id: 4,
    title: "Téléphone",
  },
  {
    id: 5,
    title: "Statut",
  },
  {
    id: 6,
    title: "Actions",
  },
];

// export const tableCols: WorkerResponse[] = [
//   {
//     id: 1,
//     email: "egoryarovitsyn1@gmail.com",
//     lastName: "Yarovitsyn",
//     name: "Egor",
//     phone: "8-964-150-8338",
//     status: "Actif",
//   },
//   {
//     id: 1,
//     email: "egoryarovitsyn1@gmail.com",
//     lastName: "Yarovitsyn",
//     name: "Egor",
//     phone: "8-964-150-8338",
//     status: "Actif",
//   },
//   {
//     id: 1,
//     email: "egoryarovitsyn1@gmail.com",
//     lastName: "Yarovitsyn",
//     name: "Egor",
//     phone: "8-964-150-8338",
//     status: "Actif",
//   },
// ];
