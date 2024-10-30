import { createStore } from "effector";
import { getWorkerFx } from "./effects";

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
  departament: { id: number; name: string };
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

export const workerStore = createStore<WorkerResponse[]>([]).on(
  getWorkerFx.doneData,
  (_, data) => data.data
);
