import SideBar from "./SideBar";
import Card from "./Card";
import data from "../data/TodaysDeal";
import ProductCard from "./ProductsCard";
import bestCloths from "../data/BestCloths";
import bestKitchen from "../data/BestKitchen";
import Recommended from "../data/Recommended";
import Sliders from "./Sliders";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Home = () => {
  const [timer, setTimer] = useState("");
  useEffect(() => {
    const interval = setInterval(() => {
      const d = new Date();
      let hours = 24 - d.getHours();
      let mins = 60 - d.getMinutes();
      if ((mins + "").length == 1) {
        mins = "0" + mins;
      }
      let secs = 60 - d.getSeconds();
      if ((secs + "").length == 1) {
        secs = "0" + secs;
      }
      setTimer(`${hours}:${mins}:${secs}`);
    }, 1000);
    return () => {
      clearInterval(interval);
      // <h1>`${hours}`</h1>;
    };
  }, []);
  return (
    <main>
      <Sliders />
      <Card data={data} timer={timer} />
      <ProductCard
        productData={bestCloths}
        title={"Best Sellers in Clothing & Accessories"}
      />
      <ProductCard
        productData={bestKitchen}
        title={"Best Sellers in Home & Kitchen"}
      />
      <Link to="/category">
        <ProductCard
          productData={Recommended}
          title={"Recommended items other customers often buy again"}
        />
      </Link>
    </main>
  );
};

export default Home;
