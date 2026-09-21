import { useEffect, useState } from "react";
import styles from "./Shop.module.css";
import Card from "../../components/Card/Card";
import { useOutletContext } from "react-router";
/*
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
*/
const Shop = function () {
  const { modifyCart, data } = useOutletContext();
  /*
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

  function handleModifyCart(key, count) {
    setData((prevData) =>
      prevData.map((item) =>
        item.id === key ? { ...item, count: count } : item,
      ),
    );

    console.log("count", count);
    console.log("data", data);
    modifyCart(key, count);
  }
*/
  const cardList = data.map((item) => (
    <Card
      key={item.id}
      id={item.id}
      src={item.image}
      title={item.title}
      category={item.category}
      price={item.price}
      modifyCart={modifyCart}
      itemCount={item.count}
    />
  ));

  return <div className={styles["cards-grid"]}>{cardList}</div>;
};

export default Shop;
