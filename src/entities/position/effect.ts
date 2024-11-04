import { createEffect } from "effector";
import { $authHost } from "../../shared/api";

export const positionFx = createEffect(async () => {
  try {
    const { data, status } = await $authHost.get(
      "administration/portal/654/position"
    );
    if (status !== 200) throw new Error("Invaild status!");
    return data;
  } catch (err) {
    console.error(err);
    throw new Error("Invalid request!");
  }
});
