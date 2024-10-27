import { useNavigate } from "react-router-dom";
import Button from "../../../../shared/ui/button/button";
import Input from "../../../../shared/ui/input/input";
import styles from "./login-form.module.scss";
import { ERoutesNames } from "../../../../shared/utils/routes-name";
import { ChangeEvent, FormEvent, useCallback, useState } from "react";
import { loginFx } from "../../../../entities/user/effects";

const LoginForm = () => {
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
        navigate(ERoutesNames.HOME);
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
        <label>Email</label>
        <Input
          name="email"
          value={loginData.email}
          onChange={handleChangeValue}
        />
      </section>
      <section className={styles.itemContainer}>
        <label>Mot de passe</label>
        <Input
          name="password"
          value={loginData.password}
          onChange={handleChangeValue}
        />
      </section>
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
