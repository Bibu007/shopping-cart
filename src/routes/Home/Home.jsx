import styles from "./Home.module.css";
import { Link } from "react-router";

const Home = function () {
  return (
    <div className={styles["main"]}>
      <div className={styles["main-container"]}>
        <div className={styles["offer-text"]}>50% OFF</div>
        <div className={styles["sub-text"]}>on all essential items</div>
      </div>
      <div className={styles["shop-btn-container"]}>
        <Link className={styles["shop-btn"]} to="shop">
          SHOP NOW
        </Link>
      </div>
    </div>
  );
};

export default Home;
