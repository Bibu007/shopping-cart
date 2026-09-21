//import { useContext } from "react";
import styles from "./Cart.module.css";

const Cart = function () {
  //const { cart, data } = useContext();

  return (
    <div className={styles["main-container"]}>
      <div className={styles["label-container"]}>
        <div>ITEM</div>
        <div>COUNT</div>
        <div>PRICE</div>
      </div>
      <div className={styles["invoice-container"]}>
        <div className={styles["item-container"]}>
          <div className={styles["item"]}>
            Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA
            III 2.5
          </div>
          <div className={styles["item"]}>
            <div className={styles["count"]}>
              <button className={styles["up-down"]}>-</button>
              <p>2</p>
              <button className={styles["up-down"]}>+</button>
            </div>
          </div>
          <div className={styles["item"]}>$90</div>
        </div>
        <div className={styles["item-container"]}>
          <div className={styles["item"]}>Hand Bag</div>
          <div className={styles["item"]}> 2 </div>
          <div className={styles["item"]}>$90</div>
        </div>
      </div>

      <div className={styles["total-container"]}>
        <div>Total : $769</div>
      </div>
    </div>
  );
};

export default Cart;
