import React from "react";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductsPage from "./pages/ProductsPage";
import ProductContainer from "./components/Product/ProductContainer";
import About from "./pages/About";

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/viner" element={<ProductsPage/>} />
        <Route path="/product/:productId" element={<ProductContainer />} />
        <Route path="/viovin" element={<About/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
