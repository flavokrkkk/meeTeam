import styles from "./loader.module.scss";

const Loader = () => {
  return (
    <div className={styles.loaderContainer}>
      <div className={styles.loaderContent}>
        <div className="flex justify-center">
          <div
            className={styles.loaderSpinner}
            role="status"
            aria-label="loading"
          />
        </div>
      </div>
    </div>
  );
};

export default Loader;
