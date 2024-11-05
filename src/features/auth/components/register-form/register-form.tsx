import { useNavigate } from "react-router-dom";
import Button from "../../../../shared/ui/button/button";
import Input from "../../../../shared/ui/input/input";
import { ERoutesNames } from "../../../../shared/utils/routes-name";
import styles from "./register-form.module.scss";
import React, { ChangeEvent, useCallback, useState } from "react";
import { registerFx } from "../../../../entities/user/effects";
import { useValidate } from "../../../../shared/hooks/useValidate";

const RegisterForm = () => {
  const [emailValue, setEmailValue] = useState("");

  const { handleValidate, error } = useValidate({ emailValue });
  const navigate = useNavigate();

  const handleChangeValue = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setEmailValue(event.target.value);
    },
    []
  );
  const onFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { isError } = handleValidate();
    if (!isError) {
      try {
        await registerFx({ email: emailValue, lang: "ru" });
        if (registerFx.doneData) {
          navigate(ERoutesNames.DASHBOARD);
        }
      } catch (e) {
        Promise.reject(e);
      }
    }
  };

  const handleNavigateToLogin = () => {
    navigate(ERoutesNames.LOGIN);
  };

  return (
    <form className={styles.formContainer} onSubmit={onFormSubmit}>
      <section className={styles.itemContainer}>
        <label>Adresse e-mail</label>
        <Input name="email" value={emailValue} onChange={handleChangeValue} />
        {error.emailValue && (
          <label className={styles.errorText}>{error.emailValue.message}</label>
        )}
      </section>
      <section className={styles.footerForm}>
        <Button>Se connecter</Button>
      </section>
      <p>
        <span onClick={handleNavigateToLogin}>Retour à la page connexion</span>
      </p>
    </form>
  );
};

export default RegisterForm;
