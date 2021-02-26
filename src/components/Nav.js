import styles from "./nav.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdArrowDropDown } from "react-icons/md";
import { useState } from "react";
const Nav = ({ toggle }) => {
  console.log(toggle);
  const [prime, setPrime] = useState(false);

  return (
    <nav>
      <ul className={styles.mainNav}>
        <li className={styles.burgerMenu} onClick={toggle}>
          <div>
            <GiHamburgerMenu />
          </div>
          All
        </li>
        <li>Best Sellers</li>
        <li>Mobiles</li>
        <li>Today's Deals</li>
        <li>Fashion</li>
        <li className={styles.prime}>
          Prime
          <div className={styles.arrows}>
            <MdArrowDropDown />
          </div>
        </li>
        <li>New Releases</li>
        <li>Electronics</li>
        <li>Customer Service</li>
        <li>Amazon Pay</li>
      </ul>
      <div className={styles.app}>
        <img
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/MAI/Sweepstakes/June20/SWM_DownloadApp._CB410314483_.jpg"
          alt="app"
        />
      </div>
    </nav>
  );
};

export default Nav;
