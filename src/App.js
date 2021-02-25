import Nav from "./components/Nav";
import SideBar from "./components/SideBar";
import Card from "./components/Card";
import data from "./data/TodaysDeal";
import ProductCard from "./components/ProductsCard";
import Header from "./components/Header";
import { useEffect, useState } from "react";
import bestCloths from "./data/BestCloths";
import bestKitchen from "./data/BestKitchen";
import Recommended from "./data/Recommended";
import Slider from "./components/Slider";
import Footer from "./components/Footer";
function App() {
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
    <div className="App">
      <Header />
      <Nav />
      {/* <SideBar /> */}
      <Slider />
      <Card data={data} timer={timer} />
      <ProductCard
        productData={bestCloths}
        title={"Best Sellers in Clothing & Accessories"}
      />
      <ProductCard
        productData={bestKitchen}
        title={"Best Sellers in Home & Kitchen"}
      />
      <ProductCard
        productData={Recommended}
        title={"Recommended items other customers often buy again"}
      />
      <Footer />
    </div>
  );
}

export default App;
