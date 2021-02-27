import styles from "./checkout.module.css";
const CheckOut = ({ itemsAdded }) => {
  const displayContent = () => {
    if (itemsAdded.length === 0) {
      return (
        <section className={styles.checkout__section1}>
          <div className={styles.checkout__div}>
            <img
              src="https://m.media-amazon.com/images/G/31/cart/empty/kettle-desaturated._CB424694257_.svg"
              alt=""
              className={styles.checkout__img}
            />
          </div>
          <div>
            <h1>Your Amazon Basket is empty</h1>
            <button>Sign in to your account</button>
          </div>
        </section>
      );
    } else {
      return (
        <section className={styles.checkout__MainSection}>
          <div className={styles.checkout__title}>
            <h1>Shopping Cart</h1>
            <p>Price</p>
          </div>
          <hr />
          <section className={styles.checkout__section}>
            {itemsAdded.map((item) => {
              return (
                <div className={styles.checkout__singleProduct} key={item.id}>
                  <div className={styles.checkout__productImg}>
                    <img
                      src={item.img}
                      alt=""
                      className={styles.checkout__product}
                    />
                  </div>
                  <div className={styles.checkout__details}>
                    <h1>{item.title}</h1>
                    <p>&#8377;{item.price}.00</p>
                  </div>
                </div>
              );
            })}
            <hr />
          </section>
        </section>
      );
    }
  };

  return displayContent();
};

export default CheckOut;
