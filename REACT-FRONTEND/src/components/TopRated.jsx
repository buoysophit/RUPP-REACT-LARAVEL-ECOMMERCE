import React from "react";
import Products from "./Products/Products";


const TopRated = () => {
  return (
    <div className="pt-20">
      <div className="container">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold">Top Rated Products</h1>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            Highest rated products by our customers
          </p>
        </div>
        <Products/>
      </div>
    </div>
  );
};

export default TopRated;
