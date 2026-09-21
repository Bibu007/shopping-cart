//import { useContext } from "react";
import Item from "../../components/Item/Item";
import styles from "./Cart.module.css";
import { useOutletContext } from "react-router";

const Cart = function () {
  const { modifyCart, cart, data } = useOutletContext();

  console.log("modifyCart type:", typeof modifyCart);

  let ItemList = null;

  console.log("Cart3: ", cart);

  let totalCost =
    Object.keys(cart).length !== 0
      ? Object.keys(cart)
          .filter((key) => cart[key] !== 0)
          .reduce(
            (acc, key) => acc + data[key - 1].price * data[key - 1].count,
            0,
          )
      : 0;

  console.log("Cart2: ", cart);
  console.log("Data: ", data);
  /*
  if (cart) {
    ItemList = Object.keys(cart).forEach((item) => {
      console.log(cart[item]);
      if (cart[item] !== 0) {
        let title = data[item].title;
        let count = data[item].count;
        let price = data[item].price * count;

        console.log(title);

        return <Item title={title} count={count} price={price} />;
      }
    });
    console.log("item list: ", ItemList);
  }
    */
  if (cart && data) {
    ItemList = Object.keys(cart)
      .filter((key) => cart[key] !== 0) // Filter out items with 0 count
      .map((key) => {
        // .map() returns a NEW array of JSX elements
        const title = data[key - 1]?.title;
        const count = cart[key];
        const price = (data[key - 1]?.price || 0) * count;

        return (
          <Item
            key={key}
            id={key}
            title={title}
            count={count}
            price={price}
            modifyCart={modifyCart}
          />
        );
      });
  }

  return (
    <div className={styles["main-container"]}>
      <div className={styles["label-container"]}>
        <div>ITEM</div>
        <div>COUNT</div>
        <div>PRICE</div>
      </div>
      {ItemList.length !== 0 ? (
        <>
          <div className={styles["invoice-container"]}>{ItemList}</div>
          <div className={styles["total-container"]}>
            <div>Total : {totalCost}</div>
          </div>
          <div className={styles["btn-container"]}>
            <button className={styles["checkout-btn"]}>CHECKOUT</button>
          </div>
        </>
      ) : (
        <p className={styles["no-items"]}>Your cart is empty!</p>
      )}
    </div>
  );
};

export default Cart;
