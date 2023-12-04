import styles from "./loading-indicator.module.scss";

export function LoadingIndicator() {
  return (
    <div className={styles.container}>
      <img
        className={styles.loadingIndicator}
        src="/icons/Loading-circle.svg"
        alt="Loading Circle"
      />
    </div>
  );
}
