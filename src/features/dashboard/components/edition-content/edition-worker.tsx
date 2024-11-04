import { ChangeEvent, FC, FormEvent, useCallback, useState } from "react";
import { WorkerResponse } from "../../../../entities/workers/worker";
import Input from "../../../../shared/ui/input/input";
import styles from "./edition-worker.module.scss";
import Button from "../../../../shared/ui/button/button";
import { EButtonSizes } from "../../../../shared/ui/button";
import { editWorkerFx } from "../../../../entities/workers/effects";
import { useValidate } from "../../../../shared/hooks/useValidate";

interface IEditionWorker {
  worker: WorkerResponse;
}

const EditionWorker: FC<IEditionWorker> = ({ worker }) => {
  const [workerData, setWorkerData] = useState({
    name_first: worker?.profile.first_name ?? "",
    name_last: worker?.profile.last_name,
    phone_work: worker?.profile.work_phone,
    email_work: worker?.profile.work_email,
  });

  const { error, handleValidate } = useValidate(workerData);

  const handleChangeValue = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setWorkerData((prevState) => ({
        ...prevState,
        [event.target.name]: event.target.value,
      }));
    },
    []
  );

  const onFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { isError } = handleValidate();
    if (!isError) {
      editWorkerFx({
        portal_id: 1,
        id: worker.id,
        local: "ru",
        ...workerData,
      });
    }
  };

  return (
    <form className={styles.dashboardEdition} onSubmit={onFormSubmit}>
      <h3>Editer un compte</h3>
      <div className={styles.formContainer}>
        <section>
          <div className={styles.formGroup}>
            <label>Adresse e-mail</label>
            <Input
              name="email_work"
              value={workerData.email_work ?? ""}
              onChange={handleChangeValue}
            />
            {error.email_work && (
              <span
                style={{
                  color: "red",
                  fontSize: "12px",
                }}
              >
                {error.email_work.message}
              </span>
            )}
          </div>
          <div className={styles.formGroup}>
            <label>Nom</label>
            <Input
              name="name_last"
              value={workerData.name_last}
              onChange={handleChangeValue}
            />
            {error.name_last && (
              <span
                style={{
                  color: "red",
                  fontSize: "12px",
                }}
              >
                {error.name_last?.message}
              </span>
            )}
          </div>
          <div className={styles.formGroup}>
            <label>Date de création de compte</label>
            <Input />
          </div>
        </section>
        <section>
          <div className={styles.formGroup}>
            <label>Numéro de téléphone</label>
            <Input
              name="phone_work"
              value={workerData.phone_work ?? ""}
              onChange={handleChangeValue}
            />
            {error.phone_work && (
              <span
                style={{
                  color: "red",
                  fontSize: "12px",
                }}
              >
                {error.phone_work?.message}
              </span>
            )}
          </div>
          <div className={styles.formGroup}>
            <label>Prénom</label>
            <Input
              name="name_first"
              value={workerData.name_first}
              onChange={handleChangeValue}
            />
            {error.email_work && (
              <span
                style={{
                  color: "red",
                  fontSize: "12px",
                }}
              >
                {error.name_first?.message}
              </span>
            )}
          </div>
          <div className={styles.formGroup}>
            <label>Date de dernière connexion</label>
            <Input />
          </div>
        </section>
      </div>
      <div className={styles.buttonContainer}>
        <Button sizes={EButtonSizes.MD}>Modifier</Button>
      </div>
    </form>
  );
};

export default EditionWorker;
