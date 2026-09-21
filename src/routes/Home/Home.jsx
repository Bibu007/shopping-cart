import styles from "./Home.module.css";

const Home = function () {
  return (
    <div className={styles["main"]}>
      <div className={styles["main-container"]}>
        <div className={styles["offer-text"]}>50% OFF</div>
        <div className={styles["sub-text"]}>on all essential items</div>
      </div>
      <div className={styles["shop-btn-container"]}>
        <button className={styles["shop-btn"]}>SHOP NOW</button>
      </div>
    </div>
  );
};

export default Home;
