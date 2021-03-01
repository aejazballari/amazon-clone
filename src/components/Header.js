import styles from "./header.module.css";
import { MdAddShoppingCart } from "react-icons/md";
import { FaMapMarkerAlt, FaSearch, FaAngleDown } from "react-icons/fa";
import { MdArrowDropDown } from "react-icons/md";
import { Link } from "react-router-dom";
const Header = ({ itemsAdded }) => {
  return (
    <header className={styles.header__div}>
      <div className={styles.logo}>
        <Link to="/">
          <span>
            <img
              src="https://cdn-news.warriortrading.com/wp-content/uploads/2016/01/19183234/AMZN-Logo.jpg"
              className={styles.amazon__logo}
            ></img>
          </span>
          <span className={styles.in}>.in</span>
        </Link>
      </div>
      <div className={styles.address}>
        <span className={styles.location}>
          <FaMapMarkerAlt />
        </span>
        <div>
          <span className={styles.upperText}>Hello</span>
          <h4>Select your address</h4>
        </div>
      </div>
      <div className={styles.input__div}>
        <button>
          All
          <span>
            <MdArrowDropDown />
          </span>
        </button>
        <input></input>
        <div className={styles.search}>
          <FaSearch />
        </div>
      </div>
      <div className={styles.country}>
        <img
          src="https://seeklogo.com/images/I/Indian_Flag-logo-19B702FA68-seeklogo.com.png"
          className={styles.flag}
        ></img>
        <span>
          <MdArrowDropDown />
        </span>
      </div>
      <div className={styles.sign__in}>
        <div>
          <span className={styles.upperText}>Hello, Sign in</span>
          <h4>Account & Lists</h4>
        </div>
        <span className={styles.dropDown}>
          <MdArrowDropDown />
        </span>
      </div>
      <div>
        <span className={styles.upperText}>Returns</span>
        <h4>& Orders</h4>
      </div>

      <Link to="/checkout" style={{ textDecoration: "none", color: "white" }}>
        <div className={styles.cart}>
          <span className={styles.count}>{itemsAdded.length}</span>
          <span className={styles.cartIcon}>
            <MdAddShoppingCart />
          </span>
          <h4>Cart</h4>
        </div>
      </Link>
    </header>
  );
};

export default Header;
