import { FC } from "react";
import { WorkerResponse } from "../../../../entities/workers/worker";
import { EButtonVariant } from "../../../../shared/ui/button";
import Button from "../../../../shared/ui/button/button";
import Input from "../../../../shared/ui/input/input";
import { Textarea } from "../../../../shared/ui/textarea/textarea";
import styles from "./parametres-modal.module.scss";

interface IBaseContent {
  selectWorker: WorkerResponse;
}

const ParametresModal: FC<IBaseContent> = ({ selectWorker }) => {
  return (
    <section className={styles.container}>
      <h3>Ipsum condimentum viverra nunc pharetra dictumst.</h3>
      <section className={styles.container__content}>
        <div className={styles.formGroup}>
          <label>Membre</label>
          <Input
            placeholder="Membre"
            value={selectWorker.profile?.personal_email ?? ""}
          />
        </div>
        <div className={styles.formGroup}>
          <label>Profil</label>
          <Textarea placeholder="Decrivez ...." />
        </div>
      </section>
      <section className={styles.buttonSection}>
        <Button>Modifier</Button>
        <Button variant={EButtonVariant.OUTLINED}>Annuler</Button>
      </section>
    </section>
  );
};

export default ParametresModal;
