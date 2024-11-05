import { FC } from "react";
import { WorkerResponse } from "../../../../entities/workers/worker";
import { EButtonVariant } from "../../../../shared/ui/button";
import Button from "../../../../shared/ui/button/button";
import Input from "../../../../shared/ui/input/input";
import styles from "./commissaries-modal.module.scss";

interface ICommissariesModal {
  selectWorker: WorkerResponse;
}
const CommissariesModal: FC<ICommissariesModal> = ({ selectWorker }) => {
  return (
    <section className={styles.modalContent}>
      <h3>Enregistrement d'une compagnie d'assurance</h3>
      <div className={styles.modalMainContainer}>
        <main className={styles.modalMain}>
          <div className={styles.inputGroup}>
            <label>Nom</label>
            <Input value={selectWorker.profile.first_name} />
          </div>
          <div className={styles.inputGroup}>
            <label>Prénom</label>
            <Input value={selectWorker.profile.last_name} />
          </div>
          <div className={styles.inputGroup}>
            <label>Compte utilisateur associé</label>
            <Input />
          </div>
          <div className={styles.inputGroup}>
            <label>N° Pièce d'identification</label>
            <Input />
          </div>
          <div className={styles.inputGroup}>
            <label>Lieu de délivrance</label>
            <Input />
          </div>
          <div className={styles.inputGroup}>
            <label>Numéro de téléphone*</label>
            <Input value={selectWorker.profile?.mobile_phone} />
          </div>
          <div className={styles.inputGroup}>
            <label>Adresse E-mail</label>
            <Input value={selectWorker.profile?.personal_email ?? ""} />
          </div>
        </main>
        <main className={styles.modalMain}>
          <div className={styles.inputGroup}>
            <label>URL WebDAV</label>
            <Input />
          </div>
          <div className={styles.inputGroup}>
            <label>Date de recrutement</label>
            <Input />
          </div>
          <div className={styles.inputGroup}>
            <label>Date de délivrance</label>
            <Input />
          </div>
          <div className={styles.inputGroup}>
            <label>Code du Pays</label>
            <Input />
          </div>
          <div className={styles.inputGroup}>
            <label>Brigade</label>
            <Input />
          </div>
          <div className={styles.inputGroup}>
            <label>Equipe</label>
            <Input />
          </div>
          <div className={styles.inputGroup}>
            <label>Role</label>
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

export default CommissariesModal;
