import axios, {
  AxiosHeaders,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosRequestHeaders,
} from "axios";
import { URLS } from "../utils/base-url";

interface IAxiosRequestConfig extends AxiosRequestConfig {
  headers: AxiosRequestHeaders;
}

export const $authHost: AxiosInstance = axios.create({
  baseURL: URLS.BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const $host = axios.create({
  baseURL: URLS.BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

$authHost.interceptors.request.use(
  (config: IAxiosRequestConfig) => {
    const token = localStorage.getItem("token");
    if (token) {
      (config.headers as AxiosHeaders).set("Authorization", `Bearer ${token}`);
    }
    return config;
  },

  (error) => {
    Promise.reject(error);
  }
);
