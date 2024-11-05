import { useNavigate } from "react-router-dom";
import Button from "../../../../shared/ui/button/button";
import Input from "../../../../shared/ui/input/input";
import styles from "./reset-form.module.scss";
import { ERoutesNames } from "../../../../shared/utils/routes-name";
import { ChangeEvent, useCallback, useState } from "react";
import { resetFx } from "../../../../entities/user/effects";
import { useValidate } from "../../../../shared/hooks/useValidate";

const ResetForm = () => {
  const [resetData, setResetData] = useState({
    email: "",
    phone: "",
    password: "",
    newPassword: "",
  });

  const { handleValidate, error } = useValidate(resetData);
  const navigate = useNavigate();

  const handleChangeValue = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setResetData((prevState) => ({
        ...prevState,
        [event.target.name]: event.target.value,
      }));
    },
    []
  );

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { isError } = handleValidate();
    if (!isError) {
      try {
        await resetFx(resetData);
        if (resetFx.doneData) {
          navigate(ERoutesNames.LOGIN);
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
    <form className={styles.formContainer} onSubmit={handleFormSubmit}>
      <section className={styles.itemContainer}>
        <label>Adresse e-mail</label>
        <Input
          name="email"
          value={resetData.email}
          onChange={handleChangeValue}
        />
        {error.email && (
          <label className={styles.errorText}>{error.email.message}</label>
        )}
      </section>
      <section className={styles.itemContainer}>
        <label>Numéro de téléphone</label>
        <Input
          name="phone"
          value={resetData.phone}
          onChange={handleChangeValue}
        />
        {error.phone && (
          <label className={styles.errorText}>{error.phone.message}</label>
        )}
      </section>
      <section className={styles.itemContainer}>
        <label>Mot de passe</label>
        <Input
          name="password"
          value={resetData.password}
          onChange={handleChangeValue}
          type="password"
        />
        {error.password && (
          <label className={styles.errorText}>{error.password.message}</label>
        )}
      </section>
      <section className={styles.itemContainer}>
        <label>Confirmer votre mot de passe</label>
        <Input
          name="newPassword"
          value={resetData.newPassword}
          onChange={handleChangeValue}
          type="password"
        />
        {error.newPassword && (
          <label className={styles.errorText}>
            {error.newPassword.message}
          </label>
        )}
      </section>
      <div className={styles.accepRegister}>
        <input type="checkbox" />
        <p>J'accepte les termes et les conditions d'utilisation.</p>
      </div>
      <section className={styles.footerForm}>
        <Button>Se connecter</Button>
      </section>
      <p>
        Vous n’avez pas de compte ?{" "}
        <span onClick={handleNavigateToLogin}>Créer un compte</span>
      </p>
    </form>
  );
};

export default ResetForm;
