import { createEffect } from "effector";
import { $authHost } from "../../shared/api";
import { IResponse } from "..";
import { WorkerResponse } from "./worker";

export const getWorkerFx = createEffect<
  void,
  IResponse<WorkerResponse[]>,
  Error
>(async (): Promise<IResponse<WorkerResponse[]>> => {
  try {
    const { data } = await $authHost.get<IResponse<WorkerResponse[]>>(
      "/administration/portal/1/employees"
    );
    return data;
  } catch (err) {
    console.error(err);
    throw new Error("Failed to get worker!");
  }
});
