import styles from "./loading-error.module.scss";

export function LoadingError() {
  return (
    <div className={styles.container}>
      <div>
        <img
          className={styles.circle}
          src="/icons/alert-circle.svg"
          alt="alert"
        />
      </div>
      <p className={styles.textPosition}>
        There was a problem while loading the project data
      </p>
      <div className={styles.arrowPosition}>
        <p> Try again</p>
        <img src="/icons/arrow-right.svg" alt="alert" />
      </div>
    </div>
  );
}
