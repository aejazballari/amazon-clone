import Nav from "./components/Nav";
import Home from "./components/Home";
import Header from "./components/Header";
import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Category from "./components/Category";
import ProductCard from "./components/ProductCard";
import CheckOut from "./components/CheckOut";
import ProductPage from "./components/ProductPage";
import SideBar from "./components/SideBar";
import productData from "./data/ProductData";
import SignIn from "./components/SignIn";
import { BrowserRouter, Switch, Route } from "react-router-dom";
function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [itemsAdded, setItemsAdded] = useState([]);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const itemsInCart = (items) => {
    let itemAdded = [...itemsAdded];
    itemAdded.push(items);
    setItemsAdded(itemAdded);
  };

  return (
    <BrowserRouter>
      {isOpen && <SideBar toggle={toggleMenu} />}
      <div className="App">
        <Switch>
          <Route path="/SignIn">
            <SignIn />
          </Route>
          <Route path="/checkout">
            <Header itemsAdded={itemsAdded} />
            <Nav toggle={toggleMenu} />
            <CheckOut itemsAdded={itemsAdded} />
            <Footer />
          </Route>
          <Route path="/product/:id">
            <Header itemsAdded={itemsAdded} />
            <Nav toggle={toggleMenu} />
            <ProductPage data={productData} itemsInCart={itemsInCart} />
            <Footer />
          </Route>
          <Route path="/category">
            <Header itemsAdded={itemsAdded} />
            <Nav toggle={toggleMenu} />
            <Category data={productData} />
            <Footer />
          </Route>
          <Route path="/">
            <Header itemsAdded={itemsAdded} />
            <Nav toggle={toggleMenu} />
            <Home />
            <Footer />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}
export default App;
