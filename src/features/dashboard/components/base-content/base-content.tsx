import { FC } from "react";
import { WorkerResponse } from "../../../../entities/workers/worker";
import { EButtonVariant } from "../../../../shared/ui/button";
import Button from "../../../../shared/ui/button/button";
import Input from "../../../../shared/ui/input/input";
import { Textarea } from "../../../../shared/ui/textarea/textarea";
import styles from "./base-content.module.scss";

interface IBaseContent {
  selectWorker: WorkerResponse;
}

const BaseContent: FC<IBaseContent> = ({ selectWorker }) => {
  return (
    <section className={styles.container}>
      <h3>Editer un compte</h3>
      <section className={styles.container__content}>
        <div className={styles.formGroup}>
          <label>Libellé</label>
          <Input
            placeholder="Libellé"
            value={selectWorker.profile?.personal_email ?? ""}
          />
        </div>
        <div className={styles.formGroup}>
          <label>Code ISO*</label>
          <Input
            placeholder="Code ISO"
            value={selectWorker.profile?.first_name}
          />
        </div>
        <div className={styles.formGroup}>
          <label>Description</label>
          <Textarea placeholder="Decrivez ...." />
        </div>
      </section>
      <section className={styles.buttonSection}>
        <Button>Enregistrer</Button>
        <Button variant={EButtonVariant.OUTLINED}>Annuler</Button>
      </section>
    </section>
  );
};

export default BaseContent;
