import styles from "./Header.module.css";

const Header = function ({ ItemCount = 0 }) {
  return (
    <div className={styles["header-container"]}>
      <h1 className={styles["logo"]}>Wowmart</h1>
      <div className={styles["link-container"]}>
        <button className={styles["link"]}>Home</button>
        <button className={styles["link"]}>Shop</button>
        <button className={styles["link"]}>Cart({ItemCount})</button>
      </div>
    </div>
  );
};

export default Header;
