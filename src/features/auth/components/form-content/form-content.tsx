import { FC } from "react";
import styles from "./form-content.module.scss";
import FormTitle from "../form-title/form-title";
import { EFormModes } from "../../utils/form-mode";

interface IFormContent {
  children: React.ReactNode;
  mode: EFormModes;
}

const FormContent: FC<IFormContent> = ({ children, mode }) => {
  return (
    <div className={styles.container}>
      <div>
        <FormTitle mode={mode} />
        {children}
      </div>
    </div>
  );
};

export default FormContent;
