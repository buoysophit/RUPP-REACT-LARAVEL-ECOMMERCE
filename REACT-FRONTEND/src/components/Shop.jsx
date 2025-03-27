import React from "react";
import Products from "./Products/Products";
import Banner from "./Banner/Banner";

import headphone from "./../assets/hero/headphone.png";

const BannerData = {
  discount: "30% OFF",
  title: "Shopping Time",
  date: "10 Jan to 28 Jan",
  image: headphone,
  title2: "Best Deals",
  title3: "Shop Now",
  title4:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque reiciendis",
  bgColor: "#f42c37",
};

const Shop = () => {
  return (
    <div className="pt-20">
      <div className="container">
        <Banner data={BannerData} />
        <Products />
      </div>
    </div>
  );
};

export default Shop;