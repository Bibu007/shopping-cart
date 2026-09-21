import { Outlet } from "react-router";
import Header from "./components/Header/Header";
//import styles from "./Home.module.css";
import { useState } from "react";
import { useEffect } from "react";
import styles from "./App.module.css";

const useData = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((response) =>
        setData(
          response.map((item) => ({
            ...item, // 1. Copy existing properties
            count: 0, // 2. Add or update the new property
          })),
        ),
      )
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  return { data, setData, error, loading }; //returns an object
};

const App = function () {
  const [cart, setCart] = useState({});
  const { data, setData, error, loading } = useData();
  //console.log("modifyCart type:", typeof modifyCart);

  if (loading)
    return (
      <div className={styles["loading-container"]}>
        <p className={styles["loading-text"]}>Loading...</p>
      </div>
    );
  if (error) return <p>A network error was encountered</p>;

  console.log(data);

  const modifyCart = function (key, count) {
    console.log("hEY");

    setData((prevData) =>
      prevData.map((item) =>
        item.id == key ? { ...item, count: count } : item,
      ),
    );
    setCart((cart) => ({
      ...cart,
      [key]: count,
    }));

    console.log(`cart: `, cart);

    //console.log("count", count);
    console.log("data", data);
  };

  const countItems = function () {
    let count = 0;
    for (const c in cart) {
      count = count + cart[c];
    }
    return count;
  };

  console.log("Cart: ", cart);

  return (
    <>
      <Header count={countItems()} />
      <Outlet context={{ modifyCart, data, cart }} />
    </>
  );
};

export default App;
