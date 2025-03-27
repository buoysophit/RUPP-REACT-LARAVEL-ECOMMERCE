import React from "react";
import Hero from "./Hero/Hero";
import Category from "./Category/Category";
import Category2 from "./Category/Category2";
import Services from "./Services/Services";
import Banner from "./Banner/Banner";
import Partners from "./Partners/Partners";
import Products from "./Products/Products";
import Blogs from "./Blogs/Blogs";

import headphone from "./../assets/hero/headphone.png";
import smartwatch2 from "./../assets/category/smartwatch2-removebg-preview.png";

const BannerData = {
  discount: "30% OFF",
  title: "Fine Smile",
  date: "10 Jan to 28 Jan",
  image: headphone,
  title2: "Air Solo Bass",
  title3: "Winter Sale",
  title4:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque reiciendis",
  bgColor: "#f42c37",
};

const BannerData2 = {
  discount: "30% OFF",
  title: "Happy Hours",
  date: "14 Jan to 28 Jan",
  image: smartwatch2,
  title2: "Smart Solo",
  title3: "Winter Sale",
  title4:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque reiciendis",
  bgColor: "#2dcc6f",
};

const Home = ({ handleOrderPopup }) => {
  return (
    <>
      <Hero handleOrderPopup={handleOrderPopup} />
      <Category />
      <Category2 />
      <Services />
      <Banner data={BannerData} />
      <Products />
      <Banner data={BannerData2} />
      <Blogs />
      <Partners />
    </>
  );
};

export default Home;