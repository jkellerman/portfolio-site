import styles from "../MenuBar/MenuBar.module.css";

const MenuBar = () => {
  return (
    <>
      <div className={styles.menuBar}>
        <div className={styles.menuBarButton}></div>
        <div className={styles.menuBarButton}></div>
        <div className={styles.menuBarButton}></div>
      </div>
    </>
  );
};

export default MenuBar;
