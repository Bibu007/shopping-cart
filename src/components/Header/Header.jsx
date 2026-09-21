import styles from "./Header.module.css";
import { Link } from "react-router";

const Header = function ({ count = 0 }) {
  return (
    <div className={styles["header-container"]}>
      <h1 className={styles["logo"]}>Wowmart</h1>
      <div className={styles["link-container"]}>
        <Link className={styles["link"]} to="/">
          Home
        </Link>
        <Link className={styles["link"]} to="shop">
          Shop
        </Link>
        <Link className={styles["link"]} to="cart">
          Cart({count})
        </Link>
      </div>
    </div>
  );
};

export default Header;
