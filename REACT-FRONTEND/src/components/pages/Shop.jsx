import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Products from "../components/Products/Products";

const Shop = () => {
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden">
      <Navbar />
      <h1 className="text-center text-2xl font-bold my-4">Shop</h1>
      <Products />
      <Footer />
    </div>
  );
};

export default Shop;