import Input from "../../../../shared/ui/input/input";
import { EInputSizes } from "../../../../shared/ui/input";
import { EButtonSizes, EButtonVariant } from "../../../../shared/ui/button";
import Button from "../../../../shared/ui/button/button";
import { ChangeEvent, FC, FormEvent, useCallback, useState } from "react";
import styles from "./ivite-worker-contnet.module.scss";
import {
  inviteUserToWorkerFx,
  setWorkerFx,
} from "../../../../entities/workers/effects";
import { useValidate } from "../../../../shared/hooks/useValidate";

interface IInviteWorkerContent {
  mode: "added" | "invite";
  toggleModal: () => void;
  setSuccess: () => void;
}

const InviteWorkerContent: FC<IInviteWorkerContent> = ({
  toggleModal,
  mode,
  setSuccess,
}) => {
  const [inviteData, setInviteData] = useState({
    email: "",
    name_first: "",
    name_last: "",
  });

  const { handleValidate, error } = useValidate(inviteData);

  const handleChangeInviteData = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setInviteData((prevState) => ({
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
      if (mode === "invite") {
        inviteUserToWorkerFx({
          ...inviteData,
          type: "employee",
          portal_id: 1,
        });
        setSuccess();
      } else if (mode === "added") {
        setWorkerFx({
          email_personal: inviteData.email,
          portal_id: 1,
          local: "ru",
          name_first: inviteData.name_first,
          name_last: inviteData.name_last,
        });
        setSuccess();
      }
    }
    toggleModal();
  };

  return (
    <section className={styles.editAccount}>
      <h3>{mode === "invite" ? "Invite un compte" : "Added un compte"}</h3>
      <form onSubmit={onFormSubmit}>
        <div className={styles.formGroup}>
          <label>Имя</label>
          <Input
            name="name_first"
            sizes={EInputSizes.LG}
            placeholder="First name"
            value={inviteData.name_first}
            onChange={handleChangeInviteData}
          />
          {error.name_first && (
            <span className={styles.errorText}>
              {error.name_first?.message}
            </span>
          )}
        </div>
        <div className={styles.formGroup}>
          <label>Фамилия</label>
          <Input
            name="name_last"
            sizes={EInputSizes.LG}
            placeholder="Last name"
            value={inviteData.name_last}
            onChange={handleChangeInviteData}
          />
          {error.name_last && (
            <span className={styles.errorText}>{error.name_last?.message}</span>
          )}
        </div>
        <div className={styles.formGroup}>
          <label>Email</label>
          <Input
            name="email"
            sizes={EInputSizes.LG}
            value={inviteData.email}
            placeholder="E-mail"
            onChange={handleChangeInviteData}
          />
          {error.email && (
            <span className={styles.errorText}>{error.email?.message}</span>
          )}
        </div>
        <div className={styles.formGroup}>
          <label>Тип пользователя</label>
          <Input sizes={EInputSizes.LG} />
        </div>
        <div className={styles.buttonContainer}>
          <Button
            variant={EButtonVariant.ERROR}
            sizes={EButtonSizes.LG}
            onClick={toggleModal}
          >
            Отмена
          </Button>
          <Button variant={EButtonVariant.OUTLINED} sizes={EButtonSizes.LG}>
            Пригласить
          </Button>
        </div>
      </form>
    </section>
  );
};

export default InviteWorkerContent;
