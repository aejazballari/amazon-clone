import slides from "../data/Slides";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import styles from "./slider.module.css";

const Slider = () => {
  return (
    <section>
      <div className={styles.btn__container}>
        <button className={styles.left}>
          <BsChevronLeft />
        </button>
        <button className={styles.right}>
          <BsChevronRight />
        </button>
      </div>
      <div className={styles.slide}>
        {slides.map((item) => {
          return (
            <div>
              <img src={item} alt="" />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Slider;
