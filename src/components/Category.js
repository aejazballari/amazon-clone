import styles from "./category.module.css";
import { Link, Route } from "react-router-dom";
import { useRef, useEffect } from "react";

const Category = (props) => {
  const toTop = useRef(null);
  const { data } = props;
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className={styles.category} ref={toTop}>
      <section className={styles.category__section}>
        {data.map((item) => {
          return (
            <div key={item.id}>
              <Link
                to={`/product/${item.id}`}
                style={{ textDecoration: "none" }}
              >
                <div className={styles.categoryImg__div}>
                  <img src={item.img} alt="" className={styles.category__img} />
                </div>
                <p className={styles.category__title}>{item.title}</p>
                <div className={styles.rating}>
                  {Array(item.rating)
                    .fill()
                    .map(() => (
                      <p className={styles.goldstar}> ⭐</p>
                    ))}
                </div>

                <span className={styles.deal}>DEAL OF THE DAY</span>

                <p className={styles.price}>
                  <small>&#8377;</small>
                  <span className={styles.rupee}>499</span>
                  <small>00</small>
                </p>
                <p className={styles.delivery}>
                  <i className="a-icon a-icon-fba">Fulfilled</i> Free Delivery
                  <a href=""> Details</a>
                </p>
              </Link>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default Category;
