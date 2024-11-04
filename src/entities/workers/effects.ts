import { createEffect } from "effector";
import { $authHost } from "../../shared/api";
import { IResponse } from "..";
import { IInviteRequestData, IRequestEditData, WorkerResponse } from "./worker";

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

export const getWorkByIdFx = createEffect<
  number,
  IResponse<WorkerResponse>,
  Error
>(async (id: number): Promise<IResponse<WorkerResponse>> => {
  try {
    const { data, status } = await $authHost.get<IResponse<WorkerResponse>>(
      `/administration/portal/1/employees/detail/${id}`
    );
    if (status !== 200) throw new Error("Invalid status code!");
    console.log(data);
    return data;
  } catch (err) {
    console.error(err);
    throw new Error("Failed to get worker");
  }
});

export const editWorkerFx = createEffect<
  IRequestEditData,
  IResponse<WorkerResponse>,
  Error
>(async (requestData: IRequestEditData): Promise<IResponse<WorkerResponse>> => {
  try {
    const { data } = await $authHost.patch<IResponse<WorkerResponse>>(
      `/administration/portal/1/employees/${requestData.id}`,
      requestData
    );
    return data;
  } catch (err) {
    console.error(err);
    throw new Error("Failed to edit worker");
  }
});

export const updateDissmisWorkerFx = createEffect<
  { portal_id: number; employee_id: number; dismiss: boolean },
  IResponse<{ data: string }>,
  Error
>(
  async (body: {
    portal_id: number;
    employee_id: number;
    dismiss: boolean;
  }) => {
    try {
      const { data } = await $authHost.patch(
        `/administration/portal/1/employees/status/${body.employee_id}`,
        body
      );
      return data;
    } catch (err) {
      console.error(err);
      throw new Error("Failed to update status");
    }
  }
);

export const inviteUserToWorkerFx = createEffect<
  IInviteRequestData,
  IResponse<{ data: string }>,
  Error
>(async (body: IInviteRequestData) => {
  try {
    const { data } = await $authHost.post(
      "/administration/portal/1/employees/invite",
      body
    );
    return data;
  } catch (err) {
    console.error(err);
    throw new Error("Failed to invite");
  }
});
