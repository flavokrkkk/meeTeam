import { createStore } from "effector";
import { loginFx, registerFx } from "./effects";
import { IResponseRegisterData } from ".";

export type User = {
  id: number;
  name: string;
  email: string;
};

export type Login = {
  token: string;
  userId: number;
};

export const userStore = createStore<IResponseRegisterData | null>(null).on(
  registerFx.doneData,
  (_, user) => user.data
);

export const loginStore = createStore<Login | null>(null).on(
  loginFx.doneData,
  (_, login) => login.data
);

export const errorStore = createStore<string | null>(null).on(
  loginFx.failData,
  (_, data) => data.message
);
