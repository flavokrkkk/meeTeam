export interface IResponseRegisterData {
  name: string | null;
  email: string;
  integration: false;
  locale: "ru" | "en";
  id: 654;
  current_portal_id: 656;
  token: string;
  password: string;
}

export interface IMe {
  id: number;
  current_portal_id: number;
  portal_detail: PortalDetail;
  main_user: MainUser;
}

export interface PortalDetail {
  domain: string;
  name: string;
  settings: any;
  tariff_id: number;
  employees: Employees;
  default: boolean;
  bitrix: Bitrix;
  integration: Integration;
  roles: any[];
  permissions: string[];
  employee: Employee;
}

export interface Employees {
  total: number;
  max: number;
}

export interface Bitrix {
  app_id: any;
  domain: any;
}

export interface Integration {
  bitrix24: boolean;
  amoCRM: boolean;
}

export interface Employee {
  id: number;
  user_id: number;
  type: Type;
  kicked: boolean;
  schedule: any;
  department: any;
  profile: Profile;
}

export interface Type {
  employee: boolean;
  owner: boolean;
  integrator: boolean;
  administrator: boolean;
}

export interface Profile {
  id: number;
  employee_id: number;
  local: string;
  name_first: any;
  name_last: any;
  name_patronymic: any;
  image: any;
  phone_mobile: any;
  phone_mobile_whatsapp: boolean;
  phone_mobile_telegram: boolean;
  phone_mobile_viber: boolean;
  phone_work: any;
  phone_work_whatsapp: boolean;
  phone_work_telegram: boolean;
  phone_work_viber: boolean;
  phone_internal: any;
  email_personal: string;
  email_work: any;
  telegram_name: any;
  date_of_birth: any;
  city: any;
  country: any;
  date_of_employment: any;
}

export interface MainUser {
  group: number;
  name: any;
  email: string;
  phone: any;
  token: string;
  locale: string;
}
