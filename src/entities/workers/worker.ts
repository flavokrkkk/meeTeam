import { createStore } from "effector";
import { getWorkByIdFx, getWorkerFx } from "./effects";

export type Worker = {
  city: null | string;
  country: null | string;
  date_of_birth: null | string;
  date_of_employment: null | string;
  employee_id: number;
  first_name: string;
  id: number;
  image: string | null;
  internal_phone: null | string;
  last_name: string;
  locale: string;
  main_locale: string;
  mobile_phone: string;
  mobile_telegram: boolean;
  mobile_viber: boolean;
  mobile_whatsapp: boolean;
  patronymic: string | null;
  personal_email: string | null;
  telegram_name: null | string;
  user_id: number;
  work_email: null | string;
  work_phone: null | string;
  work_telegram: boolean;
  work_viber: boolean;
  work_whatsapp: boolean;
};

export type WorkerResponse = {
  id: number;
  department: { id: number; name: string };
  groups: [];
  permissions: [];
  profile: Worker;
  roles: [];
  schedule: null;
  status: { dismiss: boolean };
  type: {
    employee: boolean;
    owner: boolean;
    integrator: boolean;
    administrator: boolean;
  };
};

export interface IRequestEditData {
  id?: number;
  portal_id: number;
  local: "ru" | "en";
  name_first: string | null;
  name_last: string | null;
  phone_work: string | null;
  email_work: string | null;
}

export interface IInviteRequestData {
  email: string;
  name_first: string;
  name_last: string;
  portal_id: number;
  type: "employee";
}

export const workersStore = createStore<WorkerResponse[]>([]).on(
  getWorkerFx.doneData,
  (_, data) => data.data
);

export const workerStore = createStore<WorkerResponse | null>(null).on(
  getWorkByIdFx.doneData,
  (_, data) => data.data
);

export const isLoadingWorker = getWorkByIdFx.pending;
export const isLoadingWorkers = getWorkerFx.pending;
