import "./App.css";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { TopNavigationBar } from "./components/header/topNavigationBar/topNavigationBar";
import Home from "./pages/home";
import Product from "./pages/product";
import Basket from "./pages/basket";

function App() {
  const [products, setProducts] = useState([]);

  return (
    <BrowserRouter>
      <TopNavigationBar />
      <Routes>
        <Route path="/" element={<Home products={products} setProducts={setProducts}/>} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Basket />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
