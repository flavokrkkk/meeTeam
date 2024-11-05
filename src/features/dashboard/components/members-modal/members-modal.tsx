import { FC } from "react";
import { WorkerResponse } from "../../../../entities/workers/worker";
import { EButtonVariant } from "../../../../shared/ui/button";
import Button from "../../../../shared/ui/button/button";
import Input from "../../../../shared/ui/input/input";
import { Textarea } from "../../../../shared/ui/textarea/textarea";
import styles from "./members-modal.module.scss";

interface IMembersModal {
  selectWorker: WorkerResponse;
}

const MembersModal: FC<IMembersModal> = ({ selectWorker }) => {
  return (
    <section className={styles.container}>
      <h3>Enregistrement d'une compagnie d'assurance</h3>
      <section className={styles.container__content}>
        <div className={styles.formGroup}>
          <label>Libelle</label>
          <Input
            placeholder="Libelle"
            value={selectWorker.profile?.personal_email ?? ""}
          />
        </div>
        <div className={styles.formGroup}>
          <label>Description</label>
          <Textarea placeholder="Decrivez ...." />
        </div>
        <div className={styles.formGroup}>
          <label>Commissaire de contrôle</label>
          <Input
            placeholder="Libelle"
            value={selectWorker.profile?.personal_email ?? ""}
          />
        </div>
        <div className={styles.formGroup}>
          <label>Rôle</label>
          <Input
            placeholder="Libelle"
            value={selectWorker.profile?.personal_email ?? ""}
          />
        </div>
      </section>
      <section className={styles.buttonSection}>
        <Button>Modifier</Button>
        <Button variant={EButtonVariant.OUTLINED}>Annuler</Button>
      </section>
    </section>
  );
};

export default MembersModal;
