import styles from "./header.module.css";
import { MdAddShoppingCart } from "react-icons/md";
import { FaMapMarkerAlt, FaSearch, FaAngleDown } from "react-icons/fa";

const Header = () => {
  return (
    <header className={styles.header__div}>
      <div className={styles.logo}>
        <a href="#">
          <span>
            <img
              src="https://www.bizmonthly.com/wp-content/uploads/2020/04/Amazon-logo-black-template.png"
              className={styles.amazon__logo}
            ></img>
          </span>
          <span className={styles.in}>.in</span>
        </a>
      </div>
      <div className={styles.address}>
        <span className={styles.location}>
          <FaMapMarkerAlt />
        </span>
        <div>
          <span>Hello</span>
          <h4>Select your address</h4>
        </div>
      </div>
      <div className={styles.input__div}>
        <button>
          All
          <span>
            <FaAngleDown />
          </span>
        </button>
        <input></input>
        <div className={styles.search}>
          <FaSearch />
        </div>
      </div>
      <div className={styles.country}>
        <img src="https://en.wikipedia.org/wiki/Flag_of_India#/media/File:Flag_of_India.svg"></img>
        <span>
          <FaAngleDown />
        </span>
      </div>
      <div className={styles.sign__in}>
        <div>
          <span>Hello, Sign in</span>
          <h4>Account & Lists</h4>
        </div>
        <span>
          <FaAngleDown />
        </span>
      </div>
      <div>
        <span>Returns</span>
        <h4>& Orders</h4>
      </div>
      <div className={styles.cart}>
        <span>
          <MdAddShoppingCart />
        </span>
        <h4>Cart</h4>
      </div>
    </header>
  );
};

export default Header;
