import { Link } from "react-router-dom";
import styles from "./productscard.module.css";
import Button from "@material-ui/core/Button";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { useState } from "react";

const ProductCard = ({ productData, title }) => {
  const [hovered, setHovered] = useState(true);
  const toggleHover = () => setHovered(!hovered);
  return (
    <section
      className={styles.ProductCard}
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
    >
      <h2>{title}</h2>
      <Link to="/category">
        <div className={styles.items}>
          {productData.map((item, index) => {
            return <img src={item} alt="" key={index} />;
          })}
        </div>
      </Link>
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

export default ProductCard;
