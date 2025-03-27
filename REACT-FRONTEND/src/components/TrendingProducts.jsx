import React from "react";
import Products from "./Products/Products";

const TrendingProducts = () => {
  return (
    <div className="pt-20">
      <div className="container">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold">Trending Products</h1>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            Discover our most popular and trending items
          </p>
        </div>
        <Products />
      </div>
    </div>
  );
};

export default TrendingProducts;
