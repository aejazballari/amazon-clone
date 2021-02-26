
import Nav from "./components/Nav";
import Home from "./components/Home";
import Header from "./components/Header";
import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Category from "./components/Category";
import ProductCard from "./components/ProductCard";
import ProductPage from "./components/ProductPage";
import SideBar from "./components/SideBar";
import productData from "./data/ProductData";
import { BrowserRouter, Switch, Route } from "react-router-dom";
function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <BrowserRouter>
      {isOpen && <SideBar toggle={toggleMenu} />}
      <div className="App">
        <Switch>
          <Route path="/category">
            <Header />
            <Nav toggle={toggleMenu} />
            <ProductCard />
            <Category data={productData} />
             
            <Footer />
          </Route>
          <Route path="/">
            <Header />
            <Nav toggle={toggleMenu} />
            <Home />
            <Footer />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  )
}
export default App;
