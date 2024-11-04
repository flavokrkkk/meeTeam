import { useNavigate } from "react-router-dom";
import Button from "../../../../shared/ui/button/button";
import Input from "../../../../shared/ui/input/input";
import styles from "./login-form.module.scss";
import { ERoutesNames } from "../../../../shared/utils/routes-name";
import { ChangeEvent, FormEvent, useCallback, useState } from "react";
import { loginFx } from "../../../../entities/user/effects";
import { useUnit } from "effector-react";
import { errorStore } from "../../../../entities/user/user";

const LoginForm = () => {
  const error = useUnit(errorStore);
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChangeValue = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setLoginData((prevState) => ({
        ...prevState,
        [event.target.name]: event.target.value,
      }));
    },
    []
  );

  const onFormSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await loginFx({ ...loginData, lang: "ru" });
      if (loginFx.doneData) {
        navigate(ERoutesNames.DASHBOARD);
      }
    } catch (e) {
      Promise.reject(e);
    }
  };

  const navigateToRegister = () => {
    navigate(ERoutesNames.REGISTER);
  };

  const navigateToReset = () => {
    navigate(ERoutesNames.RESET);
  };
  return (
    <form className={styles.formContainer} onSubmit={onFormSubmit}>
      <section className={styles.itemContainer}>
        <label className={error?.length ? styles.error : styles.default}>
          Email
        </label>
        <Input
          isError={!!error?.length}
          name="email"
          value={loginData.email}
          onChange={handleChangeValue}
        />
      </section>
      <section className={styles.itemContainer}>
        <label className={error?.length ? styles.error : styles.default}>
          Mot de passe
        </label>
        <Input
          isError={!!error?.length}
          name="password"
          value={loginData.password}
          onChange={handleChangeValue}
        />
      </section>
      {error?.length && <p className={styles.error}>{error}</p>}
      <p onClick={navigateToReset}>Mot de passe oublié ?</p>
      <section className={styles.footerForm}>
        <Button>Se connecter</Button>
      </section>
      <p>
        Vous n’avez pas de compte ?{" "}
        <span onClick={navigateToRegister}>Créer un compte</span>
      </p>
    </form>
  );
};

export default LoginForm;
