// import data from "../data/TodaysDeal";
import { useState } from "react";
import styles from "./card.module.css";
const Card = (props) => {
  const [products, setProducts] = useState(props.data);
  return (
    <section className={styles.productCard}>
      <div className={styles.title}>
        <h1>Today’s Deals</h1>
        <a href="#">See all deals</a>
      </div>
      <div className={styles.items}>
        {products.map((item) => {
          return (
            <div key={item.id}>
              <img src={item.img} alt="" />
              <p>
                &#8377;
                {item.minPrice} - &#8377;{item.maxPrice}
              </p>
              <p>Ends in {props.timer}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Card;
