import { ChangeEvent, FC, FormEvent, useCallback, useState } from "react";
import { WorkerResponse } from "../../../../entities/workers/worker";
import Input from "../../../../shared/ui/input/input";
import styles from "./edition-worker.module.scss";
import Button from "../../../../shared/ui/button/button";
import { EButtonSizes } from "../../../../shared/ui/button";
import { editWorkerFx } from "../../../../entities/workers/effects";
import { useValidate } from "../../../../shared/hooks/useValidate";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker-cssmodules.css";
import "react-datepicker/dist/react-datepicker.css";

interface IEditionWorker {
  worker: WorkerResponse;
}

const EditionWorker: FC<IEditionWorker> = ({ worker }) => {
  const [workerData, setWorkerData] = useState({
    name_first: worker?.profile.first_name ?? "",
    name_last: worker?.profile.last_name,
    phone_work: worker?.profile.work_phone,
    email_work: worker?.profile.work_email,
    date_of_birth: worker.profile?.date_of_birth ?? "",
    date_of_employment: worker.profile?.date_of_employment ?? "",
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

  const handleChangeDate = (date: Date | null) => {
    if (date) {
      setWorkerData((prevState) => ({
        ...prevState,
        date_of_employment: date?.toISOString(),
      }));
    }
  };

  const handleChangeDateOfBirth = (date: Date | null) => {
    if (date) {
      setWorkerData((prevState) => ({
        ...prevState,
        date_of_birth: date?.toISOString(),
      }));
    }
  };

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
              <span className={styles.errorText}>
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
              <span className={styles.errorText}>
                {error.name_last?.message}
              </span>
            )}
          </div>
          <div className={styles.formGroup}>
            <label>Date de création de compte</label>
            <DatePicker
              value={workerData.date_of_birth}
              onChange={handleChangeDateOfBirth}
              customInput={<Input />}
            />
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
              <span className={styles.errorText}>
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
              <span className={styles.errorText}>
                {error.name_first?.message}
              </span>
            )}
          </div>
          <div className={styles.formGroup}>
            <label>Date de dernière connexion</label>
            <DatePicker
              value={workerData.date_of_employment}
              onChange={handleChangeDate}
            />
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
