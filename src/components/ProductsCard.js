import styles from "./productscard.module.css";

const ProductCard = ({ productData, title }) => {
  return (
    <section className={styles.ProductCard}>
      <h2>{title}</h2>
      <div className={styles.items}>
        {productData.map((item, index) => {
          return <img src={item} alt="" key={index} />;
        })}
      </div>
    </section>
  );
};

export default ProductCard;
