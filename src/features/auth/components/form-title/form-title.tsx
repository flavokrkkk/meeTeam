import { FC } from "react";
import LogoIcon from "../../../../assets/social/logo-icon";
import LogoIconTitle from "../../../../assets/social/logo-title-icon";
import { EFormModes } from "../../utils/form-mode";
import styles from "./form-title.module.scss";

interface IFormTitle {
  mode: EFormModes;
}

const FormTitle: FC<IFormTitle> = ({ mode }) => {
  const formTitleClasses: Record<EFormModes, string> = {
    [EFormModes.LOGIN_FORM]: "Merci d'entrer vos informations de connexion",
    [EFormModes.RESET_FORM]: "Merci d'entrer vos informations de connexion  ",
    [EFormModes.REGISTER_FORM]: "",
  };

  return (
    <section className={styles.mainContainer}>
      <div className={styles.container}>
        <span>
          <LogoIcon />
        </span>
        <span>
          <LogoIconTitle />
        </span>
      </div>
      <h1 className={styles.title}>{formTitleClasses[mode]}</h1>
    </section>
  );
};

export default FormTitle;
