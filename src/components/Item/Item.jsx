import styles from "./Item.module.css";

const Item = function ({ id, title, count, price, modifyCart }) {
  console.log("modifyCart type:", typeof modifyCart);
  function handleDownClick() {
    if (count > 0) {
      //count = itemCount - 1;
      modifyCart(id, count - 1);
    }
  }

  function handleUpClick() {
    if (count < 5) {
      //setCount(count + 1);
      modifyCart(id, count + 1);
    }
  }

  return (
    <div className={styles["item-container"]}>
      <div className={styles["item"]}>{title}</div>
      <div className={`${styles["item"]} ${styles["non-title"]}`}>
        <div className={styles["count"]}>
          <button className={styles["up-down"]} onClick={handleDownClick}>
            -
          </button>
          <p>{count}</p>
          <button className={styles["up-down"]} onClick={handleUpClick}>
            +
          </button>
        </div>
      </div>
      <div className={`${styles["item"]} ${styles["non-title"]}`}>${price}</div>
    </div>
  );
};

export default Item;
