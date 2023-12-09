import styles from "./loading-error.module.scss";

export function LoadingError() {
  const reload = () => {
    // Redirect to the specified URL
    window.location.href = "http://localhost:3000/dashboard";
  };
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
        <button className={styles.btn} onClick={reload}>
          Try again
        </button>
        <img className={styles.down} src="/icons/arrow-right.svg" alt="alert" />
      </div>
    </div>
  );
}
