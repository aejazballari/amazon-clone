import { Link } from "react-router-dom";
import styles from "./productscard.module.css";

const ProductCard = ({ productData, title }) => {
  return (
    <section className={styles.ProductCard}>
      <h2>{title}</h2>
      <Link to="/category">
        <div className={styles.items}>
          {productData.map((item, index) => {
            return <img src={item} alt="" key={index} />;
          })}
        </div>
      </Link>
    </section>
  );
};

export default ProductCard;
