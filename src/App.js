import React from "react";
import ProductCard from "./components/ProductCard";
import { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import ProductPage from "./components/ProductPage";



function App() {
  
  return (
    <div className="App">
      
      <ProductCard  />
      <ProductPage />
    </div>
  );
}


export default App ;