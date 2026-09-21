//import { useState } from "react";
import styles from "./Card.module.css";

const Card = function ({
  id,
  src,
  title,
  category,
  price,
  modifyCart,
  itemCount,
}) {
  //const [count, setCount] = useState(0);

  //console.log("modifyCart type:", typeof modifyCart);

  //let count = 0;

  function handleDownClick() {
    if (itemCount > 0) {
      //count = itemCount - 1;
      modifyCart(id, itemCount - 1);
    }
  }

  function handleUpClick() {
    console.log("item count", itemCount);
    if (itemCount < 5) {
      //setCount(count + 1);
      modifyCart(id, itemCount + 1);
    }
  }

  return (
    <div className={styles["card-container"]}>
      <img src={src} alt="bag_image" />
      <h2 className={styles["title"]}>{title}</h2>
      <p className={styles["category"]}>{category}</p>
      <div className={styles["price-and-count"]}>
        <p className={styles["price"]}>${price}</p>
        <div className={styles["count"]}>
          <button className={styles["up-down"]} onClick={handleDownClick}>
            -
          </button>
          <p>{itemCount}</p>
          <button className={styles["up-down"]} onClick={handleUpClick}>
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
