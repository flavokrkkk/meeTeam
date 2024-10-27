import { useNavigate } from "react-router-dom";
import Button from "../../../../shared/ui/button/button";
import Input from "../../../../shared/ui/input/input";
import { ERoutesNames } from "../../../../shared/utils/routes-name";
import styles from "./register-form.module.scss";
import React, { ChangeEvent, useCallback, useState } from "react";
import { registerFx } from "../../../../entities/user/effects";

const RegisterForm = () => {
  const [emailValue, setEmailValue] = useState("");

  const navigate = useNavigate();

  const handleChangeValue = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setEmailValue(event.target.value);
    },
    []
  );
  const onFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await registerFx({ email: emailValue, lang: "ru" });
      if (registerFx.doneData) {
        navigate(ERoutesNames.HOME);
      }
    } catch (e) {
      Promise.reject(e);
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
