import { useSelector } from "react-redux";
import styles from "./cart.module.css";
import { useEffect, useState } from "react";

function Cart() {
  const [data, setData] = useState([]);
  const id = useSelector((state) => state.cart.ItemId);
  const quantity = useSelector((state) => state.cart.numOfItems);

  const unique = new Set(id);

  const ids = Array.from(unique);
  // Call enableMapSet() before using any data structures involving Maps or Sets

  useEffect(() => {
    if (ids.length === 0) return;

    const fetchData = async () => {
      try {
        const responses = await Promise.all(
          ids.map((productId) =>
            fetch(`https://fakestoreapi.com/products/${productId}`).then(
              (res) => res.json()
            )
          )
        );
        setData(responses);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
      console.log(data);
    };

    fetchData();
  }, []);

  return (
    <div className={styles.cart}>
      {data.map((product) => (
        <div key={product.id} className={styles.cartItem}>
          <img
            src={product.image}
            alt={product.title}
            className={styles.productImage}
          />
          <div className={styles.productDetails}>
            <h3 className={styles.productTitle}>
              {product.title.slice(0, 30)}
            </h3>
            <p className={styles.productDescription}>
              {product.description.slice(0, 100)}
            </p>
            <p className={styles.productPrice}>${product.price}</p>
            <div className={styles.productRating}>
              {[...Array(product.rating)].map((_, index) => (
                <span key={index} role="img" aria-label="star">
                  ⭐
                </span>
              ))}
            </div>
            <b style={{ marginRight: "1rem" }}>Quantity</b>
            <input
              type="number"
              value={quantity[product.id]}
              className={styles.quantityInput}
              disabled
            />
            <button className={styles.removeButton}>Remove</button>
          </div>
        </div>
      ))}
      <button className={styles.checkoutButton}>Checkout</button>
    </div>
  );
}

export default Cart;
