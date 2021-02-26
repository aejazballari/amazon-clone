import { FaRegUserCircle } from "react-icons/fa";
import { AiOutlineRight } from "react-icons/ai";
import { ImCross } from "react-icons/im";
import { HiUserCircle } from "react-icons/hi";
import { MdKeyboardArrowRight, MdKeyboardArrowDown } from "react-icons/md";

import styles from "./sidebar.module.css";
const SideBar = ({ toggle }) => {
  return (
    <main className={styles.sideNav}>
      <div className={styles.sideHeader}>
        <div className={styles.user}>
          <HiUserCircle />
        </div>
        <h2>Hello, Sign in</h2>
      </div>
      <div className={styles.category}>
        <h3>Trending</h3>
        <ul>
          <li>best sellers</li>
          <li>new releases</li>
          <li>movers and shakers</li>
        </ul>
        <hr />
        <h3>digital content and devices</h3>
        <ul>
          <li>
            echo & alexa
            <div>
              <MdKeyboardArrowRight />
            </div>
          </li>
          <li>
            fire TV
            <div>
              <MdKeyboardArrowRight />
            </div>
          </li>
          <li>
            kindle e-readers & eBooks
            <div>
              <MdKeyboardArrowRight />
            </div>
          </li>
          <li>
            audible audiobooks
            <div>
              <MdKeyboardArrowRight />
            </div>
          </li>
          <li>
            amazon prime video
            <div>
              <MdKeyboardArrowRight />
            </div>
          </li>
          <li>
            amazon prime music
            <div>
              <MdKeyboardArrowRight />
            </div>
          </li>
        </ul>
        <hr />
        <h3>shop by department</h3>
        <ul>
          <li>
            Mobiles, Computers
            <div>
              <MdKeyboardArrowRight />
            </div>
          </li>
          <li>
            TV, Appliances, Electronics
            <div>
              <MdKeyboardArrowRight />
            </div>
          </li>
          <li>
            Men's Fashion
            <div>
              <MdKeyboardArrowRight />
            </div>
          </li>
          <li>
            Women's Fashion
            <div>
              <MdKeyboardArrowRight />
            </div>
          </li>
          <li>
            See All
            <div>
              <MdKeyboardArrowDown />
            </div>
          </li>
        </ul>
        <hr />
        <h3>Programs & Features</h3>
        <ul>
          <li>
            Gift Card & Mobile Recharges
            <div>
              <MdKeyboardArrowRight />
            </div>
          </li>
          <li>Flight Tickets</li>
          <li>Full Store Directory</li>
        </ul>
        <hr />
        <h3>Help & Settings</h3>
        <ul>
          <li>Your Account</li>
          <li>Customer Service</li>
          <li>Sign In</li>
        </ul>
      </div>
      <div className={styles.sideBarClose} onClick={toggle}>
        <ImCross />
      </div>
    </main>
  );
};

export default SideBar;
