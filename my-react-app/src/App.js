import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import ProductCatalog from "./ProductCatalog";
import ProductDetail from "./ProductDetail";
import Footer from "./Footer";
import FormKatalog from "./FormKatalog";

function App() {
  return (
    <Router>
    <Navbar />
    <Routes>
    <Route path="/detail/:idProduk" element={<ProductDetail />} />
      <Route path="/" element={<ProductCatalog />} />
    </Routes>
    <Footer />
  </Router>
  );
}

export default App;
