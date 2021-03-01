// import data from "../data/TodaysDeal";
import { useState } from "react";
import styles from "./card.module.css";
import Button from "@material-ui/core/Button";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
const Card = (props) => {
  const [products, setProducts] = useState(props.data);
  const [hovered, setHovered] = useState(true);
  const toggleHover = () => setHovered(!hovered);
  return (
    <section
      className={styles.productCard}
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
    >
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
      <div className={hovered ? styles.hide : styles.btn__container}>
        <Button variant="contained" className={styles.btn} disabled>
          <ArrowBackIosIcon />
        </Button>
        <Button variant="contained" className={styles.btn}>
          <ArrowForwardIosIcon />
        </Button>
      </div>
    </section>
  );
};

export default Card;
