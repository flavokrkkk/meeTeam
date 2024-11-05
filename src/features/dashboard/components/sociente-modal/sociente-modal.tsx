import { FC } from "react";
import { WorkerResponse } from "../../../../entities/workers/worker";
import { EButtonVariant } from "../../../../shared/ui/button";
import Button from "../../../../shared/ui/button/button";
import Input from "../../../../shared/ui/input/input";
import styles from "./sociente-modal.module.scss";

interface ISocienteModal {
  selectWorker: WorkerResponse;
}
const SocienteModal: FC<ISocienteModal> = ({ selectWorker }) => {
  return (
    <section className={styles.modalContent}>
      <h3>Enregistrement d'une compagnie d'assurance</h3>
      <div className={styles.modalMainContainer}>
        <main className={styles.modalMain}>
          <div className={styles.inputGroup}>
            <label>Nom de la société</label>
            <Input value={selectWorker.profile.first_name} />
          </div>
          <div className={styles.inputGroup}>
            <label>Branche</label>
            <Input />
          </div>
          <div className={styles.inputGroup}>
            <label>Numéro de téléphone</label>
            <Input value={selectWorker.profile.mobile_phone} />
          </div>
          <div className={styles.inputGroup}>
            <label>Site web</label>
            <Input />
          </div>
          <div className={styles.inputGroup}>
            <label>GPS Latitude</label>
            <Input />
          </div>
          <div className={styles.inputGroup}>
            <label>GPS Longitude</label>
            <Input />
          </div>
        </main>
        <main className={styles.modalMain}>
          <div className={styles.inputGroup}>
            <label>Pays</label>
            <Input />
          </div>
          <div className={styles.inputGroup}>
            <label>Ville</label>
            <Input />
          </div>
          <div className={styles.inputGroup}>
            <label>Adress email principale</label>
            <Input value={selectWorker.profile.personal_email ?? ""} />
          </div>
          <div className={styles.inputGroup}>
            <label>Adress email secondaire</label>
            <Input value={selectWorker.profile.work_email ?? ""} />
          </div>
          <div className={styles.inputGroup}>
            <label>Commissaire contrôleuré</label>
            <Input />
          </div>
        </main>
      </div>
      <section className={styles.buttonSection}>
        <Button>Enregistrer</Button>
        <Button variant={EButtonVariant.OUTLINED}>Annuler</Button>
      </section>
    </section>
  );
};

export default SocienteModal;
