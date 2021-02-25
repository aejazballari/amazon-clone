import styles from "./footer.module.css";
const Footer = () => {
  return (
    <footer>
      <section className={styles.toTop}>
        <p>Back to top</p>
      </section>
      <section className={styles.info__section}>
        <div className={styles.footer__info}>
          <div>
            <h4>Get to Know Us</h4>
            <ul>
              <li>
                <a href="">About Us</a>
              </li>
              <li>
                <a href="">Careers</a>
              </li>
              <li>
                <a href="">Press Releases</a>
              </li>
              <li>
                <a href="">Amazon Cares</a>
              </li>
              <li>
                <a href="">Gift a Smile</a>
              </li>
            </ul>
          </div>
          <div>
            <h4>Connect with Us</h4>
            <ul>
              <li>
                <a href="">Facebook</a>
              </li>
              <li>
                <a href="">Twitter</a>
              </li>
              <li>
                <a href="">Instagram</a>
              </li>
            </ul>
          </div>
          <div>
            <h4>Make Money with Us</h4>
            <ul>
              <li>
                <a href="">Sell on Amazon</a>
              </li>
              <li>
                <a href="">Sell under Amazon Accelerator</a>
              </li>
              <li>
                <a href="">Become an Affiliate</a>
              </li>
              <li>
                <a href="">Fulfilment by Amazon</a>
              </li>
              <li>
                <a href="">Advertise Your Products</a>
              </li>
              <li>
                <a href="">Amazon Pay on Merchants</a>
              </li>
              <li>
                <a href="">See More Make Money with Us</a>
              </li>
            </ul>
          </div>
          <div>
            <h4>Let Us Help You</h4>
            <ul>
              <li>
                <a href="">COVID-19 and Amazon</a>
              </li>
              <li>
                <a href="">Your Account</a>
              </li>
              <li>
                <a href="">Returns Centre</a>
              </li>
              <li>
                <a href="">100% Purchase Protection</a>
              </li>
              <li>
                <a href="">Amazon App Download</a>
              </li>
              <li>
                <a href="">Amazon Assistant Download</a>
              </li>
              <li>
                <a href="">Help</a>
              </li>
            </ul>
          </div>
        </div>
        <hr />
        <div className={styles.footer__countries}>
          <div></div>
          <div className={styles.country}>
            <ul>
              <li>
                <a href="">Australia</a>
              </li>
              <li>
                <a href="">Brazil</a>
              </li>
              <li>
                <a href="">Canada</a>
              </li>
              <li>
                <a href="">China</a>
              </li>
              <li>
                <a href="">France</a>
              </li>
              <li>
                <a href="">Italy</a>
              </li>
              <li>
                <a href="">Germany</a>
              </li>
              <li>
                <a href="">Japan</a>
              </li>
              <li>
                <a href="">Mexico</a>
              </li>
              <li>
                <a href="">Netherlands</a>
              </li>
              <li>
                <a href="">Singapore</a>
              </li>
              <li>
                <a href="">Spain</a>
              </li>
              <li>
                <a href="">United Arab Emirates</a>
              </li>
              <li>
                <a href="">United Kingdom</a>
              </li>
              <li>
                <a href="">United States</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className={styles.other__services}>
        <article>
          <div>
            <h5>
              <a href="">AbeBooks</a>
            </h5>
            <p>
              <a href="">Books, art & collectibles</a>
            </p>
            <p>
              <a href=""></a>
            </p>
          </div>
          <div>
            <h5>
              <a href="">Amazon Web Services</a>
            </h5>

            <p>
              <a href="">Scalable Cloud Computing Services</a>
            </p>
            <p>
              <a href=""></a>
            </p>
          </div>
          <div>
            <h5>
              <a href="">Audible</a>
            </h5>

            <p>
              <a href="">Download Audio Books</a>
            </p>
            <p>
              <a href=""></a>
            </p>
          </div>
          <div>
            <h5>
              <a href="">DPReview</a>
            </h5>

            <p>
              <a href="">Digital Photography</a>
            </p>
            <p>
              <a href=""></a>
            </p>
          </div>
          <div>
            <h5>
              <a href=""> IMDb</a>
            </h5>

            <p>
              <a href="">Movies, TV & Celebrities</a>
            </p>
            <p>
              <a href=""></a>
            </p>
          </div>
          <div>
            <h5>
              <a href="">Shopbop</a>
            </h5>

            <p>
              <a href="">Designer Fashion Brands</a>
            </p>
            <p>
              <a href=""></a>
            </p>
          </div>
          <div>
            <h5>
              <a href="">Amazon Business</a>
            </h5>

            <p>
              <a href="">Everything For Your Business</a>
            </p>
            <p>
              <a href=""></a>
            </p>
          </div>
          <div>
            <h5>
              <a href="">Prime Now</a>
            </h5>

            <p>
              <a href="">2-Hour Delivery on Everyday Items</a>
            </p>
            <p>
              <a href=""></a>
            </p>
          </div>
          <div>
            <h5>
              <a href="">Amazon Prime Music</a>
            </h5>

            <p>
              <a href="">70 million songs, ad-free</a>
            </p>
            <p>
              <a href=""></a>
            </p>
          </div>
        </article>
      </section>
    </footer>
  );
};

export default Footer;
