import { createEffect } from "effector";
import { Login, User } from "./user";
import { $host } from "../../shared/api";

export interface IResponse<T> {
  success: boolean;
  message: string;
  data: T;
}

export interface IRegisterRequest {
  email: string;
  lang: "ru" | "en";
}

export interface ILoginRequest {
  email: string;
  password: string;
  lang: "ru" | "en";
}

export interface IResetRequest {
  email: string;
  password: string;
  phone: string;
  newPassword: string;
}

export const registerFx = createEffect<
  IRegisterRequest,
  IResponse<User>,
  Error
>(async (requestBody) => {
  try {
    const { data } = await $host.post<IResponse<User>>(
      "/registration/email",
      requestBody
    );
    return data;
  } catch (err) {
    throw new Error(`${err}`);
  }
});

export const loginFx = createEffect<ILoginRequest, IResponse<Login>, Error>(
  async (requestBody) => {
    try {
      const { data } = await $host.post<IResponse<Login>>(
        "/token",
        requestBody
      );
      return data;
    } catch (err) {
      throw new Error(`${err}`);
    }
  }
);

export const resetFx = createEffect<IResetRequest, IResponse<User>, Error>(
  async (requestBody) => {
    try {
      const { data } = await $host.post<IResponse<User>>(
        "/resetPassword",
        requestBody
      );
      console.log(data);
      return data;
    } catch (err) {
      throw new Error(`${err}`);
    }
  }
);
